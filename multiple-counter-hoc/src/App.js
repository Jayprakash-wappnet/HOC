import './App.css';
import Counter from './components/Counter'
import Hoc from './components/Hoc';
function App() {

  return (
    <div className="App">
      <Hoc cmp={Counter}/>
      
    </div>
  );
}







export default App;
