// src/app/layout.js
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BootstrapClient from "./components/BootstrapClient";

export const metadata = {
  title: 'Mega Sportswear Apparel - Custom Sportswear Manufacturer',
  description: 'Premium tennis clothing, golf apparel & gym wear manufacturer',
  icons: {
    icon: '/next.svg',  // Ya '/favicon.ico'
    shortcut: '/next.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <BootstrapClient />  {/* Bootstrap JS yahan */}
      </body>
    </html>
  );
}
