import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={ <Landing /> }/>
       <Route path="/menu" element={ <Menu />}/>
     </Routes>
    </div>
  );
}

export default App;
