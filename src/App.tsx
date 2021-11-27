import React from 'react';
import './App.css';

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

function AppTitle() {
    console.log('AppTitle rendering');
    return (
        <>This is App component</>
    );
}

function Rating() {
    console.log('Rating rendering');
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

function Star() {
    console.log('Star rendering');
    return (
        <div>star</div>
    );
}

function Accordion() {
    console.log('Accordion rendering');
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    );
}

function AccordionTitle() {
    console.log('AccordionTitle rendering');
    return (
        <h2>Menu</h2>
    );
}

function AccordionBody() {
    console.log('AccordionBody rendering');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default App;
