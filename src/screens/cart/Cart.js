import CartEmpty from "./components/CartEmpty";
import CartList from "./components/CartList";
const Cart = () => {
  const cartlistLength = 0;

  return (
    <main>       
      { cartlistLength ? <CartList /> : <CartEmpty /> }   
    </main>
  )
}

export default Cart
