import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MSWComponent from "./_component/MSWComponent";
import AuthSession from "./_component/AuthSession";
import { SessionProvider } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "X",
  description: "X 클론",
};

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MSWComponent />
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
