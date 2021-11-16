import PropTypes from 'prop-types'
import Button from './Button'
import { FaTimesCircle, FaPlusCircle } from 'react-icons/fa'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
        <h1>{title}</h1>
        {/* using custom props */}
        <Button color={ 
                showAdd ? 'red' : 'green'} 
                text={showAdd ? <FaTimesCircle/> : <FaPlusCircle/> } 
                onClick={onAdd} 
        />
        
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