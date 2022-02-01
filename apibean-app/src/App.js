import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Menu from './Menu';
import Cart from "./Cart";
import Status from "./Status";

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={ <Landing /> } exact/>
       <Route path="/menu" element={ <Menu />}/>
       <Route path="/cart" element={ <Cart />} />
       <Route path="/status" element={ <Status />} />
     </Routes>
    </div>
  );
}

export default App;
