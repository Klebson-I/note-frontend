import React, {Dispatch, SetStateAction} from "react";
import "./ConfirmDelete.css";

interface Props {
    id:string;
    showDelete:Dispatch<SetStateAction<boolean>>;
    refresh:() => void;
}

export const ConfirmDelete = (props:Props) => {

    const handleClick = async (isDelete:boolean):Promise<void> =>{
        props.showDelete(false);

        if (isDelete) {
            await fetch("http://localhost:3001/note",{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    _id:props.id
                })
            })

            await props.refresh();
        }
    }

    return <div className="confirmDeleteDiv">
        <h3>Do you want do delete this element?</h3>
        <div className="buttons">
            <button onClick={()=>handleClick(true)}>Yes</button>
            <button onClick={()=>handleClick(false)}>No</button>
        </div>
    </div>
}