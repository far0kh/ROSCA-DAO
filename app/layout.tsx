import type { Metadata } from "next";
import { geistSans, geistMono } from "@/lib/utils";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster"

import { ClerkProvider } from '@clerk/nextjs'

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
    <ClerkProvider>
      <html
        lang='en'
        className='flex min-h-screen flex-col scroll-smooth antialiased'
        suppressHydrationWarning
      >
        <body className={`flex flex-col min-h-screen min-w-fit md:min-w-full ${geistSans.variable} ${geistMono.variable}`}>
          <main className='flex max-w-full mx-auto my-auto'>{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
