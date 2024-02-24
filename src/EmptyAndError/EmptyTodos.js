import React from "react";
import './EmptyAndError.css'
import { ReactComponent as NoteSVG } from './note.svg'

function EmptyTodos() {
    return(
        <div className="empty-container">
            <NoteSVG className="empty-svg-illustration"/>
            <h3>Todo tranquilo por aquí</h3>
            <p>Añade una tarea</p>
        </div>
    );
}

export { EmptyTodos };