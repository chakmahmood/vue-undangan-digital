<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

defineProps<{
    invitation: any
}>()

const opened = ref(false)

function openInvitation() {
    opened.value = true
    document.body.style.overflow = 'auto'
}

onMounted(() => {
    document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
    document.body.style.overflow = 'auto'
})
</script>

<template>

    <Transition name="opening">

        <div v-if="!opened" class="opening-screen">

            <!-- =====================================================
                 BACKGROUND SYSTEM
                 ===================================================== -->

            <div class="background-layer">

                <!-- BASE BACKGROUND -->

                <div class="background-base"></div>


                <!-- COVER PHOTO -->

                <div class="opening-photo"></div>


                <!-- PHOTO OVERLAY -->

                <div class="opening-overlay"></div>


                <!-- VIGNETTE -->

                <div class="opening-vignette"></div>


                <!-- =================================================
                     ORNAMENT CIRCLE

                     SECARA POSISI:
                     BERADA DI BAGIAN BAWAH.

                     SECARA LAYER:
                     DI ATAS COVER.

                     WAYANG AKAN BERADA DI ATAS ORNAMENT.
                     GOLD AKAN BERADA DI ATAS WAYANG.
                     ================================================= -->

                <div class="ornament ornament-kawung">

                    <img src="/images/circle-ornament.png" alt="" />

                </div>


                <div class="ornament ornament-parang">

                    <img src="/images/circle-ornament.png" alt="" />

                </div>


                <!-- GOLD ATMOSPHERE -->

                <div class="gold-atmosphere"></div>

            </div>


            <!-- =====================================================
                 MAIN CONTENT
                 ===================================================== -->

            <main class="opening-content">

                <!-- GUNUNGAN -->

                <div class="gunungan-wrapper">

                    <div class="gunungan-halo"></div>

                    <div class="gunungan-inner">

                        <img src="/images/gunungan-001.png" alt="Gunungan Wayang" class="gunungan" />

                    </div>

                </div>


                <!-- WEDDING LABEL -->

                <div class="wedding-label">
                    THE WEDDING RECEPTION OF
                </div>


                <!-- COUPLE NAME -->

                <h1 class="couple-names">

                    <span class="name">
                        HADIYAN
                    </span>

                    <!-- <span class="ampersand">
                        &amp;
                    </span>

                    <span class="name">
                        Shandy
                    </span> -->

                </h1>


                <!-- GUEST -->
                <div class="guest-section">

                    <p class="guest-label">
                        Kepada Yth. Bapak/Ibu/Saudara/i
                    </p>

                    <p class="guest-name">
                        {{ invitation.guest?.nama_undangan || 'Tamu Undangan' }}
                    </p>

                    <p class="guest-address">
                        {{ invitation.guest?.alamat_lengkap || ' ' }}
                    </p>

                    <p class="guest-note">
                        *Mohon maaf apabila ada kesalahan pada<br />
                        penulisan nama dan gelar
                    </p>

                </div>

                <!-- OPEN BUTTON -->

                <button type="button" class="opening-button" @click="openInvitation">

                    <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">

                        <path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7" />

                        <path d="M4 7h16v5H4z" />

                        <path d="M12 7v12" />

                        <path d="M12 7H8.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7Z" />

                        <path d="M12 7h3.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7Z" />

                    </svg>

                    <span>
                        Buka Undangan
                    </span>

                </button>

            </main>


            <!-- =====================================================
                 WAYANG LEFT

                 LAYER:
                 COVER
                   ↓
                 ORNAMENT
                   ↓
                 CONTENT
                   ↓
                 WAYANG
                   ↓
                 GOLD
                   ↓
                 TEXT
                   ↓
                 FRAME
                 ===================================================== -->

            <div class="wayang wayang-left">

                <div class="wayang-inner">

                    <img src="/images/jaya.png" alt="Wayang Jaya" />

                </div>

            </div>


            <!-- WAYANG RIGHT -->

            <div class="wayang wayang-right">

                <div class="wayang-inner">

                    <img src="/images/ratih.png" alt="Wayang Ratih" />

                </div>

            </div>


            <!-- =====================================================
                 GOLD BOTTOM

                 DITINGGIKAN SEDIKIT AGAR LEBIH BANYAK MENUTUPI
                 BAGIAN BAWAH WAYANG.
                 ===================================================== -->

            <div class="bottom-gold">

                <div class="bottom-gold-highlight"></div>

            </div>


            <!-- =====================================================
                 BOTTOM TEXT

                 PUTIH
                 BERADA DI DALAM AREA GOLD

                 POSISI DINAikKAN
                 ===================================================== -->

            <p class="bottom-text">
                Mugi dados kulawarga ingkang sakinah
            </p>


            <!-- =====================================================
                 LUXURY FRAME
                 ===================================================== -->

            <div class="luxury-frame">

                <div class="frame-outer"></div>

                <div class="frame-inner"></div>

                <div class="frame-corner frame-corner-tl"></div>

                <div class="frame-corner frame-corner-tr"></div>

                <div class="frame-corner frame-corner-bl"></div>

                <div class="frame-corner frame-corner-br"></div>

            </div>

        </div>

    </Transition>

</template>


<style scoped>
/* ================================================================
   JAVANESE ROYAL LUXURY OPENING SCREEN
   ================================================================ */


/* ================================================================
   ROOT SCREEN
   ================================================================ */

.opening-screen {

    position: fixed;

    inset: 0;

    z-index: 9999;

    width: 100%;

    height: 100dvh;

    min-height: 100svh;

    overflow: hidden;

    background: #241c16;

    overscroll-behavior: none;

    isolation: isolate;

}


/* ================================================================
   BACKGROUND LAYER
   ================================================================ */

.background-layer {

    position: absolute;

    inset: 0;

    z-index: 0;

    overflow: hidden;

    pointer-events: none;

}


/* ================================================================
   BASE BACKGROUND
   ================================================================ */

.background-base {

    position: absolute;

    inset: 0;

    z-index: 0;

    background:

        radial-gradient(ellipse at 50% 15%,
            #5a4937 0%,
            #3f3024 35%,
            #2e231b 65%,
            #1c140f 100%);

}


/* ================================================================
   COVER PHOTO
   ================================================================ */

.opening-photo {

    position: absolute;

    inset: 0;

    z-index: 2;

    background-image:
        url('/images/cover-mobile.jpg');

    background-repeat: no-repeat;

    background-position: center top;

    background-size: cover;

    transform: scale(1.015);

    filter:
        saturate(.72) contrast(.94) brightness(.88) sepia(.07);

}


/* ================================================================
   PHOTO OVERLAY
   ================================================================ */

.opening-overlay {

    position: absolute;

    inset: 0;

    z-index: 3;

    background:

        linear-gradient(to bottom,

            rgba(47, 37, 28, .08) 0%,

            rgba(52, 40, 30, .16) 25%,

            rgba(53, 40, 29, .30) 43%,

            rgba(48, 35, 25, .52) 60%,

            rgba(39, 28, 20, .76) 75%,

            rgba(27, 20, 15, .96) 100%);

}


/* ================================================================
   VIGNETTE
   ================================================================ */

.opening-vignette {

    position: absolute;

    inset: 0;

    z-index: 4;

    background:

        radial-gradient(ellipse at center,

            transparent 15%,

            rgba(20, 14, 10, .04) 45%,

            rgba(15, 10, 7, .20) 72%,

            rgba(8, 5, 3, .48) 100%);

}


/* ================================================================
   ORNAMENT SYSTEM
   ================================================================ */

.ornament {

    position: absolute;

    z-index: 10;

    left: 50%;

    bottom: -55%;

    display: flex;

    align-items: center;

    justify-content: center;

    pointer-events: none;

    transform-origin: center center;

}


/* ================================================================
   ORNAMENT IMAGE
   ================================================================ */

.ornament img {

    display: block;

    width: 100%;

    height: 100%;

    object-fit: contain;

    /*
     * HITAM -> PUTIH
     *
     * brightness(0)
     * membuat semua menjadi hitam.
     *
     * invert(1)
     * membalik hitam menjadi putih.
     */

    filter:
        brightness(0) invert(1);

}


/* ================================================================
   MAIN CIRCLE
   ================================================================ */

.ornament-kawung {

    width: 115vw;

    height: 115vw;

    transform:
        translateX(-50%);

    opacity: .45;

    animation:
        ornamentRotateClockwise 140s linear infinite;

}


/* ================================================================
   SECOND CIRCLE
   ================================================================ */

.ornament-parang {

    bottom: -75%;

    width: 145vw;

    height: 145vw;

    transform:
        translateX(-50%);

    opacity: .18;

    animation:
        ornamentRotateCounter 190s linear infinite;

}


/* ================================================================
   ROTATION
   ================================================================ */

@keyframes ornamentRotateClockwise {

    from {

        transform:
            translateX(-50%) rotate(0deg);

    }

    to {

        transform:
            translateX(-50%) rotate(360deg);

    }

}


@keyframes ornamentRotateCounter {

    from {

        transform:
            translateX(-50%) rotate(360deg);

    }

    to {

        transform:
            translateX(-50%) rotate(0deg);

    }

}


/* ================================================================
   GOLD ATMOSPHERE
   ================================================================ */

.gold-atmosphere {

    position: absolute;

    top: 35%;

    left: 50%;

    z-index: 15;

    width:
        min(80vw, 850px);

    height:
        min(80vw, 850px);

    transform:
        translate(-50%, -50%);

    border-radius: 50%;

    background:

        radial-gradient(circle,

            rgba(224, 190, 106, .075) 0%,

            rgba(224, 190, 106, .025) 38%,

            transparent 70%);

    filter:
        blur(25px);

}


/* ================================================================
   MAIN CONTENT
   ================================================================ */

.opening-content {

    position: relative;

    z-index: 30;

    width: 100%;

    height: 100%;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    text-align: center;

    padding:
        2vh 20px 12vh;

    pointer-events: none;

}


/* ================================================================
   GUNUNGAN
   ================================================================ */

.gunungan-wrapper {

    position: relative;

    width:
        clamp(82px,
            10vw,
            125px);

    height:
        clamp(100px,
            18vh,
            150px);

    margin-bottom:
        clamp(8px,
            1.5vh,
            18px);

    display: flex;

    align-items: center;

    justify-content: center;

    flex-shrink: 0;

}


.gunungan-halo {

    position: absolute;

    width: 82%;

    height: 82%;

    border-radius: 50%;

    background:

        radial-gradient(circle,

            rgba(232, 193, 102, .23),

            rgba(232, 193, 102, .04) 48%,

            transparent 72%);

    filter:
        blur(18px);

}


.gunungan-inner {

    position: relative;

    z-index: 2;

    width: 100%;

    height: 100%;

    animation:

        gununganAppear 1.4s cubic-bezier(.22, 1, .36, 1) both,

        gununganFloat 6s ease-in-out 1.4s infinite;

}


.gunungan {

    display: block;

    width: 100%;

    height: 100%;

    object-fit: contain;

    filter:
        drop-shadow(0 5px 10px rgba(0, 0, 0, .35));

}


@keyframes gununganAppear {

    from {

        opacity: 0;

        transform:
            translateY(20px) scale(.90);

    }

    to {

        opacity: 1;

        transform:
            translateY(0) scale(1);

    }

}


@keyframes gununganFloat {

    0%,
    100% {

        transform:
            translateY(0);

    }

    50% {

        transform:
            translateY(-5px);

    }

}


/* ================================================================
   WEDDING LABEL
   ================================================================ */

.wedding-label {

    position: relative;

    display: block;

    width: 100%;

    margin:
        clamp(10px,
            1.8vh,
            20px) 0 0;

    color:
        #E8CC82;

    font-family:
        "Elsie Swash Caps",
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        clamp(18px,
            2.1vw,
            32px);

    font-weight: 400;

    line-height: 1.15;

    letter-spacing: .025em;

    text-align: center;

    white-space: nowrap;

    text-shadow:

        0 2px 8px rgba(0, 0, 0, .45),

        0 0 18px rgba(224, 190, 111, .12);

    flex-shrink: 0;

    z-index: 10;

    animation:

        weddingLabelAppear 1s .25s cubic-bezier(.22, 1, .36, 1) both;

}


.wedding-label::before,
.wedding-label::after {

    content: "";

    position: absolute;

    top: 50%;

    width:
        clamp(25px,
            5vw,
            75px);

    height: 1px;

    background:

        linear-gradient(to right,
            transparent,
            rgba(232, 204, 130, .65));

    transform:
        translateY(-50%);

}


.wedding-label::before {

    right:
        calc(50% + 140px);

}


.wedding-label::after {

    left:
        calc(50% + 140px);

    background:

        linear-gradient(to left,
            transparent,
            rgba(232, 204, 130, .65));

}


@keyframes weddingLabelAppear {

    from {

        opacity: 0;

        transform:
            translateY(12px) scale(.94);

    }

    to {

        opacity: 1;

        transform:
            translateY(0) scale(1);

    }

}


/* ================================================================
   COUPLE NAMES
   ================================================================ */

.couple-names {

    margin:
        clamp(7px,
            1vh,
            13px) 0 0;

    display: flex;

    align-items: baseline;

    justify-content: center;

    color:
        #E5C46F;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        clamp(2.6rem,
            5.5vw,
            5rem);

    font-weight: 500;

    line-height: .95;

    letter-spacing: -.025em;

    white-space: nowrap;

    text-shadow:

        0 3px 12px rgba(0, 0, 0, .42),

        0 0 20px rgba(214, 177, 94, .10);

    flex-shrink: 0;

}


.couple-names .name {

    display: inline-block;

}


.ampersand {

    margin:
        0 .10em;

    color:
        #F1D88E;

    font-weight: 400;

    font-size: .78em;

    font-style: italic;

}


/* ================================================================
   GUEST SECTION
   ================================================================ */

.guest-section {

    margin-top:
        clamp(16px,
            2.5vh,
            28px);

    flex-shrink: 0;

    text-shadow:
        0 2px 8px rgba(0, 0, 0, .40);

}

.guest-address {
    margin: 4px 0 0;
    color: rgba(238, 213, 165, .75);
    font-size: 9px;
    line-height: 1.3;
    font-weight: 400;
    letter-spacing: .02em;
    text-shadow: 0 2px 8px rgba(0, 0, 0, .40);
}

.guest-label {

    margin: 0;

    color:
        #E9D5A5;

    font-size:
        clamp(10px,
            .9vw,
            13px);

    line-height: 1.4;

}


.guest-name {

    margin:
        8px 0 0;

    color:
        #F0D078;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        clamp(16px,
            1.5vw,
            22px);

    font-weight: 700;

}


.guest-note {

    margin:
        13px 0 0;

    color:
        rgba(238,
            204,
            119,
            .76);

    font-size:
        clamp(8px,
            .7vw,
            10px);

    line-height: 1.5;

    font-style: italic;

}


/* ================================================================
   OPENING BUTTON
   ================================================================ */

.opening-button {

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 8px;

    margin-top:
        clamp(18px,
            3vh,
            30px);

    min-width: 180px;

    padding:
        11px 27px;

    border:
        1px solid #E8CC82;

    border-radius: 999px;

    background:

        linear-gradient(135deg,
            #E6C873 0%,
            #D4B15D 42%,
            #C29A43 100%);

    color:
        #38281B;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        clamp(11px,
            .9vw,
            13px);

    font-weight: 700;

    letter-spacing: .02em;

    box-shadow:

        0 8px 25px rgba(0, 0, 0, .35),

        inset 0 1px 0 rgba(255, 255, 255, .50);

    cursor: pointer;

    pointer-events: auto;

    transition:

        transform .3s ease,

        box-shadow .3s ease,

        filter .3s ease;

    flex-shrink: 0;

}


.opening-button:hover {

    transform:
        translateY(-2px);

    filter:
        brightness(1.06);

    box-shadow:

        0 12px 32px rgba(0, 0, 0, .42),

        inset 0 1px 0 rgba(255, 255, 255, .55);

}


.opening-button:active {

    transform:
        scale(.96);

}


.button-icon {

    width: 16px;

    height: 16px;

    flex-shrink: 0;

}


/* ================================================================
   WAYANG
     
   LAYER 35
     
   ORNAMENT = 10
   CONTENT  = 30
   WAYANG   = 35
   GOLD     = 40
   TEXT     = 60
   FRAME    = 70
   ================================================================ */

.wayang {

    position: absolute;

    z-index: 35;

    bottom: -8px;

    width:
        clamp(110px,
            16vw,
            245px);

    pointer-events: none;

    filter:
        drop-shadow(0 8px 12px rgba(0, 0, 0, .30));

}


.wayang-inner {

    width: 100%;

    animation-duration: 7s;

    animation-timing-function: ease-in-out;

    animation-iteration-count: infinite;

    animation-delay: 1.6s;

}


.wayang img {

    display: block;

    width: 100%;

    height: auto;

}


.wayang-left {

    left: -20px;

    animation:
        wayangEnterLeft 1.5s cubic-bezier(.22, 1, .36, 1) both;

}


.wayang-left .wayang-inner {

    animation-name:
        wayangFloatLeft;

}


.wayang-right {

    right: -20px;

    animation:
        wayangEnterRight 1.5s cubic-bezier(.22, 1, .36, 1) both;

}


.wayang-right .wayang-inner {

    animation-name:
        wayangFloatRight;

    animation-duration: 8s;

}


@keyframes wayangEnterLeft {

    from {

        opacity: 0;

        transform:
            translateX(-100px) translateY(30px);

    }

    to {

        opacity: .95;

        transform:
            translateX(0) translateY(0);

    }

}


@keyframes wayangEnterRight {

    from {

        opacity: 0;

        transform:
            translateX(100px) translateY(30px);

    }

    to {

        opacity: .95;

        transform:
            translateX(0) translateY(0);

    }

}


@keyframes wayangFloatLeft {

    0%,
    100% {

        transform:
            translateY(0) rotate(-.7deg);

    }

    50% {

        transform:
            translateY(-9px) rotate(.7deg);

    }

}


@keyframes wayangFloatRight {

    0%,
    100% {

        transform:
            translateY(0) rotate(.7deg);

    }

    50% {

        transform:
            translateY(-11px) rotate(-.7deg);

    }

}


/* ================================================================
   GOLD BOTTOM
     
   LAYER 40
     
   DITINGGIKAN DARI VERSI SEBELUMNYA.
     
   Tujuannya:
   - lebih banyak menutupi wayang
   - area gold lebih terlihat
   - teks putih punya area gold yang lebih luas
   ================================================================ */

.bottom-gold {

    position: absolute;

    z-index: 40;

    left: -5%;

    right: -5%;

    bottom: -5%;

    /*
     * SEBELUMNYA:
     * clamp(45px, 8vh, 90px)
     *
     * SEKARANG:
     * sedikit lebih tinggi.
     */

    height:
        clamp(60px,
            10vh,
            105px);

    background:

        linear-gradient(to bottom,

            #E0BF6B 0%,

            #D2AD59 48%,

            #C49A42 100%);

    border-radius:

        50% 50% 0 0 / 35% 35% 0 0;

    box-shadow:

        0 -5px 20px rgba(0, 0, 0, .08);

}


.bottom-gold-highlight {

    position: absolute;

    top: 0;

    left: 10%;

    right: 10%;

    height: 1px;

    background:

        linear-gradient(to right,

            transparent,

            rgba(255, 239, 181, .7),

            transparent);

}


/* ================================================================
   BOTTOM TEXT
     
   LAYER 60
     
   PUTIH
     
   SEKARANG DINAikKAN.
     
   Tetap berada DI DALAM AREA GOLD.
   ================================================================ */

.bottom-text {

    position: absolute;

    z-index: 60;

    left: 50%;

    /*
     * DINAikKAN DARI 7px
     *
     * Semakin besar nilainya,
     * semakin ke ATAS tulisan.
     */

    bottom: 35px;

    transform:
        translateX(-50%);

    width: max-content;

    max-width: 90%;

    margin: 0;

    color:
        #FFFFFF;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        clamp(7px,
            .65vw,
            9px);

    font-weight: 500;

    letter-spacing:
        clamp(.12em,
            .22vw,
            .25em);

    text-transform: uppercase;

    text-align: center;

    white-space: nowrap;

    text-shadow:
        0 1px 3px rgba(70, 40, 10, .35);

}


/* ================================================================
   LUXURY FRAME
   ================================================================ */

.luxury-frame {

    position: absolute;

    inset: 0;

    z-index: 70;

    pointer-events: none;

}


.frame-outer {

    position: absolute;

    inset: 12px;

    border:
        1px solid rgba(224,
            190,
            111,
            .36);

    border-radius: 18px;

    box-shadow:

        inset 0 0 45px rgba(214,
            177,
            94,
            .025);

}


.frame-inner {

    position: absolute;

    inset: 20px;

    border:
        1px solid rgba(224,
            190,
            111,
            .12);

    border-radius: 15px;

}


/* ================================================================
   FRAME CORNERS
   ================================================================ */

.frame-corner {

    position: absolute;

    width: 36px;

    height: 36px;

    border-color:
        rgba(224,
            190,
            111,
            .42);

    border-style: solid;

    opacity: .75;

}


.frame-corner-tl {

    top: 22px;

    left: 22px;

    border-width:
        1px 0 0 1px;

    border-radius:
        12px 0 0 0;

}


.frame-corner-tr {

    top: 22px;

    right: 22px;

    border-width:
        1px 1px 0 0;

    border-radius:
        0 12px 0 0;

}


.frame-corner-bl {

    bottom: 22px;

    left: 22px;

    border-width:
        0 0 1px 1px;

    border-radius:
        0 0 0 12px;

}


.frame-corner-br {

    right: 22px;

    bottom: 22px;

    border-width:
        0 1px 1px 0;

    border-radius:
        0 0 12px 0;

}


/* ================================================================
   OPENING TRANSITION
   ================================================================ */

.opening-enter-active,
.opening-leave-active {

    transition:

        opacity 1s ease,

        transform 1s cubic-bezier(.77, 0, .175, 1);

}


.opening-enter-from {

    opacity: 0;

    transform:
        scale(1.025);

}


.opening-leave-to {

    opacity: 0;

    transform:
        scale(1.045);

}


/* ================================================================
   MOBILE PORTRAIT
   ================================================================ */

@media (orientation: portrait) {


    /* COVER */

    .opening-photo {

        background-image:
            url('/images/cover-mobile.jpg');

        background-position:
            center top;

    }


    /* OVERLAY */

    .opening-overlay {

        background:

            linear-gradient(to bottom,

                rgba(48, 37, 28, .08) 0%,

                rgba(55, 41, 30, .15) 28%,

                rgba(48, 35, 25, .38) 48%,

                rgba(40, 29, 21, .67) 68%,

                rgba(27, 20, 15, .96) 100%);

    }


    /* ============================================================
       ORNAMENT MOBILE
       ============================================================ */

    .ornament-kawung {

        bottom: -53%;

        width: 135vw;

        height: 135vw;

        opacity: .040;

    }


    .ornament-parang {

        bottom: -72%;

        width: 165vw;

        height: 165vw;

        opacity: .015;

    }


    /* CONTENT */

    .opening-content {

        padding:
            3vh 18px 100px;

    }


    /* GUNUNGAN */

    .gunungan-wrapper {

        width:
            clamp(75px,
                23vw,
                105px);

        height:
            clamp(90px,
                17vh,
                125px);

        margin-bottom: 7px;

    }


    /* WEDDING LABEL */

    .wedding-label {

        font-size:
            clamp(16px,
                5vw,
                24px);

        letter-spacing: .015em;

        margin-top: 8px;

    }


    .wedding-label::before {

        right:
            calc(50% + 110px);

    }


    .wedding-label::after {

        left:
            calc(50% + 110px);

    }


    /* NAMES */

    .couple-names {

        font-size:
            clamp(2.35rem,
                12vw,
                3.5rem);

    }


    /* GUEST */

    .guest-section {

        margin-top: 16px;

    }


    .guest-note {

        max-width: 280px;

    }


    /* WAYANG */

    .wayang {

        width:
            clamp(100px,
                32vw,
                150px);

        bottom: -5px;

    }


    .wayang-left {

        left: -24px;

    }


    .wayang-right {

        right: -24px;

    }


    /* ============================================================
       GOLD MOBILE
       
       DITINGGIKAN
       ============================================================ */

    .bottom-gold {

        height: 68px;

    }


    /* ============================================================
       TEXT MOBILE
       
       DINAikKAN
       ============================================================ */

    .bottom-text {

        bottom: 42px;

        color: #FFFFFF;

        font-size: 6.5px;

        letter-spacing: .14em;

    }

}


/* ================================================================
   SMALL MOBILE
   ================================================================ */

@media (orientation: portrait) and (max-height: 700px) {

    .opening-content {

        padding-top: 1vh;

        padding-bottom: 92px;

    }


    .gunungan-wrapper {

        width: 72px;

        height: 82px;

        margin-bottom: 5px;

    }


    .wedding-label {

        font-size:
            clamp(15px,
                4.8vw,
                21px);

        margin-top: 5px;

    }


    .wedding-label::before,
    .wedding-label::after {

        display: none;

    }


    .couple-names {

        margin-top: 5px;

        font-size: 2.25rem;

    }


    .guest-section {

        margin-top: 10px;

    }


    .guest-name {

        margin-top: 4px;

    }


    .guest-note {

        margin-top: 7px;

    }


    .opening-button {

        margin-top: 13px;

        min-width: 165px;

        padding:
            9px 20px;

    }


    .wayang {

        width: 105px;

    }


    /* GOLD DITINGGIKAN */

    .bottom-gold {

        height: 60px;

    }


    /* TEXT DINAikKAN */

    .bottom-text {

        bottom: 35px;

    }


    .frame-outer {

        inset: 8px;

    }


    .frame-inner {

        inset: 15px;

    }


    .frame-corner {

        width: 28px;

        height: 28px;

    }


    .frame-corner-tl {

        top: 17px;

        left: 17px;

    }


    .frame-corner-tr {

        top: 17px;

        right: 17px;

    }


    .frame-corner-bl {

        bottom: 17px;

        left: 17px;

    }


    .frame-corner-br {

        bottom: 17px;

        right: 17px;

    }

}


/* ================================================================
   VERY SMALL MOBILE
   ================================================================ */

@media (orientation: portrait) and (max-height: 620px) {

    .opening-content {

        padding-top: 0;

        padding-bottom: 82px;

    }


    .gunungan-wrapper {

        width: 62px;

        height: 70px;

        margin-bottom: 3px;

    }


    .wedding-label {

        font-size: 15px;

    }


    .couple-names {

        font-size: 2rem;

    }


    .guest-section {

        margin-top: 7px;

    }


    .guest-label {

        font-size: 9px;

    }


    .guest-name {

        margin-top: 3px;

        font-size: 15px;

    }


    .guest-note {

        margin-top: 5px;

        font-size: 7px;

    }


    .opening-button {

        margin-top: 9px;

        min-width: 155px;

        padding:
            8px 17px;

        font-size: 10px;

    }


    .button-icon {

        width: 14px;

        height: 14px;

    }


    .wayang {

        width: 92px;

    }


    /* GOLD */

    .bottom-gold {

        height: 56px;

    }


    /* TEXT */

    .bottom-text {

        bottom: 33px;

        color: #FFFFFF;

    }

}


/* ================================================================
   LANDSCAPE
   ================================================================ */

@media (orientation: landscape) {


    /* COVER DESKTOP */

    .opening-photo {

        background-image:
            url('/images/cover-desktop.jpg');

        background-position:
            center center;

    }


    /* CONTENT */

    .opening-content {

        padding:
            1vh 20px 10vh;

    }


    /* ORNAMENT */

    .ornament-kawung {

        bottom: -70%;

        width: 125vh;

        height: 125vh;

        opacity: .045;

    }


    .ornament-parang {

        bottom: -90%;

        width: 155vh;

        height: 155vh;

        opacity: .018;

    }


    /* GUNUNGAN */

    .gunungan-wrapper {

        width:
            clamp(70px,
                11vh,
                115px);

        height:
            clamp(75px,
                20vh,
                125px);

        margin-bottom: 5px;

    }


    /* LABEL */

    .wedding-label {

        font-size:
            clamp(19px,
                3.2vh,
                31px);

    }


    /* NAMES */

    .couple-names {

        font-size:
            clamp(2.3rem,
                7vh,
                4.4rem);

    }


    /* GUEST */

    .guest-section {

        margin-top: 10px;

    }


    .guest-note {

        margin-top: 8px;

    }


    /* BUTTON */

    .opening-button {

        margin-top: 14px;

    }


    /* WAYANG */

    .wayang {

        width:
            clamp(120px,
                24vh,
                220px);

    }


    /* ============================================================
       GOLD LANDSCAPE
       ============================================================ */

    .bottom-gold {

        height:
            clamp(65px,
                11vh,
                110px);

    }


    /* ============================================================
       TEXT LANDSCAPE
       ============================================================ */

    .bottom-text {

        bottom: 50px;

    }

}


/* ================================================================
   SHORT LANDSCAPE
   ================================================================ */

@media (orientation: landscape) and (max-height: 600px) {

    .opening-content {

        padding-top: 1vh;

        padding-bottom: 9vh;

    }


    .ornament-kawung {

        bottom: -82%;

        width: 140vh;

        height: 140vh;

        opacity: .040;

    }


    .ornament-parang {

        bottom: -105%;

        width: 175vh;

        height: 175vh;

        opacity: .015;

    }


    .gunungan-wrapper {

        width: 70px;

        height: 78px;

        margin-bottom: 3px;

    }


    .wedding-label {

        font-size:
            clamp(16px,
                3.5vh,
                25px);

        margin-top: 5px;

    }


    .wedding-label::before,
    .wedding-label::after {

        display: none;

    }


    .couple-names {

        font-size:
            clamp(2rem,
                6.5vh,
                3.5rem);

    }


    .guest-section {

        margin-top: 7px;

    }


    .guest-label {

        font-size: 9px;

    }


    .guest-name {

        margin-top: 3px;

        font-size: 16px;

    }


    .guest-note {

        margin-top: 5px;

        font-size: 8px;

    }


    .opening-button {

        margin-top: 9px;

        padding:
            8px 20px;

        font-size: 10px;

    }


    .wayang {

        width: 130px;

    }


    /* GOLD LEBIH TINGGI */

    .bottom-gold {

        height: 58px;

    }


    /* TEXT NAIK */

    .bottom-text {

        bottom: 35px;

        color: #FFFFFF;

    }

}


/* ================================================================
   TABLET LANDSCAPE
   ================================================================ */

@media (orientation: landscape) and (min-width: 768px) {

    .opening-content {

        padding-left: 30px;

        padding-right: 30px;

    }


    .wayang-left {

        left: -25px;

    }


    .wayang-right {

        right: -25px;

    }

}


/* ================================================================
   LARGE DESKTOP
   ================================================================ */

@media (orientation: landscape) and (min-width: 1200px) {

    .opening-content {

        padding-bottom: 12vh;

    }


    .wayang {

        width:
            clamp(180px,
                17vw,
                270px);

    }


    .wayang-left {

        left: -30px;

    }


    .wayang-right {

        right: -30px;

    }


    /*
     * PENTING:
     * Sebelumnya opacity:
     *
     * 1.555
     * 1.422
     *
     * Itu terlalu kuat.
     *
     * Dikembalikan menjadi samar.
     */

    .ornament-kawung {

        opacity: .045;

    }


    .ornament-parang {

        opacity: .018;

    }


    /* GOLD DESKTOP DITINGGIKAN */

    .bottom-gold {

        height:
            clamp(75px,
                10vh,
                110px);

    }


    /* TEXT DESKTOP */

    .bottom-text {

        bottom: 54px;

    }

}


/* ================================================================
   ULTRA WIDE
   ================================================================ */

@media (orientation: landscape) and (min-width: 1600px) {

    .wayang {

        width: 270px;

    }


    .opening-content {

        padding-bottom: 13vh;

    }


    .bottom-gold {

        height: 100px;

    }


    .bottom-text {

        bottom: 56px;

    }

}


/* ================================================================
   REDUCE MOTION
   ================================================================ */

@media (prefers-reduced-motion: reduce) {

    .gunungan-inner,
    .wayang-inner,
    .ornament-kawung,
    .ornament-parang {

        animation: none;

    }


    .opening-enter-active,
    .opening-leave-active {

        transition:
            opacity .3s ease;

    }

}
</style>