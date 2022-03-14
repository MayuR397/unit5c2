
import './App.css';
import { AddHouse } from './components/AddHouse/AddHouse';
import { Rentals } from './components/Rentals/Rentals';
import Renthouses from './components/showHouses/Renthouses';

function App() {
  return (
    <div className="App">
        <h1>Hiui</h1>
        <main>
          <AddHouse/> 
          <Rentals/>
          <Renthouses/>
        </main>
    </div>
  );
}

export default App;
