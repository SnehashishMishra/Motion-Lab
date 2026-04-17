import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Motion Lab",
  description: "Advanced dynamic UI components powered by Framer Motion",
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
      <body className="min-h-screen flex flex-col bg-neutral-900 text-white selection:bg-cyan-500/30">
        <Navbar />

        <div className="flex flex-1 w-full">
          {/* Sidebar sits nicely alongside main content */}
          <SideBar />

          <div className="flex flex-col flex-1 w-full min-w-0">
            {/* Top padding ensures content starts below the transparent Navbar */}
            <main className="flex-1 pt-24 p-8 md:py-12 overflow-x-hidden">
              {children}
            </main>

            <footer className="bg-neutral-950 border-t border-white/5 py-6 mt-auto relative z-10">
              <div className="container mx-auto px-4">
                <p className="text-center text-neutral-500 text-sm">
                  © {new Date().getFullYear()} Motion Lab. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
