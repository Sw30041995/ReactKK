import React from 'react';
import './App.css';
import {AppTitle} from "./components/AppTitle/AppTitle";
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

export type UserType = {
    id: number
    name: string
    age: number
}

function App() {

    const users: Array<UserType> = [
        {id: 1, name: 'Ivan', age: 26},
        {id: 2, name: 'Anastasiya', age: 27},
        {id: 3, name: 'Evgeniy', age: 30}
    ]

    return (
        <div>
            <AppTitle title={'This is App component'}/>
            <UncontrolledAccordion title={'Menu'} users={users}/>
            <UncontrolledAccordion title={'Users'} users={users}/>
            {/*<Accordion title={'Menu'} collapsed={true}/>*/}
            {/*<Accordion title={'Users'} collapsed={false}/>*/}
            <UncontrolledRating/>
            <OnOff/>
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    )
}

export default App;
