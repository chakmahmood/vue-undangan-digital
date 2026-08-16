<script setup lang="ts">
import {
    computed,
    onMounted,
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

        <!-- ========================================================
             OPENING
        ========================================================= -->

        <OpeningScreen :invitation="invitation" />


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
</style>