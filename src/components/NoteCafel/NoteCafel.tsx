import React, {Dispatch, SetStateAction} from "react";
import "./NoteCafel.css";
import {Link} from "react-router-dom";

interface Props {
    id:string;
    title:string;
    text:string;
    showDelete:Dispatch<SetStateAction<boolean>>;
    setId:Dispatch<SetStateAction<string>>;
}

export const NoteCafel = (props:Props) => {

    const setReturn = () => {
        console.log("setting show to true")
        props.showDelete(true);
        props.setId(props.id);
    }


    return <div className="noteCafel">
        <p>{props.title}</p>
        <span>
            {
                props.text.slice(0,150)+"..."
            }
        </span>

        <div className="buttons">
            <Link to={`/${props.id}`}><button className="noteCafel--button">Check note</button></Link>
            <button className="noteCafel--button" onClick={()=>setReturn()}>Delete</button>
        </div>
    </div>
}