import PropTypes from 'prop-types';
import './LoadingSpinner.css';

interface LoadingSpinnerProps {
    message?: string;
}

export default function LoadingSpinner({ message = 'Cargando...' }: LoadingSpinnerProps) {
    return (
        <div className="spinner-container">
            <div className="spinner"></div>
            <p>{message}</p>
        </div>
    );
}

LoadingSpinner.propTypes = {
    message: PropTypes.string,
};
