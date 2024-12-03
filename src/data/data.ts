import { dataProps } from "../types/type"
import { CLIENT_2, CLIENT_3, CLIENT_4, CLIENT_5, CLIENT_6, CLIENT_7, CLIENT_8, CLIENT_9, CLIENT_10, CLIENT_11, CLIENT_12, CLIENT_13,} from "../assets/assets";
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
    nav: "Copy Address",
    link: ""
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
    nav: "snack video",
    link: "https://www.snackvideo.com/@xediamedia?kpn=KWAI_BULLDOG&share_device_id=3D579FFC-9F4F-440F-B9D0-FF835EB3A4FE&share_item_type=profile&share_id=3D579FFC-9F4F-440F-B9D0-FF835EB3A4FE_1729314071517&language=en-ID&share_uid=150001647117076&fid=150001647117076&cc=COPY_LINK&timestamp=1729314071517&authorKwaiId=xediamedia&translateKey=share_profile_default_word&shareBucket=in&pwa_source=share&shareCountry=IDN&shareBiz=profile&share_item_info=%40xediamedia&ept=v2&short_key=vjdi1uqb&PWA_share_N_string=20&request_source=1001&share_redirect_switch_choice=pwa",
    icon: Hamburger,
  },
]

export const servicesData: dataProps[] = [
  {
    id: 1,
    title: "Video Content Production",
    desc: "We create impactful videos that tell your brand’s story and captivate your audience",
    link: "",
    img: "",
  },
  {
    id: 2,
    title: "Video Company Profile",
    desc: "We craft compelling company profiles to showcase your brand’s mission and values",
    link: "",
    img: "",
  },
  {
    id: 3,
    title: "Logo Design Services",
    desc: "We design unique logos that strengthen brand identity and recognition",
    link: "",
    img: "",
  },
  {
    id: 4,
    title: "Social Media Management",
    desc: "We grow your social media presence with engaging content and analytics",
    link: "",
    img: "",
  },
  {
    id: 5,
    title: "Website Development",
    desc: "We create user-friendly, SEO-optimized websites to convert visitors into clients",
    link: "",
    img: "",
  },
  {
    id: 6,
    title: "Instagram Feed Design",
    desc: "We design cohesive Instagram feeds to enhance your brand’s visual appeal",
    link: "",
    img: "",
  },
  {
    id: 7,
    title: "Advertising Services",
    desc: "We deliver effective digital ad campaigns that maximize your brand’s reach",
    link: "",
    img: "",
  },
  {
    id: 8,
    title: "Online Media Publication",
    desc: "We connect your brand with the right audience through strategic media campaigns",
    link: "",
    img: "",
  },
  {
    id: 9,
    title: "Digital Home Creation",
    desc: "We build engaging digital platforms to strengthen your online presence",
    link: "",
    img: "",
  },
  {
    id: 10,
    title: "Marketing Administration",
    desc: "We provide expert support to streamline your marketing operations",
    link: "",
    img: "",
  },
];

export const clients = [
  {
    id: 1,
    images: [CLIENT_2, CLIENT_3, CLIENT_4, CLIENT_5,],
  },
  {
    id: 2,
    images: [CLIENT_6, CLIENT_7, CLIENT_8, CLIENT_9,],
  },
  {
    id: 3,
    images: [CLIENT_10, CLIENT_11, CLIENT_12, CLIENT_13,],
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


