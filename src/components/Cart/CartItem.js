import classes from "./CartItem.module.css";
import {useDispatch} from "react-redux";
import {actions} from "../../store/cartSlice";

const CartItem = (props) => {
  const {title, quantity, total, price, id} = props.item;
  const dispatch = useDispatch();
  const incrementHandler = (id) => {
    dispatch(actions.incrementItem({id}));
  };
  const decrementHandler = (id) => {
    dispatch(actions.decrementItem({id}));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total?.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price?.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementHandler.bind(null, id)}>-</button>
          <button onClick={incrementHandler.bind(null, id)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
