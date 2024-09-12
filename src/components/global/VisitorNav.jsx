import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const MainNav = () => {
  // State to handle menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = () => {
    setMenuOpen(!menuOpen);
  };



  return (
    <nav>
      <div className="part1">
        <Link to="/">
          <div className="logo">
            <img
              src="https://th.bing.com/th/id/OIG4.onB2FLDSZtb9ECxW7JEW?w=1024&h=1024&rs=1&pid=ImgDetMain"
              alt="logo"
            />
            <p>NSO</p>
          </div>
        </Link>
      </div>

      <div className={`part2 ${menuOpen ? 'responsive' : ''}`}>
        <ul>
          <li><Link to="/leaderboard">Leaderboard</Link></li>
          <li><Link to="/sponsors">Sponsors</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/matches">Matches</Link></li>
          <li><Link to="/teams">Teams</Link></li>
          <li className="join_now_button"><Link to="/join-now">Join Now</Link></li>
        </ul>
      </div>

      <div className="part3">
        {!menuOpen ? <span onClick={toggle}><MenuIcon/></span>:<span onClick={toggle}><CloseIcon/></span>}
      </div>
    </nav>
  );
};

export default MainNav;