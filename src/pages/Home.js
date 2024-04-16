import "bootstrap/dist/css/bootstrap.css";
import './Home.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button, Container, Col, Row, Image} from 'react-bootstrap';
import DropdownMenu from '../components/DropdownMenu';


function Home() {
  return (
    <div className="volunteerProfile">
      <Row id="main">

          <Col id="mainCol">
            <Container id="container1">
              <Col>
                <DropdownMenu />
              </Col>
              <Col id="logo">

              </Col>
              <Col id="title" xs={6} md={4}>
                Welcome!
              </Col>
              <Col xs={6} md={4}>
                <Container id="logo2">
                  <Image src="images/logo100.png" />
                </Container>
              </Col>
            </Container>

            <Row id="row2">
              <Col>
                < Container id="container2">
                {/* ProfilePic | VolunteerInfo */}
                  <Col id="infoColumn">
                    <Image src="images/logo_place.png" />
                  </Col>
                </Container>
              </Col>
            </Row>
            <div className='box' id='box1'>
              <Container id="container3">
                <Button variant='primary' size="lg" id="btn1">Profile</Button>
                <Button variant='primary' size="lg" id="btn2">Events Calendar</Button>
                <Button variant='primary' size="lg" id="btn3"> Event List</Button>
                <Button variant='primary' size="lg" id="btn4">Volunteer Hours</Button>
              </Container>
              <Col id="bot-right">
              </Col>
            </div>
          </Col>

      </Row>
    </div>
  );
}

export default Home;
