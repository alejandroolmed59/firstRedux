import ProductItem from './ProductItem';
import classes from './Products.module.css';

const listProducts = [
  {
    title:"Doritos",
    price:6,
    description:"This is a first product - amazing!"
  },
  {
    title:"Mountain Dew",
    price:2,
    description:"Acido 😏"
  },
  {
    title:"Coca cola",
    price:3,
    description:"Deli 😋"
  }
]


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          listProducts.map((val, index)=>{
            return(
              <li key={index}>
                <ProductItem
                  title={val.title}
                  price={val.price}
                  description={val.description}
                />
              </li>
            )
          })}
      </ul>
    </section>
  );
};

export default Products;
