import type { Metadata } from "next";
import { Roboto, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dylan Buchanan",
  description: "Dylan Buchanan's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
        <body
            className={`${roboto.variable} antialiased`}
        >
            <header>
                <Navbar/>
            </header>
            {children}
        </body>
    </html>
  );
}
