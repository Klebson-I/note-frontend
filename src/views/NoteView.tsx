import React, { useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {NoteEntity} from "../types";
import {PageHeader} from "../components/Header/PageHeader";
import "../styles/NoteView.css";
import {TextInfo} from "../components/TextInfo/TextInfo";
import {Confirm} from "../components/Confirm/Confirm";
import {ConfirmDelete} from "../components/ConfirmDelete/ConfirmDelete";




export const NoteView = () => {
    const {id}=useParams();
    const [note,setNote] = useState<NoteEntity|null>(null);
    const [text,setText] = useState<string>("");
    const [showConfirm,setShowConfirm] = useState<boolean>(false);


    useEffect(()=>{
        (async()=>{
            if(id==="new")return;
            const res = await fetch(`http://localhost:3001/note/${id}`);
            const data = await res.json();
            console.log(data);
            setNote(data);
        })();
    },[]);

    if(note===null) return <div className="noteContainer">
        {
            showConfirm && <Confirm
                title={"Note what's in your head"}
                text={text}
                id={""}
                setShowConfirm={setShowConfirm}
            />
        }
        <PageHeader heading={"Note what's in your head"}/>

        <div className="noteContainer__section">
            <textarea
                value={text}
                onChange={e=>setText(e.target.value)}
            >
            </textarea>
            <TextInfo text={text}/>
        </div>
        <div className="buttons">
            <button onClick={()=>setShowConfirm(true)}>Save</button>
            <Link to="/"><button>Back to main</button></Link>
        </div>
    </div>;

    return <div className="noteContainer">

        {
            showConfirm && <Confirm
                text={note.text}
                title={note.title}
                id={note._id}
                setShowConfirm={setShowConfirm}
            />
        }


        <PageHeader heading={note.title}/>

        <div className="noteContainer__section">
            <textarea
                value={note.text}
                onChange={e=>setNote((note)=>{
                    return {
                        ...note,
                        text:e.target.value
                    } as NoteEntity
                })}
            >
            </textarea>
            <TextInfo text={note.text}/>
        </div>
        <div className="buttons">
            <button onClick={()=>setShowConfirm(true)}>Save</button>
            <Link to="/"><button>Back to main</button></Link>
        </div>
    </div>
}
