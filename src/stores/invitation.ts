import { defineStore } from "pinia";
import { ref } from "vue";

import type { Event } from "../types/event";

export const useInvitationStore = defineStore("invitation", () => {
  const event = ref<Event | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchEvent(slug: string) {
    loading.value = true;
    error.value = null;

    try {
      /*
       * Sementara menggunakan endpoint Laravel.
       *
       * Nanti kita buat:
       * GET /api/invitations/{slug}
       */

      const response = await fetch(
        `/api/invitations/${encodeURIComponent(slug)}`,
      );

      if (!response.ok) {
        throw new Error("Undangan tidak ditemukan");
      }

      event.value = await response.json();
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Terjadi kesalahan";
    } finally {
      loading.value = false;
    }
  }

  function clearEvent() {
    event.value = null;
    error.value = null;
  }

  return {
    event,
    loading,
    error,
    fetchEvent,
    clearEvent,
  };
});
