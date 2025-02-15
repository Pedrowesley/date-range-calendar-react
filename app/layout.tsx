import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Date Range Calendar",
  description: "Date Range Calendar by Pedro Wesley",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
