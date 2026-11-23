import type { Metadata, Viewport } from "next";
import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#F6F3ED",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Vincent Adie | Content Writer & Copywriter",
  description:
    "Explore the writing, essays and professional experience of Vincent Kishatin-unimye Adie, a content writer and copywriter based in Calabar, Nigeria.",
  keywords: [
    "Vincent Kishatin-unimye Adie",
    "Vincent Adie",
    "Content Writer",
    "Copywriter",
    "Organizational Behaviour",
    "Workplace Culture",
    "Calabar",
    "Nigeria",
    "Essayist",
    "AIESEC",
  ],
  authors: [{ name: "Vincent Kishatin-unimye Adie" }],
  creator: "Vincent Kishatin-unimye Adie",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://vincentadie.com",
    title: "Vincent Adie | Content Writer & Copywriter",
    description:
      "Explore the writing, essays and professional experience of Vincent Kishatin-unimye Adie, a content writer and copywriter based in Calabar, Nigeria.",
    siteName: "Vincent Adie Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Vincent Adie | Content Writer & Copywriter",
    description:
      "Explore the writing, essays and professional experience of Vincent Kishatin-unimye Adie, a content writer and copywriter based in Calabar, Nigeria.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F6F3ED] text-[#292724] font-sans antialiased selection:bg-[#713B43] selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
