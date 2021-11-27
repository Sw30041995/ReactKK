import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <Title/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Title() {
    return (
        <div>This is App component</div>
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
            <h2>Menu</h2>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

export default App;
