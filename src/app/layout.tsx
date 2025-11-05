import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "انضم إلى مجموعة واتساب - فرص عمل",
  description: "انضم إلى مجموعتنا وابدأ فرصتك القادمة!",
  verification: {
    google: "3igLxz-ijDzW7nzQYud0yPO2q5egIr01nfQGYm8FQFQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
