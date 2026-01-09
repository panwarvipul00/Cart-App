// src/app/layout.jsx
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
