import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Understated serif with soft, warm character.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

// Quiet, warm-neutral sans.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "nails by eekah — quiet neutral nail studio, Mississauga",
  description:
    "less, but better. considered nail sets, gel and extensions by eekah in malton, mississauga. a quiet, neutral studio where the nails are the only colour.",
  openGraph: {
    title: "nails by eekah — quiet neutral nail studio",
    description: "considered nail sets, gel & extensions by eekah in mississauga. less, but better.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} antialiased`}>
      <body className="min-h-screen bg-oat font-sans text-ink">
        <Nav />
        <main className="relative z-[2]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
