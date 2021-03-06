import React from 'react';

type PropsType = {
    on: boolean
    setOn: (on: boolean) => void
}

export function OnOff(props: PropsType) {

    const onStyle = {
        height: '25px',
        width: '30px',
        backgroundColor: props.on ? 'green' : 'white',
        display: 'inline-block',
        border: '2px solid black',
        verticalAlign: 'middle',
        paddingLeft: '2px'
    }

    const offStyle = {
        height: '25px',
        width: '30px',
        backgroundColor: !props.on ? 'red' : 'white',
        display: 'inline-block',
        border: '2px solid black',
        marginLeft: '2px',
        verticalAlign: 'middle',
        paddingLeft: '2px'
    }

    const circle = {
        height: '15px',
        width: '15px',
        backgroundColor: props.on ? 'green' : 'red',
        display: 'inline-block',
        border: '2px solid black',
        borderRadius: '7.5px',
        verticalAlign: 'middle',
        marginLeft: '2px',
    }

    const turnOn = () => props.setOn(true)
    const turnOff = () => props.setOn(false)

    return (
        <div>
            <div onClick={turnOn} style={onStyle}>On</div>
            <div onClick={turnOff} style={offStyle}>Off</div>
            <div style={circle}></div>
        </div>
    )
}