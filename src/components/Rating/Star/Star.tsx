import React from "react";

type PropsType = {
    selected: boolean
}

function Star(props: PropsType) {
    console.log('Star rendering');
    if (props.selected === true) {
        return <span><b>star</b> </span>
    } else {
        return <span>star </span>
    };
}

export default Star;