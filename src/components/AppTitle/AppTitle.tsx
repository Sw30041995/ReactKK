import React from "react";

type PropsType = {
    title: string
}

export function AppTitle(props: PropsType) {
    return (
        <h1>{props.title}</h1>
    )
}