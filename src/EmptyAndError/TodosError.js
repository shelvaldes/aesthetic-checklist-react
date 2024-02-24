import React from "react";
import './EmptyAndError.css'
import { ReactComponent as BrokenSVG } from './broken.svg'

function TodosError() {
    return(
        <div className="empty-container">
            <BrokenSVG className="empty-svg-illustration"/>
            <h3>¡Doh!</h3>
            <p>Hubo un problema...</p>
        </div>
    );
}

export { TodosError };