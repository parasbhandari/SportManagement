import React from 'react'
import HmImg from '../../assets/ftbg.svg'
import Button from "../../Components/Button"
import "./Home.css"
function Home() {
  return (
    <div className='homepage'>
      <section>
        <h1>
        <div class="wrapper">
                <div class="circle"></div>
                <div class="shadow"></div>
        </div>
          2024 <br /> <span>
          Nepal Games
            </span>
        </h1>
        <p>
        Champions' empowerment, excellence nurtured <br/>- Welcome to Sundarbazzer Sports, where dedication leads to success.
        </p>
        <a href='#'>
          <Button name="Recent LeaderBoard"></Button>
        </a>
      </section>
      <div className='goal_img'>
      <img src={HmImg} alt="football_image" />
      </div>
   
    </div>
  )
}

export default Home