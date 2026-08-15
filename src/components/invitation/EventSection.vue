<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    invitation: any
}>()

const wedding = computed(() => props.invitation.wedding)

const googleMapsUrl = computed(() => {
    return 'https://www.google.com/maps?q=-4.1425411,104.6194045&z=17&hl=en'
})
</script>

<template>
    <section class="event-section">

        <!-- =====================================================
             BACKGROUND ORNAMENT
             ===================================================== -->

        <div class="event-orbit event-orbit-left">
            <img src="/images/circle-ornament.png" alt="" />
        </div>

        <div class="event-orbit event-orbit-right">
            <img src="/images/circle-ornament.png" alt="" />
        </div>


        <!-- =====================================================
             HEADER
             ===================================================== -->

        <div class="event-header">

            <p class="event-eyebrow">
                Hari Bahagia
            </p>

            <h2 class="event-title">
                Resepsi Pernikahan
            </h2>

            <div class="event-divider">

                <span></span>

                <i></i>

                <span></span>

            </div>

            <p class="event-description">
                Dengan penuh kebahagiaan, kami mengundang
                Bapak/Ibu/Saudara/i untuk hadir dan menjadi
                bagian dari hari istimewa kami.
            </p>

        </div>


        <!-- =====================================================
             EVENT CARD
             ===================================================== -->

        <div class="event-card">

            <!-- Decorative corners -->

            <span class="corner corner-tl"></span>
            <span class="corner corner-tr"></span>
            <span class="corner corner-bl"></span>
            <span class="corner corner-br"></span>


            <!-- =================================================
                 CARD TOP
                 ================================================= -->

            <div class="event-card-top">

                <span class="event-small-label">
                    THE WEDDING RECEPTION
                </span>

                <div class="event-card-ornament">
                    <span></span>
                    <i>✦</i>
                    <span></span>
                </div>

            </div>


            <!-- =================================================
                 DATE
                 ================================================= -->

            <div class="event-date">

                <p class="event-day">
                    {{ wedding.day }}
                </p>

                <p class="event-date-number">
                    {{ wedding.date }}
                </p>

            </div>


            <!-- =================================================
                 TIME
                 ================================================= -->

            <div class="event-time">

                <span class="event-time-line"></span>

                <div class="event-time-content">

                    <svg class="event-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"
                        stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                    </svg>

                    <div>
                        <p class="event-time-label">
                            Waktu
                        </p>

                        <p class="event-time-value">
                            {{ wedding.time }}
                        </p>
                    </div>

                </div>

                <span class="event-time-line"></span>

            </div>


            <!-- =================================================
                 VENUE
                 ================================================= -->

            <div class="event-location">

                <div class="event-location-icon">

                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />

                        <circle cx="12" cy="10" r="2.5" />
                    </svg>

                </div>


                <p class="event-location-label">
                    Tempat Acara
                </p>


                <h3 class="event-venue">
                    {{ wedding.venue }}
                </h3>


                <p class="event-address">
                    {{ wedding.address }}
                </p>

            </div>


            <!-- =================================================
                 MAP BUTTON
                 ================================================= -->

            <a :href="googleMapsUrl" target="_blank" rel="noopener noreferrer" class="event-map-button">

                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />

                    <circle cx="12" cy="10" r="2.5" />
                </svg>

                <span>
                    LIHAT LOKASI
                </span>

            </a>


            <!-- =================================================
                 CARD BOTTOM
                 ================================================= -->

            <div class="event-card-bottom">

                <span></span>

                <p>
                    Sampai jumpa di hari bahagia kami
                </p>

                <span></span>

            </div>

        </div>

    </section>
</template>


<style scoped>
/* ================================================================
   EVENT SECTION
   ================================================================ */

.event-section {

    position: relative;

    overflow: hidden;

    padding:
        120px 24px 130px;

    background:
        #211810;

    color:
        #f4ead7;

    isolation: isolate;

}


/* ================================================================
   BACKGROUND GLOW
   ================================================================ */

.event-section::before {

    content: "";

    position: absolute;

    top: 5%;

    left: 50%;

    width: 700px;

    height: 700px;

    transform:
        translateX(-50%);

    border-radius: 50%;

    background:
        radial-gradient(circle,
            rgba(226, 190, 102, .11) 0%,
            rgba(226, 190, 102, .035) 38%,
            transparent 70%);

    filter:
        blur(10px);

    pointer-events: none;

}


/* ================================================================
   ORNAMENT
   ================================================================ */

.event-orbit {

    position: absolute;

    z-index: 0;

    width:
        min(38vw, 480px);

    height:
        min(38vw, 480px);

    opacity:
        .055;

    pointer-events:
        none;

}


.event-orbit img {

    width:
        100%;

    height:
        100%;

    object-fit:
        contain;

    animation:
        eventOrbitRotate 45s linear infinite;

}


.event-orbit-left {

    left:
        -20%;

    top:
        12%;

}


.event-orbit-right {

    right:
        -20%;

    bottom:
        5%;

}


.event-orbit-right img {

    animation-direction:
        reverse;

}


@keyframes eventOrbitRotate {

    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }

}


/* ================================================================
   HEADER
   ================================================================ */

.event-header {

    position:
        relative;

    z-index:
        2;

    max-width:
        700px;

    margin:
        0 auto;

    text-align:
        center;

}


.event-eyebrow {

    margin:
        0;

    color:
        #e8cc82;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        11px;

    font-weight:
        600;

    letter-spacing:
        .38em;

    text-transform:
        uppercase;

}


.event-title {

    margin:
        18px 0 0;

    color:
        #f3dfad;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        clamp(36px, 5vw, 58px);

    font-weight:
        400;

    line-height:
        1.05;

    letter-spacing:
        -.025em;

}


.event-divider {

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        9px;

    margin:
        22px auto 0;

}


.event-divider span {

    width:
        50px;

    height:
        1px;

    background:
        linear-gradient(to right,
            transparent,
            rgba(232, 204, 130, .65));

}


.event-divider span:last-child {

    background:
        linear-gradient(to left,
            transparent,
            rgba(232, 204, 130, .65));

}


.event-divider i {

    width:
        6px;

    height:
        6px;

    border:
        1px solid #e8cc82;

    transform:
        rotate(45deg);

}


.event-description {

    max-width:
        580px;

    margin:
        25px auto 0;

    color:
        rgba(244, 234, 215, .62);

    font-size:
        14px;

    line-height:
        1.9;

}


/* ================================================================
   CARD
   ================================================================ */

.event-card {

    position:
        relative;

    z-index:
        2;

    width:
        min(100%, 720px);

    margin:
        65px auto 0;

    padding:
        55px 65px 48px;

    text-align:
        center;

    background:
        linear-gradient(145deg,
            rgba(255, 250, 238, .095),
            rgba(255, 250, 238, .035));

    border:
        1px solid rgba(232, 204, 130, .28);

    box-shadow:
        0 35px 80px rgba(0, 0, 0, .30),
        inset 0 1px 0 rgba(255, 255, 255, .07);

    backdrop-filter:
        blur(14px);

    -webkit-backdrop-filter:
        blur(14px);

}


/* ================================================================
   CARD INNER BORDER
   ================================================================ */

.event-card::before {

    content:
        "";

    position:
        absolute;

    inset:
        8px;

    border:
        1px solid rgba(232, 204, 130, .09);

    pointer-events:
        none;

}


/* ================================================================
   CORNERS
   ================================================================ */

.corner {

    position:
        absolute;

    width:
        25px;

    height:
        25px;

    border-color:
        rgba(232, 204, 130, .55);

}


.corner-tl {

    top:
        18px;

    left:
        18px;

    border-top:
        1px solid;

    border-left:
        1px solid;

}


.corner-tr {

    top:
        18px;

    right:
        18px;

    border-top:
        1px solid;

    border-right:
        1px solid;

}


.corner-bl {

    bottom:
        18px;

    left:
        18px;

    border-bottom:
        1px solid;

    border-left:
        1px solid;

}


.corner-br {

    right:
        18px;

    bottom:
        18px;

    border-bottom:
        1px solid;

    border-right:
        1px solid;

}


/* ================================================================
   CARD TOP
   ================================================================ */

.event-card-top {

    position:
        relative;

}


.event-small-label {

    color:
        rgba(232, 204, 130, .72);

    font-size:
        9px;

    font-weight:
        600;

    letter-spacing:
        .32em;

}


.event-card-ornament {

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        9px;

    margin:
        17px 0 0;

}


.event-card-ornament span {

    width:
        55px;

    height:
        1px;

    background:
        linear-gradient(to right,
            transparent,
            rgba(232, 204, 130, .35));

}


.event-card-ornament span:last-child {

    background:
        linear-gradient(to left,
            transparent,
            rgba(232, 204, 130, .35));

}


.event-card-ornament i {

    color:
        #e8cc82;

    font-size:
        10px;

    font-style:
        normal;

}


/* ================================================================
   DATE
   ================================================================ */

.event-date {

    margin:
        35px 0 0;

}


.event-day {

    margin:
        0;

    color:
        rgba(244, 234, 215, .65);

    font-family:
        Georgia,
        serif;

    font-size:
        13px;

    letter-spacing:
        .25em;

    text-transform:
        uppercase;

}


.event-date-number {

    margin:
        10px 0 0;

    color:
        #f2d991;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        clamp(28px, 4vw, 40px);

    font-weight:
        400;

}


/* ================================================================
   TIME
   ================================================================ */

.event-time {

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        20px;

    margin:
        30px auto 0;

}


.event-time-line {

    width:
        70px;

    height:
        1px;

    background:
        linear-gradient(to right,
            transparent,
            rgba(232, 204, 130, .32));

}


.event-time-line:last-child {

    background:
        linear-gradient(to left,
            transparent,
            rgba(232, 204, 130, .32));

}


.event-time-content {

    display:
        flex;

    align-items:
        center;

    gap:
        11px;

}


.event-icon {

    width:
        20px;

    height:
        20px;

    color:
        #e8cc82;

}


.event-time-label {

    margin:
        0;

    color:
        rgba(244, 234, 215, .45);

    font-size:
        8px;

    letter-spacing:
        .2em;

    text-align:
        left;

    text-transform:
        uppercase;

}


.event-time-value {

    margin:
        3px 0 0;

    color:
        #f3dfad;

    font-family:
        Georgia,
        serif;

    font-size:
        15px;

}


/* ================================================================
   LOCATION
   ================================================================ */

.event-location {

    margin:
        42px auto 0;

    padding:
        30px 20px;

    border-top:
        1px solid rgba(232, 204, 130, .12);

    border-bottom:
        1px solid rgba(232, 204, 130, .12);

}


.event-location-icon {

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    width:
        34px;

    height:
        34px;

    margin:
        0 auto 13px;

    border:
        1px solid rgba(232, 204, 130, .35);

    border-radius:
        50%;

    color:
        #e8cc82;

}


.event-location-icon svg {

    width:
        17px;

    height:
        17px;

}


.event-location-label {

    margin:
        0;

    color:
        rgba(244, 234, 215, .48);

    font-size:
        9px;

    letter-spacing:
        .25em;

    text-transform:
        uppercase;

}


.event-venue {

    margin:
        9px 0 0;

    color:
        #f1d993;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        clamp(22px, 3vw, 30px);

    font-weight:
        400;

}


.event-address {

    max-width:
        500px;

    margin:
        8px auto 0;

    color:
        rgba(244, 234, 215, .58);

    font-size:
        12px;

    line-height:
        1.7;

}


/* ================================================================
   MAP BUTTON
   ================================================================ */

.event-map-button {

    display:
        inline-flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        9px;

    min-width:
        175px;

    margin:
        30px auto 0;

    padding:
        11px 23px;

    border:
        1px solid rgba(232, 204, 130, .55);

    border-radius:
        999px;

    background:
        rgba(232, 204, 130, .07);

    color:
        #e8cc82;

    font-size:
        9px;

    font-weight:
        600;

    letter-spacing:
        .2em;

    text-decoration:
        none;

    transition:
        all .3s ease;

}


.event-map-button svg {

    width:
        15px;

    height:
        15px;

}


.event-map-button:hover {

    transform:
        translateY(-2px);

    background:
        rgba(232, 204, 130, .13);

    border-color:
        #e8cc82;

    box-shadow:
        0 8px 25px rgba(0, 0, 0, .22);

}


/* ================================================================
   CARD BOTTOM
   ================================================================ */

.event-card-bottom {

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        12px;

    margin:
        38px 0 0;

}


.event-card-bottom span {

    width:
        35px;

    height:
        1px;

    background:
        rgba(232, 204, 130, .25);

}


.event-card-bottom p {

    margin:
        0;

    color:
        rgba(244, 234, 215, .40);

    font-family:
        Georgia,
        serif;

    font-size:
        10px;

    font-style:
        italic;

}


/* ================================================================
   MOBILE
   ================================================================ */

@media (max-width: 767px) {

    .event-section {

        padding:
            85px 18px 95px;

    }


    .event-orbit {

        width:
            90vw;

        height:
            90vw;

        opacity:
            .045;

    }


    .event-orbit-left {

        left:
            -55%;

        top:
            15%;

    }


    .event-orbit-right {

        right:
            -55%;

        bottom:
            8%;

    }


    .event-eyebrow {

        font-size:
            9px;

        letter-spacing:
            .28em;

    }


    .event-title {

        margin-top:
            14px;

        font-size:
            34px;

    }


    .event-divider {

        margin-top:
            18px;

    }


    .event-divider span {

        width:
            35px;

    }


    .event-description {

        margin-top:
            20px;

        font-size:
            12px;

        line-height:
            1.8;

    }


    /* ============================================================
       CARD
       ============================================================ */

    .event-card {

        margin-top:
            48px;

        padding:
            42px 24px 38px;

    }


    .corner {

        width:
            20px;

        height:
            20px;

    }


    .corner-tl {

        top:
            14px;

        left:
            14px;

    }


    .corner-tr {

        top:
            14px;

        right:
            14px;

    }


    .corner-bl {

        bottom:
            14px;

        left:
            14px;

    }


    .corner-br {

        right:
            14px;

        bottom:
            14px;

    }


    .event-small-label {

        font-size:
            7px;

        letter-spacing:
            .25em;

    }


    .event-card-ornament span {

        width:
            35px;

    }


    .event-date {

        margin-top:
            30px;

    }


    .event-day {

        font-size:
            10px;

        letter-spacing:
            .2em;

    }


    .event-date-number {

        font-size:
            28px;

    }


    /* ============================================================
       TIME
       ============================================================ */

    .event-time {

        gap:
            10px;

        margin-top:
            25px;

    }


    .event-time-line {

        width:
            35px;

    }


    .event-time-content {

        gap:
            8px;

    }


    .event-icon {

        width:
            17px;

        height:
            17px;

    }


    .event-time-value {

        font-size:
            13px;

    }


    /* ============================================================
       LOCATION
       ============================================================ */

    .event-location {

        margin-top:
            32px;

        padding:
            25px 10px;

    }


    .event-location-label {

        font-size:
            8px;

    }


    .event-venue {

        font-size:
            23px;

    }


    .event-address {

        font-size:
            11px;

        line-height:
            1.65;

    }


    /* ============================================================
       MAP
       ============================================================ */

    .event-map-button {

        min-width:
            160px;

        margin-top:
            25px;

        padding:
            10px 20px;

        font-size:
            8px;

    }


    .event-card-bottom {

        margin-top:
            30px;

    }


    .event-card-bottom p {

        font-size:
            9px;

    }

}


/* ================================================================
   SMALL MOBILE
   ================================================================ */

@media (max-width: 380px) {

    .event-section {

        padding:
            75px 15px 85px;

    }


    .event-title {

        font-size:
            30px;

    }


    .event-description {

        font-size:
            11px;

    }


    .event-card {

        padding:
            38px 18px 34px;

    }


    .event-venue {

        font-size:
            21px;

    }


    .event-card-bottom span {

        width:
            22px;

    }

}


/* ================================================================
   REDUCE MOTION
   ================================================================ */

@media (prefers-reduced-motion: reduce) {

    .event-orbit img {

        animation:
            none;

    }

}
</style>