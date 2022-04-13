import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import "../../styles/NoteView.css";
import "./Confirm.css";
import {Link} from "react-router-dom";
import {NoteEntity, NoteResponse} from "../../types";

interface Props {
    title: string;
    id:string;
    text:string;
    setShowConfirm:Dispatch<SetStateAction<boolean>>;
}

export const Confirm = (props:Props) => {

    const [title,setTitle] = useState<string>("");

    useEffect(()=>{
        setTitle(props.title?props.title:"new title")
    },[]);

    const handleClick = async (isTrue:boolean) => {

         props.setShowConfirm(false);

         if(props.id===""){

             const obj : NoteResponse = {
                 text:props.text,
                 title,
             }

             await fetch(`http://localhost:3001/note`,{
                 method:"POST",
                 headers:{
                     "Content-Type":"application/json",
                 },
                 body:JSON.stringify(obj)
             })
         }
         else {
             const obj : NoteEntity = {
                 text:props.text,
                 title,
                 _id:props.id
             }

             await fetch(`http://localhost:3001/note`,{
                 method:"PUT",
                 headers:{
                     "Content-Type":"application/json",
                 },
                 body:JSON.stringify(obj)
             })
         }
    }

    return <div className="confirmDiv">
        <h3>Do you want to save note?</h3>
        <input type="text" value={title} onChange={e=>setTitle(e.target.value)}/>

        <Link to="/">
            <button onClick={()=>handleClick(true)}>Yes</button>
        </Link>
        <Link to="/">
            <button onClick={()=>handleClick(false)}>No</button>
        </Link>
    </div>
}