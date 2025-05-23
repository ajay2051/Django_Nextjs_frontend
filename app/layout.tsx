import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
      <ReduxProvider>
        {children}
      </ReduxProvider>
      </body>
    </html>
  );
}
