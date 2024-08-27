"use client";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopLoader from "./components/Toploader";
import { Provider } from "react-redux";
import { store } from "./store";

const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <TopLoader />
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
