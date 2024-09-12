import React from 'react';
import { Link } from 'react-router-dom';

const LoginBoards = () => {
  // Fake data for event organizers and teams
  const authOptions = [
    {
      title: 'Event Organizer',
      image: 'https://img.freepik.com/free-vector/purple-blue-gradient_78370-295.jpg?t=st=1724684670~exp=1724688270~hmac=2c5b9964d4aa0a2bf99cb853c9a4357bfdb8f7e18268137bc4d63eb0c4b2a66f&w=1380',
      loginUrl: '/organizer/login',
      registerUrl: '/organizer/register'
    },
    {
      title: 'Team',
      image: 'https://img.freepik.com/premium-photo/photo-french-national-team-field_1008415-34919.jpg?w=826',
      loginUrl: '/team/login',
      registerUrl: '/team/register'
    }
  ];

  return (
    <div className="auth_option_container">
      <h1 className="txt-center">JOIN OUR COMMUNITY</h1>

      <div className="auth_boxes">
        {authOptions.map((option, index) => (
          <div className="box box1" key={index}>
            <img src={option.image} alt={option.title} />
            <div className="outer">
              <h3>{option.title}</h3>
              <Link to={option.loginUrl}>
                <button className="leaderboard_button">Login</button>
              </Link>
              <Link to={option.registerUrl}>
                <button className="leaderboard_button outline">Register</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginBoards;