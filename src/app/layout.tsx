import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "황세연 | Portfolio",
  description:
    "서울대학교 언론정보학과 석사과정. 미디어·문화 연구 및 글로벌 마케팅 경험을 담은 포트폴리오.",
  openGraph: {
    title: "황세연 | Portfolio",
    description:
      "서울대학교 언론정보학과 석사과정. 미디어·문화 연구 및 글로벌 마케팅 경험을 담은 포트폴리오.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
