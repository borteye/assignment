import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import NavBar from "./components/layout/nav-bar";
import Footer from "./components/layout/footer";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
