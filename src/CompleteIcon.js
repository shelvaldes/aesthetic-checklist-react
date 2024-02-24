import React from "react";
import { TodoIcon } from './TodoIcon';

function CompleteIcon({ onComplete }) {
    return (
        <TodoIcon
            type="check"
            // color="pink"
            onClick={onComplete}
        />
    );
}

export { CompleteIcon };