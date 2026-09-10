import { buttonVariants } from "../constants"

const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '', ...rest }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`button px-6 rounded-full cursor-pointer transition-colors duration-300 ${buttonVariants[variant]} ${className}`}
            {... rest}
        >
            {children}
        </button>
    )
}

export default Button