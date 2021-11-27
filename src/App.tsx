import React from 'react';
import './App.css';
import Rating from "./components/Rating/Rating";
import AppTitle from "./components/AppTitle/AppTitle";
import Accordion from "./components/Accordion/Accordion";

function App() {
    console.log('App rendering');
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

export default App;
