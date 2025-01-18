import "./globals.css";

import { LucideTicket } from "lucide-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
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
            <div className="flex space-x-4">
              <Link
                className={buttonVariants({ variant: "ghost" })}
                href={homePath}
              >
                <LucideTicket />
                <h1 className="text-lg font-semibold">Ticket Bounty</h1>
              </Link>

              <Link
                className={buttonVariants({ variant: "ghost" })}
                href={ticketsPath}
              >
                Tickets
              </Link>
            </div>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
