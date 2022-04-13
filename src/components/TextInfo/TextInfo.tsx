import React from "react";
import "./TextInfo.css";

interface Props {
    text:string;
}

const specialSigns=[".",",","?","!"," ",""];

export const TextInfo = (props:Props) => {

    const evaluateWords = () : number => {
        return props.text
            .split(" ")
            .filter(elem=>!specialSigns.includes(elem)).length;
    }

    const evaluateCharacters = () : number =>{
        return props.text
            .split("")
            .filter(elem=>elem!==" ").length
    }

    return <div className="textInfoDiv">
        <h2>Info about your text</h2>

        <div className="textInfoDiv__section">
            <h3>Words</h3>
            <span>
                {evaluateWords()}
            </span>
        </div>

        <div className="textInfoDiv__section">
            <h3>Characters</h3>
            <span>
                {evaluateCharacters()}
            </span>
        </div>

    </div>
}