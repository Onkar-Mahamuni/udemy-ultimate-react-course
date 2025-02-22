// Importing the font from Google Fonts in optimized way
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

import "@/app/_styles/global.css";
import Header from "./_components/Header";

// metadata is a special object that will be used by the framework to generate the page properties
export const metadata = {
  title: {
    // The title will be formatted as "Page Title | Site Title" using %s as a placeholder
    template: "%s | The Wild Oasis",
    default: "The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites. Surrounded by beautiful mountains and dark forests, it's the perfect place to relax and enjoy nature.",
};

// All pages will get injected into this layout as children automatically
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
