import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maxime Violette",
  description: "This is my professional portfolio. Feel free to conctact me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden'}>
        <StarCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
