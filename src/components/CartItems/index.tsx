export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartItemsProps {
  items: CartItem[];
}

const CartItems: React.FC<CartItemsProps> = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name} - ${item.price} x {item.quantity}
        </li>
      ))}
    </ul>
  );
};

export default CartItems;
