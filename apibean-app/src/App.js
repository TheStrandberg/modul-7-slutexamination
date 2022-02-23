import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Menu from './Pages/Menu/Menu-Page/Menu';
import Cart from "./Pages/Cart/Cart-Page/Cart";
import Status from "./Pages/Status/Status";

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
