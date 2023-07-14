
import './App.css';
import {useState, useEffect} from 'react';

const App = () => {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("You've changed the counter to " + counter)
  }, [counter])

  return (
    <div className="App">
      <button onClick={() => setCounter( (prevCount) => prevCount - 1)}>-</button>   
      <p>{counter}</p>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
