import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { NavigationComponent, FooterComponent } from "@/components";

const fontFamily = Roboto({
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
  weight: ["100", "300", "400", "500", "700", "900"],
})

export const metadata: Metadata = {
  title: {
    default: "Joseph De Leon | Web Developer",
    template: "%s | Joseph De Leon",
  },
  description: "Web developer based in the Philippines.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fontFamily.className} content-grid relative`}>
        <NavigationComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  )
}
