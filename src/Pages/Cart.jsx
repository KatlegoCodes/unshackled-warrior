import React from "react";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="bg-gray-950 text-white min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Your Cart</h1>

        {cartItems.length === 0 && (
          <p className="text-center text-gray-400">Your Cart is empty</p>
        )}

        {cartItems.length > 0 && (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 bg-gray-800 p-4 rounded-xl"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-400">{item.category}</p>
                </div>

                <div className="text-bold">R{item.price * item.quantity}</div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-300 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="mt-12 flex justify-between items-center border-t border-white/10 pt-6">
            <p className="text-lg">
              Total: <span className="font-bold ml-2">R{totalPrice}</span>
            </p>

            <button className="bg-lime-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
