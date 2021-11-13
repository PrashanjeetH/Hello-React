import { Link } from 'react-router-dom'; 
// function About() {

//      return (
//          <div>
//              <h4>Version : Prashanjeet Learning v0.1</h4>
//              <a href='/'>Go Back</a>
//          </div>
//      )
// }

const About = () => {
    console.log('adsa')
    return (
        <div>
            <h4>Version : Prashanjeet Learning v0.1</h4>
            <Link to='/'>Go Back</Link>
        </div>
    )
}


export default About