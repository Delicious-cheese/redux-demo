import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions'

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.islogged);

  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>counter: {counter}</h1>
      {isLogged ? <h3>Information can't display</h3> : ''}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
