import React from "react";

function Star(props: any) {
    console.log('Star rendering');
    if (props.selected === true) {
        return <span><b>star</b> </span>
    } else {
        return <span>star </span>
    };
}

export default Star;