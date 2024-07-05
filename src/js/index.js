//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let number1 = 0
let number2 = 0
let number3 = 0
let number4 = 0
let number5 = 0
let number6 = 0


setInterval(function() {
    number1++
    if(number1 > 9) {
        number2++
        number1 = 0
    } else if(number2 > 9) {
        number3++
        number2 = 0
    } else if(number2 > 9) {
        number4++
        number3 = 0
    } else if(number2 > 9) {
        number5++
        number4 = 0
    } else if(number2 > 9) {
        number6++
        number5 = 0
    }
    ReactDOM.createRoot(document.getElementById('app')).render(<Home number1={number1} number2={number2} number3={number3} number4={number4} number5={number5} number6={number6} />);
}, 1000)

