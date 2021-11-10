import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {
    return (
        <header className='header'>
        <h1>{title}</h1>
        {/* using custom props */}
        <Button color='green' text='Add' />
        
        {/* using the default props */}
        {/* <Button /> */}
        </header>
    )
}

// // CSS in JS
// const headingStyling = {
//     color:'green',
//     background:'red',
// }

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title : PropTypes.string,
}

export default Header