import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial"; // Add this import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SAMUEL SORETIRE | Crypto Growth & Trading Strategies",
  description: "I help individuals and businesses grow through proven trading techniques, mentorship, and actionable insights in crypto and forex markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingSocial /> {/* Add this component */}
      </body>
    </html>
  );
}