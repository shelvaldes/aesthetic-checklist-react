import React from "react";
import { ReactComponent as CloseSVG } from './close.svg';
import { TodoContext } from '../TodoContext/TodoContext';

function ModalCloseButton() {
    const {
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <button
            className='close-btn'
            onClick={
                () => setOpenModal(false)
            }
        >
            <CloseSVG />
        </button>

    )
}

export { ModalCloseButton };