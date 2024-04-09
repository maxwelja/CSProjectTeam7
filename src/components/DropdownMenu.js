import "bootstrap/dist/css/bootstrap.css";
import './DropdownMenu.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function DropdownMenu() {
  return (
    <div className="Dropdown">
      <header className="Dropdown-header">
         <DropdownButton id="dropdown-basic-button" title="☰">
            <Dropdown.Item href="/">Home Page</Dropdown.Item>
            <Dropdown.Item href="/VolunteerProfile">Profile</Dropdown.Item>
            <Dropdown.Item href="/EventCalendar">Event Calendar</Dropdown.Item>
            <Dropdown.Item href="/EventList">Event List</Dropdown.Item>
            <Dropdown.Item href="/VolunteerProfile">Volunteer Hours</Dropdown.Item>
            <Dropdown.Item href="/Login">Sign Out</Dropdown.Item>
            </DropdownButton>
      </header>
    </div>
  );
}

export default DropdownMenu;
