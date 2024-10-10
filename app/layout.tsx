import type { Metadata } from "next";
import { geistSans, geistMono } from "@/lib/utils";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Blockchain-Based ROSCA",
  description: "Blockchain-Based ROSCA (Rotating Savings and Credit Associations)",
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
