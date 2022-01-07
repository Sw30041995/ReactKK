import React, {useState} from 'react';

export function OnOff() {

    const [on, setOn] = useState<boolean>(false)

    const onStyle = {
        height: '25px',
        width: '30px',
        backgroundColor: on ? 'green' : 'white',
        display: 'inline-block',
        border: '2px solid black',
        verticalAlign: 'middle',
        paddingLeft: '2px'
    }

    const offStyle = {
        height: '25px',
        width: '30px',
        backgroundColor: !on ? 'red' : 'white',
        display: 'inline-block',
        border: '2px solid black',
        marginLeft: '2px',
        verticalAlign: 'middle',
        paddingLeft: '2px'
    }

    const circle = {
        height: '15px',
        width: '15px',
        backgroundColor: on ? 'green' : 'red',
        display: 'inline-block',
        border: '2px solid black',
        borderRadius: '7.5px',
        verticalAlign: 'middle',
        marginLeft: '2px',
    }

    return (
        <div>
            <div onClick={() => setOn(true)} style={onStyle}>On</div>
            <div onClick={() => setOn(false)} style={offStyle}>Off</div>
            <div style={circle}></div>
        </div>
    )
}