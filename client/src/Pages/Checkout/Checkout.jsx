import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10">
        <h3 className="text-4xl font-bold">Thank you for your order!</h3>
        <button className="px-4 py-2 font-bold bg-red-500 text-white rounded-md">
          <Link to="/buy">Continue Shopping</Link>
        </button>
      </div>
    </div>
  );
};

export default Checkout;
