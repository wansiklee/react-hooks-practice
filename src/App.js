import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [item, setItem] = useState(1);
  const plusItem = () => setItem(item + 1);
  const minusItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Number of Item : {item}</h1>
      <button onClick={plusItem}>Plus</button>
      <button onClick={minusItem}>Minus</button>
    </div>
  );
}

// class clsApp extends React.Component{
//   state = {
//     item : 1
//   }
//   return (
//     <div className="App">
//       <h1>Number of Item : {item}</h1>
//       <button onClick={this.plusItem}>Plus</button>
//       <button onClick={this.minusItem}>Minus</button>
//     </div>
//   );
//   plusItem = () => {
//     this.setState(state => {
//       return {
//         item: state.item + 1
//       }
//     })
//   }
//   minusItem = () => {
//     this.setState(state => {
//       return {
//         item: state.item - 1
//       }
//     })
//   }
// }

export default App;
