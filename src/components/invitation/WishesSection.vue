<script setup lang="ts">
import { ref, computed } from 'vue'

interface Wish {
    id: number
    name: string
    message: string
    date: string
}

const name = ref('')
const message = ref('')

const visibleCount = ref(3)

const wishes = ref<Wish[]>([
    {
        id: 1,
        name: 'Keluarga Besar',
        message:
            'Selamat menempuh hidup baru. Semoga menjadi keluarga yang sakinah, penuh kasih sayang, dan selalu diberkahi dalam setiap langkah.',
        date: '15 Agustus 2026',
    },
    {
        id: 2,
        name: 'Andi & Keluarga',
        message:
            'Selamat berbahagia untuk kedua mempelai. Semoga cinta dan kebahagiaan selalu menyertai perjalanan rumah tangga.',
        date: '15 Agustus 2026',
    },
    {
        id: 3,
        name: 'Rina',
        message:
            'Barakallah untuk pernikahannya. Semoga menjadi keluarga yang harmonis, langgeng, dan penuh keberkahan.',
        date: '15 Agustus 2026',
    },
    {
        id: 4,
        name: 'Budi Santoso',
        message:
            'Selamat atas hari bahagianya. Semoga setiap hari menjadi cerita indah yang terus bertambah.',
        date: '15 Agustus 2026',
    },
    {
        id: 5,
        name: 'Keluarga Wijaya',
        message:
            'Semoga perjalanan baru ini dipenuhi ketenteraman, rezeki yang luas, dan kebahagiaan hingga tua bersama.',
        date: '15 Agustus 2026',
    },
    {
        id: 6,
        name: 'Dewi',
        message:
            'Happy wedding! Semoga cinta kalian selalu tumbuh dan menjadi rumah terbaik satu sama lain.',
        date: '15 Agustus 2026',
    },
])

const visibleWishes = computed(() =>
    wishes.value.slice(0, visibleCount.value)
)

const hasMore = computed(
    () => visibleCount.value < wishes.value.length
)

function loadMore() {
    visibleCount.value += 3
}

function submitWish() {
    if (!name.value.trim() || !message.value.trim()) {
        return
    }

    wishes.value.unshift({
        id: Date.now(),
        name: name.value.trim(),
        message: message.value.trim(),
        date: 'Baru saja',
    })

    name.value = ''
    message.value = ''
    visibleCount.value = Math.max(visibleCount.value, 3)
}
</script>

<template>
    <section class="wishes-section">

        <!-- =====================================================
             BACKGROUND ORNAMENT
             ===================================================== -->

        <div class="wishes-ornament wishes-ornament-left">
            <img src="/images/circle-ornament.png" alt="" />
        </div>

        <div class="wishes-ornament wishes-ornament-right">
            <img src="/images/circle-ornament.png" alt="" />
        </div>


        <!-- =====================================================
             HEADER
             ===================================================== -->

        <div class="wishes-header">

            <p class="wishes-eyebrow">
                Doa & Ucapan
            </p>

            <div class="wishes-divider">
                <span></span>
                <i></i>
                <span></span>
            </div>

            <h2 class="wishes-title">
                Kirimkan Ucapan
            </h2>

            <p class="wishes-description">
                Doa dan ucapan baik dari keluarga serta sahabat
                menjadi kebahagiaan tersendiri bagi kami.
            </p>

        </div>


        <!-- =====================================================
             FORM CARD
             ===================================================== -->

        <div class="wishes-form-card">

            <div class="wishes-form-inner">

                <div class="wishes-form-heading">

                    <span class="wishes-form-icon">
                        ✦
                    </span>

                    <div>
                        <h3>
                            Tinggalkan Ucapan
                        </h3>

                        <p>
                            Sampaikan doa terbaik untuk kedua mempelai.
                        </p>
                    </div>

                </div>


                <form @submit.prevent="submitWish">

                    <!-- NAME -->

                    <div class="form-group">

                        <label for="wish-name">
                            Nama
                        </label>

                        <input id="wish-name" v-model="name" type="text" placeholder="Masukkan nama Anda"
                            autocomplete="name" />

                    </div>


                    <!-- MESSAGE -->

                    <div class="form-group">

                        <label for="wish-message">
                            Ucapan
                        </label>

                        <textarea id="wish-message" v-model="message" rows="4"
                            placeholder="Tuliskan doa dan ucapan terbaik..."></textarea>

                    </div>


                    <!-- SUBMIT -->

                    <button type="submit" class="wish-submit" :disabled="!name.trim() || !message.trim()">

                        <span>
                            Kirim Ucapan
                        </span>

                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M5 12h14" />

                            <path d="m13 6 6 6-6 6" />
                        </svg>

                    </button>

                </form>

            </div>

        </div>


        <!-- =====================================================
             WISHES LIST
             ===================================================== -->

        <div class="wishes-list">

            <div v-for="(wish, index) in visibleWishes" :key="wish.id" class="wish-card"
                :style="{ '--wish-index': index }">

                <!-- TOP -->

                <div class="wish-card-top">

                    <div class="wish-avatar">

                        {{ wish.name.charAt(0).toUpperCase() }}

                    </div>

                    <div class="wish-meta">

                        <h3>
                            {{ wish.name }}
                        </h3>

                        <span>
                            {{ wish.date }}
                        </span>

                    </div>

                    <span class="wish-star">
                        ✦
                    </span>

                </div>


                <!-- MESSAGE -->

                <p class="wish-message">
                    “{{ wish.message }}”
                </p>


                <!-- BOTTOM -->

                <div class="wish-card-bottom">

                    <span></span>

                    <span>
                        Dengan doa terbaik
                    </span>

                    <span></span>

                </div>

            </div>


            <!-- EMPTY -->

            <div v-if="visibleWishes.length === 0" class="wishes-empty">
                Belum ada ucapan.
            </div>

        </div>


        <!-- =====================================================
             LOAD MORE
             ===================================================== -->

        <div v-if="hasMore" class="wishes-more">

            <button type="button" class="load-more-button" @click="loadMore">

                <span>
                    Muat Ucapan Berikutnya
                </span>

                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M12 5v14" />
                    <path d="m6 13 6 6 6-6" />
                </svg>

            </button>

        </div>


        <!-- =====================================================
             FOOTER MESSAGE
             ===================================================== -->

        <div class="wishes-footer">

            <div class="wishes-footer-line"></div>

            <p>
                Terima kasih atas doa dan kasih sayang
                yang telah diberikan kepada kami.
            </p>

            <span class="wishes-footer-symbol">
                ❦
            </span>

        </div>

    </section>
</template>


<style scoped>
/* ================================================================
   SECTION
   ================================================================ */

.wishes-section {

    position: relative;

    overflow: hidden;

    padding: 110px 24px 120px;

    background:
        linear-gradient(180deg,
            #f7f3ed 0%,
            #fbf9f6 48%,
            #f4eee5 100%);

    color: #30271f;

}


/* ================================================================
   ORNAMENT
   ================================================================ */

.wishes-ornament {

    position: absolute;

    width: 460px;
    height: 460px;

    opacity: .035;

    pointer-events: none;

}


.wishes-ornament img {

    width: 100%;
    height: 100%;

    object-fit: contain;

}


.wishes-ornament-left {

    left: -270px;
    top: 170px;

    transform:
        rotate(-20deg);

}


.wishes-ornament-right {

    right: -270px;
    bottom: 80px;

    transform:
        rotate(160deg);

}


/* ================================================================
   HEADER
   ================================================================ */

.wishes-header {

    position: relative;

    z-index: 2;

    max-width: 680px;

    margin: 0 auto;

    text-align: center;

}


.wishes-eyebrow {

    margin: 0;

    color: #ae8640;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size: 12px;

    font-weight: 600;

    letter-spacing: .34em;

    text-transform: uppercase;

}


.wishes-divider {

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 8px;

    margin-top: 18px;

}


.wishes-divider span {

    width: 45px;

    height: 1px;

    background:
        linear-gradient(to right,
            transparent,
            rgba(174, 134, 64, .55));

}


.wishes-divider span:last-child {

    background:
        linear-gradient(to left,
            transparent,
            rgba(174, 134, 64, .55));

}


.wishes-divider i {

    width: 6px;
    height: 6px;

    border: 1px solid #ae8640;

    transform: rotate(45deg);

}


.wishes-title {

    margin: 18px 0 0;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        clamp(36px, 5vw, 58px);

    font-weight: 400;

    line-height: 1.05;

    letter-spacing: -.025em;

}


.wishes-description {

    max-width: 560px;

    margin: 22px auto 0;

    color: #81766b;

    font-size: 14px;

    line-height: 1.9;

}


/* ================================================================
   FORM CARD
   ================================================================ */

.wishes-form-card {

    position: relative;

    z-index: 2;

    max-width: 700px;

    margin: 55px auto 0;

    padding: 1px;

    background:
        linear-gradient(135deg,
            rgba(174, 134, 64, .55),
            rgba(174, 134, 64, .12),
            rgba(174, 134, 64, .40));

    box-shadow:
        0 25px 60px rgba(60, 43, 25, .08);

}


.wishes-form-inner {

    padding: 34px;

    background:
        rgba(255, 253, 249, .94);

}


/* ================================================================
   FORM HEADING
   ================================================================ */

.wishes-form-heading {

    display: flex;

    align-items: center;

    gap: 14px;

    margin-bottom: 28px;

}


.wishes-form-icon {

    display: flex;

    align-items: center;

    justify-content: center;

    width: 42px;
    height: 42px;

    border: 1px solid rgba(174, 134, 64, .40);

    border-radius: 50%;

    color: #ae8640;

    font-size: 15px;

}


.wishes-form-heading h3 {

    margin: 0;

    font-family:
        Georgia,
        serif;

    font-size: 21px;

    font-weight: 400;

}


.wishes-form-heading p {

    margin: 4px 0 0;

    color: #948a80;

    font-size: 11px;

}


/* ================================================================
   FORM
   ================================================================ */

.form-group {

    margin-bottom: 18px;

}


.form-group label {

    display: block;

    margin-bottom: 8px;

    color: #665b50;

    font-size: 10px;

    font-weight: 600;

    letter-spacing: .15em;

    text-transform: uppercase;

}


.form-group input,
.form-group textarea {

    display: block;

    width: 100%;

    box-sizing: border-box;

    border: 1px solid rgba(112, 92, 68, .20);

    border-radius: 0;

    outline: none;

    background: #fcfaf7;

    color: #30271f;

    padding: 13px 14px;

    font-family: inherit;

    font-size: 13px;

    transition:
        border-color .25s ease,
        box-shadow .25s ease,
        background .25s ease;

}


.form-group textarea {

    resize: vertical;

    min-height: 105px;

    line-height: 1.7;

}


.form-group input::placeholder,
.form-group textarea::placeholder {

    color: #b5aaa0;

}


.form-group input:focus,
.form-group textarea:focus {

    border-color: rgba(174, 134, 64, .65);

    background: #fffefa;

    box-shadow:
        0 0 0 3px rgba(174, 134, 64, .06);

}


/* ================================================================
   SUBMIT
   ================================================================ */

.wish-submit {

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 10px;

    width: 100%;

    margin-top: 7px;

    padding: 13px 20px;

    border: 1px solid #a97f39;

    background: #30271f;

    color: #f5dfaa;

    font-family:
        Georgia,
        serif;

    font-size: 11px;

    letter-spacing: .16em;

    text-transform: uppercase;

    cursor: pointer;

    transition:
        transform .25s ease,
        background .25s ease,
        box-shadow .25s ease;

}


.wish-submit svg {

    width: 15px;
    height: 15px;

}


.wish-submit:hover:not(:disabled) {

    transform: translateY(-2px);

    background: #3c3026;

    box-shadow:
        0 10px 25px rgba(48, 39, 31, .18);

}


.wish-submit:disabled {

    opacity: .45;

    cursor: not-allowed;

}


/* ================================================================
   WISH LIST
   ================================================================ */

.wishes-list {

    position: relative;

    z-index: 2;

    max-width: 700px;

    margin: 60px auto 0;

    display: flex;

    flex-direction: column;

    gap: 16px;

}


/* ================================================================
   WISH CARD
   ================================================================ */

.wish-card {

    position: relative;

    padding: 25px 27px 22px;

    border: 1px solid rgba(174, 134, 64, .18);

    background:
        rgba(255, 253, 249, .82);

    box-shadow:
        0 15px 40px rgba(65, 45, 25, .045);

    animation:
        wishIn .55s cubic-bezier(.22, 1, .36, 1) both;

    animation-delay:
        calc(var(--wish-index) * 80ms);

}


@keyframes wishIn {

    from {

        opacity: 0;

        transform:
            translateY(15px);

    }

    to {

        opacity: 1;

        transform:
            translateY(0);

    }

}


/* ================================================================
   CARD TOP
   ================================================================ */

.wish-card-top {

    display: flex;

    align-items: center;

    gap: 12px;

}


.wish-avatar {

    display: flex;

    align-items: center;

    justify-content: center;

    width: 38px;
    height: 38px;

    flex-shrink: 0;

    border: 1px solid rgba(174, 134, 64, .40);

    border-radius: 50%;

    background: #f5eee3;

    color: #a77d37;

    font-family:
        Georgia,
        serif;

    font-size: 15px;

}


.wish-meta h3 {

    margin: 0;

    color: #3b3026;

    font-family:
        Georgia,
        serif;

    font-size: 15px;

    font-weight: 500;

}


.wish-meta span {

    display: block;

    margin-top: 3px;

    color: #aaa096;

    font-size: 9px;

    letter-spacing: .05em;

}


.wish-star {

    margin-left: auto;

    color: #b18b45;

    font-size: 13px;

}


/* ================================================================
   MESSAGE
   ================================================================ */

.wish-message {

    margin: 20px 5px 0;

    color: #665b50;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size: 14px;

    line-height: 1.85;

    font-style: italic;

}


/* ================================================================
   CARD BOTTOM
   ================================================================ */

.wish-card-bottom {

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 9px;

    margin-top: 20px;

    color: #b5a99d;

    font-size: 8px;

    letter-spacing: .15em;

    text-transform: uppercase;

}


.wish-card-bottom span:first-child,
.wish-card-bottom span:last-child {

    width: 28px;

    height: 1px;

    background:
        rgba(174, 134, 64, .20);

}


/* ================================================================
   LOAD MORE
   ================================================================ */

.wishes-more {

    position: relative;

    z-index: 2;

    display: flex;

    justify-content: center;

    margin-top: 35px;

}


.load-more-button {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 10px;

    padding: 12px 22px;

    border: 1px solid rgba(174, 134, 64, .45);

    background: rgba(255, 253, 249, .60);

    color: #8e6b32;

    font-family:
        Georgia,
        serif;

    font-size: 11px;

    letter-spacing: .08em;

    cursor: pointer;

    transition:
        background .25s ease,
        transform .25s ease,
        border-color .25s ease;

}


.load-more-button svg {

    width: 14px;
    height: 14px;

}


.load-more-button:hover {

    transform: translateY(-2px);

    border-color: #ae8640;

    background: #fffdf9;

}


/* ================================================================
   EMPTY
   ================================================================ */

.wishes-empty {

    padding: 40px;

    text-align: center;

    color: #9c9186;

    font-family:
        Georgia,
        serif;

    font-size: 13px;

}


/* ================================================================
   FOOTER
   ================================================================ */

.wishes-footer {

    position: relative;

    z-index: 2;

    max-width: 500px;

    margin: 75px auto 0;

    text-align: center;

}


.wishes-footer-line {

    width: 70px;

    height: 1px;

    margin: 0 auto 20px;

    background:
        linear-gradient(to right,
            transparent,
            rgba(174, 134, 64, .55),
            transparent);

}


.wishes-footer p {

    margin: 0;

    color: #8d8277;

    font-family:
        Georgia,
        serif;

    font-size: 13px;

    line-height: 1.8;

    font-style: italic;

}


.wishes-footer-symbol {

    display: block;

    margin-top: 15px;

    color: #ae8640;

    font-size: 22px;

}


/* ================================================================
   MOBILE
   ================================================================ */

@media (max-width: 767px) {

    .wishes-section {

        padding:
            85px 18px 95px;

    }


    .wishes-ornament {

        width: 300px;
        height: 300px;

    }


    .wishes-ornament-left {

        left: -210px;
        top: 220px;

    }


    .wishes-ornament-right {

        right: -210px;
        bottom: 120px;

    }


    .wishes-eyebrow {

        font-size: 10px;

        letter-spacing: .28em;

    }


    .wishes-title {

        font-size: 34px;

    }


    .wishes-description {

        margin-top: 18px;

        font-size: 12px;

        line-height: 1.8;

    }


    .wishes-form-card {

        margin-top: 42px;

    }


    .wishes-form-inner {

        padding: 25px 20px;

    }


    .wishes-form-heading {

        align-items: flex-start;

        margin-bottom: 24px;

    }


    .wishes-form-heading h3 {

        font-size: 19px;

    }


    .wishes-form-heading p {

        font-size: 10px;

        line-height: 1.6;

    }


    .wishes-list {

        margin-top: 45px;

    }


    .wish-card {

        padding:
            21px 19px 19px;

    }


    .wish-message {

        margin-top: 17px;

        font-size: 13px;

        line-height: 1.8;

    }


    .wish-card-bottom {

        margin-top: 17px;

    }


    .load-more-button {

        width: 100%;

        max-width: 280px;

    }


    .wishes-footer {

        margin-top: 60px;

    }

}


/* ================================================================
   SMALL MOBILE
   ================================================================ */

@media (max-width: 380px) {

    .wishes-section {

        padding:
            75px 16px 85px;

    }


    .wishes-title {

        font-size: 30px;

    }


    .wishes-form-inner {

        padding:
            22px 17px;

    }


    .wish-card {

        padding:
            19px 16px;

    }

}


/* ================================================================
   REDUCE MOTION
   ================================================================ */

@media (prefers-reduced-motion: reduce) {

    .wish-card {

        animation: none;

    }

}
</style>