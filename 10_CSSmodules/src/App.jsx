import FoodItems from './Components/FoodItems';
import ErrorMsg from './Components/ErrorMsg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  let foodItems=["Dal","Roti","Veggies","Fruits","Milk","Ghee"];
  // let foodItems=[];


  return (
    <>
      <h1 className='food-heading'>Healthy Food</h1>
      <ErrorMsg items={foodItems}></ErrorMsg>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;