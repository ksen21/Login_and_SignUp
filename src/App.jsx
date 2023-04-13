import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useEffect } from 'react';

import SignUpPage from './Component/SignUpPage';
import LoginPage from './Component/LoginPage';
import Header from './Component/Header';

import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './Component/Home';
import {auth} from './firebase';
function App() {

  const [userName,setUserName] = useState('');
  useEffect(() => {

    auth.onAuthStateChanged((user)=>{

      if (user) {
       
        setUserName(user.displayName);
      } else setUserName("");
      
    });

  
  }, [])


  // useEffect(() => {
  //   function disablePreloader() {
  //     const loader = document.getElementsByClassName('preloader')[0];
  //     {loader.style.display = 'none';}
  //   }
  //   setTimeout(() => {
    
  //     disablePreloader();
  //   }, 6000);
  // }, []);


  return (
    <>
    <div className='App'>
 
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home name = {userName}/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </Router> 
    </div>



  

    </>
  )
}

export default App
