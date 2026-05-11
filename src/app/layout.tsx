import "./globals.css";
import type { Metadata } from "next";
import SmoothScroll from "../app/components/SmoothScroll";
import CursorGlow from "../app/components/CursorGlow";
import Loader from "./components/Loader";
import ParticlesBackground from "./components/ParticlesBackground";

export const metadata: Metadata = {
  title: "Moksha Bhayani Portfolio",
  description: "Modern Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ParticlesBackground />
        <Loader />
        <SmoothScroll />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}