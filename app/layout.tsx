"use client";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopLoader from "./components/Toploader";
import { Provider } from "react-redux";
import { store } from "./store";
import { usePathname } from "next/navigation";

const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <TopLoader />
          {pathName.includes("auth") == false && <Header />}
          {children}
          {pathName.includes("auth") == false && <Footer />}
        </Provider>
      </body>
    </html>
  );
}
