import "./globals.css";
import { Rubik, Open_Sans } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rubik.variable} ${openSans.variable}`}>
      <body className="font-body">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}