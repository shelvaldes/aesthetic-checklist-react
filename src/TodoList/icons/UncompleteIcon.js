import React from "react";
import { TodoIcon } from './TodoIcon';

function UncompleteIcon({ onComplete }) {
    return (
        <TodoIcon
            type="uncheck"
            // color="gray"
            onClick={onComplete}
        />
    );
}

export { UncompleteIcon };