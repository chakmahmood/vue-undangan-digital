<script setup lang="ts">
import OpeningScreen from '../components/invitation/OpeningScreen.vue'
import HeroSection from '../components/invitation/HeroSection.vue'
import CoupleSection from '../components/invitation/CoupleSection.vue'
import EventSection from '../components/invitation/EventSection.vue'
import CountdownSection from '../components/invitation/CountdownSection.vue'
import GallerySection from '../components/invitation/GallerySection.vue'
import RSVPSection from '../components/invitation/RSVPSection.vue'
import WishesSection from '../components/invitation/WishesSection.vue'
import GiftSection from '../components/invitation/GiftSection.vue'
import FooterSection from '../components/invitation/FooterSection.vue'
import { invitation } from '../constants/invitation'
</script>

<template>
    <div class="invitation">

        <OpeningScreen />

        <HeroSection :invitation="invitation" />

        <CoupleSection :invitation="invitation" />

        <EventSection :invitation="invitation" />

        <CountdownSection :invitation="invitation" />

        <GallerySection :images="invitation.gallery" />

        <!-- <StorySection :stories="invitation.story" /> -->

        <RSVPSection />

        <WishesSection />

        <GiftSection />
        <FooterSection :invitation="invitation" />
    </div>
</template>