import { Analytics } from "@vercel/analytics/react";

import localFont from "next/font/local";

import { Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";

import type { Metadata } from "next";
import ZigIcon from "./components/icons/ZigIcon";
import GithubIcon from "./components/icons/GithubIcon";

const pretendard = localFont({
  variable: "--font-pretendard",
  src: "./fonts/pretendard-var.woff2",
  display: "swap",
});

const monaspace = localFont({
  variable: "--font-monaspace",
  src: "./fonts/monaspace-neon.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Zig Book",
  description:
    "Welcome to The Zig Book, your comprehensive guide to the Zig programming language. Follow this guide to master Zig and build efficient, reliable systems.",
};

// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;
const navbar = (
  <Navbar
    className="h-[72px]!"
    logo={
      <div className="flex items-center gap-x-2.5">
        <ZigIcon />
        <h1 className="text-[28px] font-bold font-pretendard">The Zig Book</h1>
      </div>
    }
    logoLink={false}
    projectLink="google.com"
    projectIcon={<GithubIcon />}
  />
);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body
        className={`${pretendard.variable} ${monaspace.variable} antialiased`}
        style={{ margin: 0 }}
      >
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          nextThemes={{
            attribute: "class",
            defaultTheme: "system",
            disableTransitionOnChange: true,
            storageKey: "theme",
          }}
          themeSwitch={{
            dark: "Dark",
            light: "Light",
            system: "System",
          }}
          navigation={true}
          sidebar={{ toggleButton: true }}
          editLink={null}
          feedback={{ content: null }}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
        >
          {children}
          <Analytics />
        </Layout>
      </body>
    </html>
  );
}
