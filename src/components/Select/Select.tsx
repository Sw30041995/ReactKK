import React, {useState} from 'react';
import {UserType} from "../../App";
import styles from './Select.module.css'

type PropsType = {
    users: Array<UserType>
    setName: (name: string) => void
    name: string
}

export const Select = (props: PropsType) => {

    const [collapsed, setCollapsed] = useState<boolean>(true)
    const onClickHandler = (value: string) => {
        props.setName(value)
        setCollapsed(true)
    }

    return (
        <div>
            <div className={styles.container} onClick={() => setCollapsed(!collapsed)}>{props.name}
                <div className={styles.arrow}></div>
            </div>
            {!collapsed &&
            <div className={styles.items}>
                {
                    props.users.map(u => <div className={styles.item} onClick={() => onClickHandler(u.name)}
                                              key={u.id}>{u.name}</div>)
                }
            </div>
            }
        </div>
    );
};
