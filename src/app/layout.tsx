import type { Metadata } from "next";
import { Work_Sans, Fraunces, Fredoka } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const fredoka = Fredoka({
  variable: "--font-display-alt",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chasse au Trésor",
  description: "Chasse au trésor géolocalisée en équipe",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${workSans.variable} ${fraunces.variable} ${fredoka.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
