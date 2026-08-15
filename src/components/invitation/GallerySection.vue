<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
    images: string[]
}>()


/* ================================================================
   GALLERY
   ================================================================ */

const activeImage = ref<string | null>(null)

const galleryImages = computed(() => {

    return (props.images || []).filter(Boolean)

})


function openImage(image: string) {

    activeImage.value = image

}


function closeImage() {

    activeImage.value = null

}


function handleKeydown(event: KeyboardEvent) {

    if (event.key === 'Escape') {

        closeImage()

    }

}

</script>


<template>

    <section class="gallery-section">


        <!-- =====================================================
             BACKGROUND
             ===================================================== -->

        <div class="gallery-glow"></div>


        <div class="gallery-ornament gallery-ornament-left">

            <img src="/images/circle-ornament.png" alt="" />

        </div>


        <div class="gallery-ornament gallery-ornament-right">

            <img src="/images/circle-ornament.png" alt="" />

        </div>



        <!-- =====================================================
             HEADER
             ===================================================== -->

        <div class="gallery-container">


            <header class="gallery-header">

                <p class="gallery-eyebrow">
                    Kisah Dalam Bingkai
                </p>


                <h2 class="gallery-title">
                    Momen yang
                    <span>Tak Terlupakan</span>
                </h2>


                <div class="gallery-divider">

                    <span></span>

                    <i></i>

                    <span></span>

                </div>


                <p class="gallery-description">

                    Setiap senyum, tatapan, dan kebersamaan
                    menjadi bagian dari perjalanan cinta
                    yang ingin kami kenang selamanya.

                </p>

            </header>



            <!-- =================================================
                 GALLERY
                 ================================================= -->

            <div v-if="galleryImages.length" class="gallery-grid">


                <!-- =============================================
                     MAIN IMAGE
                     ============================================= -->

                <button v-if="galleryImages[0]" class="gallery-item gallery-item-main" type="button"
                    @click="openImage(galleryImages[0])">

                    <img :src="galleryImages[0]" alt="Momen pernikahan" />


                    <div class="gallery-overlay">

                        <span class="gallery-view">

                            Lihat Foto

                        </span>

                    </div>


                    <span class="gallery-number">
                        01
                    </span>

                </button>



                <!-- =============================================
                     SECOND IMAGE
                     ============================================= -->

                <button v-if="galleryImages[1]" class="gallery-item gallery-item-second" type="button"
                    @click="openImage(galleryImages[1])">

                    <img :src="galleryImages[1]" alt="Momen pernikahan" />


                    <div class="gallery-overlay">

                        <span class="gallery-view">
                            Lihat Foto
                        </span>

                    </div>


                    <span class="gallery-number">
                        02
                    </span>

                </button>



                <!-- =============================================
                     THIRD IMAGE
                     ============================================= -->

                <button v-if="galleryImages[2]" class="gallery-item gallery-item-third" type="button"
                    @click="openImage(galleryImages[2])">

                    <img :src="galleryImages[2]" alt="Momen pernikahan" />


                    <div class="gallery-overlay">

                        <span class="gallery-view">
                            Lihat Foto
                        </span>

                    </div>


                    <span class="gallery-number">
                        03
                    </span>

                </button>



                <!-- =============================================
                     FOURTH IMAGE
                     ============================================= -->

                <button v-if="galleryImages[3]" class="gallery-item gallery-item-fourth" type="button"
                    @click="openImage(galleryImages[3])">

                    <img :src="galleryImages[3]" alt="Momen pernikahan" />


                    <div class="gallery-overlay">

                        <span class="gallery-view">
                            Lihat Foto
                        </span>

                    </div>


                    <span class="gallery-number">
                        04
                    </span>

                </button>



                <!-- =============================================
                     FIFTH IMAGE
                     ============================================= -->

                <button v-if="galleryImages[4]" class="gallery-item gallery-item-fifth" type="button"
                    @click="openImage(galleryImages[4])">

                    <img :src="galleryImages[4]" alt="Momen pernikahan" />


                    <div class="gallery-overlay">

                        <span class="gallery-view">
                            Lihat Foto
                        </span>

                    </div>


                    <span class="gallery-number">
                        05
                    </span>

                </button>



                <!-- =============================================
                     SIXTH IMAGE
                     ============================================= -->

                <button v-if="galleryImages[5]" class="gallery-item gallery-item-sixth" type="button"
                    @click="openImage(galleryImages[5])">

                    <img :src="galleryImages[5]" alt="Momen pernikahan" />


                    <div class="gallery-overlay">

                        <span class="gallery-view">
                            Lihat Foto
                        </span>

                    </div>


                    <span class="gallery-number">
                        06
                    </span>

                </button>

            </div>



            <!-- =================================================
                 EMPTY STATE
                 ================================================= -->

            <div v-else class="gallery-empty">

                <p>
                    Galeri foto akan segera hadir.
                </p>

            </div>



            <!-- =================================================
                 FOOTER QUOTE
                 ================================================= -->

            <div class="gallery-footer">

                <span class="gallery-footer-line"></span>


                <p>

                    "Cinta bukan tentang menemukan seseorang
                    yang sempurna, tetapi tentang melihat
                    kesempurnaan dalam ketidaksempurnaan."

                </p>


                <span class="gallery-footer-line"></span>

            </div>

        </div>



        <!-- =====================================================
             LIGHTBOX
             ===================================================== -->

        <Teleport to="body">

            <Transition name="lightbox">

                <div v-if="activeImage" class="gallery-lightbox" @click.self="closeImage" @keydown="handleKeydown"
                    tabindex="0">

                    <button class="lightbox-close" type="button" aria-label="Tutup foto" @click="closeImage">

                        <span></span>

                        <span></span>

                    </button>


                    <div class="lightbox-image-wrapper">

                        <img :src="activeImage" alt="Foto pernikahan" class="lightbox-image" />

                    </div>

                </div>

            </Transition>

        </Teleport>

    </section>

</template>


<style scoped>
/* ================================================================
   SECTION
   ================================================================ */

.gallery-section {

    position:
        relative;

    overflow:
        hidden;

    padding:
        125px 24px 120px;

    background:
        #211810;

    color:
        #f4ead8;

    isolation:
        isolate;

}


/* ================================================================
   GLOW
   ================================================================ */

.gallery-glow {

    position:
        absolute;

    top:
        30%;

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
            rgba(218, 180, 92, .10) 0%,
            rgba(218, 180, 92, .035) 38%,
            transparent 72%);

    filter:
        blur(25px);

    pointer-events:
        none;

}


/* ================================================================
   ORNAMENT
   ================================================================ */

.gallery-ornament {

    position:
        absolute;

    z-index:
        0;

    width:
        min(500px, 55vw);

    height:
        min(500px, 55vw);

    opacity:
        .045;

    pointer-events:
        none;

}


.gallery-ornament img {

    width:
        100%;

    height:
        100%;

    display:
        block;

    object-fit:
        contain;

}


.gallery-ornament-left {

    left:
        -240px;

    bottom:
        -140px;

    transform:
        rotate(-20deg);

}


.gallery-ornament-right {

    right:
        -240px;

    top:
        -140px;

    transform:
        rotate(160deg);

}


/* ================================================================
   CONTAINER
   ================================================================ */

.gallery-container {

    position:
        relative;

    z-index:
        2;

    max-width:
        1100px;

    margin:
        0 auto;

}


/* ================================================================
   HEADER
   ================================================================ */

.gallery-header {

    max-width:
        680px;

    margin:
        0 auto;

    text-align:
        center;

}


.gallery-eyebrow {

    margin:
        0;

    color:
        #c49b52;

    font-family:
        Georgia,
        serif;

    font-size:
        10px;

    font-weight:
        600;

    letter-spacing:
        .36em;

    text-transform:
        uppercase;

}


.gallery-title {

    margin:
        18px 0 0;

    color:
        #f3dfac;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        clamp(38px, 5.5vw, 65px);

    font-weight:
        400;

    line-height:
        1.02;

    letter-spacing:
        -.035em;

}


.gallery-title span {

    display:
        block;

    color:
        #f8eedc;

    font-style:
        italic;

}


.gallery-divider {

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        9px;

    margin:
        27px auto 0;

}


.gallery-divider span {

    width:
        65px;

    height:
        1px;

    background:
        linear-gradient(to right,
            transparent,
            rgba(220, 185, 102, .55));

}


.gallery-divider span:last-child {

    background:
        linear-gradient(to left,
            transparent,
            rgba(220, 185, 102, .55));

}


.gallery-divider i {

    width:
        6px;

    height:
        6px;

    border:
        1px solid #dcb966;

    transform:
        rotate(45deg);

}


.gallery-description {

    max-width:
        570px;

    margin:
        25px auto 0;

    color:
        rgba(244, 234, 216, .60);

    font-family:
        Georgia,
        serif;

    font-size:
        13px;

    line-height:
        1.95;

}


/* ================================================================
   GALLERY GRID
   ================================================================ */

.gallery-grid {

    display:
        grid;

    grid-template-columns:
        repeat(12, 1fr);

    grid-template-rows:
        250px 250px 250px;

    gap:
        14px;

    margin:
        75px auto 0;

}


/* ================================================================
   ITEM
   ================================================================ */

.gallery-item {

    position:
        relative;

    display:
        block;

    overflow:
        hidden;

    padding:
        0;

    border:
        1px solid rgba(222, 189, 112, .18);

    background:
        #30251c;

    cursor:
        pointer;

    appearance:
        none;

}


.gallery-item::before {

    content:
        "";

    position:
        absolute;

    inset:
        7px;

    z-index:
        2;

    border:
        1px solid rgba(255, 237, 193, .13);

    pointer-events:
        none;

    transition:
        border-color .4s ease;

}


.gallery-item img {

    display:
        block;

    width:
        100%;

    height:
        100%;

    object-fit:
        cover;

    transition:
        transform .8s cubic-bezier(.22, 1, .36, 1),
        filter .5s ease;

}


.gallery-item:hover img {

    transform:
        scale(1.07);

    filter:
        brightness(.72);

}


.gallery-item:hover::before {

    border-color:
        rgba(255, 237, 193, .35);

}


/* ================================================================
   LAYOUT
   ================================================================ */

.gallery-item-main {

    grid-column:
        1 / 7;

    grid-row:
        1 / 3;

}


.gallery-item-second {

    grid-column:
        7 / 10;

    grid-row:
        1 / 2;

}


.gallery-item-third {

    grid-column:
        10 / 13;

    grid-row:
        1 / 2;

}


.gallery-item-fourth {

    grid-column:
        7 / 10;

    grid-row:
        2 / 3;

}


.gallery-item-fifth {

    grid-column:
        10 / 13;

    grid-row:
        2 / 4;

}


.gallery-item-sixth {

    grid-column:
        1 / 7;

    grid-row:
        3 / 4;

}


/* ================================================================
   OVERLAY
   ================================================================ */

.gallery-overlay {

    position:
        absolute;

    inset:
        0;

    z-index:
        3;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    background:
        rgba(31, 23, 17, .38);

    opacity:
        0;

    transition:
        opacity .4s ease;

}


.gallery-item:hover .gallery-overlay {

    opacity:
        1;

}


.gallery-view {

    padding:
        8px 16px;

    border:
        1px solid rgba(235, 207, 145, .65);

    color:
        #f3dc9f;

    font-family:
        Georgia,
        serif;

    font-size:
        9px;

    letter-spacing:
        .18em;

    text-transform:
        uppercase;

}


/* ================================================================
   NUMBER
   ================================================================ */

.gallery-number {

    position:
        absolute;

    right:
        17px;

    bottom:
        15px;

    z-index:
        4;

    color:
        rgba(255, 237, 193, .68);

    font-family:
        Georgia,
        serif;

    font-size:
        11px;

    letter-spacing:
        .1em;

}


/* ================================================================
   EMPTY
   ================================================================ */

.gallery-empty {

    margin:
        70px auto 0;

    padding:
        70px 20px;

    border:
        1px solid rgba(222, 189, 112, .15);

    text-align:
        center;

    color:
        rgba(244, 234, 216, .45);

    font-family:
        Georgia,
        serif;

    font-style:
        italic;

}


/* ================================================================
   FOOTER
   ================================================================ */

.gallery-footer {

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        20px;

    max-width:
        800px;

    margin:
        70px auto 0;

}


.gallery-footer-line {

    flex:
        1;

    max-width:
        100px;

    height:
        1px;

    background:
        linear-gradient(to right,
            transparent,
            rgba(220, 185, 102, .3));

}


.gallery-footer-line:last-child {

    background:
        linear-gradient(to left,
            transparent,
            rgba(220, 185, 102, .3));

}


.gallery-footer p {

    max-width:
        500px;

    margin:
        0;

    color:
        rgba(244, 234, 216, .45);

    font-family:
        Georgia,
        serif;

    font-size:
        11px;

    line-height:
        1.8;

    text-align:
        center;

    font-style:
        italic;

}


/* ================================================================
   LIGHTBOX
   ================================================================ */

.gallery-lightbox {

    position:
        fixed;

    inset:
        0;

    z-index:
        9999;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    padding:
        35px;

    background:
        rgba(17, 12, 8, .94);

    backdrop-filter:
        blur(14px);

    -webkit-backdrop-filter:
        blur(14px);

}


.lightbox-image-wrapper {

    position:
        relative;

    max-width:
        min(92vw, 1100px);

    max-height:
        90vh;

}


.lightbox-image {

    display:
        block;

    max-width:
        100%;

    max-height:
        88vh;

    object-fit:
        contain;

    border:
        1px solid rgba(232, 204, 130, .35);

    box-shadow:
        0 30px 100px rgba(0, 0, 0, .55);

}


/* ================================================================
   CLOSE
   ================================================================ */

.lightbox-close {

    position:
        absolute;

    top:
        25px;

    right:
        25px;

    z-index:
        5;

    width:
        42px;

    height:
        42px;

    padding:
        0;

    border:
        1px solid rgba(232, 204, 130, .4);

    border-radius:
        50%;

    background:
        rgba(35, 25, 17, .6);

    cursor:
        pointer;

}


.lightbox-close span {

    position:
        absolute;

    top:
        50%;

    left:
        50%;

    width:
        16px;

    height:
        1px;

    background:
        #e8cc82;

}


.lightbox-close span:first-child {

    transform:
        translate(-50%, -50%) rotate(45deg);

}


.lightbox-close span:last-child {

    transform:
        translate(-50%, -50%) rotate(-45deg);

}


/* ================================================================
   LIGHTBOX ANIMATION
   ================================================================ */

.lightbox-enter-active,
.lightbox-leave-active {

    transition:
        opacity .35s ease;

}


.lightbox-enter-active .lightbox-image-wrapper,
.lightbox-leave-active .lightbox-image-wrapper {

    transition:
        transform .45s cubic-bezier(.22, 1, .36, 1);

}


.lightbox-enter-from,
.lightbox-leave-to {

    opacity:
        0;

}


.lightbox-enter-from .lightbox-image-wrapper,
.lightbox-leave-to .lightbox-image-wrapper {

    transform:
        scale(.94);

}


/* ================================================================
   MOBILE
   ================================================================ */

@media (max-width: 767px) {

    .gallery-section {

        padding:
            90px 18px 95px;

    }


    .gallery-ornament {

        width:
            350px;

        height:
            350px;

        opacity:
            .04;

    }


    .gallery-ornament-left {

        left:
            -200px;

        bottom:
            -80px;

    }


    .gallery-ornament-right {

        right:
            -200px;

        top:
            -80px;

    }


    .gallery-eyebrow {

        font-size:
            9px;

        letter-spacing:
            .28em;

    }


    .gallery-title {

        margin-top:
            15px;

        font-size:
            39px;

    }


    .gallery-description {

        margin-top:
            20px;

        font-size:
            12px;

        line-height:
            1.85;

    }


    /* ============================================================
       MOBILE GRID
       ============================================================ */

    .gallery-grid {

        grid-template-columns:
            repeat(2, 1fr);

        grid-template-rows:
            250px 180px 180px;

        gap:
            9px;

        margin-top:
            50px;

    }


    .gallery-item-main {

        grid-column:
            1 / 3;

        grid-row:
            1 / 2;

    }


    .gallery-item-second {

        grid-column:
            1 / 2;

        grid-row:
            2 / 3;

    }


    .gallery-item-third {

        grid-column:
            2 / 3;

        grid-row:
            2 / 3;

    }


    .gallery-item-fourth {

        grid-column:
            1 / 2;

        grid-row:
            3 / 4;

    }


    .gallery-item-fifth {

        grid-column:
            2 / 3;

        grid-row:
            3 / 4;

    }


    .gallery-item-sixth {

        display:
            none;

    }


    .gallery-item::before {

        inset:
            5px;

    }


    .gallery-number {

        right:
            11px;

        bottom:
            10px;

        font-size:
            8px;

    }


    .gallery-overlay {

        display:
            none;

    }


    .gallery-footer {

        margin-top:
            50px;

        gap:
            12px;

    }


    .gallery-footer-line {

        max-width:
            40px;

    }


    .gallery-footer p {

        font-size:
            9px;

    }


    .gallery-lightbox {

        padding:
            20px;

    }


    .lightbox-close {

        top:
            15px;

        right:
            15px;

        width:
            38px;

        height:
            38px;

    }

}


/* ================================================================
   SMALL MOBILE
   ================================================================ */

@media (max-width: 380px) {

    .gallery-section {

        padding:
            80px 15px 85px;

    }


    .gallery-title {

        font-size:
            34px;

    }


    .gallery-grid {

        grid-template-rows:
            220px 155px 155px;

        margin-top:
            42px;

    }


    .gallery-footer p {

        font-size:
            8px;

    }

}


/* ================================================================
   REDUCE MOTION
   ================================================================ */

@media (prefers-reduced-motion: reduce) {

    .gallery-item img {

        transition:
            none;

    }

}
</style>