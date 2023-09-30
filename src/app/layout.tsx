import React from "react";
import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://irere.vercel.app"),
  title: {
    default: "Irere Emmanuel",
    template: "%s | Irere Emmanuel",
  },
  description: "Developer, writer, and student.",
  openGraph: {
    title: "Irere Emmanuel",
    description: "Developer, writer, and student.",
    url: "https://irere.vercel.app",
    siteName: "Irere Emmanuel",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Irere Emmanuel",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="text-black bg-white dark:text-white dark:bg-[#111010]"
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto mt-6 m-w-0">{children}</main>
      </body>
    </html>
  );
}
