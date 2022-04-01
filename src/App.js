import React from 'react';
import logo from './junior1.png'
import Main from './components/Main';
import './App.css';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <div className='section'>
        <img src={logo} alt=''/>
        <Main />
        <Footer />
      </div>
        
    </div>
  );
}

export default App;
