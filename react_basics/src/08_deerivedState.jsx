import { useState } from "react";

export const DerivedCart = () => {
  const [items, setItems] = useState([
    { name: "Apple", price: 20 },
    { name: "Banana", price: 10 },
    { name: "Mango", price: 15 },
  ]);

  // ❌ Wrong: Storing totalPrice in state
  // const [totalPrice, setTotalPrice] = useState(0);

  // ✅ Right: Derive it from items
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h3>Cart Items:</h3>
      {items.map((item, i) => (
        <p key={i}>
          {item.name} - ₹{item.price}
        </p>
      ))}
      <h4>Total Price: ₹{totalPrice}</h4>
    </div>
  );
}
