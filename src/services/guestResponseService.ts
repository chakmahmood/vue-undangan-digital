import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

/* =========================================================
   TYPES
   ========================================================= */

export interface GuestWish {
  id: number;
  guest_id: number | null;
  name: string;
  comment: string;
  submitted_at: string;
  created_at?: string;
  updated_at?: string;

  guest?: {
    id: number;
    event_id: number;
    nama_undangan: string | null;
  };
}

export interface GuestWishListResponse {
  status: string;
  message?: string;

  event?: {
    id: number;
    name: string;
    slug: string;
  };

  data: GuestWish[];

  meta?: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };

  current_page?: number;
  last_page?: number;
  per_page?: number;
  total?: number;
}

export interface GuestWishResponse {
  status: string;
  message?: string;
  data: GuestWish;
}

/* =========================================================
   GET WISHES
   ========================================================= */

export async function getGuestResponses(
  eventSlug: string,
  page = 1,
  perPage = 20,
): Promise<GuestWishListResponse> {
  if (!eventSlug) {
    throw new Error("Event slug tidak ditemukan.");
  }

  const response = await axios.get<GuestWishListResponse>(
    `${API_URL}/guest-response/list/${encodeURIComponent(eventSlug)}`,
    {
      params: {
        page,
        per_page: perPage,
      },
    },
  );

  return response.data;
}

/* =========================================================
   SUBMIT WISH
   ========================================================= */

export async function submitGuestResponse(payload: {
  unique_code?: string;
  name: string;
  comment: string;
}): Promise<GuestWishResponse> {
  const response = await axios.post<GuestWishResponse>(
    `${API_URL}/guest-response`,
    payload,
  );

  return response.data;
}
