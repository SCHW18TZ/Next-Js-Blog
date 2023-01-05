"use client";
import { AnalyticsWrapper } from '../../components/analytics';

import { usePathname } from "next/navigation";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Providers from "../../components/Providers";

import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = usePathname();
  const hideBanner = router?.startsWith("/post/") ? false : true;
  return (
    <html>
      <body className=" max-w-7xl mx-auto  ">
        <Providers>
          <Header />
          {hideBanner && <Banner />}
          {children}
          <AnalyticsWrapper />

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
