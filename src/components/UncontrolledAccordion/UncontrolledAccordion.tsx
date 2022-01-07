import React, {useState} from "react";
import {UserType} from "../../App";

type UncontrolledAccordionPropsType = {
    title: string
    users: Array<UserType>
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    const [collapsed, setCollapsed] = useState<boolean>(false)
    const collapseMenu = () => setCollapsed(!collapsed)

    return (
        <div>
            <AccordionTitle title={props.title} collapsed={collapsed} collapseMenu={collapseMenu}/>
            {!collapsed && <UncontrolledAccordionBody users={props.users}/>}
        </div>
    )
}

type UncontrolledAccordionTitlePropsType = {
    title: string
    collapsed: boolean
    collapseMenu: () => void
}

function AccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    return (
        <h3 onClick={props.collapseMenu}>{props.title}</h3>
    )
}

type UncontrolledAccordionBodyType = {
    users: Array<UserType>
}

function UncontrolledAccordionBody(props: UncontrolledAccordionBodyType) {
    return (
        <ul>
            {props.users.map(u => <li key={u.id}>{u.name}</li>)}
        </ul>
    )
}