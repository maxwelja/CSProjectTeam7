import './VolunteerProfile.css';
import { Button, Container, Col, Row, Image} from 'react-bootstrap';
import DropdownMenu from '../components/DropdownMenu';

function VolunteerProfile() {
  return (
    <div className="vProfile">
      <Row id="main">
        <Col id="sidebar"></Col>
          <Container id='mainContainer'>
            <Col id="mainCol">
              <Container id="container1">
                  <DropdownMenu />
                  <Container id="logo1">
                    <Image src="images/logo100.png" />
                  </Container>
                <Col id="title">
                  Volunteerise
                </Col>
                  <Container id="logo2">
                    <Image src="images/logo100.png" />
                  </Container>
              </Container>

              <Row id="row2">
                <Col  id="profile">
                  <Image src="images/profilePic.png" />
                </Col>
                <Col>
                  < Container id="container2">
                  {/* ProfilePic | VolunteerInfo */}
                      <Container id="infoContainer">
                        <Col id="infoColumn">
                          <Row>Name: Jacob Maxwell</Row>
                          <Row>Email: jam190009@utdallas.edu</Row>
                          <Row>Phone: (123)456-7890</Row>
                          <Row>Summary:<br />Hello, my name is Jacob and I volunteer! and stuff and things and yippeeeeeeee</Row>
                        </Col>
                      </Container>
                  </Container>
                </Col>
              </Row>

              <div className='box' id='box1'>
                <Col id='bot-left'>
                <Container id="container3">
                  <div className='box' id='box2'>
                  {/* Karma | Karma Rating */}
                      <Col id='kRating'>
                      Karma<br />
                      Rating
                      </Col>
                      <Container id="karma">
                        0
                      </Container>
                  </div>
                  <Button variant='primary' id="btn1">Events RSVP'd</Button>
                  <Button variant='primary' id="btn2">Events Attended</Button>
                </Container>
                </Col>

                <Col id="bot-right">
                  <Container id="container4">
                  <div className='box' id='box3'>
                  {/* Karma | Karma Rating */}
                      <Col id="vhours">
                      Volunteer<br/>Hours
                      </Col>
                      <Container id="hours">
                        0
                      </Container>
                  </div>
                  <div className='box' id="box4">
                    <Col id="attended">
                      Events<br/>Attended
                    </Col>
                    <Container id="events">
                      0
                    </Container>
                  </div>
                  </Container>

                  <Container id="container5">
                  <div className='box' id='box4'>
                  {/* Karma | Karma Rating */}
                      <Button variant="primary">Events Near Me</Button>
                  </div>
                  </Container>
                </Col>
              </div>
            </Col>
          </Container>
        <Col id="sidebar"></Col>
      </Row>
    </div>
  );
}

export default VolunteerProfile;