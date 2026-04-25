import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

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
    <html lang="en">
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
