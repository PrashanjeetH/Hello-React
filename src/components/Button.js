const Button = ({ color, text }) => {
    const OnClick = (a) => {
        console.log(a)
    }
    return (
        <button 
            className='btn' 
            style={{ backgroundColor: color }} 
            // events in JS
            onClick={OnClick} 
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