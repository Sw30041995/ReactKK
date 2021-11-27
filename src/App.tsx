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
            <Rating value={3}/>
            <Accordion title={'Menu one'} collapsed={true}/>
            <Rating value={5}/>
            <Accordion title={'Menu two'} collapsed={false}/>
        </div>
    );
}

export default App;
