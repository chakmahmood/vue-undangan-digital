<script setup lang="ts">
import {
    computed,
    onMounted,
    onBeforeUnmount,
    ref,
} from 'vue'

import {
    useRoute,
} from 'vue-router'


/* ================================================================
   COMPONENTS
   ================================================================ */

import OpeningScreen
    from '../components/invitation/OpeningScreen.vue'

import HeroSection
    from '../components/invitation/HeroSection.vue'

import CoupleSection
    from '../components/invitation/CoupleSection.vue'

import EventSection
    from '../components/invitation/EventSection.vue'

import CountdownSection
    from '../components/invitation/CountdownSection.vue'

import GallerySection
    from '../components/invitation/GallerySection.vue'

import RSVPSection
    from '../components/invitation/RSVPSection.vue'

import WishesSection
    from '../components/invitation/WishesSection.vue'

import GiftSection
    from '../components/invitation/GiftSection.vue'

import FooterSection
    from '../components/invitation/FooterSection.vue'


/* ================================================================
   CONSTANTS
   ================================================================ */

import {
    invitation as invitationConstant,
} from '../constants/invitation'


/* ================================================================
   API
   ================================================================ */

import {
    getInvitation,
} from '../services/invitationService'


/* ================================================================
   ROUTE
   ================================================================ */

const route = useRoute()


/* ================================================================
   STATE
   ================================================================ */

const loading = ref(true)

const error = ref<string | null>(null)

const event = ref<any>(null)

const guest = ref<any>(null)

/* ================================================================
AUDIO
================================================================ */

const audio = ref<HTMLAudioElement | null>(null)

const isPlaying = ref(false)

const audioSrc = '/audio/wedding-music.mp3'


async function startAudio() {

    if (!audio.value) {
        return
    }

    try {

        await audio.value.play()

        isPlaying.value = true

    } catch (error) {

        console.warn(
            '[Audio] Gagal memutar audio:',
            error
        )

        isPlaying.value = false

    }

}


function toggleAudio() {

    if (!audio.value) {
        return
    }

    if (audio.value.paused) {

        startAudio()

    } else {

        audio.value.pause()

        isPlaying.value = false

    }

}


onMounted(() => {

    audio.value = new Audio(audioSrc)

    audio.value.loop = true

    audio.value.volume = 0.45

})


onBeforeUnmount(() => {

    if (audio.value) {

        audio.value.pause()

        audio.value.currentTime = 0

        audio.value = null

    }

})

/* ================================================================
   ROUTE PARAMS
   ================================================================ */

const eventSlug = computed(() => {

    return String(
        route.params.eventSlug || '',
    )

})


const uniqueCode = computed(() => {

    return String(
        route.params.uniqueCode || '',
    )

})


/* ================================================================
   FINAL INVITATION DATA
   ================================================================
   
   Sumber:

   constants/invitation.ts
       ↓
   groom
   bride
   wedding
   gallery
   story

   API Laravel
       ↓
   event
   guest

================================================================ */

const invitation = computed(() => {

    return {

        ...invitationConstant,

        event: event.value,

        guest: guest.value,

    }

})


/* ================================================================
   LOAD INVITATION
   ================================================================ */

async function loadInvitation() {

    try {

        loading.value = true

        error.value = null


        /*
         * Pastikan parameter URL tersedia
         */

        if (
            !eventSlug.value ||
            !uniqueCode.value
        ) {

            throw new Error(
                'URL undangan tidak lengkap.',
            )

        }


        /*
         * Request ke Laravel API
         */

        const response =
            await getInvitation(
                eventSlug.value,
                uniqueCode.value,
            )


        /*
         * Validasi response
         */

        if (
            response.status !==
            'success'
        ) {

            throw new Error(
                response.message ||
                'Data undangan tidak ditemukan.',
            )

        }


        /*
         * Simpan data API
         */

        event.value =
            response.data.event


        guest.value =
            response.data.guest


    } catch (err: any) {

        console.error(
            '[InvitationLayout]',
            err,
        )


        error.value =
            err?.response?.data?.message ||
            err?.message ||
            'Gagal mengambil data undangan.'


    } finally {

        loading.value = false

    }

}


/* ================================================================
   INITIAL LOAD
   ================================================================ */

onMounted(
    loadInvitation,
)

</script>


<template>

    <!-- ============================================================
         LOADING
    ============================================================= -->

    <div v-if="loading" class="invitation-state invitation-loading">

        <div class="loading-ornament">

            <span></span>

        </div>


        <p>
            Mempersiapkan undangan...
        </p>

    </div>


    <!-- ============================================================
         ERROR
    ============================================================= -->

    <div v-else-if="error" class="invitation-state invitation-error">

        <div class="error-card">

            <div class="error-ornament">
                ◆
            </div>


            <h1>
                Undangan Tidak Ditemukan
            </h1>


            <p>
                {{ error }}
            </p>

        </div>

    </div>


    <!-- ============================================================
         INVITATION
    ============================================================= -->

    <div v-else class="invitation">
        <!-- AUDIO CONTROL -->
        <button type="button" class="audio-control" :class="{ playing: isPlaying }"
            :aria-label="isPlaying ? 'Pause musik' : 'Play musik'" @click="toggleAudio">
            <!-- PAUSE / MUSIC -->
            <svg v-if="isPlaying" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 18V5l10-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="16" cy="16" r="3" />
            </svg>

            <!-- PLAY -->
            <svg v-else viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5.5v13L18 12 8 5.5Z" />
            </svg>
        </button>

        <!-- ========================================================
             OPENING
        ========================================================= -->

        <OpeningScreen :invitation="invitation" @opened="startAudio" />


        <!-- ========================================================
             HERO
        ========================================================= -->

        <HeroSection :invitation="invitation" />


        <!-- ========================================================
             COUPLE
        ========================================================= -->

        <CoupleSection :invitation="invitation" />


        <!-- ========================================================
             EVENT
        ========================================================= -->

        <EventSection :invitation="invitation" />


        <!-- ========================================================
             COUNTDOWN
        ========================================================= -->

        <CountdownSection :invitation="invitation" />


        <!-- ========================================================
             GALLERY
        ========================================================= -->

        <GallerySection :images="invitation.gallery" />


        <!-- ========================================================
             STORY
        ========================================================= -->

        <!--
        <StorySection
            :stories="invitation.story"
        />
        -->


        <!-- ========================================================
             RSVP
        ========================================================= -->

        <RSVPSection :invitation="invitation" />


        <!-- ========================================================
             WISHES
        ========================================================= -->

        <WishesSection :invitation="invitation" />


        <!-- ========================================================
             GIFT
        ========================================================= -->

        <GiftSection />


        <!-- ========================================================
             FOOTER
        ========================================================= -->

        <FooterSection :invitation="invitation" />

    </div>

</template>


<style scoped>
/* ================================================================
   STATE
   ================================================================ */

.invitation-state {

    min-height:
        100svh;

    width:
        100%;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    flex-direction:
        column;

    box-sizing:
        border-box;

    padding:
        30px;

    background:
        #241c16;

    color:
        #e8cc82;

    text-align:
        center;

}


/* ================================================================
   LOADING
   ================================================================ */

.invitation-loading {

    gap:
        18px;

}


.loading-ornament {

    width:
        48px;

    height:
        48px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    border:
        1px solid rgba(232,
            204,
            130,
            .22);

    border-radius:
        50%;

    animation:
        loadingRotate 2s linear infinite;

}


.loading-ornament span {

    width:
        22px;

    height:
        22px;

    display:
        block;

    border:
        1px solid rgba(232,
            204,
            130,
            .65);

    transform:
        rotate(45deg);

}


.invitation-loading p {

    margin:
        0;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        12px;

    letter-spacing:
        .12em;

    color:
        rgba(245,
            235,
            221,
            .72);

}


@keyframes loadingRotate {

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
   ERROR
   ================================================================ */

.invitation-error {

    color:
        #f5ebdd;

}


.error-card {

    width:
        min(100%,
            420px);

    box-sizing:
        border-box;

    padding:
        36px 28px;

    border:
        1px solid rgba(232,
            204,
            130,
            .24);

    border-radius:
        18px;

    background:
        rgba(255,
            255,
            255,
            .025);

    box-shadow:

        0 20px 60px rgba(0,
            0,
            0,
            .25);

}


.error-ornament {

    margin:
        0 0 20px;

    color:
        #e8cc82;

    font-size:
        18px;

    opacity:
        .8;

}


.error-card h1 {

    margin:
        0;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        24px;

    font-weight:
        400;

}


.error-card p {

    margin:
        14px 0 0;

    color:
        rgba(245,
            235,
            221,
            .62);

    font-size:
        13px;

    line-height:
        1.7;

}


/* ================================================================
   MOBILE
   ================================================================ */

@media (max-width: 480px) {

    .error-card {

        padding:
            30px 22px;

    }


    .error-card h1 {

        font-size:
            21px;

    }

}

/* =========================================================
   AUDIO CONTROL
   ========================================================= */

.audio-control {
    position: fixed;
    z-index: 99999;

    right: 18px;
    top: 50%;

    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;

    border: 1px solid rgba(214, 177, 94, 0.65);
    border-radius: 50%;

    background: rgba(36, 28, 22, 0.82);

    color: #f0d78a;

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    box-shadow:
        0 6px 20px rgba(0, 0, 0, 0.25),
        inset 0 0 12px rgba(240, 215, 138, 0.05);

    cursor: pointer;

    transform: translateY(-50%);

    transition:
        transform 0.25s ease,
        background 0.25s ease,
        border-color 0.25s ease;
}

.audio-control:hover {
    transform:
        translateY(-50%) scale(1.08);

    border-color: #f0d78a;

    background:
        rgba(48, 36, 27, 0.95);
}

.audio-control:active {
    transform:
        translateY(-50%) scale(0.94);
}

.audio-control svg {
    width: 17px;
    height: 17px;
}


/* =========================================================
   PLAYING EFFECT
   ========================================================= */

.audio-control.playing::before {
    content: "";

    position: absolute;

    inset: -5px;

    border: 1px solid rgba(240, 215, 138, 0.35);

    border-radius: 50%;

    animation:
        audioPulse 2s ease-out infinite;
}


@keyframes audioPulse {

    0% {
        transform: scale(0.9);
        opacity: 0.8;
    }

    100% {
        transform: scale(1.45);
        opacity: 0;
    }

}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 600px) {

    .audio-control {
        right: 12px;

        width: 36px;
        height: 36px;
    }

    .audio-control svg {
        width: 15px;
        height: 15px;
    }

}
</style>