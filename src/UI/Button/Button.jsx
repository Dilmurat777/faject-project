import s from './Button.module.scss'

const Button = ({children, active, onClick, className, disabled}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled && disabled()}
            className=
                {active ? `${s.btn} ${s.active} ${className}` : `${s.btn} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;