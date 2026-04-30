import PropTypes from 'prop-types';
import './ErrorMessage.css';

interface ErrorMessageProps {
    error: string;
    onRetry?: () => void;
}

export default function ErrorMessage({ error, onRetry }: ErrorMessageProps) {
    return (
        <div className="error-message">
            <p className="error-text">Hubo un error: {error}</p>
            {onRetry && (
                <button onClick={onRetry} className="retry-button">
                    Reintentar
                </button>
            )}
        </div>
    );
}

ErrorMessage.propTypes = {
    error: PropTypes.string.isRequired,
    onRetry: PropTypes.func,
};
