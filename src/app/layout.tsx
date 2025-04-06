import type { Metadata } from "next";
import { Poppins } from "next/font/google"; 
import "./globals.css";
import Scroll from "@/components/Scroll";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"], 
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sublimax.vr",
  description: "Sublimaciones Villa Regina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}antialiased`}
      >
        {children}
      <Scroll />
      </body>
    </html>
  );
}
