import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);  // 초기값 0
  const setCount = () => {
    setCounter(counter + 1);
};    
  return (
  <div>
    <h1>릠 저요ㅋ : {counter}</h1>
    <button onClick = {setCount}>Click!</button>
  </div>
  );
};

export default App;
