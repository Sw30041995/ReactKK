import React from 'react';
import './App.css';

function App() {
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
    return (
        <>This is App component</>
    );
}

function Rating() {
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
    return (
        <div>star</div>
    );
}

function Accordion() {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    );
}

function AccordionTitle() {
    return (
        <h2>Menu</h2>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default App;
