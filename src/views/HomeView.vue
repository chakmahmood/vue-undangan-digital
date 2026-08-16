<script setup lang="ts">
const whatsappNumber = '6285602871162'

const whatsappMessage = encodeURIComponent(
    'Halo, saya tertarik membuat undangan digital. Bisa minta informasi paket dan demonya?'
)

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

const eventTypes = [
    {
        icon: '💍',
        title: 'Pernikahan',
        description: 'Undangan pernikahan elegan dan personal.',
    },
    {
        icon: '🎉',
        title: 'Ulang Tahun',
        description: 'Rayakan momen spesial bersama orang tersayang.',
    },
    {
        icon: '👶',
        title: 'Aqiqah & Khitanan',
        description: 'Bagikan kabar bahagia dengan cara yang praktis.',
    },
    {
        icon: '🎓',
        title: 'Wisuda',
        description: 'Abadikan pencapaian dengan undangan digital.',
    },
    {
        icon: '🏢',
        title: 'Acara & Gathering',
        description: 'Cocok untuk gathering, reuni, dan acara komunitas.',
    },
    {
        icon: '✨',
        title: 'Acara Lainnya',
        description: 'Butuh konsep khusus? Kami siap membantu.',
    },
]

const features = [
    {
        number: '01',
        title: 'Desain Premium',
        description:
            'Tampilan profesional yang dirancang agar acara Anda terlihat lebih istimewa.',
    },
    {
        number: '02',
        title: 'Mudah Dibagikan',
        description:
            'Cukup kirim satu link melalui WhatsApp, Instagram, atau media sosial lainnya.',
    },
    {
        number: '03',
        title: 'RSVP & Ucapan',
        description:
            'Tamu dapat melakukan konfirmasi kehadiran dan mengirimkan ucapan secara langsung.',
    },
    {
        number: '04',
        title: 'Personal & Fleksibel',
        description:
            'Nama tamu, detail acara, galeri, musik, lokasi, hingga informasi lainnya.',
    },
]

const steps = [
    {
        number: '01',
        title: 'Pilih Konsep',
        description: 'Tentukan gaya dan konsep undangan yang Anda inginkan.',
    },
    {
        number: '02',
        title: 'Kirim Data',
        description: 'Kirim detail acara dan data yang perlu ditampilkan.',
    },
    {
        number: '03',
        title: 'Kami Siapkan',
        description: 'Undangan dipersiapkan dengan tampilan yang profesional.',
    },
    {
        number: '04',
        title: 'Sebarkan',
        description: 'Bagikan link undangan kepada seluruh tamu Anda.',
    },
]
</script>

<template>
    <main class="home-page">

        <!-- =====================================================
             NAVBAR
             ===================================================== -->

        <nav class="home-navbar">

            <div class="home-navbar-inner">

                <a href="#" class="brand">
                    <span class="brand-mark">✦</span>

                    <span class="brand-name">
                        Invite<span>ly</span>
                    </span>
                </a>

                <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="nav-cta">
                    Konsultasi via WhatsApp
                </a>

            </div>

        </nav>


        <!-- =====================================================
             HERO
             ===================================================== -->

        <section class="hero-section">

            <div class="hero-glow hero-glow-one"></div>
            <div class="hero-glow hero-glow-two"></div>

            <div class="hero-decoration hero-decoration-one">
                ✦
            </div>

            <div class="hero-decoration hero-decoration-two">
                ❦
            </div>


            <div class="hero-container">

                <div class="hero-content">

                    <div class="hero-badge">
                        <span></span>
                        UNDANGAN DIGITAL PREMIUM
                    </div>

                    <h1 class="hero-title">

                        Buat Momen Spesial
                        <em>Lebih Berkesan.</em>

                    </h1>

                    <p class="hero-description">

                        Undangan digital elegan untuk pernikahan,
                        ulang tahun, aqiqah, wisuda, gathering,
                        dan berbagai acara spesial lainnya.

                    </p>


                    <div class="hero-actions">

                        <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="primary-button">

                            <span class="wa-icon">

                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                    <path
                                        d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4.1-1.05L4 20l1.1-4.2A8.4 8.4 0 1 1 21 11.5Z" />

                                    <path
                                        d="M8.5 8.5c.3-.4.6-.4.9-.1l1 1.2c.2.3.2.5 0 .8l-.4.5c.6 1.1 1.5 2 2.6 2.6l.5-.4c.3-.2.5-.2.8 0l1.2 1c.3.3.3.6-.1.9-.5.5-1.2.7-1.8.5-2.2-.7-4.2-2.7-4.9-4.9-.2-.6 0-1.3.5-1.8Z" />
                                </svg>

                            </span>

                            <span>
                                Buat Undangan Sekarang
                            </span>

                            <span class="button-arrow">
                                →
                            </span>

                        </a>

                    </div>


                    <div class="hero-trust">

                        <div class="trust-item">
                            <span>✓</span>
                            Tanpa aplikasi
                        </div>

                        <div class="trust-item">
                            <span>✓</span>
                            Mudah dibagikan
                        </div>

                        <div class="trust-item">
                            <span>✓</span>
                            Tampilan premium
                        </div>

                    </div>

                </div>


                <!-- HERO VISUAL -->

                <div class="hero-visual">

                    <div class="visual-back-card"></div>

                    <div class="invitation-preview">

                        <div class="preview-top">
                            <span>THE WEDDING</span>
                            <i>✦</i>
                            <span>RECEPTION</span>
                        </div>

                        <div class="preview-image">

                            <img src="/images/cover-mobile.jpg" alt="Contoh undangan digital" />

                            <div class="preview-overlay"></div>

                            <div class="preview-content">

                                <small>
                                    THE WEDDING OF
                                </small>

                                <h2>
                                    Diyan
                                    <span>&</span>
                                    Hadi
                                </h2>

                                <div class="preview-line"></div>

                                <p>
                                    20 · 09 · 2026
                                </p>

                            </div>

                        </div>

                        <div class="preview-bottom">

                            <span>
                                OPEN INVITATION
                            </span>

                            <span>
                                ✦
                            </span>

                        </div>

                    </div>


                    <div class="floating-card floating-card-one">

                        <span class="floating-icon">
                            ✓
                        </span>

                        <div>
                            <strong>
                                RSVP Online
                            </strong>

                            <small>
                                Konfirmasi tamu
                            </small>
                        </div>

                    </div>


                    <div class="floating-card floating-card-two">

                        <span class="floating-icon">
                            ♡
                        </span>

                        <div>
                            <strong>
                                Ucapan & Doa
                            </strong>

                            <small>
                                Dari keluarga & sahabat
                            </small>
                        </div>

                    </div>

                </div>

            </div>

        </section>


        <!-- =====================================================
             EVENT TYPES
             ===================================================== -->

        <section class="event-section">

            <div class="section-container">

                <div class="section-heading">

                    <span class="section-eyebrow">
                        UNTUK SETIAP MOMEN
                    </span>

                    <h2>
                        Satu platform,
                        <em>berbagai acara.</em>
                    </h2>

                    <p>
                        Apa pun acaranya, buat undangan yang
                        pantas untuk dikenang.
                    </p>

                </div>


                <div class="event-grid">

                    <article v-for="event in eventTypes" :key="event.title" class="event-card">

                        <span class="event-icon">
                            {{ event.icon }}
                        </span>

                        <h3>
                            {{ event.title }}
                        </h3>

                        <p>
                            {{ event.description }}
                        </p>

                        <span class="event-arrow">
                            →
                        </span>

                    </article>

                </div>

            </div>

        </section>


        <!-- =====================================================
             FEATURES
             ===================================================== -->

        <section class="features-section">

            <div class="section-container features-layout">

                <div class="features-intro">

                    <span class="section-eyebrow">
                        SEMUANYA LEBIH MUDAH
                    </span>

                    <h2>
                        Bukan sekadar
                        <em>sebuah link.</em>
                    </h2>

                    <p>
                        Kami membuat undangan digital yang tidak hanya
                        cantik dilihat, tetapi juga membantu Anda
                        mengelola momen spesial dengan lebih praktis.
                    </p>

                    <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="secondary-button">
                        Konsultasikan Acara Anda
                        <span>→</span>
                    </a>

                </div>


                <div class="features-list">

                    <article v-for="feature in features" :key="feature.number" class="feature-item">

                        <span class="feature-number">
                            {{ feature.number }}
                        </span>

                        <div>

                            <h3>
                                {{ feature.title }}
                            </h3>

                            <p>
                                {{ feature.description }}
                            </p>

                        </div>

                    </article>

                </div>

            </div>

        </section>


        <!-- =====================================================
             HOW IT WORKS
             ===================================================== -->

        <section class="steps-section">

            <div class="section-container">

                <div class="section-heading">

                    <span class="section-eyebrow">
                        CARA KERJA
                    </span>

                    <h2>
                        Semudah <em>empat langkah.</em>
                    </h2>

                </div>


                <div class="steps-grid">

                    <article v-for="step in steps" :key="step.number" class="step-item">

                        <span class="step-number">
                            {{ step.number }}
                        </span>

                        <div class="step-line"></div>

                        <h3>
                            {{ step.title }}
                        </h3>

                        <p>
                            {{ step.description }}
                        </p>

                    </article>

                </div>

            </div>

        </section>


        <!-- =====================================================
             CTA
             ===================================================== -->

        <section class="cta-section">

            <div class="cta-decoration">
                ❦
            </div>

            <div class="cta-inner">

                <span class="section-eyebrow">
                    SIAP MEMBUATNYA?
                </span>

                <h2>
                    Jadikan momen Anda
                    <em>lebih istimewa.</em>
                </h2>

                <p>
                    Ceritakan acara Anda kepada kami.
                    Kami bantu siapkan undangan digital
                    yang sesuai dengan momen Anda.
                </p>

                <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="cta-button">

                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                        <path
                            d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4.1-1.05L4 20l1.1-4.2A8.4 8.4 0 1 1 21 11.5Z" />

                        <path
                            d="M8.5 8.5c.3-.4.6-.4.9-.1l1 1.2c.2.3.2.5 0 .8l-.4.5c.6 1.1 1.5 2 2.6 2.6l.5-.4c.3-.2.5-.2.8 0l1.2 1c.3.3.3.6-.1.9-.5.5-1.2.7-1.8.5-2.2-.7-4.2-2.7-4.9-4.9-.2-.6 0-1.3.5-1.8Z" />
                    </svg>

                    Chat WhatsApp Sekarang

                    <span>
                        →
                    </span>

                </a>

            </div>

        </section>


        <!-- =====================================================
             FOOTER
             ===================================================== -->

        <footer class="home-footer">

            <div class="footer-inner">

                <div class="brand">
                    <span class="brand-mark">✦</span>

                    <span class="brand-name">
                        Invite<span>ly</span>
                    </span>
                </div>

                <p>
                    Undangan digital untuk setiap momen spesial.
                </p>

                <span>
                    © {{ new Date().getFullYear() }} All rights reserved.
                </span>

            </div>

        </footer>


        <!-- =====================================================
             FLOATING WHATSAPP
             ===================================================== -->

        <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="floating-whatsapp"
            aria-label="Chat WhatsApp">

            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4.1-1.05L4 20l1.1-4.2A8.4 8.4 0 1 1 21 11.5Z" />

                <path
                    d="M8.5 8.5c.3-.4.6-.4.9-.1l1 1.2c.2.3.2.5 0 .8l-.4.5c.6 1.1 1.5 2 2.6 2.6l.5-.4c.3-.2.5-.2.8 0l1.2 1c.3.3.3.6-.1.9-.5.5-1.2.7-1.8.5-2.2-.7-4.2-2.7-4.9-4.9-.2-.6 0-1.3.5-1.8Z" />
            </svg>

            <span>
                Chat Kami
            </span>

        </a>

    </main>
</template>

<style scoped>
.home-page {
    --espresso: #241c16;
    --deep-brown: #30241b;
    --warm-brown: #49382a;
    --bronze: #9c7844;
    --champagne: #d6b15e;
    --gold: #f0d78a;
    --ivory: #f5ebdd;
    --cream: #fbf8f3;

    min-height: 100vh;
    overflow: hidden;

    background:
        var(--cream);

    color:
        var(--espresso);

    font-family:
        Georgia,
        'Times New Roman',
        serif;
}


/* =========================================================
   NAVBAR
   ========================================================= */

.home-navbar {
    position: absolute;

    top: 0;
    left: 0;

    width: 100%;

    z-index: 100;
}

.home-navbar-inner {
    width: min(1180px, calc(100% - 48px));

    margin: auto;

    min-height: 82px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;

    color: var(--espresso);

    text-decoration: none;
}

.brand-mark {
    color: var(--bronze);
    font-size: 20px;
}

.brand-name {
    font-size: 23px;
    font-weight: 600;
    letter-spacing: -.03em;
}

.brand-name span {
    color: var(--bronze);
}

.nav-cta {
    padding: 11px 20px;

    border: 1px solid rgba(73, 56, 42, .2);

    border-radius: 999px;

    color: var(--espresso);

    font-family:
        Arial,
        sans-serif;

    font-size: 12px;

    font-weight: 600;

    letter-spacing: .04em;

    text-decoration: none;

    transition: .25s ease;
}

.nav-cta:hover {
    background: var(--espresso);
    color: white;
}


/* =========================================================
   HERO
   ========================================================= */

.hero-section {
    position: relative;

    min-height: 760px;

    display: flex;
    align-items: center;

    overflow: hidden;

    background:
        radial-gradient(circle at 75% 45%,
            rgba(214, 177, 94, .16),
            transparent 30%),
        linear-gradient(135deg,
            #fbf8f3 0%,
            #f5ebdd 55%,
            #eee0cb 100%);
}

.hero-container {
    position: relative;
    z-index: 5;

    width: min(1180px, calc(100% - 48px));

    margin: auto;

    display: grid;

    grid-template-columns:
        minmax(0, .95fr) minmax(420px, .85fr);

    gap: 70px;

    align-items: center;

    padding-top: 80px;
}

.hero-content {
    max-width: 610px;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 9px;

    margin-bottom: 22px;

    color: var(--bronze);

    font-family:
        Arial,
        sans-serif;

    font-size: 10px;

    font-weight: 700;

    letter-spacing: .22em;
}

.hero-badge span {
    width: 24px;
    height: 1px;

    background: var(--bronze);
}

.hero-title {
    margin: 0;

    font-size: clamp(52px, 6vw, 86px);

    line-height: .94;

    letter-spacing: -.055em;

    font-weight: 500;
}

.hero-title em {
    display: block;

    color: var(--bronze);

    font-weight: 400;
}

.hero-description {
    max-width: 520px;

    margin: 30px 0 0;

    color: #695c50;

    font-family:
        Arial,
        sans-serif;

    font-size: 16px;

    line-height: 1.8;
}

.hero-actions {
    margin-top: 34px;
}

.primary-button {
    display: inline-flex;
    align-items: center;
    gap: 13px;

    min-height: 57px;

    padding: 0 22px;

    background:
        var(--espresso);

    color: white;

    border-radius: 999px;

    font-family:
        Arial,
        sans-serif;

    font-size: 13px;

    font-weight: 700;

    letter-spacing: .03em;

    text-decoration: none;

    box-shadow:
        0 12px 30px rgba(36, 28, 22, .18);

    transition:
        transform .25s ease,
        box-shadow .25s ease;
}

.primary-button:hover {
    transform: translateY(-3px);

    box-shadow:
        0 18px 35px rgba(36, 28, 22, .25);
}

.wa-icon {
    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: rgba(255, 255, 255, .1);
}

.wa-icon svg {
    width: 17px;
    height: 17px;
}

.button-arrow {
    margin-left: 5px;

    font-size: 18px;

    transition: transform .25s ease;
}

.primary-button:hover .button-arrow {
    transform: translateX(4px);
}

.hero-trust {
    display: flex;
    flex-wrap: wrap;

    gap: 20px;

    margin-top: 24px;
}

.trust-item {
    display: flex;
    align-items: center;
    gap: 6px;

    color: #75675a;

    font-family: Arial, sans-serif;

    font-size: 11px;
}

.trust-item span {
    color: var(--bronze);
    font-weight: 700;
}


/* =========================================================
   HERO VISUAL
   ========================================================= */

.hero-visual {
    position: relative;

    min-height: 600px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.visual-back-card {
    position: absolute;

    width: 350px;
    height: 500px;

    border: 1px solid rgba(156, 120, 68, .2);

    transform:
        rotate(8deg) translate(25px, 10px);

    background:
        rgba(255, 255, 255, .25);
}

.invitation-preview {
    position: relative;
    z-index: 3;

    width: 335px;

    background: white;

    box-shadow:
        0 30px 70px rgba(48, 36, 27, .18);

    transform: rotate(-3deg);

    transition:
        transform .5s ease;
}

.invitation-preview:hover {
    transform: rotate(0deg) translateY(-8px);
}

.preview-top,
.preview-bottom {
    height: 43px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 18px;

    color: var(--bronze);

    font-family: Arial, sans-serif;

    font-size: 7px;

    font-weight: 700;

    letter-spacing: .18em;
}

.preview-image {
    position: relative;

    height: 465px;

    overflow: hidden;
}

.preview-image img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    display: block;
}

.preview-overlay {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(to bottom,
            rgba(0, 0, 0, .05),
            rgba(0, 0, 0, .48));
}

.preview-content {
    position: absolute;

    left: 0;
    right: 0;
    bottom: 42px;

    text-align: center;

    color: white;
}

.preview-content small {
    font-family: Arial, sans-serif;

    font-size: 8px;

    letter-spacing: .3em;
}

.preview-content h2 {
    margin: 12px 0;

    font-size: 47px;

    line-height: .9;

    font-weight: 400;
}

.preview-content h2 span {
    font-style: italic;

    color: var(--gold);
}

.preview-line {
    width: 42px;
    height: 1px;

    margin: 17px auto;

    background: var(--gold);
}

.preview-content p {
    margin: 0;

    font-family: Arial, sans-serif;

    font-size: 9px;

    letter-spacing: .25em;
}

.floating-card {
    position: absolute;
    z-index: 6;

    display: flex;
    align-items: center;
    gap: 10px;

    padding: 12px 15px;

    background:
        rgba(255, 255, 255, .94);

    border: 1px solid rgba(156, 120, 68, .12);

    box-shadow:
        0 15px 35px rgba(48, 36, 27, .13);

    border-radius: 10px;

    font-family: Arial, sans-serif;
}

.floating-card-one {
    left: 0;
    top: 19%;
}

.floating-card-two {
    right: -5px;
    bottom: 19%;
}

.floating-icon {
    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: #f5ebdd;

    color: var(--bronze);
}

.floating-card strong,
.floating-card small {
    display: block;
}

.floating-card strong {
    color: var(--espresso);

    font-size: 11px;
}

.floating-card small {
    margin-top: 3px;

    color: #8b7b6c;

    font-size: 9px;
}


/* =========================================================
   DECORATION
   ========================================================= */

.hero-glow {
    position: absolute;

    width: 400px;
    height: 400px;

    border-radius: 50%;

    filter: blur(60px);

    pointer-events: none;
}

.hero-glow-one {
    right: -180px;
    top: 100px;

    background:
        rgba(214, 177, 94, .18);
}

.hero-glow-two {
    left: -200px;
    bottom: -200px;

    background:
        rgba(156, 120, 68, .08);
}

.hero-decoration {
    position: absolute;

    color: rgba(156, 120, 68, .2);

    pointer-events: none;
}

.hero-decoration-one {
    right: 4%;
    top: 16%;

    font-size: 28px;
}

.hero-decoration-two {
    left: 4%;
    bottom: 10%;

    font-size: 70px;
}


/* =========================================================
   COMMON SECTION
   ========================================================= */

.section-container {
    width: min(1180px, calc(100% - 48px));

    margin: auto;
}

.section-heading {
    max-width: 650px;

    margin: auto;

    text-align: center;
}

.section-eyebrow {
    display: inline-block;

    color: var(--bronze);

    font-family: Arial, sans-serif;

    font-size: 10px;

    font-weight: 700;

    letter-spacing: .25em;
}

.section-heading h2,
.features-intro h2 {
    margin: 14px 0 0;

    font-size: clamp(38px, 5vw, 60px);

    line-height: 1;

    font-weight: 400;

    letter-spacing: -.04em;
}

.section-heading h2 em,
.features-intro h2 em {
    color: var(--bronze);
}

.section-heading p {
    margin: 20px auto 0;

    max-width: 520px;

    color: #75675a;

    font-family: Arial, sans-serif;

    line-height: 1.7;

    font-size: 14px;
}


/* =========================================================
   EVENTS
   ========================================================= */

.event-section {
    padding: 120px 0;

    background: white;
}

.event-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 1px;

    margin-top: 60px;

    background:
        rgba(73, 56, 42, .14);

    border: 1px solid rgba(73, 56, 42, .14);
}

.event-card {
    position: relative;

    min-height: 220px;

    padding: 30px;

    background: white;

    transition: .3s ease;
}

.event-card:hover {
    background: #fbf7f0;

    transform: translateY(-4px);
}

.event-icon {
    font-size: 27px;

    filter: grayscale(.2);
}

.event-card h3 {
    margin: 24px 0 9px;

    font-size: 23px;

    font-weight: 400;
}

.event-card p {
    max-width: 230px;

    margin: 0;

    color: #75675a;

    font-family: Arial, sans-serif;

    font-size: 12px;

    line-height: 1.7;
}

.event-arrow {
    position: absolute;

    right: 25px;
    bottom: 22px;

    color: var(--bronze);

    font-size: 18px;
}


/* =========================================================
   FEATURES
   ========================================================= */

.features-section {
    padding: 130px 0;

    background:
        var(--espresso);

    color: white;
}

.features-layout {
    display: grid;

    grid-template-columns: .85fr 1.15fr;

    gap: 100px;

    align-items: center;
}

.features-intro {
    max-width: 500px;
}

.features-intro h2 {
    margin-top: 16px;
}

.features-intro h2 em {
    color: var(--gold);
}

.features-intro>p {
    margin-top: 25px;

    color: rgba(255, 255, 255, .65);

    font-family: Arial, sans-serif;

    font-size: 14px;

    line-height: 1.8;
}

.secondary-button {
    display: inline-flex;
    align-items: center;
    gap: 15px;

    margin-top: 30px;

    color: var(--gold);

    font-family: Arial, sans-serif;

    font-size: 12px;

    font-weight: 700;

    text-decoration: none;
}

.secondary-button span {
    font-size: 18px;

    transition: .25s ease;
}

.secondary-button:hover span {
    transform: translateX(5px);
}

.features-list {
    border-top: 1px solid rgba(255, 255, 255, .14);
}

.feature-item {
    display: grid;

    grid-template-columns: 55px 1fr;

    gap: 20px;

    padding: 28px 0;

    border-bottom: 1px solid rgba(255, 255, 255, .14);
}

.feature-number {
    color: var(--gold);

    font-family: Arial, sans-serif;

    font-size: 11px;

    letter-spacing: .12em;
}

.feature-item h3 {
    margin: 0;

    font-size: 21px;

    font-weight: 400;
}

.feature-item p {
    max-width: 500px;

    margin: 8px 0 0;

    color: rgba(255, 255, 255, .55);

    font-family: Arial, sans-serif;

    font-size: 12px;

    line-height: 1.7;
}


/* =========================================================
   STEPS
   ========================================================= */

.steps-section {
    padding: 120px 0;

    background: #f7f1e8;
}

.steps-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    margin-top: 65px;
}

.step-item {
    position: relative;

    padding: 0 25px;
}

.step-item:not(:last-child) {
    border-right: 1px solid rgba(73, 56, 42, .14);
}

.step-number {
    display: flex;

    width: 48px;
    height: 48px;

    align-items: center;
    justify-content: center;

    border: 1px solid rgba(156, 120, 68, .35);

    border-radius: 50%;

    color: var(--bronze);

    font-family: Arial, sans-serif;

    font-size: 11px;
}

.step-item h3 {
    margin: 25px 0 9px;

    font-size: 21px;

    font-weight: 400;
}

.step-item p {
    margin: 0;

    color: #75675a;

    font-family: Arial, sans-serif;

    font-size: 12px;

    line-height: 1.7;
}


/* =========================================================
   CTA
   ========================================================= */

.cta-section {
    position: relative;

    padding: 130px 24px;

    overflow: hidden;

    background:
        linear-gradient(135deg,
            #30241b,
            #49382a);

    color: white;

    text-align: center;
}

.cta-inner {
    position: relative;
    z-index: 2;

    max-width: 720px;

    margin: auto;
}

.cta-inner h2 {
    margin: 18px 0 0;

    font-size: clamp(42px, 6vw, 70px);

    line-height: .98;

    font-weight: 400;

    letter-spacing: -.04em;
}

.cta-inner h2 em {
    display: block;

    color: var(--gold);
}

.cta-inner p {
    max-width: 560px;

    margin: 25px auto 0;

    color: rgba(255, 255, 255, .65);

    font-family: Arial, sans-serif;

    font-size: 14px;

    line-height: 1.8;
}

.cta-button {
    display: inline-flex;
    align-items: center;
    gap: 13px;

    margin-top: 35px;

    min-height: 56px;

    padding: 0 25px;

    border-radius: 999px;

    background: var(--gold);

    color: var(--espresso);

    font-family: Arial, sans-serif;

    font-size: 12px;

    font-weight: 700;

    text-decoration: none;

    transition: .3s ease;
}

.cta-button:hover {
    transform: translateY(-3px);

    box-shadow:
        0 15px 35px rgba(0, 0, 0, .25);
}

.cta-button svg {
    width: 19px;
    height: 19px;
}

.cta-button>span {
    font-size: 18px;
}

.cta-decoration {
    position: absolute;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    color: rgba(240, 215, 138, .06);

    font-size: 400px;

    line-height: 1;

    pointer-events: none;
}


/* =========================================================
   FOOTER
   ========================================================= */

.home-footer {
    padding: 35px 24px;

    background: #201913;

    color: rgba(255, 255, 255, .45);
}

.footer-inner {
    width: min(1180px, 100%);

    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 20px;

    font-family: Arial, sans-serif;

    font-size: 10px;
}

.footer-inner .brand {
    color: white;
}

.footer-inner .brand-name {
    font-size: 18px;
}

.footer-inner p {
    margin: 0;
}


/* =========================================================
   FLOATING WHATSAPP
   ========================================================= */

.floating-whatsapp {
    position: fixed;

    right: 22px;
    bottom: 22px;

    z-index: 999;

    display: flex;
    align-items: center;
    gap: 9px;

    min-height: 48px;

    padding: 0 18px;

    border-radius: 999px;

    background: #241c16;

    color: white;

    font-family: Arial, sans-serif;

    font-size: 11px;

    font-weight: 700;

    text-decoration: none;

    box-shadow:
        0 12px 30px rgba(0, 0, 0, .25);

    transition: .3s ease;
}

.floating-whatsapp:hover {
    transform: translateY(-4px);
}

.floating-whatsapp svg {
    width: 19px;
    height: 19px;
}


/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 900px) {

    .hero-container {
        grid-template-columns: 1fr;

        gap: 30px;

        padding-top: 110px;
    }

    .hero-content {
        max-width: 700px;

        margin: auto;

        text-align: center;
    }

    .hero-badge {
        justify-content: center;
    }

    .hero-description {
        margin-left: auto;
        margin-right: auto;
    }

    .hero-actions {
        display: flex;
        justify-content: center;
    }

    .hero-trust {
        justify-content: center;
    }

    .hero-visual {
        min-height: 520px;
    }

    .features-layout {
        grid-template-columns: 1fr;

        gap: 60px;
    }

    .features-intro {
        max-width: 650px;
    }

}


@media (max-width: 700px) {

    .home-navbar-inner {
        width: calc(100% - 32px);

        min-height: 70px;
    }

    .nav-cta {
        padding: 9px 13px;

        font-size: 9px;
    }

    .hero-section {
        min-height: auto;
    }

    .hero-container {
        width: calc(100% - 32px);

        padding-top: 105px;
        padding-bottom: 55px;
    }

    .hero-title {
        font-size: clamp(45px, 14vw, 68px);
    }

    .hero-description {
        font-size: 14px;
    }

    .hero-trust {
        gap: 10px 14px;
    }

    .trust-item {
        font-size: 9px;
    }

    .hero-visual {
        min-height: 470px;
    }

    .invitation-preview {
        width: min(290px, 78vw);
    }

    .preview-image {
        height: 400px;
    }

    .visual-back-card {
        width: 300px;
        height: 430px;
    }

    .floating-card {
        padding: 9px 11px;
    }

    .floating-card-one {
        left: -2px;
    }

    .floating-card-two {
        right: -2px;
    }

    .event-section,
    .features-section,
    .steps-section {
        padding: 85px 0;
    }

    .section-container {
        width: calc(100% - 32px);
    }

    .event-grid {
        grid-template-columns: 1fr 1fr;

        margin-top: 40px;
    }

    .event-card {
        min-height: 190px;

        padding: 22px 18px;
    }

    .event-card h3 {
        margin-top: 18px;

        font-size: 19px;
    }

    .steps-grid {
        grid-template-columns: 1fr 1fr;

        gap: 0;
    }

    .step-item {
        padding: 25px 18px;
    }

    .step-item:nth-child(2) {
        border-right: 0;
    }

    .step-item:nth-child(-n + 2) {
        border-bottom: 1px solid rgba(73, 56, 42, .14);
    }

    .cta-section {
        padding: 95px 20px;
    }

    .floating-whatsapp {
        right: 14px;
        bottom: 14px;

        width: 48px;
        height: 48px;

        min-height: 48px;

        padding: 0;

        justify-content: center;
    }

    .floating-whatsapp span {
        display: none;
    }

    .footer-inner {
        flex-direction: column;

        text-align: center;
    }

}


@media (max-width: 420px) {

    .event-grid {
        grid-template-columns: 1fr;
    }

    .event-card {
        min-height: 155px;
    }

    .primary-button {
        width: 100%;

        justify-content: center;
    }

    .hero-trust {
        justify-content: center;
    }

}
</style>