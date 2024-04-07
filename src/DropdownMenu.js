import "bootstrap/dist/css/bootstrap.css";
import './DropdownMenu.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function DropdownMenu() {
  return (
    <div className="Dropdown">
      <header className="Dropdown-header">
         <DropdownButton className="btn btn-secondary btn-sm" id="dropdown-basic-button" title="☰">
            <Dropdown.Item href="#/action-1">Home Page</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Event Calendar</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Event List</Dropdown.Item>
            <Dropdown.Item href="#/action-5">Volunteer Hours</Dropdown.Item>
            <Dropdown.Item href="#/action-6">Sign Out</Dropdown.Item>
            </DropdownButton>
      </header>
    </div>
  );
}

export default DropdownMenu;
