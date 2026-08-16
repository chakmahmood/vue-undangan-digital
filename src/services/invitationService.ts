import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

export interface InvitationApiResponse {
  status: string;
  message: string;

  data: {
    event: {
      id: number;
      user_id: number;
      name: string;
      kode_event: string;
      date: string;
      location: string | null;
      slug: string;
      cover_image: string | null;
      description: string | null;
      created_at: string;
      updated_at: string;
    };

    guest: {
      id: number;
      event_id: number;

      nama_santri: string | null;
      kamar: string | null;
      tingkat_kelas: string | null;
      kelas: string | null;

      nama_undangan: string;

      no_telp: string | null;

      provinsi: string | null;
      kabupaten: string | null;
      kecamatan: string | null;
      desa: string | null;

      rt: string | null;
      rw: string | null;

      alamat_lengkap: string | null;

      tipe: string | null;
      ket: string | null;

      unique_code: string;

      is_opened: boolean;
      opened_at: string | null;

      is_present: boolean;
      present_at: string | null;

      notes: string | null;

      attendance_status: string | null;
      guest_count: number | null;

      created_at: string;
      updated_at: string;
    };
  };
}

export async function getInvitation(eventSlug: string, uniqueCode: string) {
  const response = await axios.get<InvitationApiResponse>(
    `${API_URL}/undangan/${eventSlug}/${uniqueCode}`,
  );

  return response.data;
}
