<script setup lang="ts">

import {
    computed,
    ref,
} from 'vue'

import {
    confirmAttendance,
    type AttendanceStatus,
} from '../../services/guestService'


/* ================================================================
   PROPS
   ================================================================ */

const props = defineProps<{
    invitation: any
}>()


/* ================================================================
   FORM STATE
   ================================================================ */

const attendance =
    ref<AttendanceStatus>('hadir')


const guests =
    ref(1)


const submitted =
    ref(false)


const submitting =
    ref(false)


const error =
    ref<string | null>(null)


/* ================================================================
   GUEST DATA
   ================================================================ */

const uniqueCode = computed(() => {

    return props.invitation?.guest?.unique_code || ''

})


const guestName = computed(() => {

    return (
        props.invitation?.guest?.nama_undangan ||
        'Tamu Undangan'
    )

})


/* ================================================================
   SUBMIT RSVP
   ================================================================ */

async function submitRsvp() {

    /*
     * Pastikan unique code tersedia
     */

    if (!uniqueCode.value) {

        error.value =
            'Kode undangan tidak ditemukan.'

        return

    }


    /*
     * Reset error
     */

    error.value = null


    /*
     * Loading
     */

    submitting.value = true


    try {

        /*
         * Kalau tidak hadir,
         * jumlah tamu selalu 0.
         */

        const guestCount =
            attendance.value === 'hadir'
                ? guests.value
                : 0


        /*
         * Request API Laravel
         */

        const response =
            await confirmAttendance(
                uniqueCode.value,
                {
                    attendance_status:
                        attendance.value,

                    guest_count:
                        guestCount,
                },
            )


        /*
         * Validasi response
         */

        if (
            response.status !==
            'success'
        ) {

            throw new Error(
                response.message ||
                'Konfirmasi gagal.',
            )

        }


        /*
         * Update data guest lokal
         *
         * Supaya kalau component lain membaca
         * invitation.guest, datanya ikut berubah.
         */

        if (
            props.invitation?.guest
        ) {

            props.invitation.guest
                .attendance_status =
                attendance.value


            props.invitation.guest
                .guest_count =
                guestCount

        }


        /*
         * Success
         */

        submitted.value = true


    } catch (err: any) {

        console.error(
            '[RSVP]',
            err,
        )


        /*
         * Laravel validation error
         */

        const validationErrors =
            err?.response?.data?.errors


        if (
            validationErrors
        ) {

            const firstError =
                Object.values(
                    validationErrors,
                )[0] as string[]


            error.value =
                firstError?.[0] ||
                'Data yang dikirim tidak valid.'

        } else {

            error.value =
                err?.response?.data?.message ||
                err?.message ||
                'Gagal mengirim konfirmasi.'

        }


    } finally {

        submitting.value = false

    }

}


/* ================================================================
   RESET
   ================================================================ */

function resetForm() {

    submitted.value = false

    error.value = null

}

</script>


<template>

    <section class="rsvp-section">

        <!-- =====================================================
             BACKGROUND ORNAMENT
             ===================================================== -->

        <div class="rsvp-ornament rsvp-ornament-left">

            <img src="/images/circle-ornament.png" alt="" />

        </div>


        <div class="rsvp-ornament rsvp-ornament-right">

            <img src="/images/circle-ornament.png" alt="" />

        </div>


        <!-- =====================================================
             GOLD GLOW
             ===================================================== -->

        <div class="rsvp-glow"></div>


        <!-- =====================================================
             CONTENT
             ===================================================== -->

        <div class="rsvp-container">

            <!-- =================================================
                 HEADER
                 ================================================= -->

            <header class="rsvp-header">

                <p class="rsvp-eyebrow">
                    Konfirmasi Kehadiran
                </p>


                <div class="rsvp-divider">

                    <span></span>

                    <i></i>

                    <span></span>

                </div>


                <h2 class="rsvp-title">

                    Kehadiran Anda

                    <em>
                        Sangat Berarti
                    </em>

                </h2>


                <p class="rsvp-description">

                    Mohon konfirmasikan kehadiran
                    Bapak/Ibu/Saudara/i agar kami
                    dapat mempersiapkan acara
                    dengan sebaik-baiknya.

                </p>

            </header>


            <!-- =================================================
                 RSVP CARD
                 ================================================= -->

            <div class="rsvp-card">

                <!-- Decorative corners -->

                <span class="rsvp-corner rsvp-corner-tl"></span>

                <span class="rsvp-corner rsvp-corner-tr"></span>

                <span class="rsvp-corner rsvp-corner-bl"></span>

                <span class="rsvp-corner rsvp-corner-br"></span>


                <!-- =================================================
                     SUCCESS
                     ================================================= -->

                <div v-if="submitted" class="rsvp-success">

                    <div class="success-symbol">
                        ✓
                    </div>


                    <p class="success-eyebrow">
                        Terima Kasih
                    </p>


                    <h3 class="success-title">
                        Konfirmasi Diterima
                    </h3>


                    <p class="success-text">

                        <template v-if="attendance === 'hadir'">

                            Kehadiran
                            <strong>
                                {{ guestName }}
                            </strong>
                            telah kami catat.

                            Kami sangat menantikan
                            kehadiran Anda di hari
                            bahagia kami.

                        </template>


                        <template v-else-if="
                            attendance ===
                            'tidak hadir'
                        ">

                            Konfirmasi Anda telah
                            kami terima.

                            Terima kasih telah
                            memberikan kabar
                            kepada kami.

                        </template>


                        <template v-else>

                            Konfirmasi Anda telah
                            kami terima.

                            Terima kasih telah
                            memberikan kabar
                            kepada kami.

                        </template>

                    </p>


                    <button type="button" class="rsvp-reset" @click="resetForm">

                        TUTUP

                    </button>

                </div>


                <!-- =================================================
                     FORM
                     ================================================= -->

                <form v-else class="rsvp-form" @submit.prevent="submitRsvp">

                    <!-- =================================================
                         GUEST NAME
                         ================================================= -->

                    <div class="form-group">

                        <label>
                            Nama Undangan
                        </label>


                        <div class="guest-name-display">

                            <span class="guest-name-icon">
                                ✦
                            </span>


                            <span>
                                {{ guestName }}
                            </span>

                        </div>

                    </div>


                    <!-- =================================================
                         ERROR
                         ================================================= -->

                    <div v-if="error" class="rsvp-error">

                        <span>
                            !
                        </span>

                        <p>
                            {{ error }}
                        </p>

                    </div>


                    <!-- =================================================
                         ATTENDANCE
                         ================================================= -->

                    <div class="form-group">

                        <label>
                            Konfirmasi Kehadiran
                        </label>


                        <div class="attendance-options">

                            <!-- =========================================
                                 HADIR
                                 ========================================= -->

                            <label class="attendance-option" :class="{
                                active:
                                    attendance === 'hadir'
                            }">

                                <input v-model="attendance" type="radio" value="hadir" :disabled="submitting" />


                                <span class="attendance-icon">
                                    ✓
                                </span>


                                <span class="attendance-content">

                                    <strong>
                                        Saya Akan Hadir
                                    </strong>

                                    <small>
                                        Dengan senang hati
                                    </small>

                                </span>

                            </label>


                            <!-- =========================================
                                 TIDAK HADIR
                                 ========================================= -->

                            <label class="attendance-option" :class="{
                                active:
                                    attendance === 'tidak hadir'
                            }">

                                <input v-model="attendance" type="radio" value="tidak hadir" :disabled="submitting" />


                                <span class="attendance-icon">
                                    —
                                </span>


                                <span class="attendance-content">

                                    <strong>
                                        Tidak Dapat Hadir
                                    </strong>

                                    <small>
                                        Mohon maaf, berhalangan
                                    </small>

                                </span>

                            </label>

                        </div>

                    </div>


                    <!-- =================================================
                         GUEST COUNTER
                         ================================================= -->

                    <div v-if="
                        attendance === 'hadir'
                    " class="form-group">

                        <label>
                            Jumlah Tamu
                        </label>


                        <div class="guest-counter">

                            <button type="button" aria-label="
                                    Kurangi jumlah tamu
                                " :disabled="submitting ||
                                    guests <= 1
                                    " @click="
                                        guests =
                                        Math.max(
                                            1,
                                            guests - 1,
                                        )
                                        ">
                                −
                            </button>


                            <span>

                                {{ guests }}

                                <small>
                                    orang
                                </small>

                            </span>


                            <button type="button" aria-label="
                                    Tambah jumlah tamu
                                " :disabled="submitting ||
                                    guests >= 10
                                    " @click="
                                        guests =
                                        Math.min(
                                            10,
                                            guests + 1,
                                        )
                                        ">
                                +
                            </button>

                        </div>

                    </div>


                    <!-- =================================================
                         SUBMIT
                         ================================================= -->

                    <button type="submit" class="rsvp-submit" :disabled="submitting">

                        <span v-if="!submitting">
                            KIRIM KONFIRMASI
                        </span>


                        <span v-else>
                            MENGIRIM...
                        </span>


                        <i></i>

                    </button>

                </form>

            </div>


            <!-- =================================================
                 FOOTER NOTE
                 ================================================= -->

            <p class="rsvp-footer">

                Merupakan suatu kehormatan
                dan kebahagiaan bagi kami
                apabila Anda berkenan hadir.

            </p>

        </div>

    </section>

</template>

<style scoped>
/* ================================================================
   RSVP SECTION
   ================================================================ */

.rsvp-section {

    position: relative;

    overflow: hidden;

    padding:
        115px 24px 120px;

    background:
        #211810;

    color:
        #f4ead8;

    isolation: isolate;

}


/* ================================================================
   BACKGROUND GLOW
   ================================================================ */

.rsvp-glow {

    position: absolute;

    top: 15%;

    left: 50%;

    width:
        min(90vw, 850px);

    height:
        min(90vw, 850px);

    transform:
        translateX(-50%);

    border-radius: 50%;

    background:
        radial-gradient(circle,
            rgba(224, 190, 111, .11) 0%,
            rgba(224, 190, 111, .035) 38%,
            transparent 72%);

    filter:
        blur(30px);

    pointer-events:
        none;

}


/* ================================================================
   ORNAMENT
   ================================================================ */

.rsvp-ornament {

    position: absolute;

    z-index: 0;

    width:
        520px;

    height:
        520px;

    opacity:
        .045;

    pointer-events:
        none;

}


.rsvp-ornament img {

    display:
        block;

    width:
        100%;

    height:
        100%;

    object-fit:
        contain;

}


.rsvp-ornament-left {

    left:
        -280px;

    bottom:
        -180px;

    transform:
        rotate(-18deg);

}


.rsvp-ornament-right {

    right:
        -280px;

    top:
        -180px;

    transform:
        rotate(162deg);

}


/* ================================================================
   CONTAINER
   ================================================================ */

.rsvp-container {

    position:
        relative;

    z-index:
        2;

    max-width:
        680px;

    margin:
        0 auto;

}


/* ================================================================
   HEADER
   ================================================================ */

.rsvp-header {

    text-align:
        center;

}


.rsvp-eyebrow {

    margin:
        0;

    color:
        #d8b56b;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        11px;

    font-weight:
        600;

    letter-spacing:
        .35em;

    text-transform:
        uppercase;

}


.rsvp-divider {

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        9px;

    margin:
        19px 0 0;

}


.rsvp-divider span {

    width:
        42px;

    height:
        1px;

    background:
        linear-gradient(to right,
            transparent,
            rgba(216, 181, 107, .65));

}


.rsvp-divider span:last-child {

    background:
        linear-gradient(to left,
            transparent,
            rgba(216, 181, 107, .65));

}


.rsvp-divider i {

    width:
        6px;

    height:
        6px;

    border:
        1px solid #d8b56b;

    transform:
        rotate(45deg);

}


.rsvp-title {

    margin:
        20px 0 0;

    color:
        #f1d99b;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        clamp(38px, 6vw, 58px);

    font-weight:
        400;

    line-height:
        1.02;

    letter-spacing:
        -.035em;

}


.rsvp-title em {

    display:
        block;

    margin-top:
        5px;

    color:
        #f7edda;

    font-size:
        .72em;

    font-style:
        italic;

}


.rsvp-description {

    max-width:
        520px;

    margin:
        24px auto 0;

    color:
        rgba(244, 234, 216, .66);

    font-size:
        13px;

    line-height:
        1.9;

}


/* ================================================================
   CARD
   ================================================================ */

.rsvp-card {

    position:
        relative;

    margin:
        55px auto 0;

    padding:
        48px;

    background:
        linear-gradient(145deg,
            rgba(255, 255, 255, .075),
            rgba(255, 255, 255, .025));

    border:
        1px solid rgba(216, 181, 107, .32);

    box-shadow:
        0 25px 70px rgba(0, 0, 0, .28),
        inset 0 1px 0 rgba(255, 255, 255, .06);

    backdrop-filter:
        blur(14px);

    -webkit-backdrop-filter:
        blur(14px);

}


/* ================================================================
   CARD INNER BORDER
   ================================================================ */

.rsvp-card::before {

    content:
        "";

    position:
        absolute;

    inset:
        8px;

    border:
        1px solid rgba(216, 181, 107, .09);

    pointer-events:
        none;

}


/* ================================================================
   CORNERS
   ================================================================ */

.rsvp-corner {

    position:
        absolute;

    width:
        20px;

    height:
        20px;

    border-color:
        rgba(216, 181, 107, .55);

}


.rsvp-corner-tl {

    top:
        15px;

    left:
        15px;

    border-top:
        1px solid;

    border-left:
        1px solid;

}


.rsvp-corner-tr {

    top:
        15px;

    right:
        15px;

    border-top:
        1px solid;

    border-right:
        1px solid;

}


.rsvp-corner-bl {

    bottom:
        15px;

    left:
        15px;

    border-bottom:
        1px solid;

    border-left:
        1px solid;

}


.rsvp-corner-br {

    right:
        15px;

    bottom:
        15px;

    border-right:
        1px solid;

    border-bottom:
        1px solid;

}


/* ================================================================
   FORM
   ================================================================ */

.rsvp-form {

    position:
        relative;

    z-index:
        2;

}


.form-group {

    margin-bottom:
        27px;

}


.form-group>label {

    display:
        block;

    margin-bottom:
        10px;

    color:
        #d7bd83;

    font-size:
        10px;

    font-weight:
        600;

    letter-spacing:
        .18em;

    text-transform:
        uppercase;

}


.form-group input[type="text"] {

    display:
        block;

    width:
        100%;

    box-sizing:
        border-box;

    padding:
        13px 14px;

    border:
        0;

    border-bottom:
        1px solid rgba(216, 181, 107, .28);

    outline:
        none;

    background:
        rgba(0, 0, 0, .12);

    color:
        #f5ead5;

    font-family:
        inherit;

    font-size:
        13px;

    transition:
        border-color .3s ease,
        background .3s ease;

}


.form-group input[type="text"]::placeholder {

    color:
        rgba(244, 234, 216, .35);

}


.form-group input[type="text"]:focus {

    border-bottom-color:
        #d8b56b;

    background:
        rgba(216, 181, 107, .055);

}


/* ================================================================
   ATTENDANCE
   ================================================================ */

.attendance-options {

    display:
        grid;

    grid-template-columns:
        1fr 1fr;

    gap:
        10px;

}


.attendance-option {

    position:
        relative;

    display:
        flex;

    align-items:
        center;

    gap:
        12px;

    min-height:
        68px;

    padding:
        12px 14px;

    border:
        1px solid rgba(216, 181, 107, .16);

    background:
        rgba(0, 0, 0, .10);

    cursor:
        pointer;

    transition:
        .3s ease;

}


.attendance-option:hover {

    border-color:
        rgba(216, 181, 107, .40);

}


.attendance-option.active {

    border-color:
        rgba(216, 181, 107, .65);

    background:
        rgba(216, 181, 107, .08);

    box-shadow:
        inset 0 0 25px rgba(216, 181, 107, .035);

}


.attendance-option input {

    position:
        absolute;

    opacity:
        0;

    pointer-events:
        none;

}


.attendance-icon {

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    width:
        26px;

    height:
        26px;

    flex-shrink:
        0;

    border:
        1px solid rgba(216, 181, 107, .35);

    border-radius:
        50%;

    color:
        #d8b56b;

    font-family:
        Georgia,
        serif;

}


.attendance-option.active .attendance-icon {

    border-color:
        #d8b56b;

    background:
        rgba(216, 181, 107, .12);

}


.attendance-content {

    display:
        flex;

    flex-direction:
        column;

    gap:
        3px;

}


.attendance-content strong {

    color:
        #eee1c8;

    font-family:
        Georgia,
        serif;

    font-size:
        13px;

    font-weight:
        400;

}


.attendance-content small {

    color:
        rgba(244, 234, 216, .42);

    font-size:
        9px;

}


/* ================================================================
   GUEST COUNTER
   ================================================================ */

.guest-counter {

    display:
        flex;

    align-items:
        center;

    justify-content:
        space-between;

    width:
        180px;

    border:
        1px solid rgba(216, 181, 107, .25);

    background:
        rgba(0, 0, 0, .10);

}


.guest-counter button {

    width:
        48px;

    height:
        45px;

    border:
        0;

    background:
        transparent;

    color:
        #d8b56b;

    font-size:
        20px;

    cursor:
        pointer;

    transition:
        background .25s ease;

}


.guest-counter button:hover {

    background:
        rgba(216, 181, 107, .08);

}


.guest-counter span {

    color:
        #f1dfb8;

    font-family:
        Georgia,
        serif;

    font-size:
        17px;

}


.guest-counter span small {

    margin-left:
        4px;

    color:
        rgba(244, 234, 216, .45);

    font-family:
        inherit;

    font-size:
        10px;

}


/* ================================================================
   SUBMIT
   ================================================================ */

.rsvp-submit {

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        12px;

    width:
        100%;

    min-height:
        48px;

    margin-top:
        8px;

    border:
        1px solid rgba(216, 181, 107, .65);

    background:
        linear-gradient(135deg,
            rgba(216, 181, 107, .18),
            rgba(216, 181, 107, .055));

    color:
        #e8cb8a;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        10px;

    font-weight:
        600;

    letter-spacing:
        .22em;

    cursor:
        pointer;

    transition:
        transform .3s ease,
        background .3s ease,
        box-shadow .3s ease;

}


.rsvp-submit i {

    width:
        24px;

    height:
        1px;

    background:
        #d8b56b;

}


.rsvp-submit:hover {

    transform:
        translateY(-2px);

    background:
        rgba(216, 181, 107, .14);

    box-shadow:
        0 10px 30px rgba(0, 0, 0, .25);

}


/* ================================================================
   SUCCESS
   ================================================================ */

.rsvp-success {

    position:
        relative;

    z-index:
        2;

    padding:
        30px 10px;

    text-align:
        center;

}


.success-symbol {

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    width:
        58px;

    height:
        58px;

    margin:
        0 auto 24px;

    border:
        1px solid rgba(216, 181, 107, .55);

    border-radius:
        50%;

    color:
        #d8b56b;

    font-size:
        22px;

}


.success-eyebrow {

    margin:
        0;

    color:
        #d8b56b;

    font-size:
        10px;

    font-weight:
        600;

    letter-spacing:
        .25em;

    text-transform:
        uppercase;

}


.success-title {

    margin:
        12px 0 0;

    color:
        #f1d99b;

    font-family:
        Georgia,
        serif;

    font-size:
        30px;

    font-weight:
        400;

}


.success-text {

    max-width:
        420px;

    margin:
        18px auto 0;

    color:
        rgba(244, 234, 216, .62);

    font-size:
        13px;

    line-height:
        1.8;

}


.rsvp-reset {

    margin-top:
        25px;

    padding:
        10px 18px;

    border:
        1px solid rgba(216, 181, 107, .35);

    background:
        transparent;

    color:
        #d8b56b;

    font-size:
        9px;

    letter-spacing:
        .15em;

    cursor:
        pointer;

}


/* ================================================================
   FOOTER
   ================================================================ */

.rsvp-footer {

    max-width:
        480px;

    margin:
        32px auto 0;

    color:
        rgba(244, 234, 216, .42);

    font-family:
        Georgia,
        serif;

    font-size:
        12px;

    font-style:
        italic;

    line-height:
        1.8;

    text-align:
        center;

}


/* ================================================================
   MOBILE
   ================================================================ */

@media (max-width: 767px) {

    .rsvp-section {

        padding:
            85px 18px 90px;

    }


    .rsvp-ornament {

        width:
            360px;

        height:
            360px;

    }


    .rsvp-ornament-left {

        left:
            -235px;

        bottom:
            -100px;

    }


    .rsvp-ornament-right {

        right:
            -235px;

        top:
            -100px;

    }


    .rsvp-eyebrow {

        font-size:
            9px;

        letter-spacing:
            .28em;

    }


    .rsvp-title {

        margin-top:
            17px;

        font-size:
            38px;

    }


    .rsvp-description {

        margin-top:
            20px;

        font-size:
            12px;

        line-height:
            1.8;

    }


    .rsvp-card {

        margin-top:
            42px;

        padding:
            38px 22px;

    }


    .rsvp-corner {

        width:
            15px;

        height:
            15px;

    }


    .rsvp-corner-tl {

        top:
            11px;

        left:
            11px;

    }


    .rsvp-corner-tr {

        top:
            11px;

        right:
            11px;

    }


    .rsvp-corner-bl {

        bottom:
            11px;

        left:
            11px;

    }


    .rsvp-corner-br {

        right:
            11px;

        bottom:
            11px;

    }


    .attendance-options {

        grid-template-columns:
            1fr;

    }


    .attendance-option {

        min-height:
            62px;

    }


    .rsvp-footer {

        font-size:
            11px;

    }

}


/* ================================================================
   SMALL MOBILE
   ================================================================ */

@media (max-width: 380px) {

    .rsvp-section {

        padding:
            75px 15px 80px;

    }


    .rsvp-title {

        font-size:
            34px;

    }


    .rsvp-card {

        padding:
            34px 18px;

    }


    .rsvp-description {

        font-size:
            11px;

    }

}


/* ================================================================
   REDUCE MOTION
   ================================================================ */

@media (prefers-reduced-motion: reduce) {

    .rsvp-submit {

        transition:
            none;

    }

}
</style>