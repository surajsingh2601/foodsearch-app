import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Nav from './Components/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Service from './Components/Service';

import 'bootstrap/dist/css/bootstrap.min.css'; //reactBootstrap link after installing npm pckg npm i react-bootstrap bootstrap.

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/contact' element={<Contact/>} />

      </Routes>
      </BrowserRouter>

      
    
    </div>
  );
}

export default App;
