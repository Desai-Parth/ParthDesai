import { Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import StoreProvider from "./StoreProvider";

export const metadata = {
  title: {
    template: "%s | Parth-Desai",
    default: "Parth-Desai",
  },
  description: "Parth Desai portfolio website.",
};
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <NavBar />
        <StoreProvider>{children}</StoreProvider>
        <Footer />
      </body>
    </html>
  );
}
