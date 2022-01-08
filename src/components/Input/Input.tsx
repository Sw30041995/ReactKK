import React, {useRef, useState} from 'react';

export const Input = () => {

    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    const [checked, setChecked] = useState(false)

    const [cityId, setCityId] = useState<string | undefined>(undefined)

    return (
        <div>
            <input type="text" onChange={(e) => setValue(e.currentTarget.value)}/>{value}
            <div>
                <input ref={inputRef} type="text"/>
                <button onClick={save}>Click me</button>
                <span>{value}</span>
            </div>
            <div>
                <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.currentTarget.checked)}/>
            </div>
            <div>
                <select value={cityId} onChange={(e) => setCityId(e.currentTarget.value)}>
                    <option>none</option>
                    <option value={'1'}>Moscow</option>
                    <option value={'2'}>Minsk</option>
                    <option value={'3'}>Kirov</option>
                </select>
            </div>
        </div>
    );
};
