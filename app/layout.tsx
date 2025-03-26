"user client"
import "./globals.css";
import localFont from 'next/font/local'
import { defaultBusinessValue,  defaultUser } from "@/utils/defaultValues";
import AppProviders from "@/providers/AppProviders";
import { getSession } from "next-auth/react";

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
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  await defaultUser()
  await defaultBusinessValue()
  const session = await getSession()
  return (
    <html lang="en" dir="rtl" className={iranSans.className}>
      <head>
        <link rel="icon" href="/logo/favicon.ico" sizes="any" />
      </head>
      <body className="lg:overflow-hidden max-h-screen m-auto ">
        <AppProviders session={session} >
          {children}
        </AppProviders>
      </body>
    </html>
  );
}