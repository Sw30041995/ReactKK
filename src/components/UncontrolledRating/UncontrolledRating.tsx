import React, {useState} from "react";

export function UncontrolledRating() {

    const [value, setValue] = useState<number>(0)

    return (
        <div>
            <Star setValue={setValue} selected={value > 0} value={1}/>
            <Star setValue={setValue} selected={value > 1} value={2}/>
            <Star setValue={setValue} selected={value > 2} value={3}/>
            <Star setValue={setValue} selected={value > 3} value={4}/>
            <Star setValue={setValue} selected={value > 4} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: (value: number) => void
    value: number
}

function Star(props: StarPropsType) {

    const setRating = () => props.setValue(props.value)

    return (
        <span onClick={setRating}>{props.selected ? <b>star </b> : 'star '}</span>
    )
}