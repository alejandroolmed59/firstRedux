import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from 'react-redux'


const Cart = (props) => {
  const listaCarrito = useSelector(store=>store.cart.products)
  console.log(listaCarrito)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
      {
          listaCarrito.map((val, index)=>{
            return(
              <li key={index}>
                <CartItem
                item={{
                  title:val.title,
                  price:val.price,
                  quantity:val.quantity,
                  total:val.total,
                }}
                />
              </li>
            )
          })}
      </ul>
    </Card>
  );
};

export default Cart;
