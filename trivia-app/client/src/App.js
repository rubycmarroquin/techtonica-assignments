import './App.css';
import {useState} from 'react';

function App() {
  
  const [data, setData] = useState(null);
  
  const loadQuestions = () => {
    const params = new URLSearchParams({ amount: 10, category: 23, difficulty: 'easy' });
    // fetch the data from the backend 
    fetch(`http://localhost:3001/game?${params}`)
      .then((response) => response.json())
      .then((result) => {
        console.log("this is the data: ", result)
        setData(result);
      });
  }
  const handleButton= () => {
    loadQuestions();
  }

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handleButton}>Press me for the data</button>
      <h2></h2>
    </div>
  );
}

export default App;
