import React, {useState} from 'react';
import './App.css';
import {AppTitle} from "./components/AppTitle/AppTitle";
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

export type UserType = {
    id: number
    name: string
    age: number
}

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {

    const users: Array<UserType> = [
        {id: 1, name: 'Ivan', age: 26},
        {id: 2, name: 'Anastasiya', age: 27},
        {id: 3, name: 'Evgeniy', age: 30}
    ]

    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div>
            <AppTitle title={'This is App component'}/>
            <h2>Controlled components</h2>
            <Accordion title={'Menu'} setCollapsed={setCollapsed} collapsed={collapsed} users={users}/>
            <Rating ratingValue={ratingValue} setRatingValue={setRatingValue}/>
            <OnOff on={on} setOn={setOn}/>
            <h2>Uncontrolled components</h2>
            <UncontrolledAccordion title={'Menu'} users={users}/>
            <UncontrolledOnOff/>
            <UncontrolledRating/>
        </div>
    )
}

export default App;
