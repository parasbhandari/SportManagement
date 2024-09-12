import React from "react";

const About = () => {
  return (
    <div className="about_page">
      <div className="about_container">
        <div className="heading">
          <p className="bold_span">ABOUT US</p>
          <h1>SPORTS MANAGEMENT</h1>

          <div className="achievement">
            <h2>
              ORGANIZED MORE THAN <span className="big_primary">100+</span>{" "}
              FOOTBALL EVENTS OVERALL NEPAL
            </h2>
          </div>
        </div>
        <div className="other_info">
          <p>
            Nepal Sports Organization excels in organizing online sports data.
            Specializing in match statistics, live updates, and innovative
            dashboards, we offer comprehensive insights into tournaments, player
            performances, and standings.
          </p>
          <p className="bold_span read">Read More . . . </p>

          <div className="sponsors">
            <img
              src="https://remarketing.pt/wp-content/uploads/2020/05/white_logo_transparent_background.png"
              alt="Sponsor 1"
            />
            <img
              src="https://www.pngall.com/wp-content/uploads/2018/05/Disney-Logo-PNG-File.png"
              alt="Sponsor 2"
            />
            <img
              src="https://i.pinimg.com/originals/f2/87/12/f287122744d914997e7e2b690b1f6706.png"
              alt="Sponsor 3"
            />
            <img
              src="https://nplpickleball.store/cdn/shop/files/NPL_Logo_3.png?v=1687990309&width=1445"
              alt="Sponsor 4"
            />
            <img
              src="https://www.pngmart.com/files/22/FIFA-Logo-PNG-Isolated-Image.png"
              alt="Sponsor 5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
