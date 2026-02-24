import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import
function App() {

  let foodItems=["Dal","Roti","Veggies","Fruits","Milk","Ghee"];
  return (
    <>
      <h1>Healthy Food</h1>

      <ul className="list-group">

        {foodItems.map((item) => <li key={item} className="list-group-item">{item}</li> )}

      </ul>

    </>
  );
}

export default App;