import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {NotesView} from "./views/NotesView";
import {NoteView} from "./views/NoteView";

export const App = () => {
    return <Routes>
        <Route path={"/"} element={<NotesView/>} />
        <Route path={"/:id"} element={<NoteView/>}/>
    </Routes>
}

