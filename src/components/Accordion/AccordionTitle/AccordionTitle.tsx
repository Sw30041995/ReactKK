import React from "react";

type PropsType = {
    title: string
}

function AccordionTitle(props: PropsType) {
    console.log('AccordionTitle rendering');
    return (
        <h3>{props.title}</h3>
    );
}
export default AccordionTitle;