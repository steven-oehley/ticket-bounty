import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

import { homePath, ticketsPath } from "@/constants/paths";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ticket Bounty",
  description: "Complete tickets get loot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="py-24 px-8">
          <nav className="supports-backdrop-blur:bg-background/60 fixed left-0 top-0 right-0 z-10 py-4 px-8 bg-background/80">
            <ul className="flex space-x-4">
              <li>
                <Link href={homePath}>Home</Link>
              </li>
              <li>
                <Link href={ticketsPath}>Tickets</Link>
              </li>
            </ul>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
