import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zenith - AI-Powered Project Management & Growth Platform",
  description: "It's an all in one SaaS platform for project management, team collaboration, product analysis, and scaling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap" 
          rel="stylesheet"
        />
        <link href="https://db.onlinewebfonts.com/c/2bf16335573007d828f4197c2b884c04?family=Satoshi" rel="stylesheet"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" >{children}</ThemeProvider>
      </body>
    </html>
  );
}
