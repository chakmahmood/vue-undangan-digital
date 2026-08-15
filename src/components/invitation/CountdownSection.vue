<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{
    invitation: any
}>()


/* ================================================================
   COUNTDOWN
   ================================================================ */

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

let countdownTimer: ReturnType<typeof setInterval> | null = null


const weddingDate = computed(() => {

    const start = props.invitation?.wedding?.calendar?.start

    if (!start) {
        return null
    }

    /*
     * Format Google Calendar:
     * YYYYMMDDTHHMMSS
     *
     * Contoh:
     * 20250614T180000
     */

    const match = start.match(
        /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})$/
    )

    if (!match) {
        return null
    }

    const [
        ,
        year,
        month,
        day,
        hour,
        minute,
        second
    ] = match

    return new Date(
        Number(year),
        Number(month) - 1,
        Number(day),
        Number(hour),
        Number(minute),
        Number(second)
    )
})


function updateCountdown() {

    if (!weddingDate.value) {
        return
    }

    const now = new Date()

    const difference =
        weddingDate.value.getTime() - now.getTime()


    if (difference <= 0) {

        days.value = 0
        hours.value = 0
        minutes.value = 0
        seconds.value = 0

        return
    }


    days.value =
        Math.floor(
            difference / (1000 * 60 * 60 * 24)
        )


    hours.value =
        Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        )


    minutes.value =
        Math.floor(
            (difference / (1000 * 60)) % 60
        )


    seconds.value =
        Math.floor(
            (difference / 1000) % 60
        )
}


onMounted(() => {

    updateCountdown()

    countdownTimer =
        setInterval(
            updateCountdown,
            1000
        )

})


onUnmounted(() => {

    if (countdownTimer) {

        clearInterval(
            countdownTimer
        )

    }

})


/* ================================================================
   GOOGLE CALENDAR
   ================================================================ */

const calendarUrl = computed(() => {

    const wedding =
        props.invitation.wedding

    const calendar =
        wedding.calendar


    const title =
        `The Wedding of ${props.invitation.groom.name} & ${props.invitation.bride.name}`


    const details =
        `${title}<br>` +
        `${wedding.day}, ${wedding.date} ` +
        `Pukul ${wedding.time}<br>` +
        `${wedding.address}`


    const params =
        new URLSearchParams({

            action:
                'TEMPLATE',

            text:
                title,

            details:
                details,

            dates:
                `${calendar.start}/${calendar.end}`,

            location:
                `${wedding.venue}, ${wedding.address}`,

            ctz:
                calendar.timezone,

        })


    return (
        `https://www.google.com/calendar/render?${params.toString()}`
    )

})


/* ================================================================
   COUNTDOWN ITEMS
   ================================================================ */

const countdownItems = computed(() => [

    {
        value: days.value,
        label: 'Hari'
    },

    {
        value: hours.value,
        label: 'Jam'
    },

    {
        value: minutes.value,
        label: 'Menit'
    },

    {
        value: seconds.value,
        label: 'Detik'
    }

])


/* ================================================================
   FORMAT NUMBER
   ================================================================ */

function formatNumber(value: number) {

    return String(value).padStart(2, '0')

}

</script>


<template>

    <section class="countdown-section">


        <!-- =====================================================
             BACKGROUND ORNAMENT
             ===================================================== -->

        <div class="countdown-glow"></div>


        <div class="countdown-ornament countdown-ornament-left">

            <img src="/images/circle-ornament.png" alt="" />

        </div>


        <div class="countdown-ornament countdown-ornament-right">

            <img src="/images/circle-ornament.png" alt="" />

        </div>



        <!-- =====================================================
             CONTENT
             ===================================================== -->

        <div class="countdown-container">


            <!-- =================================================
                 PHOTO
                 ================================================= -->

            <div class="countdown-photo-wrapper">

                <div class="countdown-photo-ring"></div>

                <div class="countdown-photo-ring countdown-photo-ring-inner"></div>


                <div class="countdown-photo">

                    <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200"
                        :alt="`The Wedding of ${invitation.groom.fullName} & ${invitation.bride.fullName}`" />

                </div>

            </div>



            <!-- =================================================
                 EYEBROW
                 ================================================= -->

            <p class="countdown-eyebrow">

                Menuju Hari Bahagia

            </p>



            <!-- =================================================
                 DATE
                 ================================================= -->

            <h2 class="countdown-date">

                {{ invitation.wedding.day }}

                <span>•</span>

                {{ invitation.wedding.date }}

            </h2>


            <p class="countdown-time">

                {{ invitation.wedding.time }}

            </p>



            <!-- =================================================
                 DIVIDER
                 ================================================= -->

            <div class="countdown-divider">

                <span></span>

                <i></i>

                <span></span>

            </div>



            <!-- =================================================
                 COUNTDOWN
                 ================================================= -->

            <div class="countdown-boxes">


                <div v-for="item in countdownItems" :key="item.label" class="countdown-item">

                    <div class="countdown-number">

                        {{ formatNumber(item.value) }}

                    </div>

                    <div class="countdown-label">

                        {{ item.label }}

                    </div>

                </div>


            </div>



            <!-- =================================================
                 LOVE LETTER
                 ================================================= -->

            <div class="countdown-letter">

                <div class="letter-icon">

                    <span></span>

                </div>


                <p class="letter-title">

                    Sebuah Surat Kecil

                </p>


                <p class="letter-text">

                    Dengan penuh rasa syukur, kami menantikan
                    hari di mana dua hati dipersatukan dalam
                    sebuah janji untuk berjalan bersama,
                    selamanya.

                </p>


                <p class="letter-signature">

                    Dengan cinta,

                </p>


                <p class="letter-names">

                    {{ invitation.groom.name }}

                    <span>&amp;</span>

                    {{ invitation.bride.name }}

                </p>

            </div>



            <!-- =================================================
                 SAVE CALENDAR
                 ================================================= -->

            <a :href="calendarUrl" target="_blank" rel="noopener noreferrer" class="calendar-button">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">

                    <rect x="3" y="4" width="18" height="17" rx="2" />

                    <line x1="16" y1="2" x2="16" y2="6" />

                    <line x1="8" y1="2" x2="8" y2="6" />

                    <line x1="3" y1="10" x2="21" y2="10" />

                    <path d="M8 14h2" />

                    <path d="M14 14h2" />

                    <path d="M8 18h2" />

                    <path d="M14 18h2" />

                </svg>


                <span>
                    SAVE TO CALENDAR
                </span>

            </a>


        </div>

    </section>

</template>


<style scoped>
/* ================================================================
   SECTION
   ================================================================ */

.countdown-section {

    position:
        relative;

    overflow:
        hidden;

    padding:
        120px 24px 130px;

    background:
        #211810;

    color:
        #f5ead5;

    isolation:
        isolate;

}


/* ================================================================
   BACKGROUND GLOW
   ================================================================ */

.countdown-glow {

    position:
        absolute;

    top:
        35%;

    left:
        50%;

    width:
        min(850px, 100vw);

    height:
        min(850px, 100vw);

    transform:
        translate(-50%, -50%);

    border-radius:
        50%;

    background:
        radial-gradient(circle,
            rgba(226, 190, 102, .11) 0%,
            rgba(226, 190, 102, .035) 38%,
            transparent 70%);

    filter:
        blur(20px);

    pointer-events:
        none;

}


/* ================================================================
   ORNAMENT
   ================================================================ */

.countdown-ornament {

    position:
        absolute;

    z-index:
        0;

    width:
        min(480px, 55vw);

    height:
        min(480px, 55vw);

    opacity:
        .055;

    pointer-events:
        none;

}


.countdown-ornament img {

    display:
        block;

    width:
        100%;

    height:
        100%;

    object-fit:
        contain;

}


.countdown-ornament-left {

    left:
        -220px;

    bottom:
        -120px;

    transform:
        rotate(-25deg);

}


.countdown-ornament-right {

    right:
        -220px;

    top:
        -120px;

    transform:
        rotate(155deg);

}


/* ================================================================
   CONTAINER
   ================================================================ */

.countdown-container {

    position:
        relative;

    z-index:
        2;

    max-width:
        850px;

    margin:
        0 auto;

    text-align:
        center;

}


/* ================================================================
   PHOTO
   ================================================================ */

.countdown-photo-wrapper {

    position:
        relative;

    width:
        clamp(180px, 25vw, 270px);

    height:
        clamp(180px, 25vw, 270px);

    margin:
        0 auto 45px;

}


.countdown-photo {

    position:
        relative;

    width:
        100%;

    height:
        100%;

    overflow:
        hidden;

    border-radius:
        50%;

    border:
        5px solid rgba(245, 234, 213, .08);

    box-shadow:
        0 20px 60px rgba(0, 0, 0, .35);

}


.countdown-photo img {

    display:
        block;

    width:
        100%;

    height:
        100%;

    object-fit:
        cover;

    transition:
        transform .8s cubic-bezier(.22, 1, .36, 1);

}


.countdown-photo-wrapper:hover .countdown-photo img {

    transform:
        scale(1.06);

}


/* ================================================================
   PHOTO RING
   ================================================================ */

.countdown-photo-ring {

    position:
        absolute;

    inset:
        -12px;

    border:
        1px solid rgba(232, 204, 130, .55);

    border-radius:
        50%;

    animation:
        ornamentRotate 28s linear infinite;

}


.countdown-photo-ring::before,
.countdown-photo-ring::after {

    content:
        "";

    position:
        absolute;

    width:
        8px;

    height:
        8px;

    border:
        1px solid #e8cc82;

    background:
        #211810;

    transform:
        rotate(45deg);

}


.countdown-photo-ring::before {

    top:
        -4px;

    left:
        50%;

}


.countdown-photo-ring::after {

    bottom:
        -4px;

    left:
        50%;

}


.countdown-photo-ring-inner {

    inset:
        -22px;

    border:
        1px solid rgba(232, 204, 130, .16);

    animation:
        ornamentRotateReverse 40s linear infinite;

}


@keyframes ornamentRotate {

    from {
        transform:
            rotate(0deg);
    }

    to {
        transform:
            rotate(360deg);
    }

}


@keyframes ornamentRotateReverse {

    from {
        transform:
            rotate(360deg);
    }

    to {
        transform:
            rotate(0deg);
    }

}


/* ================================================================
   EYEBROW
   ================================================================ */

.countdown-eyebrow {

    margin:
        0;

    color:
        #e8cc82;

    font-family:
        Georgia,
        serif;

    font-size:
        11px;

    font-weight:
        600;

    letter-spacing:
        .32em;

    text-transform:
        uppercase;

}


/* ================================================================
   DATE
   ================================================================ */

.countdown-date {

    margin:
        18px 0 0;

    color:
        #f4dfaa;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        clamp(28px, 4vw, 48px);

    font-weight:
        400;

    line-height:
        1.15;

}


.countdown-date span {

    margin:
        0 8px;

    color:
        #b18b45;

}


.countdown-time {

    margin:
        9px 0 0;

    color:
        rgba(245, 234, 213, .65);

    font-size:
        12px;

    letter-spacing:
        .2em;

}


/* ================================================================
   DIVIDER
   ================================================================ */

.countdown-divider {

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        9px;

    margin:
        27px auto 30px;

}


.countdown-divider span {

    width:
        55px;

    height:
        1px;

    background:
        linear-gradient(to right,
            transparent,
            rgba(232, 204, 130, .55));

}


.countdown-divider span:last-child {

    background:
        linear-gradient(to left,
            transparent,
            rgba(232, 204, 130, .55));

}


.countdown-divider i {

    width:
        6px;

    height:
        6px;

    border:
        1px solid #e8cc82;

    transform:
        rotate(45deg);

}


/* ================================================================
   COUNTDOWN BOX
   ================================================================ */

.countdown-boxes {

    display:
        grid;

    grid-template-columns:
        repeat(4, 1fr);

    max-width:
        680px;

    margin:
        0 auto;

    border-top:
        1px solid rgba(232, 204, 130, .16);

    border-bottom:
        1px solid rgba(232, 204, 130, .16);

}


.countdown-item {

    position:
        relative;

    padding:
        24px 12px 21px;

}


.countdown-item:not(:last-child)::after {

    content:
        "";

    position:
        absolute;

    top:
        22px;

    right:
        0;

    width:
        1px;

    height:
        42px;

    background:
        rgba(232, 204, 130, .15);

}


.countdown-number {

    color:
        #f4dfaa;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        clamp(30px, 5vw, 48px);

    font-weight:
        400;

    line-height:
        1;

}


.countdown-label {

    margin-top:
        9px;

    color:
        rgba(245, 234, 213, .48);

    font-size:
        8px;

    font-weight:
        600;

    letter-spacing:
        .22em;

    text-transform:
        uppercase;

}


/* ================================================================
   LOVE LETTER
   ================================================================ */

.countdown-letter {

    max-width:
        570px;

    margin:
        65px auto 0;

    padding:
        42px 35px;

    border:
        1px solid rgba(232, 204, 130, .18);

    background:
        linear-gradient(145deg,
            rgba(255, 255, 255, .035),
            rgba(255, 255, 255, .012));

    box-shadow:
        0 25px 70px rgba(0, 0, 0, .18);

}


.letter-icon {

    position:
        relative;

    width:
        26px;

    height:
        26px;

    margin:
        0 auto 20px;

    border:
        1px solid rgba(232, 204, 130, .55);

    transform:
        rotate(45deg);

}


.letter-icon span {

    position:
        absolute;

    top:
        50%;

    left:
        50%;

    width:
        5px;

    height:
        5px;

    background:
        #e8cc82;

    transform:
        translate(-50%, -50%);

}


.letter-title {

    margin:
        0;

    color:
        #e8cc82;

    font-family:
        Georgia,
        serif;

    font-size:
        11px;

    font-weight:
        600;

    letter-spacing:
        .3em;

    text-transform:
        uppercase;

}


.letter-text {

    max-width:
        480px;

    margin:
        20px auto 0;

    color:
        rgba(245, 234, 213, .68);

    font-family:
        Georgia,
        serif;

    font-size:
        14px;

    line-height:
        2;

    font-style:
        italic;

}


.letter-signature {

    margin:
        25px 0 0;

    color:
        rgba(245, 234, 213, .45);

    font-size:
        10px;

    letter-spacing:
        .15em;

}


.letter-names {

    margin:
        7px 0 0;

    color:
        #f0d994;

    font-family:
        Georgia,
        serif;

    font-size:
        19px;

}


.letter-names span {

    margin:
        0 6px;

    color:
        #b18b45;

    font-style:
        italic;

}


/* ================================================================
   CALENDAR BUTTON
   ================================================================ */

.calendar-button {

    display:
        inline-flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        9px;

    margin-top:
        35px;

    min-width:
        190px;

    padding:
        11px 22px;

    border:
        1px solid rgba(232, 204, 130, .60);

    border-radius:
        999px;

    background:
        rgba(232, 204, 130, .055);

    color:
        #e8cc82;

    backdrop-filter:
        blur(8px);

    -webkit-backdrop-filter:
        blur(8px);

    font-family:
        Georgia,
        serif;

    font-size:
        9px;

    font-weight:
        600;

    letter-spacing:
        .16em;

    text-decoration:
        none;

    white-space:
        nowrap;

    transition:
        all .3s ease;

}


.calendar-button svg {

    width:
        15px;

    height:
        15px;

}


.calendar-button:hover {

    transform:
        translateY(-2px);

    background:
        rgba(232, 204, 130, .12);

    border-color:
        #e8cc82;

    box-shadow:
        0 10px 30px rgba(0, 0, 0, .25);

}


.calendar-button:active {

    transform:
        scale(.97);

}


/* ================================================================
   MOBILE
   ================================================================ */

@media (max-width: 767px) {

    .countdown-section {

        padding:
            90px 20px 100px;

    }


    .countdown-ornament {

        width:
            360px;

        height:
            360px;

        opacity:
            .045;

    }


    .countdown-ornament-left {

        left:
            -220px;

        bottom:
            -90px;

    }


    .countdown-ornament-right {

        right:
            -220px;

        top:
            -90px;

    }


    .countdown-photo-wrapper {

        width:
            190px;

        height:
            190px;

        margin-bottom:
            42px;

    }


    .countdown-photo-ring {

        inset:
            -10px;

    }


    .countdown-photo-ring-inner {

        inset:
            -18px;

    }


    .countdown-eyebrow {

        font-size:
            9px;

        letter-spacing:
            .25em;

    }


    .countdown-date {

        margin-top:
            15px;

        font-size:
            29px;

    }


    .countdown-date span {

        margin:
            0 4px;

    }


    .countdown-time {

        font-size:
            10px;

    }


    .countdown-divider {

        margin:
            23px auto 25px;

    }


    .countdown-divider span {

        width:
            38px;

    }


    .countdown-item {

        padding:
            19px 5px 17px;

    }


    .countdown-item:not(:last-child)::after {

        top:
            19px;

        height:
            35px;

    }


    .countdown-number {

        font-size:
            28px;

    }


    .countdown-label {

        margin-top:
            7px;

        font-size:
            7px;

        letter-spacing:
            .13em;

    }


    .countdown-letter {

        margin-top:
            50px;

        padding:
            35px 22px;

    }


    .letter-text {

        font-size:
            13px;

        line-height:
            1.9;

    }


    .letter-names {

        font-size:
            17px;

    }


    .calendar-button {

        margin-top:
            30px;

        min-width:
            180px;

        padding:
            10px 19px;

        font-size:
            8px;

    }

}


/* ================================================================
   SMALL MOBILE
   ================================================================ */

@media (max-width: 380px) {

    .countdown-section {

        padding:
            80px 17px 90px;

    }


    .countdown-photo-wrapper {

        width:
            165px;

        height:
            165px;

        margin-bottom:
            38px;

    }


    .countdown-date {

        font-size:
            25px;

    }


    .countdown-number {

        font-size:
            24px;

    }


    .countdown-label {

        font-size:
            6px;

    }


    .countdown-letter {

        padding:
            30px 18px;

    }


    .letter-text {

        font-size:
            12px;

    }

}


/* ================================================================
   REDUCE MOTION
   ================================================================ */

@media (prefers-reduced-motion: reduce) {

    .countdown-photo-ring,
    .countdown-photo-ring-inner {

        animation:
            none;

    }

}
</style>