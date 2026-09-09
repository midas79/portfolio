import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steam Community :: Dionisius Surya Jaya",
  description: "Dionisius Surya Jaya — Machine Learning & Software Engineer Profile",
  icons: {
    icon: "/assets/images/steamcommunity.com/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
