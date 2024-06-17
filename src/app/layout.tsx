import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ContextProviders from "./context";

const inter = Inter({ subsets: ["latin"] });

export const runtime = "edge";

export const metadata: Metadata = {
  title: "AI Architect",
  description: "Hakim's Assistant. Ask Anything. Get a feedback!",
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
