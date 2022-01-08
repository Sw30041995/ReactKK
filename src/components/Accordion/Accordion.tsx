import React from "react";
import {UserType} from "../../App";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    users: Array<UserType>
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} collapsed={props.collapsed} setCollapsed={props.setCollapsed}/>
            {!props.collapsed && <AccordionBody users={props.users}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    const collapseMenu = () => props.setCollapsed(!props.collapsed)

    return (
        <h3 onClick={collapseMenu}>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    users: Array<UserType>
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.users.map(u => <li onClick={() => console.log(u.id)} key={u.id}>{u.name}</li>)}
        </ul>
    )
}