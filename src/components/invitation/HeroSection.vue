<script setup lang="ts">
defineProps<{
    invitation: any
}>()
</script>

<template>
    <section class="relative min-h-screen overflow-hidden">

        <img :src="invitation.cover" class="absolute inset-0 h-full w-full object-cover" alt="Wedding" />

        <div class="absolute inset-0 bg-black/35" />

        <div class="relative z-10 flex min-h-screen items-end justify-center px-6 pb-20 text-center text-white">

            <div>

                <p class="text-xs uppercase tracking-[0.45em]">
                    {{ invitation.wedding.title }}
                </p>

                <h1 class="mt-6 font-serif text-6xl leading-none sm:text-8xl">
                    {{ invitation.groom.name }}
                    <span class="mx-2 font-light italic">
                        &
                    </span>
                    {{ invitation.bride.name }}
                </h1>

                <div class="mx-auto mt-8 h-px w-20 bg-white/70" />

                <p class="mt-6 text-sm tracking-widest">
                    {{ invitation.wedding.date }}
                </p>

            </div>

        </div>
    </section>
</template>