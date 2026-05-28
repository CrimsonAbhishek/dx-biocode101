import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CinematicBackground from "@/components/ui/cinematic-background";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "DX BIOCODE | Advanced Diagnostic Solutions",
  description:
    "DX BIOCODE delivers advanced immunofluorescence diagnostic solutions for modern healthcare workflows.",
  openGraph: {
    title: "DX BIOCODE | Advanced Diagnostic Solutions",
    description: "Pioneering portable quantitative immunofluorescence analyzers.",
    url: "https://dxbiocode.com",
    siteName: "DX BIOCODE",
    images: [
      {
        url: "/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "DX BIOCODE Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DX BIOCODE | Advanced Diagnostic Solutions",
    description: "Pioneering portable quantitative analyzers.",
    images: ["/images/logo.svg"],
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative text-slate-900 dark:text-slate-200 transition-colors duration-300">
        <ThemeProvider>
          <CinematicBackground />
          <div className="relative z-10">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}