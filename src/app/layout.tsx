import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
      <head>
        <meta name="google-site-verification" content="YSX0QBTUpg092ujQcCx9pcyX5TXf-tAwNvTWRMNN-pQ" />
        <Script
          id="tiktok-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e].base=i,ttq._i[e].agent=n,n=n||"default";var o=document.createElement("script");o.async=!0,o.src=i+"?sdkid="+e+"&lib="+n;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
              ttq.load('D46867RC77U505N91LJ0');
              ttq.page();
            `,
          }}
        />
      </head>
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
