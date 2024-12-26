import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AosComponent from "@/components/Aos";
import "aos/dist/aos.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Surf_Battles",
  description: "A Counter Strike Surf website for battles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100vh] w-[100vw] bg-gray-950 overflow-x-clip`}
        
      >
        <AosComponent/>
        {children}
      </body>
    </html>
  );
}
