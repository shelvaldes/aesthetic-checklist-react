import React from "react";
import { createPortal } from "react-dom";
import { ModalCloseButton } from "./ModalCloseButton";
import './Modal.css';

function Modal({ children }) {

    return createPortal(
        <div className="modal-bg">
            <div className="modal-body">
                <div className="modal-header">
                    <h3>Nueva tarea</h3>
                    {/* <CloseSVG className="close-btn" /> */}
                    <ModalCloseButton className="close-btn" />
                </div>
                <textarea>{children}</textarea>
                <button className="button-primary">
                    Guardar
                </button>

            </div>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };