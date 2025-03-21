import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/context/SidebarContext";
import MainLayout from "@/components/layout/MainLayout";
import { ThemeProvider } from "@/provider/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vanguard | Lowe's Service Alert Layer",
  description: "Event Orchestration System",
  icons: [ "/logo.svg"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
        <SidebarProvider>
          <MainLayout>
        {children}
          </MainLayout>
        </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
