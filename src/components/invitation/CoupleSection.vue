<script setup lang="ts">
defineProps<{
    invitation: any
}>()
</script>

<template>
    <section class="bg-[#faf8f5] px-6 py-24">

        <div class="mx-auto max-w-4xl text-center">

            <p class="text-xs uppercase tracking-[0.35em] text-neutral-400">
                We Are Getting Married
            </p>

            <h2 class="mt-5 font-serif text-4xl text-neutral-800">
                A Journey To Forever
            </h2>

            <p class="mx-auto mt-6 max-w-xl leading-8 text-neutral-500">
                Dua hati, satu perjalanan, dan sebuah janji untuk berjalan
                bersama dalam suka maupun duka.
            </p>

            <div class="mt-16 grid gap-12 sm:grid-cols-2">

                <div>
                    <div class="mx-auto h-40 w-40 overflow-hidden rounded-full">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600"
                            class="h-full w-full object-cover" />
                    </div>

                    <h3 class="mt-6 font-serif text-3xl">
                        {{ invitation.groom.fullName }}
                    </h3>

                    <p class="mt-2 text-sm text-neutral-400">
                        Putra dari Bapak & Ibu
                    </p>
                </div>

                <div>
                    <div class="mx-auto h-40 w-40 overflow-hidden rounded-full">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600"
                            class="h-full w-full object-cover" />
                    </div>

                    <h3 class="mt-6 font-serif text-3xl">
                        {{ invitation.bride.fullName }}
                    </h3>

                    <p class="mt-2 text-sm text-neutral-400">
                        Putri dari Bapak & Ibu
                    </p>
                </div>

            </div>

        </div>

    </section>
</template>