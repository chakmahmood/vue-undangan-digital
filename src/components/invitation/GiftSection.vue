<script setup lang="ts">
import { ref } from 'vue'

const copied = ref<'rekening' | 'alamat' | null>(null)

const rekening = '560901006371501'
const namaRekening = 'Hadi Rahmat Prasojo'

const namaPenerima = 'Hadi Rahmat Prasojo'
const alamatPenerima =
    'Dusun Sidoharjo Desa Sumber Suko Jaya Kec. Belitang Kab. Ogan Komering Ulu Timur, Prov. Sumatra Selatan'

const copyText = async (
    text: string,
    type: 'rekening' | 'alamat'
) => {
    try {
        await navigator.clipboard.writeText(text)

        copied.value = type

        setTimeout(() => {
            copied.value = null
        }, 2000)
    } catch (error) {
        console.error('Gagal menyalin:', error)
    }
}
</script>

<template>
    <section class="gift-section">

        <!-- =====================================================
             ORNAMENT
             ===================================================== -->

        <div class="gift-ornament gift-ornament-left">
            <img src="/images/circle-ornament.png" alt="" />
        </div>

        <div class="gift-ornament gift-ornament-right">
            <img src="/images/circle-ornament.png" alt="" />
        </div>


        <!-- =====================================================
             GLOW
             ===================================================== -->

        <div class="gift-glow"></div>


        <!-- =====================================================
             CONTENT
             ===================================================== -->

        <div class="gift-container">

            <!-- =================================================
                 HEADER
                 ================================================= -->

            <header class="gift-header">

                <p class="gift-eyebrow">
                    Tanda Kasih
                </p>

                <div class="gift-divider">

                    <span></span>

                    <i></i>

                    <span></span>

                </div>

                <h2 class="gift-title">
                    Kirimkan
                    <em>Tanda Kasih</em>
                </h2>

                <p class="gift-description">
                    Doa dan kehadiran Anda merupakan hadiah
                    terindah bagi kami. Namun apabila berkenan
                    memberikan tanda kasih, dapat melalui
                    informasi berikut.
                </p>

            </header>


            <!-- =================================================
                 GIFT CARDS
                 ================================================= -->

            <div class="gift-cards">


                <!-- =================================================
                     ATM CARD
                     ================================================= -->

                <article class="bank-card">

                    <!-- Card glow -->

                    <div class="bank-card-glow"></div>


                    <!-- Card top -->

                    <div class="bank-card-top">

                        <div class="bank-chip">

                            <span></span>
                            <span></span>
                            <span></span>

                        </div>

                        <div class="bank-logo">

                            <strong>
                                BRI
                            </strong>

                            <small>
                                BANK RAKYAT INDONESIA
                            </small>

                        </div>

                    </div>


                    <!-- Card number -->

                    <div class="bank-number">
                        {{ rekening }}
                    </div>


                    <!-- Card bottom -->

                    <div class="bank-card-bottom">

                        <div>

                            <small>
                                NAMA PEMILIK REKENING
                            </small>

                            <strong>
                                {{ namaRekening }}
                            </strong>

                        </div>

                        <div class="bank-type">
                            BRI
                        </div>

                    </div>


                    <!-- Copy -->

                    <button type="button" class="copy-button" @click="copyText(rekening, 'rekening')">

                        <span>
                            {{ copied === 'rekening'
                                ? 'TERSALIN ✓'
                                : 'SALIN NOMOR REKENING'
                            }}
                        </span>

                        <svg v-if="copied !== 'rekening'" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="1.5">
                            <rect x="8" y="8" width="11" height="11" rx="2" />

                            <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                        </svg>

                    </button>

                </article>


                <!-- =================================================
                     SEND GIFT CARD
                     ================================================= -->

                <article class="gift-address-card">

                    <!-- Decorative top -->

                    <div class="address-card-decoration">

                        <span></span>

                        <i>✦</i>

                        <span></span>

                    </div>


                    <p class="address-eyebrow">
                        Kirim Hadiah
                    </p>


                    <h3 class="address-title">
                        Hadiah &amp; Perhatian
                    </h3>


                    <div class="address-content">

                        <div class="address-icon">

                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
                                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />

                                <circle cx="12" cy="10" r="2.5" />
                            </svg>

                        </div>


                        <div class="address-text">

                            <strong>
                                {{ namaPenerima }}
                            </strong>

                            <p>
                                {{ alamatPenerima }}
                            </p>

                        </div>

                    </div>


                    <!-- Copy Address -->

                    <button type="button" class="address-copy-button" @click="copyText(alamatPenerima, 'alamat')">

                        <svg v-if="copied !== 'alamat'" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="1.5">
                            <rect x="8" y="8" width="11" height="11" rx="2" />

                            <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                        </svg>

                        <span>
                            {{ copied === 'alamat'
                                ? 'ALAMAT TERSALIN ✓'
                                : 'SALIN ALAMAT'
                            }}
                        </span>

                    </button>

                </article>

            </div>


            <!-- =================================================
                 FOOTER
                 ================================================= -->

            <p class="gift-footer">
                Dengan penuh rasa syukur, setiap tanda kasih
                yang diberikan akan menjadi kenangan indah
                bagi perjalanan kami.
            </p>

        </div>

    </section>
</template>


<style scoped>
/* ================================================================
   GIFT SECTION
   ================================================================ */

.gift-section {

    position:
        relative;

    overflow:
        hidden;

    padding:
        115px 24px 120px;

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

.gift-glow {

    position:
        absolute;

    top:
        12%;

    left:
        50%;

    width:
        min(90vw, 900px);

    height:
        min(90vw, 900px);

    transform:
        translateX(-50%);

    border-radius:
        50%;

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

.gift-ornament {

    position:
        absolute;

    z-index:
        0;

    width:
        520px;

    height:
        520px;

    opacity:
        .045;

    pointer-events:
        none;

}


.gift-ornament img {

    display:
        block;

    width:
        100%;

    height:
        100%;

    object-fit:
        contain;

}


.gift-ornament-left {

    left:
        -285px;

    bottom:
        -170px;

    transform:
        rotate(-18deg);

}


.gift-ornament-right {

    right:
        -285px;

    top:
        -170px;

    transform:
        rotate(162deg);

}


/* ================================================================
   CONTAINER
   ================================================================ */

.gift-container {

    position:
        relative;

    z-index:
        2;

    max-width:
        850px;

    margin:
        0 auto;

}


/* ================================================================
   HEADER
   ================================================================ */

.gift-header {

    max-width:
        620px;

    margin:
        0 auto;

    text-align:
        center;

}


.gift-eyebrow {

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


.gift-divider {

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        9px;

    margin-top:
        19px;

}


.gift-divider span {

    width:
        42px;

    height:
        1px;

    background:
        linear-gradient(to right,
            transparent,
            rgba(216, 181, 107, .65));

}


.gift-divider span:last-child {

    background:
        linear-gradient(to left,
            transparent,
            rgba(216, 181, 107, .65));

}


.gift-divider i {

    width:
        6px;

    height:
        6px;

    border:
        1px solid #d8b56b;

    transform:
        rotate(45deg);

}


.gift-title {

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
        1;

    letter-spacing:
        -.035em;

}


.gift-title em {

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


.gift-description {

    max-width:
        540px;

    margin:
        24px auto 0;

    color:
        rgba(244, 234, 216, .64);

    font-size:
        13px;

    line-height:
        1.9;

}


/* ================================================================
   CARDS
   ================================================================ */

.gift-cards {

    display:
        grid;

    grid-template-columns:
        1fr 1fr;

    gap:
        28px;

    margin:
        58px auto 0;

}


/* ================================================================
   BANK CARD
   ================================================================ */

.bank-card {

    position:
        relative;

    min-height:
        285px;

    padding:
        30px;

    overflow:
        hidden;

    border:
        1px solid rgba(216, 181, 107, .42);

    border-radius:
        18px;

    background:
        linear-gradient(135deg,
            #3a2b1d,
            #211810 55%,
            #3b2b1b);

    box-shadow:
        0 25px 60px rgba(0, 0, 0, .35),
        inset 0 1px 0 rgba(255, 255, 255, .08);

}


/* Card shine */

.bank-card::before {

    content:
        "";

    position:
        absolute;

    top:
        -80px;

    right:
        -100px;

    width:
        280px;

    height:
        280px;

    border-radius:
        50%;

    border:
        1px solid rgba(216, 181, 107, .14);

    box-shadow:
        0 0 0 35px rgba(216, 181, 107, .025),
        0 0 0 70px rgba(216, 181, 107, .018);

}


.bank-card-glow {

    position:
        absolute;

    top:
        0;

    right:
        0;

    width:
        60%;

    height:
        100%;

    background:
        linear-gradient(120deg,
            transparent,
            rgba(216, 181, 107, .06));

    pointer-events:
        none;

}


/* ================================================================
   BANK CARD TOP
   ================================================================ */

.bank-card-top {

    position:
        relative;

    z-index:
        2;

    display:
        flex;

    align-items:
        flex-start;

    justify-content:
        space-between;

}


.bank-chip {

    position:
        relative;

    width:
        42px;

    height:
        31px;

    overflow:
        hidden;

    border:
        1px solid rgba(231, 204, 133, .6);

    border-radius:
        6px;

    background:
        linear-gradient(135deg,
            rgba(231, 204, 133, .4),
            rgba(231, 204, 133, .12));

}


.bank-chip::before,
.bank-chip::after {

    content:
        "";

    position:
        absolute;

    background:
        rgba(231, 204, 133, .45);

}


.bank-chip::before {

    top:
        50%;

    left:
        0;

    width:
        100%;

    height:
        1px;

}


.bank-chip::after {

    top:
        0;

    left:
        50%;

    width:
        1px;

    height:
        100%;

}


.bank-chip span {

    position:
        absolute;

    top:
        0;

    bottom:
        0;

    width:
        1px;

    background:
        rgba(231, 204, 133, .25);

}


.bank-chip span:nth-child(1) {

    left:
        25%;

}


.bank-chip span:nth-child(2) {

    left:
        75%;

}


.bank-chip span:nth-child(3) {

    display:
        none;

}


.bank-logo {

    display:
        flex;

    flex-direction:
        column;

    align-items:
        flex-end;

}


.bank-logo strong {

    color:
        #f1d99b;

    font-family:
        Arial,
        sans-serif;

    font-size:
        25px;

    font-weight:
        800;

    letter-spacing:
        -.08em;

}


.bank-logo small {

    margin-top:
        2px;

    color:
        rgba(241, 217, 155, .55);

    font-family:
        Arial,
        sans-serif;

    font-size:
        5px;

    letter-spacing:
        .08em;

}


/* ================================================================
   BANK NUMBER
   ================================================================ */

.bank-number {

    position:
        relative;

    z-index:
        2;

    margin:
        43px 0 28px;

    color:
        #f3dfaa;

    font-family:
        "Courier New",
        monospace;

    font-size:
        clamp(19px, 2.5vw, 25px);

    letter-spacing:
        .12em;

    text-shadow:
        0 2px 8px rgba(0, 0, 0, .35);

}


/* ================================================================
   BANK BOTTOM
   ================================================================ */

.bank-card-bottom {

    position:
        relative;

    z-index:
        2;

    display:
        flex;

    align-items:
        flex-end;

    justify-content:
        space-between;

}


.bank-card-bottom small {

    display:
        block;

    margin-bottom:
        6px;

    color:
        rgba(244, 234, 216, .38);

    font-size:
        7px;

    letter-spacing:
        .16em;

}


.bank-card-bottom strong {

    color:
        #e9d5a4;

    font-family:
        Georgia,
        serif;

    font-size:
        12px;

    font-weight:
        400;

    text-transform:
        uppercase;

}


.bank-type {

    color:
        rgba(216, 181, 107, .35);

    font-family:
        Georgia,
        serif;

    font-size:
        13px;

    letter-spacing:
        .2em;

}


/* ================================================================
   COPY BUTTON
   ================================================================ */

.copy-button {

    position:
        relative;

    z-index:
        5;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        8px;

    width:
        100%;

    min-height:
        42px;

    margin-top:
        25px;

    border:
        1px solid rgba(216, 181, 107, .45);

    border-radius:
        999px;

    background:
        rgba(216, 181, 107, .07);

    color:
        #d8b56b;

    font-size:
        8px;

    font-weight:
        600;

    letter-spacing:
        .18em;

    cursor:
        pointer;

    transition:
        .3s ease;

}


.copy-button svg {

    width:
        14px;

    height:
        14px;

}


.copy-button:hover {

    background:
        rgba(216, 181, 107, .14);

    border-color:
        #d8b56b;

    transform:
        translateY(-1px);

}


/* ================================================================
   ADDRESS CARD
   ================================================================ */

.gift-address-card {

    position:
        relative;

    padding:
        38px 35px;

    border:
        1px solid rgba(216, 181, 107, .25);

    background:
        linear-gradient(145deg,
            rgba(255, 255, 255, .07),
            rgba(255, 255, 255, .025));

    box-shadow:
        0 25px 60px rgba(0, 0, 0, .28),
        inset 0 1px 0 rgba(255, 255, 255, .05);

    backdrop-filter:
        blur(14px);

    -webkit-backdrop-filter:
        blur(14px);

}


/* ================================================================
   ADDRESS DECORATION
   ================================================================ */

.address-card-decoration {

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        10px;

    margin-bottom:
        22px;

}


.address-card-decoration span {

    width:
        45px;

    height:
        1px;

    background:
        linear-gradient(to right,
            transparent,
            rgba(216, 181, 107, .45));

}


.address-card-decoration span:last-child {

    background:
        linear-gradient(to left,
            transparent,
            rgba(216, 181, 107, .45));

}


.address-card-decoration i {

    color:
        #d8b56b;

    font-size:
        8px;

}


/* ================================================================
   ADDRESS HEADER
   ================================================================ */

.address-eyebrow {

    margin:
        0;

    color:
        #d8b56b;

    font-size:
        9px;

    font-weight:
        600;

    letter-spacing:
        .3em;

    text-align:
        center;

    text-transform:
        uppercase;

}


.address-title {

    margin:
        10px 0 0;

    color:
        #f1d99b;

    font-family:
        Georgia,
        serif;

    font-size:
        27px;

    font-weight:
        400;

    text-align:
        center;

}


/* ================================================================
   ADDRESS CONTENT
   ================================================================ */

.address-content {

    display:
        flex;

    align-items:
        flex-start;

    gap:
        18px;

    margin-top:
        35px;

    padding:
        20px;

    border:
        1px solid rgba(216, 181, 107, .12);

    background:
        rgba(0, 0, 0, .10);

}


.address-icon {

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    width:
        38px;

    height:
        38px;

    flex-shrink:
        0;

    border:
        1px solid rgba(216, 181, 107, .32);

    border-radius:
        50%;

    color:
        #d8b56b;

}


.address-icon svg {

    width:
        17px;

    height:
        17px;

}


.address-text strong {

    display:
        block;

    color:
        #eee0c3;

    font-family:
        Georgia,
        serif;

    font-size:
        14px;

    font-weight:
        400;

}


.address-text p {

    margin:
        7px 0 0;

    color:
        rgba(244, 234, 216, .52);

    font-size:
        11px;

    line-height:
        1.8;

}


/* ================================================================
   ADDRESS BUTTON
   ================================================================ */

.address-copy-button {

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        8px;

    width:
        100%;

    min-height:
        42px;

    margin-top:
        20px;

    border:
        1px solid rgba(216, 181, 107, .38);

    background:
        transparent;

    color:
        #d8b56b;

    font-size:
        8px;

    font-weight:
        600;

    letter-spacing:
        .18em;

    cursor:
        pointer;

    transition:
        .3s ease;

}


.address-copy-button svg {

    width:
        14px;

    height:
        14px;

}


.address-copy-button:hover {

    border-color:
        #d8b56b;

    background:
        rgba(216, 181, 107, .08);

    transform:
        translateY(-1px);

}


/* ================================================================
   FOOTER
   ================================================================ */

.gift-footer {

    max-width:
        520px;

    margin:
        35px auto 0;

    color:
        rgba(244, 234, 216, .38);

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

    .gift-section {

        padding:
            85px 18px 90px;

    }


    .gift-ornament {

        width:
            380px;

        height:
            380px;

    }


    .gift-ornament-left {

        left:
            -245px;

        bottom:
            -110px;

    }


    .gift-ornament-right {

        right:
            -245px;

        top:
            -110px;

    }


    .gift-eyebrow {

        font-size:
            9px;

    }


    .gift-title {

        font-size:
            38px;

    }


    .gift-description {

        font-size:
            12px;

        line-height:
            1.8;

    }


    .gift-cards {

        grid-template-columns:
            1fr;

        gap:
            22px;

        margin-top:
            42px;

    }


    .bank-card {

        min-height:
            260px;

        padding:
            25px;

        border-radius:
            16px;

    }


    .bank-number {

        margin:
            38px 0 25px;

        font-size:
            18px;

    }


    .gift-address-card {

        padding:
            32px 22px;

    }


    .address-title {

        font-size:
            25px;

    }


    .address-content {

        gap:
            13px;

        padding:
            16px;

    }


    .address-text p {

        font-size:
            10px;

    }


    .gift-footer {

        font-size:
            11px;

    }

}


/* ================================================================
   SMALL MOBILE
   ================================================================ */

@media (max-width: 380px) {

    .gift-section {

        padding:
            75px 15px 80px;

    }


    .gift-title {

        font-size:
            34px;

    }


    .bank-card {

        padding:
            22px;

    }


    .bank-number {

        font-size:
            16px;

        letter-spacing:
            .08em;

    }


    .gift-address-card {

        padding:
            28px 18px;

    }


    .address-title {

        font-size:
            23px;

    }

}


/* ================================================================
   REDUCE MOTION
   ================================================================ */

@media (prefers-reduced-motion: reduce) {

    .copy-button,
    .address-copy-button {

        transition:
            none;

    }

}
</style>