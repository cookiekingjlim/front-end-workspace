import { useState } from "react";

// const App = () => {
//   const [counter, setCounter] = useState(0); 
//   const plusCount = () => {
//     setCounter(counter + 1);
//   };
//   const minusCount = () => {
//     setCounter(counter - 1);
//   };
  
//   return (
//   <div>
//     <h1>Total clicks : {counter}</h1>
//     <button onClick = {plusCount}>+1</button>
//     <button onClick = {minusCount}>-1</button>
//   </div>
//   );
// };

const Button = ({text, click}) => {
  return  <button onClick = {click}>{text}</button>
}

const App = () => {
  const [counter, setCounter] = useState(0); 
  const plusCount = () => {
    setCounter(counter + 1);
  };
  const minusCount = () => {
    setCounter(counter - 1);
  };
  
  return (
  <div>
    <h1>Total clicks : {counter}</h1>
    <Button text ="+1" click={plusCount} />
    <Button text="-1" click={minusCount} />
  </div>
  );
};

export default App;

