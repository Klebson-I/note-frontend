import React, {useEffect, useState} from "react";
import {NoteEntity} from "../types";
import "../styles/NotesView.css";
import {PageHeader} from "../components/Header/PageHeader";
import {NoteCafel} from "../components/NoteCafel/NoteCafel";
import {Link} from "react-router-dom";
import {ConfirmDelete} from "../components/ConfirmDelete/ConfirmDelete";

export const NotesView = () => {
    const [notes,setNotes] = useState<NoteEntity[]|null>(null);
    const [showDeleteConfirm,setShowDeleteConfirm] = useState<boolean>(false);
    const [idToDelete,setIdToDelete] = useState<string>("");

    useEffect(()=>{

        (async()=>{
            const res=await fetch("http://localhost:3001/note",{method:"GET"});
            const data=await res.json();
            setNotes(data);
        })();

    },[]);

    const refresh = async ():Promise<void> => {
        const res=await fetch("http://localhost:3001/note",{method:"GET"});
        const data=await res.json();
        setNotes(data);
    }


    return <div className="notesContainer">
        <PageHeader heading="Notes"/>
        <div className="notesContainer__container">
            {
                notes!==null
                    ?
                    notes.map(note=>(<NoteCafel
                        key={note._id}
                        id={note._id}
                        text={note.text}
                        title={note.title}
                        showDelete={setShowDeleteConfirm}
                        setId={setIdToDelete}
                        />
                    ))
                    :
                    <p>No notes ...</p>
            }

                {
                    showDeleteConfirm && <ConfirmDelete
                        id={idToDelete}
                        showDelete={setShowDeleteConfirm}
                        refresh={refresh}
                    />
                }

        </div>
        <Link to="/new"><button className="createNewButton">Create new note</button></Link>
    </div>
}