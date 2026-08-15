export interface Event {
  id: number;
  user_id: number;
  name: string;
  date: string;
  kode_event: string;
  location: string | null;
  slug: string;
  cover_image: string | null;
  description: string | null;
}
