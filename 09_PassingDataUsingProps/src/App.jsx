import FoodItems from './Components/FoodItems';
import ErrorMsg from './Components/ErrorMsg';
import Heading from './Components/Heading';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  let foodItems=["Dal","Roti","Veggies","Fruits","Milk","Ghee"];
  // let foodItems=[];


  return (
    <>
      <Heading />
      <ErrorMsg items={foodItems}></ErrorMsg>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;