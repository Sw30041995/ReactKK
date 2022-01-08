import React, {useState} from 'react';
import {UserType} from "../../App";
import styles from './Select.module.css'

type PropsType = {
    users: Array<UserType>
}

export const Select = (props: PropsType) => {

    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [name, setName] = useState<string>('None')

    return (
        <div>
            <div className={styles.container} onClick={() => setCollapsed(!collapsed)}>{name}
                <div className={styles.arrow}></div>
            </div>
            {!collapsed &&
            <div className={styles.items}>
                {
                    props.users.map(u => <div className={styles.item} onClick={() => {
                        setName(u.name)
                        setCollapsed(true)
                    }} key={u.id}>{u.name}</div>)
                }
            </div>
            }
        </div>
    );
};
