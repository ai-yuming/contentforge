import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ContentForge — AI-Powered Multi-Platform Content Factory",
  description:
    "Input a topic, pass McKinsey-grade evaluation, auto-generate content for Xiaohongshu, YouTube, X, and Instagram. Quality-gated, multi-platform, fully automated.",
  keywords: [
    "ContentForge",
    "AI content",
    "multi-platform",
    "content factory",
    "McKinsey",
    "IdeaGate",
  ],
  openGraph: {
    title: "ContentForge — AI-Powered Multi-Platform Content Factory",
    description:
      "Quality-gated content production for Xiaohongshu, YouTube, X, Instagram.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
