import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phytoguard - AI-Powered Plant Disease Detection",
  description: "Detect plant diseases early with our advanced AI technology. Upload a photo and get instant, accurate disease diagnosis and treatment recommendations.",
  keywords: "plant disease detection, AI, agriculture, farming, crop protection, plant health",
  authors: [{ name: "Phytoguard Team" }],
  openGraph: {
    title: "Phytoguard - AI-Powered Plant Disease Detection",
    description: "Detect plant diseases early with our advanced AI technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
