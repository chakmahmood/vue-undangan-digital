import gallery0 from "../assets/images/aqadan.jpeg";
import gallery1 from "../assets/images/galeri1.jpeg";
import gallery2 from "../assets/images/galeri2.jpeg";
import gallery3 from "../assets/images/galeri3.jpeg";
import gallery4 from "../assets/images/galeri4.jpeg";
import gallery5 from "../assets/images/galeri5.jpeg";
import hadi from "../assets/images/hadi.jpg";
import diyan from "../assets/images/diyan.jpg";

export const invitation = {
  groom: {
    name: "Hadi",
    fullName: "Hadi Rahmat Prasojo",
    instagram: "@hadirahmatprasojo",
  },

  bride: {
    name: "Diyan",
    fullName: "Diyan Lestari",
    instagram: "@diyanlestari",
  },

  wedding: {
    title: "The Wedding Reception Of",

    date: "27 Agustus 2026",

    day: "Kamis",

    time: "08.00 WIB - Selesai",

    venue: "Kediaman Mempelai Pria",

    address:
      "Dusun Sidoharjo Desa Sumber Suko Jaya \n Kec. Belitang Kab. Ogan Komering Ulu Timur, Prov. Sumatra Selatan",

    calendar: {
      start: "20260827T080000",
      end: "20260827T140000",
      timezone: "Asia/Jakarta",
    },
  },

  gallery: [
    gallery1,
    gallery0,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    hadi,
    diyan,
  ],

  story: [
    {
      year: "2021",
      title: "Pertama Bertemu",
      description:
        "Sebuah pertemuan sederhana yang ternyata menjadi awal dari perjalanan panjang kami.",
    },
    {
      year: "2023",
      title: "Mulai Serius",
      description:
        "Kami mulai mengenal satu sama lain lebih dalam dan memutuskan untuk melangkah bersama.",
    },
    {
      year: "2026",
      title: "The Wedding",
      description:
        "Dengan penuh rasa syukur, kami mengundang Anda untuk menjadi bagian dari hari bahagia kami.",
    },
  ],
};
