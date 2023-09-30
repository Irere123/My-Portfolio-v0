import React from "react";
import "../styles/globals.css";

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
      <body className="max-w-2xl mb-40 lg:m-auto flex mx-4 mt-8 flex-row md:flex-row">
        <main className="flex-auto mt-6 m-w-0">{children}</main>
      </body>
    </html>
  );
}
