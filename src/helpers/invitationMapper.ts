import type { InvitationApiResponse } from "../services/invitationService";

export function mapInvitation(response: InvitationApiResponse) {
  const { event, guest } = response.data;

  const eventDate = new Date(event.date);

  return {
    /* =====================================================
           GROOM
           ===================================================== */

    groom: {
      name: "Diyan",
      fullName: "Diyan Pratama",
      instagram: "@diyanpratama",
    },

    /* =====================================================
           BRIDE
           ===================================================== */

    bride: {
      name: "Hadi",
      fullName: "Hadi Permata",
      instagram: "@hadipermata",
    },

    /* =====================================================
           WEDDING
           ===================================================== */

    wedding: {
      title: event.name || "The Wedding Reception Of",

      date: formatDate(eventDate),

      day: formatDay(eventDate),

      time: formatTime(eventDate),

      venue: event.location || "-",

      address: guest.alamat_lengkap || buildAddress(guest),

      calendar: {
        start: formatCalendarDate(eventDate),

        end: formatCalendarDate(
          new Date(eventDate.getTime() + 4 * 60 * 60 * 1000),
        ),

        timezone: "Asia/Jakarta",
      },
    },

    /* =====================================================
           COVER
           ===================================================== */

    cover: event.cover_image || "/images/cover-mobile.jpg",

    /* =====================================================
           GUEST
           ===================================================== */

    guest: {
      id: guest.id,

      name: guest.nama_undangan,

      uniqueCode: guest.unique_code,

      phone: guest.no_telp,

      isOpened: guest.is_opened,

      openedAt: guest.opened_at,

      isPresent: guest.is_present,

      presentAt: guest.present_at,

      attendanceStatus: guest.attendance_status,

      guestCount: guest.guest_count,

      notes: guest.notes,
    },

    /* =====================================================
           EVENT RAW DATA
           ===================================================== */

    event: {
      id: event.id,

      slug: event.slug,

      kode: event.kode_event,

      description: event.description,
    },

    /* =====================================================
           STATIC CONTENT
           
           Sementara tetap seperti data lama.
           ===================================================== */

    gallery: [],

    story: [],
  };
}

/* ================================================================
   DATE
   ================================================================ */

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  }).format(date);
}

/* ================================================================
   DAY
   ================================================================ */

function formatDay(date: Date) {
  return new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    timeZone: "Asia/Jakarta",
  }).format(date);
}

/* ================================================================
   TIME
   ================================================================ */

function formatTime(date: Date) {
  return (
    new Intl.DateTimeFormat("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Jakarta",
    })
      .format(date)
      .replace(".", ":") + " WIB"
  );
}

/* ================================================================
   GOOGLE CALENDAR DATE
   ================================================================ */

function formatCalendarDate(date: Date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Jakarta",

    year: "numeric",

    month: "2-digit",

    day: "2-digit",

    hour: "2-digit",

    minute: "2-digit",

    hourCycle: "h23",
  }).formatToParts(date);

  const get = (type: string) =>
    parts.find((part) => part.type === type)?.value || "";

  return (
    `${get("year")}` +
    `${get("month")}` +
    `${get("day")}` +
    `T` +
    `${get("hour")}` +
    `${get("minute")}` +
    `00`
  );
}

/* ================================================================
   ADDRESS
   ================================================================ */

function buildAddress(guest: InvitationApiResponse["data"]["guest"]) {
  const parts = [
    guest.alamat_lengkap,
    guest.desa,
    guest.kecamatan,
    guest.kabupaten,
    guest.provinsi,
  ];

  return parts.filter(Boolean).join(", ");
}
