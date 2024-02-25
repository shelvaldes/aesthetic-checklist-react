import React from "react";
import { createPortal } from "react-dom";
import './Modal.css';
import { ModalCloseButton } from "./ModalCloseButton";

function Modal({ children }) {

    return createPortal(
        <div className="modal-bg">
            <div className="modal-body">
                <div className="modal-header">
                    <h3>Nueva tarea</h3>
                    <ModalCloseButton className="close-btn" />
                </div>
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };