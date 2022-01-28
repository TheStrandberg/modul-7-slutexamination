import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Menu from './Menu';
import Cart from "./Cart";

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={ <Landing /> }/>
       <Route path="/menu" element={ <Menu />}/>
       <Route path="/cart" element={ <Cart />} />
     </Routes>
    </div>
  );
}

export default App;
