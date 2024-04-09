import './Home.css';
import { Button, Container, Col, Row, Image} from 'react-bootstrap';
import DropdownMenu from '../components/DropdownMenu';
import NavBar from '../components/NavBar';

function Home(){
    return(
        <div className='Home'>
            <NavBar />
        </div>
    )

}

export default Home;