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
          <div className="flex flex-col space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800 rounded-xl p-4 space-y-4"
              >
                {/* Top: Image + Info */}
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg shrink-0"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-base leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      {item.category}
                    </p>
                  </div>
                </div>

                {/* Bottom: Price + Actions */}
                <div className="flex items-center justify-between">
                  <div className="font-bold text-lg text-white">
                    R{item.price * item.quantity}
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 text-xs uppercase tracking-wide hover:text-red-300"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="mt-12 flex justify-between items-center border-t border-white/10 pt-6">
            <p className="text-lg">
              Total: <span className="font-bold ml-2">R{totalPrice}</span>
            </p>

            <button className="bg-lime-400 text-black px-4 py-2 text-sm md:text-lg md:px-6 md:py-3 rounded-full font-semibold hover:bg-lime-300 transition">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
