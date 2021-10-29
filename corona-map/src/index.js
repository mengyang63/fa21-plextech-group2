import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// fetch('https://disease.sh/v3/covid-19/countries')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     console.log(data[1])
//     for (let i = 0; i < 10; i++) {
//       console.log(data[i]);
//     }

//   })
//   .catch(err => {
//     // error catching
//     // console.log(err)
//   })



const getData = async () => fetch('https://disease.sh/v3/covid-19/countries')
  .then(response => response.json())

export async function getMarkers(){
    return await getData();
}




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);