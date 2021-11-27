import React from "react";
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";

type PropsType = {
    title: string
}

function Accordion(props: PropsType) {
    console.log('Accordion rendering');
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    );
}

export default Accordion;