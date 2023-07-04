import logo from './logo.svg';
import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import reactIcon from 'react-icons/fa';
import { icons } from 'react-icons';
//import ReactSwitch from 'react-switch';
import { createContext ,useState} from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';

//import { useState } from 'react';

export const ThemeContext = createContext (null);


  export default function App ()  {
    const [DarkMode, setDarkMode] = useState("light");

    const toggleDarkMode = () => {
      setDarkMode ((curr) => (curr === "light" ? "dark" : "light"));
       };
     


    return (
    
        <div className= {DarkMode}>
      <Navbar />
  <Main />
 <div className='switch'>
  <label>{DarkMode === 'light' ? "Light Mode" : 'Dark Mode'}</label>
<DarkModeToggle 
 onChange={() =>toggleDarkMode(DarkMode== 'light' ? 'dark' : 'light')}
checked = {DarkMode == 'dark'}
 size={55}     
 
     
 />
    
 </div>   
</div>
    )
  }
  
 
 
 

  


  


  


