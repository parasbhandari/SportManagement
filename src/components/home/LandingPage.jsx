import React from 'react';
import { Link } from 'react-router-dom';
import LandImage from '../../assets/images/landimage.png'


const LandingPage = () => {
  return (
    <>
    <div className="homepage">
      <section>
        <h1>
          <div className="wrapper">
            <div className="circle"></div>
            <div className="shadow"></div>
          </div>
          2024<br /><span>Nepal Games</span>
        </h1>
        <p>
          Champions' empowerment, excellence nurtured <br />
          - Welcome to Sundarbazzer Sports, where dedication leads to success.
        </p>

        <Link to="/leaderboard">
          <button className="leaderboard_button">Recent Leaderboard</button>
        </Link>
      </section>

      <div className="goal_img">
        <img src={LandImage} alt="Football" />
      </div>

    </div>
</>
  );
};

export default LandingPage;
