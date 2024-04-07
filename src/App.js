import './App.css';
import { Button, Container, Col, Row, Image} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import volunteerProfile from './volunteerProfile';
import DropdownMenu from './DropdownMenu';
// import db from '../../playground-1.mongodb';

const Home = () => <h1>Home Page</h1>
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/vProfile" element={<volunteerProfile />} />
                <Route path="/dropdown" element={<DropdownMenu />} />
            </Routes>
        </Router>
    )
}

export default App;