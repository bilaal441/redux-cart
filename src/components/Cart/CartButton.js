import classes from "./CartButton.module.css";
import {useSelector, useDispatch} from "react-redux";
import {actions} from "../../store/cartSlice";

const CartButton = (props) => {
  const {items} = useSelector((state) => state.cart);
  const numItems = items.reduce((occ, cur) => occ + cur.quantity, 0);
  const dispatch = useDispatch();
  const cartButtonToggeHnadler = () => {
    dispatch(actions.toggle());
  };
  return (
    <button className={classes.button} onClick={cartButtonToggeHnadler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numItems}</span>
    </button>
  );
};

export default CartButton;
