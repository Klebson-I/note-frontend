import React from "react";
import "../../styles/NotesView.css";
interface Props {
    heading:string;
}

export const PageHeader = (props:Props) => {
    return <h1 className="header__heading">
        {props.heading}
    </h1>
}