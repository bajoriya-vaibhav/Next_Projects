import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import NavbarComponent from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reddit Clone",
  description: "Reddit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto px-4 ">
          <Providers>
            <NavbarComponent/>
            <div>{children}</div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
