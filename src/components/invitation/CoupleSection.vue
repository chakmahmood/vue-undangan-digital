<script setup lang="ts">
defineProps<{
    invitation: any
}>()
</script>

<template>
    <section class="couple-section">

        <!-- =====================================================
             HEADER
             ===================================================== -->

        <div class="couple-header">

            <p class="couple-eyebrow">
                Mempelai
            </p>

            <h2 class="couple-title">
                Dua Hati, Satu Janji
            </h2>

            <p class="couple-description">
                Dua hati dipertemukan dalam cinta, dan bersama
                melangkah menuju kehidupan yang penuh kebahagiaan.
            </p>

        </div>


        <!-- =====================================================
             COUPLE
             ===================================================== -->

        <div class="couple-grid">


            <!-- =================================================
                 GROOM
                 ================================================= -->

            <article class="couple-person couple-groom">

                <!-- PHOTO -->

                <div class="couple-photo-wrapper">

                    <!-- Rotating Ornament -->
                    <div class="couple-photo-ring"></div>

                    <!-- Photo -->
                    <div class="couple-photo">

                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800"
                            :alt="invitation.groom.fullName" />

                    </div>

                </div>


                <p class="couple-role">
                    Mempelai Pria
                </p>


                <h3 class="couple-name">
                    {{ invitation.groom.fullName }}
                </h3>


                <div class="couple-divider">

                    <span></span>

                    <i></i>

                    <span></span>

                </div>


                <p class="couple-parent">
                    Putra dari
                </p>


                <p class="couple-parents-name">

                    Bapak Saijo

                    <span>&amp;</span>

                    Ibu Mintik

                </p>

            </article>



            <!-- =================================================
                 CENTER SYMBOL
                 ================================================= -->

            <div class="couple-symbol">

                <span class="symbol-line"></span>

                <span class="symbol-heart">
                    &amp;
                </span>

                <span class="symbol-line"></span>

            </div>



            <!-- =================================================
                 BRIDE
                 ================================================= -->

            <article class="couple-person couple-bride">

                <!-- PHOTO -->

                <div class="couple-photo-wrapper">

                    <!-- Rotating Ornament -->
                    <div class="couple-photo-ring"></div>

                    <!-- Photo -->
                    <div class="couple-photo">

                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800"
                            :alt="invitation.bride.fullName" />

                    </div>

                </div>


                <p class="couple-role">
                    Mempelai Wanita
                </p>


                <h3 class="couple-name">
                    {{ invitation.bride.fullName }}
                </h3>


                <div class="couple-divider">

                    <span></span>

                    <i></i>

                    <span></span>

                </div>


                <p class="couple-parent">
                    Putri dari
                </p>


                <p class="couple-parents-name">

                    Bapak Slamet By

                    <span>&amp;</span>

                    Ibu Kartini

                </p>

            </article>

        </div>

    </section>
</template>


<style scoped>
/* ================================================================
   COUPLE SECTION
   ================================================================ */

.couple-section {

    position: relative;

    overflow: hidden;

    padding:
        110px 24px 120px;

    background:
        #faf8f5;

    color:
        #30271f;

}


/* ================================================================
   BACKGROUND GLOW
   ================================================================ */

.couple-section::before {

    content: "";

    position: absolute;

    top: -180px;

    left: 50%;

    width: 520px;

    height: 520px;

    transform:
        translateX(-50%);

    border-radius: 50%;

    background:
        radial-gradient(circle,
            rgba(221, 187, 106, .10) 0%,
            rgba(221, 187, 106, .035) 42%,
            transparent 72%);

    pointer-events: none;

}


/* ================================================================
   HEADER
   ================================================================ */

.couple-header {

    position:
        relative;

    z-index:
        2;

    max-width:
        720px;

    margin:
        0 auto;

    text-align:
        center;

}


.couple-eyebrow {

    margin:
        0;

    color:
        #b18b45;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        12px;

    font-weight:
        600;

    letter-spacing:
        .35em;

    text-transform:
        uppercase;

}


.couple-title {

    margin:
        18px 0 0;

    color:
        #30271f;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        clamp(34px, 5vw, 58px);

    font-weight:
        400;

    line-height:
        1.05;

    letter-spacing:
        -.025em;

}


.couple-description {

    max-width:
        600px;

    margin:
        24px auto 0;

    color:
        #80766c;

    font-size:
        14px;

    line-height:
        1.9;

}


/* ================================================================
   COUPLE GRID
   ================================================================ */

.couple-grid {

    position:
        relative;

    z-index:
        2;

    max-width:
        1050px;

    margin:
        75px auto 0;

    display:
        grid;

    grid-template-columns:
        1fr auto 1fr;

    align-items:
        center;

    gap:
        55px;

}


/* ================================================================
   PERSON
   ================================================================ */

.couple-person {

    text-align:
        center;

}


/* ================================================================
   PHOTO WRAPPER
   ================================================================ */

.couple-photo-wrapper {

    position:
        relative;

    width:
        clamp(180px, 20vw, 250px);

    height:
        clamp(180px, 20vw, 250px);

    margin:
        0 auto;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

}


/* ================================================================
   ROTATING ORNAMENT
     
   circle-ornament.png
     
   Berada DI BELAKANG FOTO.
     
   Hanya ornament yang berputar.
   ================================================================ */

.couple-photo-ring {

    position:
        absolute;

    inset:
        -55px;

    z-index:
        0;

    background-image:
        url('/images/circle-ornament.png');

    background-repeat:
        no-repeat;

    background-position:
        center;

    background-size:
        contain;

    opacity:
        .42;

    pointer-events:
        none;

    animation:
        coupleOrnamentRotate 50s linear infinite;

}


/* ================================================================
   ORNAMENT ROTATION
   ================================================================ */

@keyframes coupleOrnamentRotate {

    from {

        transform:
            rotate(0deg);

    }

    to {

        transform:
            rotate(360deg);

    }

}


/* ================================================================
   PHOTO
   ================================================================ */

.couple-photo {

    position:
        relative;

    z-index:
        2;

    width:
        100%;

    height:
        100%;

    overflow:
        hidden;

    border-radius:
        50%;

    background:
        #e8e0d5;

}


/* ================================================================
   PHOTO OVERLAY
   ================================================================ */

.couple-photo::after {

    content:
        "";

    position:
        absolute;

    inset:
        0;

    background:
        linear-gradient(to bottom,
            transparent 55%,
            rgba(35, 25, 17, .10));

    pointer-events:
        none;

}


/* ================================================================
   PHOTO IMAGE
   ================================================================ */

.couple-photo img {

    display:
        block;

    width:
        100%;

    height:
        100%;

    object-fit:
        cover;

    transition:
        transform .7s cubic-bezier(.22, 1, .36, 1);

}


/* ================================================================
   PHOTO HOVER
   ================================================================ */

.couple-person:hover .couple-photo img {

    transform:
        scale(1.06);

}


/* ================================================================
   ROLE
   ================================================================ */

.couple-role {

    margin:
        30px 0 0;

    color:
        #b18b45;

    font-size:
        10px;

    font-weight:
        600;

    letter-spacing:
        .28em;

    text-transform:
        uppercase;

}


/* ================================================================
   NAME
   ================================================================ */

.couple-name {

    margin:
        10px 0 0;

    color:
        #30271f;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        clamp(28px, 3.2vw, 42px);

    font-weight:
        400;

    line-height:
        1.1;

}


/* ================================================================
   DIVIDER
   ================================================================ */

.couple-divider {

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        7px;

    margin:
        18px auto 15px;

}


.couple-divider span {

    width:
        35px;

    height:
        1px;

    background:
        linear-gradient(to right,
            transparent,
            rgba(177, 139, 69, .55));

}


.couple-divider span:last-child {

    background:
        linear-gradient(to left,
            transparent,
            rgba(177, 139, 69, .55));

}


.couple-divider i {

    width:
        5px;

    height:
        5px;

    border:
        1px solid #b18b45;

    transform:
        rotate(45deg);

}


/* ================================================================
   PARENTS
   ================================================================ */

.couple-parent {

    margin:
        0;

    color:
        #948a80;

    font-size:
        11px;

    letter-spacing:
        .08em;

}


.couple-parents-name {

    margin:
        5px 0 0;

    color:
        #5f554b;

    font-size:
        13px;

    line-height:
        1.7;

}


.couple-parents-name span {

    display:
        inline-block;

    margin:
        0 5px;

    color:
        #b18b45;

    font-family:
        Georgia,
        serif;

}


/* ================================================================
   CENTER SYMBOL
   ================================================================ */

.couple-symbol {

    display:
        flex;

    flex-direction:
        column;

    align-items:
        center;

    justify-content:
        center;

    gap:
        15px;

}


.symbol-line {

    width:
        1px;

    height:
        55px;

    background:
        linear-gradient(to bottom,
            transparent,
            rgba(177, 139, 69, .45),
            transparent);

}


.symbol-heart {

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    width:
        42px;

    height:
        42px;

    border:
        1px solid rgba(177, 139, 69, .45);

    border-radius:
        50%;

    color:
        #b18b45;

    font-family:
        Georgia,
        serif;

    font-size:
        19px;

    font-style:
        italic;

}


/* ================================================================
   MOBILE
     
   Tetap:
     
   GROOM
      FOTO
      ROLE
      NAMA
      DIVIDER
      ORANG TUA
     
   &
     
   BRIDE
      FOTO
      ROLE
      NAMA
      DIVIDER
      ORANG TUA
   ================================================================ */

@media (max-width: 767px) {

    .couple-section {

        padding:
            85px 20px 95px;

    }


    .couple-eyebrow {

        font-size:
            10px;

        letter-spacing:
            .28em;

    }


    .couple-title {

        margin-top:
            14px;

        font-size:
            34px;

    }


    .couple-description {

        margin-top:
            18px;

        font-size:
            13px;

        line-height:
            1.8;

    }


    /* ============================================================
       MOBILE STACK
       ============================================================ */

    .couple-grid {

        display:
            flex;

        flex-direction:
            column;

        gap:
            0;

        margin-top:
            55px;

    }


    .couple-person {

        display:
            block;

        width:
            100%;

    }


    /* ============================================================
       GROOM PHOTO
       ============================================================ */

    .couple-groom .couple-photo-wrapper {

        order:
            initial;

    }


    /* ============================================================
       CENTER SYMBOL
       ============================================================ */

    .couple-symbol {

        display:
            flex;

        flex-direction:
            row;

        align-items:
            center;

        justify-content:
            center;

        gap:
            12px;

        width:
            100%;

        margin:
            38px 0;

    }


    .couple-symbol .symbol-line {

        width:
            55px;

        height:
            1px;

        background:
            linear-gradient(to right,
                transparent,
                rgba(177, 139, 69, .45));

    }


    .couple-symbol .symbol-line:last-child {

        background:
            linear-gradient(to left,
                transparent,
                rgba(177, 139, 69, .45));

    }


    .couple-symbol .symbol-heart {

        width:
            40px;

        height:
            40px;

        font-size:
            18px;

    }


    /* ============================================================
       PHOTO
       ============================================================ */

    .couple-photo-wrapper {

        width:
            190px;

        height:
            190px;

        margin:
            0 auto;

    }


    /* ============================================================
       ORNAMENT MOBILE
       ============================================================ */

    .couple-photo-ring {

        inset:
            -25px;

        opacity:
            .42;

        animation-duration:
            50s;

    }


    /* ============================================================
       ROLE
       ============================================================ */

    .couple-role {

        margin:
            28px 0 0;

        font-size:
            9px;

    }


    /* ============================================================
       NAME
       ============================================================ */

    .couple-name {

        margin:
            9px 0 0;

        font-size:
            30px;

    }


    /* ============================================================
       DIVIDER
       ============================================================ */

    .couple-divider {

        margin:
            15px auto 14px;

    }


    /* ============================================================
       PARENTS
       ============================================================ */

    .couple-parent {

        font-size:
            10px;

    }


    .couple-parents-name {

        font-size:
            12px;

    }

}


/* ================================================================
   SMALL MOBILE
   ================================================================ */

@media (max-width: 380px) {

    .couple-section {

        padding:
            75px 18px 85px;

    }


    .couple-title {

        font-size:
            30px;

    }


    .couple-description {

        font-size:
            12px;

    }


    .couple-grid {

        margin-top:
            45px;

    }


    .couple-photo-wrapper {

        width:
            165px;

        height:
            165px;

    }


    .couple-photo-ring {

        inset:
            -25px;

    }


    .couple-role {

        margin-top:
            25px;

    }


    .couple-name {

        font-size:
            27px;

    }


    .couple-symbol {

        margin:
            30px 0;

    }


    .couple-symbol .symbol-line {

        width:
            42px;

    }


    .couple-symbol .symbol-heart {

        width:
            36px;

        height:
            36px;

        font-size:
            16px;

    }

}


/* ================================================================
   REDUCE MOTION
   ================================================================ */

@media (prefers-reduced-motion: reduce) {

    .couple-photo-ring,
    .couple-photo img {

        animation:
            none;

        transition:
            none;

    }

}
</style>