import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);

//function App() {
  //const date = new Date ()
  //const hours = date.getHours() % 12
//let timeofDay

//if (hours < 12) {
 // timeofDay = 'morning'
//}

//else if( hours >= 12) {
  //timeofDay = 'afternoon'

//}

//else if (hours > 6) {
  //timeofDay = 'Night'
//}




  //return (
    //<h2>Good {timeofDay}!</h2>
    //<h1> it is currently about {hours} o'clock</h1>
 
//)
//}


//ReactDOM.render(<App />, document.getElementById("root"))

