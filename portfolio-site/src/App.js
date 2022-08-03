import './App.css';
import React, { useState, useEffect } from 'react'
import { BigLoad } from './components';
import NavBar from './components/NavBar';
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
  },[])


  return (
    <div className="App">
      {
        loading ? (
          <BigLoad />
        ) : (
          <>
            <NavBar />
            <Content />
            <Footer />
          </>
          
          
        )
      }
    </div>
  );
}

export default App;
