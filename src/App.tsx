import React from 'react';
import './App.css';
import {AppTitle} from "./components/AppTitle/AppTitle";
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    return (
        <div>
            <AppTitle title={'This is App component'}/>
            <Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Users'} collapsed={false}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    )
}

export default App;
