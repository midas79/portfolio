import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-aeonik",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-input",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Dionisius Surya Jaya — Software Engineer & Machine Learning",
  description:
    "Portfolio of Dionisius Surya Jaya, Computer Science student at Universitas Brawijaya specializing in Full-Stack Web Development, Data Analytics, and Machine Learning Systems.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="font-[family-name:var(--font-aeonik)] font-normal bg-[#101010] text-[#f3f3f3]">
        {children}
      </body>
    </html>
  );
}
