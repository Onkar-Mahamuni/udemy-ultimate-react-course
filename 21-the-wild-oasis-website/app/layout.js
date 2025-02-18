import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

import "@/app/styles/global.css";

// metadata is a special object that will be used by the framework to generate the page properties
export const metadata = {
  title: "The Wild Oasis",
};

// All pages will get injected into this layout as children automatically
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}