import './NavBar.css';
import { Button, Container, Col, Row, Image} from 'react-bootstrap';
import DropdownMenu from '../components/DropdownMenu';

function NavBar(){
    return(
        <div className='NavBar'>
            <Container>
                <Image src="images/logo100.png" />
                <DropdownMenu />
                <Button id="btn1">Events RSVP'd</Button>
                <Button id="btn1">Events RSVP'd</Button>
            </Container>
        </div>
    )

}

export default NavBar;