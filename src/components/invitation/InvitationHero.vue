<script setup lang="ts">
import type { Event } from '../../types/event'

defineProps<{
    event: Event
}>()
</script>

<template>
    <section class="relative flex min-h-screen items-center justify-center overflow-hidden">
        <!-- Cover -->

        <img v-if="event.cover_image" :src="event.cover_image" :alt="event.name"
            class="absolute inset-0 h-full w-full object-cover" />

        <!-- Overlay -->

        <div class="absolute inset-0 bg-black/45" />

        <!-- Content -->

        <div class="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
            <p class="mb-4 text-sm uppercase tracking-[0.3em]">
                The Wedding Of
            </p>

            <h1 class="text-4xl font-semibold sm:text-6xl">
                {{ event.name }}
            </h1>

            <p v-if="event.date" class="mt-6 text-lg">
                {{ event.date }}
            </p>

            <button
                class="mt-10 rounded-full bg-white px-8 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-100"
                @click="$router.push('#event')">
                Buka Undangan
            </button>
        </div>
    </section>
</template>