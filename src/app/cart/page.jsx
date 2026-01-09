"use client";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
    const { cart, removeFromCart, updateQty } = useCart();

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    if (cart.length === 0) {
        return (
            <p className="p-6 text-center text-gray-500">
                Your cart is empty 🛒
            </p>
        );
    }

    return (
        <main className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

            {cart.map(item => (
                <div
                    key={item.id}
                    className="flex items-center justify-between bg-white p-4 rounded shadow mb-4"
                >
                    <div>
                        <h2 className="font-semibold">{item.title}</h2>
                        <p className="text-gray-600">${item.price}</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <input
                            type="number"
                            min="1"
                            value={item.qty}
                            onChange={e =>
                                updateQty(item.id, Number(e.target.value))
                            }
                            className="w-16 border rounded px-2 py-1"
                        />

                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:underline"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}

            <div className="bg-white p-6 rounded shadow text-right">
                <h2 className="text-xl font-bold">
                    Total: ${total.toFixed(2)}
                </h2>
            </div>
        </main>
    );
}
