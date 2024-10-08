import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"
import NextTopLoader from "nextjs-toploader"

import Body from "../components/reusable/Body"
import TopBar from "@/components/reusable/topBar"

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
   title: "TypeMaster",
   description: "TypeMaster Typing Speed Test",
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en" className={poppins.className}>
         <head></head>
         <Body>
               <NextTopLoader showSpinner={false} />
               <TopBar/>
               {children}
               <Toaster />
         </Body>
      </html>
   )
}