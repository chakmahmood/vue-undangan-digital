<script setup lang="ts">
defineProps<{
    invitation: any
}>()
</script>

<template>
    <section class="bg-white px-6 py-24">

        <div class="mx-auto max-w-3xl text-center">

            <p class="text-xs uppercase tracking-[0.35em] text-neutral-400">
                Save The Date
            </p>

            <h2 class="mt-5 font-serif text-4xl">
                {{ invitation.wedding.day }}
            </h2>

            <p class="mt-3 text-2xl text-[#a68c6d]">
                {{ invitation.wedding.date }}
            </p>

            <div class="mx-auto mt-10 max-w-md rounded-3xl bg-[#faf8f5] p-8">

                <p class="text-sm text-neutral-400">
                    Waktu
                </p>

                <p class="mt-2">
                    {{ invitation.wedding.time }}
                </p>

                <div class="my-6 h-px bg-neutral-200" />

                <p class="text-sm text-neutral-400">
                    Tempat
                </p>

                <p class="mt-2 font-medium">
                    {{ invitation.wedding.venue }}
                </p>

                <p class="mt-2 text-sm leading-6 text-neutral-500">
                    {{ invitation.wedding.address }}
                </p>

                <button class="mt-8 rounded-full bg-neutral-900 px-6 py-3 text-sm text-white">
                    Lihat Lokasi
                </button>

            </div>

        </div>

    </section>
</template>