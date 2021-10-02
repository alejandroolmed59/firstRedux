import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from 'react-redux'

function App() {
  const shouldDisplay = useSelector(state=>state.toggle.togleado)
  const granTotal = useSelector(state=>state.cart.grandTotal)
  console.log(shouldDisplay)
  return (
    <Layout>
      {shouldDisplay&&<Cart />}
      <h1 style={{color:'white', marginLeft:'55rem'}}>Total {granTotal}</h1>
      <Products />
    </Layout>
  );
}

export default App;
