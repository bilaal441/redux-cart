import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import {useDispatch} from "react-redux";
import {actions as cartActions} from "../../store/cartSlice";
const dummyData = [
  {
    id: " m112345",
    title: " test1",
    description: "This is a first product - amazing!",
    price: 6,
  },

  {
    id: " m212345",
    title: " test2",
    description: "This is a amazing product!",
    price: 12,
  },
];
const Products = (props) => {
  const dispatch = useDispatch();
  const OnAddHandler = (id) => {
    dispatch(
      cartActions.addItem({
        ...dummyData
          .filter((item) => item.id === id)
          .map((item) => {
            return {
              id: item.id,
              title: item.title,
              quantity: 1,
              price: item.price,
              total: item.price,
            };
          }),
      })
    );
  };
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyData.map((item) => (
          <ProductItem
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            onAdd={OnAddHandler.bind(null, item.id)}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
