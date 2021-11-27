import React from "react";
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";

type PropsType = {
    title: string,
    collapsed: boolean
}

function Accordion(props: PropsType) {
    console.log('Accordion rendering');
    if (props.collapsed === false) {
        return (
            <div>
                <AccordionTitle title={props.title}/>
                <AccordionBody/>
            </div>
        );
    } else {
        return (
            <div>
                <AccordionTitle title={props.title}/>
            </div>
        );
    }

}

export default Accordion;