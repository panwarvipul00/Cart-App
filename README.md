# WhatBytes Cart System

A modern, responsive e-commerce application built with Next.js and Tailwind CSS. This project features a dynamic product catalog with advanced filtering, real-time search, and a persistent shopping cart.



##  Features

-   **Product Listing**: Responsive grid layout that adapts to Mobile (1 col), Tablet (2 cols), and Desktop (3 cols).
-   **Advanced Filtering**:
    -   Filter by Category (Electronics, Clothing, Home, etc.).
    -   Filter by Price Range using a dynamic slider.
-   **Real-time Search**: Instant product search via the sticky navbar.
-   **Shopping Cart**:
    -   Add products with customizable quantities.
    -   Persistent cart state (localStorage).
    -   Real-time total calculation.
-   **Product Details**: Dedicated page for each product with high-quality images and descriptions.
-   **Responsive Design**:
    -   Sticky Navbar for easy navigation.
    -   Sticky Sidebar for accessible filters on scrolling.
    -   Sticky Footer with social media integration.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **State Management**: React Context API (`CartContext`)

## 📂 Project Structure

```
src/
├── app/
│   ├── cart/           # Cart page
│   ├── product/[id]/   # Product Detail page
│   ├── layout.tsx      # Root layout (Metadata, Fonts)
│   └── page.jsx        # Homepage (Product Grid + Sidebar)
├── components/
│   ├── Header.jsx      # Sticky Navbar (Search, Cart Link)
│   ├── Footer.jsx      # Sticky Footer (Socials, Links)
│   ├── Sidebar.jsx     # Filter Controls
│   ├── ProductGrid.jsx # Main Product Display
│   └── ProductCard.jsx # Individual Product Component
├── context/
│   └── CartContext.jsx # Global Cart State Management
└── data/
    └── products.js     # Mock Data Source
```

## ⚡ Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/panwarvipul00/Cart-App
    cd cart-app
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open the app**:
    Visit [http://localhost:3000](http://localhost:3000) in your browser. 

5. **Live Link**:
    Visit [https://cart-app-mz2n.vercel.app/](https://cart-app-mz2n.vercel.app/) in your browser.   

## 🎨 Design decisions

-   **Theme**: Deep Blue (`#001f3f`) primary theme for a professional, trusted look.
-   **UX**:
    -   **Sticky Elements**: Kept Search and Filters always compatible with scrolling for better UX on long lists.
    -   **Hover Effects**: Cards scale slightly on hover to indicate interactivity.
    -   **Images**: Used `object-cover` to ensure product images look consistent regardless of their original aspect ratio.

