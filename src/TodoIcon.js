import { ReactComponent as CheckSVG } from './ico-checked.svg';
import { ReactComponent as UncheckSVG } from './ico-unchecked.svg';
import { ReactComponent as DeleteSVG } from './ico-delete.svg';

const iconTypes = {
    // Alternativa para manejar el color desde JS
    // "check": (color) => <CheckSVG fill={color} />,
    // "uncheck": (color) => <UncheckSVG fill={color} />,
    // "delete": (color) => <DeleteSVG fill={color} />,

    "check": <CheckSVG />,
    "uncheck": <UncheckSVG />,
    "delete": <DeleteSVG />,
}

function TodoIcon({type, onClick}) {
    // color como prop
    return (
        <span
            className={`btn-${type}`}
            onClick={onClick}
        >
            {iconTypes[type]}
            {/* {iconTypes[type](color)} */}
        </span>

    )
}

export { TodoIcon };