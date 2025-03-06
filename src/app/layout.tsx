import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PUMPMAX Explorer",
  description: "PUMPMAX Explorer is a explorer for pumpmax protocol.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-200 dark:bg-gray-900`}>
        <Navbar />
        <main className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}