import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {

  // let foodItems=["Dal","Roti","Veggies","Fruits","Milk","Ghee"];
  let foodItems=[];

  // if(foodItems.length === 0){
  //   return <h3>I am Still hungry.</h3>
  // }

  // let emptyMessage=foodItems.length === 0 ? <h3>I am Still hungry.</h3> : null ;

  return (
    <>
      <h1>Healthy Food</h1>

      {foodItems.length === 0 && <h3>I am Still hungry.</h3>}
     
      {/* {emptyMessage} */}
      
      <ul className="list-group">

        {foodItems.map((item) => <li key={item} className="list-group-item">{item}</li> )}

      </ul>

    </>
  )
}

export default App;