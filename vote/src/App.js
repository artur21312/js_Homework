
import './App.css';
import  {Header}  from "./components/Header/Header";
import {Navigacion} from "./components/Navigacion/Navigacion.jsx";
import { Center } from "./components/Center/Center";

function App() {
  return (
      <div className="App">
        <Header />
        <div className="main-container">
          <Navigacion />
          <Center />
        </div>
      </div>
  );
}

export default App;
