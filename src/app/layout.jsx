import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterMenu from "@/components/footer";
import Header from "@/components/header";


export default function RootLayout({ children }) {
  return (
    <html lang="jp">

      <head>
        <link rel="manifest" href="/manifest.json" />


      </head>

      <body className="bg-slate-300">
        <Header />
        <main className="h-[85vh] w-full overflow-y-scroll text-slate-800 p-2">

          {children}


        </main>

        <FooterMenu />
      </body>
    </html>
  );
}
