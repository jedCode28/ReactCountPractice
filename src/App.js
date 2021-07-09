import Counter from './Counter';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Counter name="Counter 1"/>
      <Counter name="Counter 2" color='orange' extra='Hello' />
      <Counter name="Counter 3" color ='gray' />
    </div>
  );
}

export default App;
