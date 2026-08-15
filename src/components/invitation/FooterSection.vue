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
    <section class="footer-section">

        <!-- =====================================================
             BACKGROUND IMAGE
             ===================================================== -->

        <picture class="footer-background">

            <source media="(orientation: landscape)" srcset="/images/cover-desktop.jpg" />

            <img src="/images/cover-mobile.jpg" :alt="`${coupleNames} Wedding`" class="footer-image" />

        </picture>


        <!-- =====================================================
             OVERLAY
             ===================================================== -->

        <div class="footer-overlay"></div>


        <!-- =====================================================
             GOLD ATMOSPHERE
             ===================================================== -->

        <div class="footer-glow"></div>


        <!-- =====================================================
             JAVA ORNAMENT
             ===================================================== -->

        <div class="footer-ornament footer-ornament-left">
            <img src="/images/circle-ornament.png" alt="" />
        </div>

        <div class="footer-ornament footer-ornament-right">
            <img src="/images/circle-ornament.png" alt="" />
        </div>


        <!-- =====================================================
             CONTENT
             ===================================================== -->

        <div class="footer-content">

            <!-- Small label -->

            <p class="footer-label">
                Terima Kasih
            </p>


            <!-- Divider -->

            <div class="footer-divider">

                <span></span>

                <i></i>

                <span></span>

            </div>


            <!-- Main message -->

            <h2 class="footer-title">
                Sampai Jumpa
                <em>di Hari Bahagia</em>
            </h2>


            <!-- Couple names -->

            <h3 class="footer-names">

                <span>
                    {{ invitation.groom.name }}
                </span>

                <em>&amp;</em>

                <span>
                    {{ invitation.bride.name }}
                </span>

            </h3>


            <!-- Wedding date -->

            <p class="footer-date">
                {{ invitation.wedding.date }}
            </p>


            <!-- =================================================
                 CLOSING MESSAGE
                 ================================================= -->

            <div class="footer-message">

                <p>
                    Merupakan suatu kehormatan dan kebahagiaan
                    bagi kami dapat berbagi momen istimewa ini
                    bersama Anda.
                </p>

                <p>
                    Terima kasih atas doa, kasih sayang,
                    dan kehadiran yang diberikan untuk
                    kedua mempelai.
                </p>

            </div>


            <!-- Bottom divider -->

            <div class="footer-bottom-divider">

                <span></span>

                <i></i>

                <span></span>

            </div>


            <!-- Closing -->

            <p class="footer-closing">
                Dengan penuh cinta,
            </p>

            <p class="footer-signature">
                {{ coupleNames }}
            </p>

        </div>


        <!-- =====================================================
             FRAME
             ===================================================== -->

        <div class="footer-frame">

            <div class="footer-frame-inner"></div>

        </div>

    </section>
</template>


<style scoped>
/* ================================================================
   FOOTER SECTION
   ================================================================ */

.footer-section {

    position:
        relative;

    min-height:
        100svh;

    width:
        100%;

    overflow:
        hidden;

    background:
        #211810;

    color:
        #f5ead6;

    isolation:
        isolate;

}


/* ================================================================
   BACKGROUND
   ================================================================ */

.footer-background {

    position:
        absolute;

    inset:
        0;

    z-index:
        0;

    display:
        block;

}


.footer-image {

    display:
        block;

    width:
        100%;

    height:
        100svh;

    object-fit:
        cover;

    object-position:
        center center;

    transform:
        scale(1.02);

    filter:
        saturate(.72) contrast(.96) brightness(.68) sepia(.08);

    animation:
        footerImageZoom 18s ease-out both;

}


@keyframes footerImageZoom {

    from {

        transform:
            scale(1.045);

    }

    to {

        transform:
            scale(1);

    }

}


/* ================================================================
   OVERLAY
   ================================================================ */

.footer-overlay {

    position:
        absolute;

    inset:
        0;

    z-index:
        1;

    background:

        linear-gradient(to bottom,

            rgba(22, 15, 10, .72) 0%,

            rgba(28, 19, 13, .52) 22%,

            rgba(29, 20, 14, .58) 50%,

            rgba(25, 17, 12, .72) 75%,

            rgba(17, 11, 8, .94) 100%);

}


/* ================================================================
   GOLD GLOW
   ================================================================ */

.footer-glow {

    position:
        absolute;

    top:
        42%;

    left:
        50%;

    z-index:
        2;

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

            rgba(226, 190, 102, .13) 0%,

            rgba(226, 190, 102, .045) 36%,

            transparent 70%);

    filter:
        blur(35px);

    pointer-events:
        none;

}


/* ================================================================
   ORNAMENT
   ================================================================ */

.footer-ornament {

    position:
        absolute;

    z-index:
        3;

    width:
        min(45vw, 520px);

    height:
        min(45vw, 520px);

    opacity:
        .055;

    pointer-events:
        none;

}


.footer-ornament img {

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
   LEFT
   ================================================================ */

.footer-ornament-left {

    left:
        -18%;

    bottom:
        -9%;

    transform:
        rotate(-18deg);

}


/* ================================================================
   RIGHT
   ================================================================ */

.footer-ornament-right {

    right:
        -18%;

    top:
        -9%;

    transform:
        rotate(162deg);

}


/* ================================================================
   CONTENT
   ================================================================ */

.footer-content {

    position:
        relative;

    z-index:
        10;

    min-height:
        100svh;

    display:
        flex;

    flex-direction:
        column;

    align-items:
        center;

    justify-content:
        center;

    padding:
        100px 24px 110px;

    text-align:
        center;

}


/* ================================================================
   LABEL
   ================================================================ */

.footer-label {

    margin:
        0;

    color:
        #E8CC82;

    font-family:
        "Elsie Swash Caps",
        Georgia,
        serif;

    font-size:
        clamp(19px, 2.5vw, 30px);

    font-weight:
        400;

    letter-spacing:
        .02em;

    text-shadow:
        0 3px 12px rgba(0, 0, 0, .45);

    animation:
        footerContentIn 1s .1s cubic-bezier(.22, 1, .36, 1) both;

}


/* ================================================================
   DIVIDER
   ================================================================ */

.footer-divider {

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


.footer-divider span {

    width:
        clamp(28px, 5vw, 70px);

    height:
        1px;

    background:
        linear-gradient(to right,
            transparent,
            rgba(231, 204, 133, .72));

}


.footer-divider span:last-child {

    background:
        linear-gradient(to left,
            transparent,
            rgba(231, 204, 133, .72));

}


.footer-divider i {

    display:
        block;

    width:
        5px;

    height:
        5px;

    border:
        1px solid #E8CC82;

    transform:
        rotate(45deg);

}


/* ================================================================
   TITLE
   ================================================================ */

.footer-title {

    margin:
        25px 0 0;

    color:
        #F1D78D;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        clamp(42px, 6vw, 72px);

    font-weight:
        400;

    line-height:
        .98;

    letter-spacing:
        -.035em;

    text-shadow:
        0 5px 18px rgba(0, 0, 0, .48);

    animation:
        footerContentIn 1s .2s cubic-bezier(.22, 1, .36, 1) both;

}


.footer-title em {

    display:
        block;

    margin-top:
        7px;

    color:
        #F7EDDA;

    font-size:
        .66em;

    font-style:
        italic;

}


/* ================================================================
   COUPLE NAMES
   ================================================================ */

.footer-names {

    display:
        flex;

    align-items:
        baseline;

    justify-content:
        center;

    flex-wrap:
        wrap;

    gap:
        .16em;

    margin:
        35px 0 0;

    color:
        #F1D78D;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        clamp(30px, 4vw, 48px);

    font-weight:
        400;

    line-height:
        1;

    letter-spacing:
        -.025em;

    text-shadow:
        0 4px 15px rgba(0, 0, 0, .45);

    animation:
        footerContentIn 1s .3s cubic-bezier(.22, 1, .36, 1) both;

}


.footer-names em {

    color:
        #E8CC82;

    font-size:
        .62em;

    font-style:
        italic;

}


/* ================================================================
   DATE
   ================================================================ */

.footer-date {

    margin:
        20px 0 0;

    color:
        #F1E4C5;

    font-family:
        Georgia,
        serif;

    font-size:
        11px;

    letter-spacing:
        .22em;

    text-transform:
        uppercase;

    text-shadow:
        0 2px 8px rgba(0, 0, 0, .45);

}


/* ================================================================
   MESSAGE
   ================================================================ */

.footer-message {

    max-width:
        510px;

    margin:
        40px auto 0;

    color:
        rgba(244, 234, 216, .78);

    font-size:
        13px;

    line-height:
        1.9;

}


.footer-message p {

    margin:
        0;

}


.footer-message p+p {

    margin-top:
        10px;

}


/* ================================================================
   BOTTOM DIVIDER
   ================================================================ */

.footer-bottom-divider {

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        9px;

    margin:
        30px 0 0;

}


.footer-bottom-divider span {

    width:
        32px;

    height:
        1px;

    background:
        linear-gradient(to right,
            transparent,
            rgba(231, 204, 133, .48));

}


.footer-bottom-divider span:last-child {

    background:
        linear-gradient(to left,
            transparent,
            rgba(231, 204, 133, .48));

}


.footer-bottom-divider i {

    width:
        5px;

    height:
        5px;

    border:
        1px solid rgba(232, 204, 130, .7);

    transform:
        rotate(45deg);

}


/* ================================================================
   CLOSING
   ================================================================ */

.footer-closing {

    margin:
        22px 0 0;

    color:
        rgba(244, 234, 216, .58);

    font-family:
        Georgia,
        serif;

    font-size:
        11px;

    font-style:
        italic;

}


.footer-signature {

    margin:
        7px 0 0;

    color:
        #E8CC82;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        20px;

    font-style:
        italic;

    letter-spacing:
        .02em;

}


/* ================================================================
   ANIMATION
   ================================================================ */

@keyframes footerContentIn {

    from {

        opacity:
            0;

        transform:
            translateY(24px);

    }

    to {

        opacity:
            1;

        transform:
            translateY(0);

    }

}


/* ================================================================
   FRAME
   ================================================================ */

.footer-frame {

    position:
        absolute;

    inset:
        0;

    z-index:
        30;

    pointer-events:
        none;

}


.footer-frame::before {

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


.footer-frame-inner {

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
   MOBILE
   ================================================================ */

@media (orientation: portrait) {

    .footer-image {

        object-position:
            center top;

    }


    .footer-content {

        padding:
            90px 20px 105px;

    }


    .footer-ornament {

        width:
            100vw;

        height:
            100vw;

        opacity:
            .05;

    }


    .footer-ornament-left {

        left:
            -55%;

        bottom:
            -9%;

    }


    .footer-ornament-right {

        right:
            -55%;

        top:
            -9%;

    }


    .footer-label {

        font-size:
            20px;

    }


    .footer-title {

        margin-top:
            20px;

        font-size:
            clamp(38px, 11vw, 52px);

    }


    .footer-names {

        flex-direction:
            column;

        align-items:
            center;

        gap:
            2px;

        margin-top:
            30px;

        font-size:
            clamp(28px, 9vw, 40px);

    }


    .footer-names em {

        margin:
            -2px 0;

    }


    .footer-date {

        margin-top:
            18px;

        font-size:
            9px;

        letter-spacing:
            .18em;

    }


    .footer-message {

        max-width:
            340px;

        margin-top:
            32px;

        font-size:
            12px;

        line-height:
            1.8;

    }


    .footer-message p+p {

        margin-top:
            8px;

    }


    .footer-bottom-divider {

        margin-top:
            25px;

    }


    .footer-signature {

        font-size:
            18px;

    }

}


/* ================================================================
   SMALL MOBILE
   ================================================================ */

@media (orientation: portrait) and (max-height: 700px) {

    .footer-content {

        padding:
            80px 18px 90px;

    }


    .footer-label {

        font-size:
            17px;

    }


    .footer-divider {

        margin-top:
            12px;

    }


    .footer-title {

        margin-top:
            16px;

        font-size:
            34px;

    }


    .footer-names {

        margin-top:
            24px;

        font-size:
            27px;

    }


    .footer-date {

        margin-top:
            14px;

    }


    .footer-message {

        margin-top:
            25px;

        font-size:
            11px;

    }


    .footer-bottom-divider {

        margin-top:
            20px;

    }

}


/* ================================================================
   LANDSCAPE
   ================================================================ */

@media (orientation: landscape) {

    .footer-content {

        padding-bottom:
            clamp(70px, 10vh, 110px);

    }


    .footer-title {

        font-size:
            clamp(38px, 7vh, 64px);

    }


    .footer-names {

        margin-top:
            25px;

        font-size:
            clamp(27px, 4vh, 42px);

    }


    .footer-message {

        margin-top:
            25px;

        font-size:
            11px;

    }

}


/* ================================================================
   REDUCE MOTION
   ================================================================ */

@media (prefers-reduced-motion: reduce) {

    .footer-image {

        animation:
            none;

    }

}
</style>