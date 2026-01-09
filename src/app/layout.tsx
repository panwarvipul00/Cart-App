// src/app/layout.jsx
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <div className="flex-grow w-full">
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
