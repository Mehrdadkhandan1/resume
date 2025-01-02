import LayoutHome from "@/components/layouts/LayoutHome";
import "./globals.css";
import localFont from 'next/font/local'

const iranSans = localFont({
  src: [
    {
      path: './../public/fonts/IRANSansX-Light.woff',
      weight: "200",
      style: "normal"

    },
    {
      path: './../public/fonts/IRANSansX-Bold.woff',
      weight: "600",
      style: "normal"

    },
    {
      path: './../public/fonts/IRANSansX-Regular.woff',
      weight: "400",
      style: "normal"

    },
    {
      path: './../public/fonts/IRANSansX-Medium.woff',
      weight: "500",
      style: "normal"

    },
  ]
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" dir="rtl" className={iranSans.className}>
      <head>
      <link rel="icon" href="/logo/favicon.ico" sizes="any" />


      </head>
      <body className="overflow-hidden max-h-screen">
        {children}
      </body>
    </html>
  );
}