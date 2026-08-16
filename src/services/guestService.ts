import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

export type AttendanceStatus = "hadir" | "tidak hadir" | "belum tau";

export interface ConfirmAttendancePayload {
  attendance_status: AttendanceStatus;
  guest_count: number;
}

export interface ConfirmAttendanceResponse {
  status: string;
  message: string;
  guest: any;
}

/**
 * Konfirmasi kehadiran tamu
 */
export async function confirmAttendance(
  uniqueCode: string,
  payload: ConfirmAttendancePayload,
) {
  const response = await axios.post<ConfirmAttendanceResponse>(
    `${API_URL}/guest/${uniqueCode}/confirm-attendance`,
    payload,
  );

  return response.data;
}
