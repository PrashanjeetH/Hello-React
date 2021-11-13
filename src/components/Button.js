const Button = ({ color, text, onClick }) => {
    return (
        <button 
            className='btn' 
            style={{ backgroundColor: color }} 
            // events in JS
            onClick={onClick} 
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'black',
    text:  'Button',
}

export default Button