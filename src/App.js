import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About';
import Header from './Component/Header';
import Home from './Component/Home';
import Product from './Component/Product';
import Services from './Component/Services';
import Nothing from './Component/Nothing';

function App() {
  return (
    <BrowserRouter>
     <div> <Header/></div>
    <Routes>
    <Route path="/" element={<Nothing/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/About" element={<About />}/>
    <Route path="/Product" element={<Product/>}/>
    <Route path="/Services" element={<Services/>}/>
</Routes>
   
  </BrowserRouter>
  );
}

export default App;
