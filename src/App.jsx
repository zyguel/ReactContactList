import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
//import './App.css' // No need for this
import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import ContactList from './components/ContactList.jsx';

function App() {
 

  return (
  
    <div className="App">
    <Navbar /> {/* */ }
    <Hero /> {/* */} 
    <ContactList /> {/* */}
    </div>
  
    
  );

}

export default App
