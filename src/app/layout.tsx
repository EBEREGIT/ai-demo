import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ContextProviders from "./context";

const inter = Inter({ subsets: ["latin"] });

export const runtime = "edge";

export const metadata: Metadata = {
  title: "AI Demo",
  description: "Accepts a Valid URL and provides feedback based on the URL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProviders>{children}</ContextProviders>
      </body>
    </html>
  );
}
