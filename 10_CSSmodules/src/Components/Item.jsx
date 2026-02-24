import styles from "./Item.module.css";

const Item = (props) => {
let {foodItem}=props;
 return (
  <li key={foodItem} className={`${styles['kg-item']} `}>
       <span className={styles['kg-span']}>{foodItem} </span> 
  </li>
 );
};

export default Item;