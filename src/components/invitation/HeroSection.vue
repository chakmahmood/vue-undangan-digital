<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    invitation: any
}>()

const coupleNames = computed(() => {
    return `${props.invitation.groom.name} & ${props.invitation.bride.name}`
})
</script>

<template>
    <section class="hero-section">

        <!-- =====================================================
             BACKGROUND IMAGE
             ===================================================== -->

        <picture class="hero-background">

            <!-- Landscape / Desktop -->
            <source media="(orientation: landscape)" srcset="/images/cover-desktop.jpg" />

            <!-- Portrait / Mobile -->
            <img src="/images/cover-mobile.jpg" :alt="`${coupleNames} Wedding`" class="hero-image" />

        </picture>


        <!-- =====================================================
             DARK / WARM OVERLAY
             ===================================================== -->

        <div class="hero-overlay"></div>


        <!-- =====================================================
             GOLD ATMOSPHERE
             ===================================================== -->

        <div class="hero-glow"></div>


        <!-- =====================================================
             SUBTLE JAVA ORNAMENT
             ===================================================== -->

        <div class="hero-ornament hero-ornament-left">
            <img src="/images/circle-ornament.png" alt="" />
        </div>

        <div class="hero-ornament hero-ornament-right">
            <img src="/images/circle-ornament.png" alt="" />
        </div>


        <!-- =====================================================
             HERO CONTENT

             FOKUS:
             - Wedding title
             - Couple names
             - Wedding date

             TIDAK ADA:
             - Venue
             - Address
             - Save to Calendar
             ===================================================== -->

        <div class="hero-content">

            <!-- Wedding title -->

            <p class="hero-label">
                {{ invitation.wedding.title }}
            </p>


            <!-- Decorative divider -->

            <div class="hero-divider">

                <span></span>

                <i></i>

                <span></span>

            </div>


            <!-- =================================================
                 COUPLE NAMES
                 ================================================= -->

            <h1 class="hero-names">

                <span class="hero-name">
                    {{ invitation.groom.name }}
                </span>

                <em>&amp;</em>

                <span class="hero-name">
                    {{ invitation.bride.name }}
                </span>

            </h1>


            <!-- =================================================
                 WEDDING DATE
                 ================================================= -->

            <p class="hero-date">
                {{ invitation.wedding.date }}
            </p>

        </div>


        <!-- =====================================================
             SCROLL INDICATOR
             ===================================================== -->

        <div class="hero-scroll">

            <span class="hero-scroll-line"></span>

            <span class="hero-scroll-text">

            </span>

        </div>


        <!-- =====================================================
             FRAME
             ===================================================== -->

        <div class="hero-frame">

            <div class="hero-frame-inner"></div>

        </div>

    </section>
</template>


<style scoped>
/* ================================================================
   HERO
   ================================================================ */

.hero-section {

    position: relative;

    min-height: 100svh;

    width: 100%;

    overflow: hidden;

    background:
        #211810;

    isolation: isolate;

}


/* ================================================================
   BACKGROUND
   ================================================================ */

.hero-background {

    position: absolute;

    inset: 0;

    z-index: 0;

    display: block;

}


.hero-image {

    display: block;

    width: 100%;

    height: 100svh;

    object-fit: cover;

    object-position: center center;

    transform:
        scale(1.015);

    filter:
        saturate(.78) contrast(.96) brightness(.86) sepia(.04);

    animation:
        heroImageZoom 18s ease-out both;

}


/* ================================================================
   SLOW IMAGE ZOOM
   ================================================================ */

@keyframes heroImageZoom {

    from {

        transform:
            scale(1.035);

    }

    to {

        transform:
            scale(1);

    }

}


/* ================================================================
   OVERLAY
   ================================================================ */

.hero-overlay {

    position: absolute;

    inset: 0;

    z-index: 1;

    background:

        linear-gradient(to bottom,

            rgba(24, 17, 12, .20) 0%,

            rgba(29, 20, 14, .10) 25%,

            rgba(30, 21, 15, .18) 48%,

            rgba(27, 19, 13, .55) 72%,

            rgba(20, 14, 10, .88) 100%);

}


/* ================================================================
   GOLD GLOW
   ================================================================ */

.hero-glow {

    position: absolute;

    top: 42%;

    left: 50%;

    z-index: 2;

    width:
        min(90vw, 900px);

    height:
        min(90vw, 900px);

    transform:
        translate(-50%, -50%);

    border-radius:
        50%;

    background:

        radial-gradient(circle,

            rgba(226, 190, 102, .12) 0%,

            rgba(226, 190, 102, .04) 35%,

            transparent 70%);

    filter:
        blur(35px);

    pointer-events:
        none;

}


/* ================================================================
   ORNAMENT
   ================================================================ */

.hero-ornament {

    position: absolute;

    z-index: 2;

    width:
        min(45vw, 500px);

    height:
        min(45vw, 500px);

    opacity:
        .045;

    pointer-events:
        none;

}


.hero-ornament img {

    display:
        block;

    width:
        100%;

    height:
        100%;

    object-fit:
        contain;

}


/* ================================================================
   LEFT ORNAMENT
   ================================================================ */

.hero-ornament-left {

    left:
        -18%;

    bottom:
        -8%;

    transform:
        rotate(-18deg);

}


/* ================================================================
   RIGHT ORNAMENT
   ================================================================ */

.hero-ornament-right {

    right:
        -18%;

    top:
        -8%;

    transform:
        rotate(162deg);

}


/* ================================================================
   HERO CONTENT

   FOKUS UTAMA PENGANTIN
   ================================================================ */

.hero-content {

    position: relative;

    z-index: 10;

    min-height:
        100svh;

    display:
        flex;

    flex-direction:
        column;

    align-items:
        center;

    justify-content:
        flex-end;

    text-align:
        center;

    padding:
        10vh 24px clamp(125px, 17vh, 185px);

    color:
        white;

}


/* ================================================================
   WEDDING LABEL
   ================================================================ */

.hero-label {

    margin:
        0;

    color:
        #E8CC82;

    font-family:
        "Elsie Swash Caps",
        Georgia,
        serif;

    font-size:
        clamp(20px,
            2.4vw,
            34px);

    font-weight:
        400;

    line-height:
        1.1;

    letter-spacing:
        .02em;

    text-shadow:
        0 3px 10px rgba(0, 0, 0, .45);

    animation:
        heroContentIn 1s .15s cubic-bezier(.22, 1, .36, 1) both;

}


/* ================================================================
   DIVIDER
   ================================================================ */

.hero-divider {

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        9px;

    margin-top:
        18px;

}


.hero-divider span {

    width:
        clamp(25px,
            5vw,
            70px);

    height:
        1px;

    background:

        linear-gradient(to right,
            transparent,
            rgba(231, 204, 133, .72));

}


.hero-divider span:last-child {

    background:

        linear-gradient(to left,
            transparent,
            rgba(231, 204, 133, .72));

}


.hero-divider i {

    width:
        5px;

    height:
        5px;

    display:
        block;

    border:
        1px solid #E8CC82;

    transform:
        rotate(45deg);

}


/* ================================================================
   COUPLE NAMES

   INI BAGIAN UTAMA HERO
   ================================================================ */

.hero-names {

    display:
        flex;

    align-items:
        baseline;

    justify-content:
        center;

    flex-wrap:
        wrap;

    gap:
        .15em;

    margin:
        20px 0 0;

    color:
        #F1D78D;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        clamp(4rem,
            9vw,
            9rem);

    font-weight:
        500;

    line-height:
        .88;

    letter-spacing:
        -.045em;

    text-shadow:

        0 5px 18px rgba(0, 0, 0, .45),

        0 0 30px rgba(226, 190, 102, .08);

    animation:
        heroContentIn 1s .3s cubic-bezier(.22, 1, .36, 1) both;

}


.hero-name {

    display:
        inline-block;

}


.hero-names em {

    font-size:
        .52em;

    font-weight:
        400;

    color:
        #F4DE9B;

    font-style:
        italic;

}


/* ================================================================
   DATE

   HANYA INFORMASI TAMBAHAN UTAMA
   ================================================================ */

.hero-date {

    margin:
        28px 0 0;

    color:
        #F1E4C5;

    font-family:
        Georgia,
        serif;

    font-size:
        clamp(13px,
            1.2vw,
            18px);

    letter-spacing:
        .22em;

    text-transform:
        uppercase;

    text-shadow:
        0 2px 8px rgba(0, 0, 0, .45);

    animation:
        heroContentIn 1s .45s cubic-bezier(.22, 1, .36, 1) both;

}


/* ================================================================
   CONTENT ANIMATION
   ================================================================ */

@keyframes heroContentIn {

    from {

        opacity:
            0;

        transform:
            translateY(25px);

    }

    to {

        opacity:
            1;

        transform:
            translateY(0);

    }

}


/* ================================================================
   SCROLL INDICATOR
   ================================================================ */

.hero-scroll {

    position:
        absolute;

    z-index:
        20;

    left:
        50%;

    bottom:
        28px;

    transform:
        translateX(-50%);

    display:
        flex;

    flex-direction:
        column;

    align-items:
        center;

    gap:
        7px;

    color:
        rgba(239, 219, 171, .72);

}


.hero-scroll-line {

    width:
        1px;

    height:
        28px;

    background:

        linear-gradient(to bottom,
            transparent,
            #E8CC82);

    animation:
        scrollLine 2s ease-in-out infinite;

}


.hero-scroll-text {

    font-size:
        7px;

    letter-spacing:
        .35em;

}


@keyframes scrollLine {

    0%,
    100% {

        opacity:
            .35;

        transform:
            scaleY(.65);

        transform-origin:
            top;

    }

    50% {

        opacity:
            1;

        transform:
            scaleY(1);

        transform-origin:
            top;

    }

}


/* ================================================================
   FRAME
   ================================================================ */

.hero-frame {

    position:
        absolute;

    inset:
        0;

    z-index:
        30;

    pointer-events:
        none;

}


.hero-frame::before {

    content:
        "";

    position:
        absolute;

    inset:
        12px;

    border:
        1px solid rgba(225, 192, 112, .30);

    border-radius:
        18px;

}


.hero-frame-inner {

    position:
        absolute;

    inset:
        20px;

    border:
        1px solid rgba(225, 192, 112, .10);

    border-radius:
        15px;

}


/* ================================================================
   MOBILE PORTRAIT
   ================================================================ */

@media (orientation: portrait) {

    .hero-image {

        object-position:
            center top;

    }


    .hero-content {

        padding-left:
            18px;

        padding-right:
            18px;

        padding-bottom:
            115px;

    }


    .hero-label {

        font-size:
            clamp(18px,
                5vw,
                25px);

    }


    .hero-names {

        font-size:
            clamp(3.2rem,
                13vw,
                5rem);

        flex-direction:
            column;

        align-items:
            center;

        gap:
            0;

    }


    .hero-names em {

        margin:
            -2px 0;

    }


    .hero-date {

        margin-top:
            22px;

        font-size:
            11px;

        letter-spacing:
            .18em;

    }


    .hero-ornament {

        width:
            100vw;

        height:
            100vw;

    }


    .hero-ornament-left {

        left:
            -55%;

        bottom:
            -10%;

    }


    .hero-ornament-right {

        right:
            -55%;

        top:
            -10%;

    }

}


/* ================================================================
   SMALL MOBILE
   ================================================================ */

@media (orientation: portrait) and (max-height: 700px) {

    .hero-content {

        padding-bottom:
            95px;

    }


    .hero-label {

        font-size:
            17px;

    }


    .hero-divider {

        margin-top:
            12px;

    }


    .hero-names {

        margin-top:
            12px;

        font-size:
            2.9rem;

    }


    .hero-date {

        margin-top:
            16px;

    }


    .hero-scroll {

        bottom:
            17px;

    }

}


/* ================================================================
   LANDSCAPE
   ================================================================ */

@media (orientation: landscape) {

    .hero-image {

        object-position:
            center center;

    }


    .hero-content {

        padding-bottom:
            clamp(80px,
                12vh,
                135px);

    }


    .hero-names {

        font-size:
            clamp(3rem,
                9vh,
                7rem);

    }


    .hero-label {

        font-size:
            clamp(19px,
                3.2vh,
                31px);

    }

}


/* ================================================================
   SHORT LANDSCAPE
   ================================================================ */

@media (orientation: landscape) and (max-height: 600px) {

    .hero-content {

        padding-bottom:
            70px;

    }


    .hero-label {

        font-size:
            17px;

    }


    .hero-divider {

        margin-top:
            10px;

    }


    .hero-names {

        margin-top:
            10px;

        font-size:
            clamp(2.5rem,
                8vh,
                4.5rem);

    }


    .hero-date {

        margin-top:
            12px;

        font-size:
            10px;

    }


    .hero-scroll {

        bottom:
            12px;

    }


    .hero-scroll-line {

        height:
            20px;

    }

}


/* ================================================================
   REDUCE MOTION
   ================================================================ */

@media (prefers-reduced-motion: reduce) {

    .hero-image,
    .hero-scroll-line {

        animation:
            none;

    }

}
</style>