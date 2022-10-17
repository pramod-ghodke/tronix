import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Blogs from './Components/Blogs';
import About from './Components/About';
import Contact from './Components/Contact';
import Menubar from './Components/Menubar';

import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menubar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    
   
    </div>
  );
}

export default App;
