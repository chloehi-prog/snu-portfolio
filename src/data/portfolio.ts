export const profile = {
  name: "황세연",
  role: "GRADUATE STUDENT",
  location: "Seoul, South Korea",
  bio: "서울대학교 언론정보학과를 졸업하고 글로벌 엔터테인먼트 기업에서 아티스트 마케팅 실무를 경험했습니다. 이를 바탕으로 현재 언론정보학과 석사과정에서 K-Pop 팬덤 연구를 진행 중입니다. 실무 경험과 학문적 접근을 조합하여 문화 현상과 트렌드를 분석하고 있으며, 데이터 기반 연구와 국내외 다양한 협업에 관심을 가지고 있습니다.",
  keywords: ["Research", "K-Pop", "Media", "Marketing"],
};

export const contact = {
  phone: "010-2208-2320",
  email: "chloehi@snu.ac.kr",
};

export type WorkExperience = {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  bgColor: string;
  accentColor: string;
};

export const workExperience: WorkExperience[] = [
  {
    id: "jyp",
    company: "JYP엔터테인먼트",
    role: "마케팅팀",
    period: "2025.03 – 2025.07",
    description:
      "아티스트 앨범 및 콘텐츠 프로모션, 글로벌 협업, 경쟁사 리서치 등 마케팅 전반을 담당함.",
    bgColor: "#1e293b",
    accentColor: "#3b82f6",
  },
  {
    id: "bighit",
    company: "BIGHIT MUSIC",
    role: "마케팅1팀 · 앨범프로모션1파트",
    period: "2023.03 – 2024.07",
    description:
      "BTS 등 아티스트의 중장기·해외 마케팅 전략 수립 및 앨범/미디어 프로모션 실무를 수행함.",
    bgColor: "#e8e8e8",
    accentColor: "#171717",
  },
  {
    id: "naver",
    company: "네이버",
    role: "Service Planning팀 · 인턴",
    period: "2021.07 – 2021.09",
    description:
      "네이버 NOW. 서비스 분석 및 Z세대 타겟 콘텐츠 기획 업무를 경험함.",
    bgColor: "#f5f5f0",
    accentColor: "#03c75a",
  },
  {
    id: "snow",
    company: "스노우",
    role: "카메라컨텐츠기획팀 · 인턴",
    period: "2020.07 – 2020.10",
    description:
      "SNOW 앱 내 카메라 콘텐츠 및 트렌드 리포트 기획에 참여함.",
    bgColor: "#fafafa",
    accentColor: "#ff6b9d",
  },
];

export const skills = [
  { name: "Notion", level: 5 },
  { name: "Cursor", level: 5 },
  { name: "Claude", level: 5 },
  { name: "Gemini", level: 5 },
];

export const education = {
  school: "서울대학교 언론정보학과",
  major: "연합전공 정보문화학",
  period: "2017.03 – 2022.08",
};

export const languages = [
  { name: "Korean", level: 5 },
  { name: "English", level: 4 },
  { name: "Japanese", level: 2 },
];
