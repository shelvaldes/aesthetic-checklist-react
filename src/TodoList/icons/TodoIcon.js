import { ReactComponent as CheckSVG } from './svg/ico-checked.svg';
import { ReactComponent as UncheckSVG } from './svg/ico-unchecked.svg';
import { ReactComponent as DeleteSVG } from './svg/ico-delete.svg';

const iconTypes = {
    // Alternativa para manejar el color desde JS
    // "check": (color) => <CheckSVG fill={color} />,
    // "uncheck": (color) => <UncheckSVG fill={color} />,
    // "delete": (color) => <DeleteSVG fill={color} />,

    "check": <CheckSVG />,
    "uncheck": <UncheckSVG />,
    "delete": <DeleteSVG />,
}

// Mapeo de tipos de iconos a etiquetas accesibles
const ariaLabels = {
    "check": "Marcar como completado",
    "uncheck": "Marcar como no completado",
    "delete": "Eliminar tarea",
};

function TodoIcon({ type, onClick }) {
    // color como prop

    // Manejador de eventos de teclado
    const handleKeyDown = (event) => {
        // Activa onComplete si se presiona Enter o Espacio
        if (event.key === 'Enter' || event.key === ' ') {
            onClick();
        }
    };

    return (
        <span
            tabIndex="0"
            role="button"
            aria-label={ariaLabels[type]}
            onKeyDown={handleKeyDown}

            className={`btn-${type}`}
            onClick={onClick}
        >
            {iconTypes[type]}
            {/* {iconTypes[type](color)} */}
        </span>

    )
}

export { TodoIcon };