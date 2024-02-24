import React, { useContext } from "react";
import './EmptyAndError.css'
import { ReactComponent as NoteSVG } from './note.svg'
import { TodoContext } from "../TodoContext/TodoContext";

function EmptyTodos() {
    const { searchValue } = useContext(TodoContext);

    return (
        <div className="empty-container">
            <NoteSVG className="empty-svg-illustration" />
            <h3>Todo tranquilo por aquí</h3>

            {
                searchValue ? <p>No tenemos esa tarea</p> : <p>Añade una tarea</p>
            }


        </div>
    );
}

export { EmptyTodos };

//código para arreglar el bug
// {((!loading && totalToDos == 0)) && <p>Crea tu primer Todo</p>}        
// {((!loading && searchTodos == 0 && totalToDos > 0)) && <p>No hay coincidencias</p>}