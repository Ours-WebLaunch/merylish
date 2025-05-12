import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/ui/header";
import {Montserrat} from "next/font/google";
import Footer from "@/components/footer";
import WhatsApp from "@/components/whatsapp";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Merylish Luxury Fashion",
  description: "Your best plug for the most exquisite and unique African fashion for women.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${montserrat.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          {children}
          <WhatsApp />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
