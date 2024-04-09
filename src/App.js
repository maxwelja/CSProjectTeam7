import './App.css';
import { Route, Routes } from "react-router-dom";
import DropdownMenu from './components/DropdownMenu';
import Home from './pages/Home';
import VolunteerProfile from './pages/VolunteerProfile';
// import OrganizationProfile from './pages/OrganizationProfile';
// import EventList from './pages/EventList';
// import EventCalendar from './pages/EventCalendar';
// import db from '../../playground-1.mongodb';

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/VolunteerProfile" element={<VolunteerProfile />} />
               {/*
               <Route path="/orgProfile" element={<OrganizationProfile />} />
               <Route path="/eventList" element={<EventList />} />
               <Route path="/EventCalendar" element={<EventCalendar />} />
               <Route path="/login" element={<Login />} />
                */}
            <Route path="/dropdown" element={<DropdownMenu />} />
        </Routes>
    )
}

export default App;