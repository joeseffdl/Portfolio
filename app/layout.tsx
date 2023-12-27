import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { NavigationComponent, FooterComponent } from "@/components";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
});

export const metadata: Metadata = {
  title: "Joseph De Leon | Web Developer",
  description: "Web developer based in the Philippines.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} content-grid`}>
        <NavigationComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
