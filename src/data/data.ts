import { dataProps } from "../types/type"
import { CLIENT_2, CLIENT_3, CLIENT_4, CLIENT_5, CLIENT_6, CLIENT_7, CLIENT_8, CLIENT_9, CLIENT_10, CLIENT_11, CLIENT_12, CLIENT_13, VID_1, VID_2,VID_3, VID_4, VID_5, WEB_1, WEB_2, WEB_3, iF_1, iF_2, iF_3, iF_4, SOS_1, SOS_2, SOS_3, SOS_4, SOS_5, VID_6, VID_7, VID_8, VID_9, VID_10, VID_11, VID_12, VID_13, VID_14, VID_15, VID_16, VID_17, VID_18, VID_19, VID_20, LOGO_1, LOGO_2, LOGO_3, LOGO_4, LOGO_5} from "../assets/assets";
import { InstagramLogo, FacebookLogo, YoutubeLogo, TiktokLogo, TwitterLogo, Hamburger } from "phosphor-react";

export const navLinks: dataProps[] = [
  {
    id: 1,
    nav: "About",
    link: "about",
  },
  {
    id: 2,
    nav: "Services",
    link: "services",
  },
  {
    id: 3,
    nav: "Clients",
    link: "clients",
  },
  {
    id: 4,
    nav: "Portfolio",
    link: "portfolio",
  },
  {
    id: 5,
    nav: "Location",
    link: "footer",
  },
];


export const contact:dataProps[]= [
  {
    id: 1,
    nav: "xedia.id@gmail.com",
    link: ""
  },
  {
    id: 2,
    nav: "+62 823-2871-3200",
    link: ""
  },
  {
    id: 3,
    nav: "Jl. Pandan Biru III No.03 Blok C, Pandanaran Hills, Mangunharjo, Kec. Tembalang, Kota Semarang, Jawa Tengah 50272",
    link: "https://maps.app.goo.gl/6FQFcmU7e8h588Tq7"
  },
]

export const social:dataProps[] = [
  {
    id: 1,
    nav: "instagram",
    link: "https://www.instagram.com/xediamedia/",
    icon: InstagramLogo,
  },
  {
    id: 2,
    nav: "facebook",
    link: "https://www.facebook.com/profile.php?id=61568549061377",
    icon: FacebookLogo,
  },
  {
    id: 3,
    nav: "tiktok",
    link: "https://www.tiktok.com/@xediamedia?_t=8qfKRJvlZGT&_r=1",
    icon: TiktokLogo,
  },
  {
    id: 4,
    nav: "youtube",
    link: "https://www.youtube.com/@xediamedia?app=desktop",
    icon: YoutubeLogo,
  },
  {
    id: 5,
    nav: "x / Twitter",
    link: "https://x.com/xediamedia",
    icon: TwitterLogo,
  },
  {
    id: 6,
    nav: "snack",
    link: "https://www.snackvideo.com/@xediamedia?kpn=KWAI_BULLDOG&share_device_id=3D579FFC-9F4F-440F-B9D0-FF835EB3A4FE&share_item_type=profile&share_id=3D579FFC-9F4F-440F-B9D0-FF835EB3A4FE_1729314071517&language=en-ID&share_uid=150001647117076&fid=150001647117076&cc=COPY_LINK&timestamp=1729314071517&authorKwaiId=xediamedia&translateKey=share_profile_default_word&shareBucket=in&pwa_source=share&shareCountry=IDN&shareBiz=profile&share_item_info=%40xediamedia&ept=v2&short_key=vjdi1uqb&PWA_share_N_string=20&request_source=1001&share_redirect_switch_choice=pwa",
    icon: Hamburger,
  },
]

export const servicesData: dataProps[] = [
  {
    id: 1,
    title: "Video Content Production",
    desc: "Membuat ide Konten untuk 12 Video, Tidak ada batasan durasi, Produksi dan editing oleh profesional videographer",
    link: "video-content-production",
    img: "",
    price: 6428571,
    portfolio: [ 
      { thumbnail: VID_1 },
      { thumbnail: VID_2 },
      { thumbnail: VID_3 },
      { thumbnail: VID_4 },
      { thumbnail: VID_5 },
      { thumbnail: VID_6 },
      { thumbnail: VID_7 },
      { thumbnail: VID_8 },
      { thumbnail: VID_9 },
      { thumbnail: VID_10 },
      { thumbnail: VID_11 },
      { thumbnail: VID_12 },
      { thumbnail: VID_13 },
      { thumbnail: VID_14 },
      { thumbnail: VID_15 },
      { thumbnail: VID_16 },
      { thumbnail: VID_17 },
      { thumbnail: VID_18 },
      { thumbnail: VID_19 },
      { thumbnail: VID_20 },
    ]
  },
  {
    id: 2,
    title: "Video Company Profile",
    desc: "Director, Konsep Video, Take Video Camera Profesional & videographer, Drone & Profesional Drone Pilot, Voice Over, Brand Identity, Talent, Editing Profesional Editor",
    link: "video-company-profile",
    img: "",
    price: 21428571,
    portfolio: [ 
      { thumbnail: VID_1 },
      { thumbnail: VID_2 },
      { thumbnail: VID_3 },
      { thumbnail: VID_4 },
      { thumbnail: VID_5 },
      { thumbnail: VID_6 },
      { thumbnail: VID_7 },
      { thumbnail: VID_8 },
      { thumbnail: VID_9 },
      { thumbnail: VID_10 },
      { thumbnail: VID_11 },
      { thumbnail: VID_12 },
      { thumbnail: VID_13 },
      { thumbnail: VID_14 },
      { thumbnail: VID_15 },
      { thumbnail: VID_16 },
      { thumbnail: VID_17 },
      { thumbnail: VID_18 },
      { thumbnail: VID_19 },
      { thumbnail: VID_20 },
    ]
  },
  {
    id: 3,
    title: "Logo Design Services",
    desc: "logo Guidelines, Color Guidelines, Typography, Logo Application",
    link: "logo-design-services",
    img: "",
    price: 7142857,
    portfolio: [ 
      { thumbnail: LOGO_1 },
      { thumbnail: LOGO_2},
      { thumbnail: LOGO_3 },
      { thumbnail: LOGO_4 },
      { thumbnail: LOGO_5 },
      { thumbnail: LOGO_1 },
      { thumbnail: LOGO_2},
      { thumbnail: LOGO_3 },
      { thumbnail: LOGO_4 },
      { thumbnail: LOGO_5 },
      { thumbnail: LOGO_1 },
      { thumbnail: LOGO_2},
      { thumbnail: LOGO_3 },
      { thumbnail: LOGO_4 },
      { thumbnail: LOGO_5 },
      { thumbnail: LOGO_1 },
      { thumbnail: LOGO_2},
      { thumbnail: LOGO_3 },
      { thumbnail: LOGO_4 },
      { thumbnail: LOGO_5 },
    ]
  },
  {
    id: 4,
    title: "Social Media Management",
    desc: "Upload Content, Copywriting, Story Sosmed dan Whatsapp setiap hari, Respon Kostumer Aktif di platform (Instagram, Youtube, Facebook, Twitter dan Snack Video), Menyajikan Monthly report dari project yang sudah selesai untuk bahan evaluasi",
    link: "social-media-management",
    img: "",
    price: 2857142,
    portfolio: [ 
      { thumbnail: SOS_1 },
      { thumbnail: SOS_2 },
      { thumbnail: SOS_3 },
      { thumbnail: SOS_4 },
      { thumbnail: SOS_5 },
      { thumbnail: SOS_1 },
      { thumbnail: SOS_2 },
      { thumbnail: SOS_3 },
      { thumbnail: SOS_4 },
      { thumbnail: SOS_5 },
      { thumbnail: SOS_1 },
      { thumbnail: SOS_2 },
      { thumbnail: SOS_3 },
      { thumbnail: SOS_4 },
      { thumbnail: SOS_5 },
      { thumbnail: SOS_1 },
      { thumbnail: SOS_2 },
      { thumbnail: SOS_3 },
      { thumbnail: SOS_4 },
      { thumbnail: SOS_5 },
    ]
  },
  {
    id: 5,
    title: "Website Development",
    desc: "Landing Page or Website Complex, Include Domain dan Hosting, Free 1 tahun maintenance",
    link: "website-development",
    img: "",
    price: 5000000,
    portfolio: [ 
      { thumbnail: WEB_1 },
      { thumbnail: WEB_2 },
      { thumbnail: WEB_3 },
      { thumbnail: WEB_1 },
      { thumbnail: WEB_2 },
      { thumbnail: WEB_3 },
      { thumbnail: WEB_1 },
      { thumbnail: WEB_2 },
      { thumbnail: WEB_3 },
      { thumbnail: WEB_1 },
      { thumbnail: WEB_2 },
      { thumbnail: WEB_3 },
      { thumbnail: WEB_1 },
      { thumbnail: WEB_2 },
      { thumbnail: WEB_3 },
    ]
  },
  {
    id: 6,
    title: " Feed Design",
    desc: "Photography Product/Service oleh Profesional Photographer, Membuat 12 Feeds oleh profesional Designer ",
    link: "instagram-feed-design",
    img: "",
    price: 5000000,
    portfolio: [ 
      { thumbnail: iF_1 },
      { thumbnail: iF_2},
      { thumbnail: iF_3 },
      { thumbnail: iF_4 },
      { thumbnail: iF_1 },
      { thumbnail: iF_2},
      { thumbnail: iF_3 },
      { thumbnail: iF_4 },
      { thumbnail: iF_1 },
      { thumbnail: iF_2},
      { thumbnail: iF_3 },
      { thumbnail: iF_4 },
      { thumbnail: iF_1 },
      { thumbnail: iF_2},
      { thumbnail: iF_3 },
      { thumbnail: iF_4 },
    ]
  },
  {
    id: 7,
    title: "Advertising Services",
    desc: "Minimum Anggaran 1 juta, Consult target costumer dan report, Durasi mulai dari 3 hari, Iklan di platform Instagram, Tiktok, Youtube, Facebook, dan Snack Video",
    link: "advertising-services",
    img: "",
    // price: 2000000,
    portfolio: [ 
      { thumbnail: SOS_1 },
      { thumbnail: SOS_2 },
      { thumbnail: SOS_3 },
      { thumbnail: SOS_4 },
      { thumbnail: SOS_5 },
      { thumbnail: SOS_1 },
      { thumbnail: SOS_2 },
      { thumbnail: SOS_3 },
      { thumbnail: SOS_4 },
      { thumbnail: SOS_5 },
      { thumbnail: SOS_1 },
      { thumbnail: SOS_2 },
      { thumbnail: SOS_3 },
      { thumbnail: SOS_4 },
      { thumbnail: SOS_5 },
      { thumbnail: SOS_1 },
      { thumbnail: SOS_2 },
      { thumbnail: SOS_3 },
      { thumbnail: SOS_4 },
      { thumbnail: SOS_5 },
    ]
  },
  {
    id: 8,
    title: "Online Media Publication",
    desc: "Media Pemberitaan Lokal atau Nasional",
    link: "online-media-publication",
    img: "",
    price: 714285,
    portfolio: [ 
      { thumbnail: iF_1 },
      { thumbnail: iF_2},
      { thumbnail: iF_3 },
      { thumbnail: iF_4 },
      { thumbnail: iF_1 },
      { thumbnail: iF_2},
      { thumbnail: iF_3 },
      { thumbnail: iF_4 },
      { thumbnail: iF_1 },
      { thumbnail: iF_2},
      { thumbnail: iF_3 },
      { thumbnail: iF_4 },
      { thumbnail: iF_1 },
      { thumbnail: iF_2},
      { thumbnail: iF_3 },
      { thumbnail: iF_4 },
    ]
  },
  {
    id: 9,
    title: "Digital Home Creation",
    desc: "Marketplace (Shoope, Tokopedia, Tiktok Shop), Akun Media Social (Instagram, Tiktok, Twitter, Facebook, Snack Video, Youtube)",
    link: "digital-home-creation",
    img: "",
    price: 714285,
    portfolio: [ 
      { thumbnail: VID_1 },
      { thumbnail: VID_2 },
      { thumbnail: VID_3 },
      { thumbnail: VID_4 },
      { thumbnail: VID_5 },
      { thumbnail: VID_6 },
      { thumbnail: VID_7 },
      { thumbnail: VID_8 },
      { thumbnail: VID_9 },
      { thumbnail: VID_10 },
      { thumbnail: VID_11 },
      { thumbnail: VID_12 },
      { thumbnail: VID_13 },
      { thumbnail: VID_14 },
      { thumbnail: VID_15 },
      { thumbnail: VID_16 },
      { thumbnail: VID_17 },
      { thumbnail: VID_18 },
      { thumbnail: VID_19 },
      { thumbnail: VID_20 },
    ]
  },
  {
    id: 10,
    title: "Marketing Administration",
    desc: "Aktif Respon pertanyaan yang masuk ke WA atau nomor Admin, Bertanggung Jawab mem-followup calon costumer yang berpotensi hingga dealing/closing",
    link: "marketing-administration",
    price: 2142857,
    img: "",
    portfolio: [ 
      { thumbnail: SOS_1 },
      { thumbnail: SOS_2 },
      { thumbnail: SOS_3 },
      { thumbnail: SOS_4 },
      { thumbnail: SOS_5 },
      { thumbnail: SOS_1 },
      { thumbnail: SOS_2 },
      { thumbnail: SOS_3 },
      { thumbnail: SOS_4 },
      { thumbnail: SOS_5 },
      { thumbnail: SOS_1 },
      { thumbnail: SOS_2 },
      { thumbnail: SOS_3 },
      { thumbnail: SOS_4 },
      { thumbnail: SOS_5 },
      { thumbnail: SOS_1 },
      { thumbnail: SOS_2 },
      { thumbnail: SOS_3 },
      { thumbnail: SOS_4 },
      { thumbnail: SOS_5 },
    ]
  },
];


export const clients = [
  {
    id: 1,
    images: [CLIENT_5, CLIENT_3, CLIENT_4, CLIENT_10,],
  },
  {
    id: 2,
    images: [CLIENT_2, CLIENT_7, CLIENT_8, CLIENT_9,],
  },
  {
    id: 3,
    images: [CLIENT_6, CLIENT_11, CLIENT_12, CLIENT_13,],
  },
];

export const news:dataProps[] = [
  {
    id: 1,
    title: "Leverate Group Raih Penghargaan Emas di 2 Kategori Mob-Ex Award 2023",
    desc: "Leverate Group raih penghargaan emas di Mob-Ex Awards 2023. Mob-Ex Awards adalah ajang apresiasi terhadap kampanye yang paling efektif, kreatif, dan inovatif.",
    source: "detikFinance",
    date: "Senin, 28 Aug 2023 13:19 WIB"
  },
  {
    id: 2,
    title: "Wavemaker Indonesia Tunjuk Dwaraknath Naidu Jadi Chief Growth Officer",
    desc: "Ia akan bertanggung jawab untuk mendorong pertumbuhan Wavemaker melalui akuisisi bisnis baru dan membangun berbagai produk baru",
    source: "detikFinance",
    date: "Jumat, 04 Des 2020 17:01 WIB"
  },
  {
    id: 3,
    title: "Daftar Agensi K-Pop Pendapatannya Bikin Kaget!",
    desc: "Pada kuartal I 2020 total pendapatan SM Entertainment tercatat 144,7 miliar won atau setara dengan Rp 1,86 triliun dengan asumsi kurs Rp 12,84. SM Entertainment didirikan pada 1995 oleh Lee Soo Man",
    source: "detikFinance",
    date: "Minggu, 11 Okt 2020 16:31 WIB"
  },
  {
    id: 4,
    title: "Iklan Digital dan Press Release, Promosi Tepat di Masa Pandemi Corona",
    desc: "Bisnis jasa iklan (periklanan), media maupun rekanan media seperti advertising agency (biro iklan) juga menghadapi badai pandemi COVID-19",
    source: "detikFinance",
    date: "Jumat, 26 June 2020 21:04 WIB"
  },
  {
    id: 5,
    title: "Pasang Iklan adalah Investasi yang Menguntungkan bagi Brand",
    desc: "Dalam dunia bisnis, berinvestasi sangat penting, investasi tidak selamanya soal uang, emas atau saham, tetapi juga perihal pemasangan iklan",
    source: "detikFinance",
    date: "Selasa, 17 Des 2019 00:00 WIB"
  },
]


