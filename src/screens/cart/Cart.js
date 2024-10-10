import { useCart } from "../../bookContext/CartContext";
import CartEmpty from "./components/CartEmpty";
import CartList from "./components/CartList";
const Cart = () => {
    const {state} = useCart();
  return (
    <main>       
      { (state.products.length>0) ? <CartList productsinfo={state}/> : <CartEmpty /> }   
    </main>
  )
}

export default Cart
