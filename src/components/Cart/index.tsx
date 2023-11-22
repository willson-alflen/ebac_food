import { useState } from 'react';
import CartItems, { CartItem } from '../CartItems';
import * as S from './styles';

interface CartProps {
  isOpen: boolean;
  toggleCart: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, toggleCart }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <S.CartContainer isOpen={isOpen}>
      <CartItems items={cartItems} />
      <button onClick={toggleCart}>Close</button>
    </S.CartContainer>
  );
};

export default Cart;
