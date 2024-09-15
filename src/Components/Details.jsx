import React, { useState } from 'react';
import Team from './Team';
import Prize from './Prize';
import EventDescription from './EventDescription';
import EventContactDetails from './EventContactDetails';
function Details() {
  const Teams = [
    {
      "name": "Red Dragons FC",
      "logo": "https://via.placeholder.com/150x150?text=Red+Dragons+FC",
      "description": "A high-energy team known for their aggressive play and fierce competitiveness."
    },
    {
      "name": "Blue Sharks United",
      "logo": "https://via.placeholder.com/150x150?text=Blue+Sharks+United",
      "description": "Specializing in fast counter-attacks, Blue Sharks United dominate the field with precision."
    },
    {
      "name": "Golden Eagles",
      "logo": "https://via.placeholder.com/150x150?text=Golden+Eagles",
      "description": "A top-tier team with a history of winning, known for their strategic plays."
    },
    {
      "name": "Silver Strikers",
      "logo": "https://via.placeholder.com/150x150?text=Silver+Strikers",
      "description": "An up-and-coming team with young talent, famous for their powerful strikes."
    },
    {
      "name": "Black Panthers",
      "logo": "https://via.placeholder.com/150x150?text=Black+Panthers",
      "description": "A defensive powerhouse, Black Panthers are masters of shutting down their opponents."
    },
    {
      "name": "Green Warriors",
      "logo": "https://via.placeholder.com/150x150?text=Green+Warriors",
      "description": "Green Warriors are known for their resilience and ability to turn the game around."
    },
    {
      "name": "Purple Thunder",
      "logo": "https://via.placeholder.com/150x150?text=Purple+Thunder",
      "description": "A fan-favorite, Purple Thunder excels in both offense and defense, making them well-rounded."
    },
    {
      "name": "Orange Phoenix",
      "logo": "https://via.placeholder.com/150x150?text=Orange+Phoenix",
      "description": "The Orange Phoenix team rises in the second half of games, making stunning comebacks."
    },
    {
      "name": "White Wolves",
      "logo": "https://via.placeholder.com/150x150?text=White+Wolves",
      "description": "Known for their teamwork, White Wolves have a strong bond that reflects in their gameplay."
    },
    {
      "name": "Crimson Tigers",
      "logo": "https://via.placeholder.com/150x150?text=Crimson+Tigers",
      "description": "With a history of big wins, the Crimson Tigers are an elite team always in the championship hunt."
    }
  ];
  const Prizes=[
    {
      position: "1st",
      amount: "Rs 100,000",
      color: "bg-orange-950"
    },
    {
      position: "2nd",
      amount: "Rs 50000",
      color: "bg-amber-700"
    },
    {
      position: "3rd",
      amount: "Rs 25000",
      color: "bg-lime-900"
    }
  ];

  // State to track how many teams are displayed
  const [visibleTeams, setVisibleTeams] = useState(8);

  // Function to show more teams
  const showMoreTeams = () => {
    setVisibleTeams(Teams.length); // Display all teams
  };

  // Function to show less teams
  const showLessTeams = () => {
    setVisibleTeams(8); // Display only 8 teams
  };

  return (
    <div>
      <p className='text-base'>Ongoing || Match Will Soon Start From Aug 15</p>
      <h2 className='mt-7'>Team Participated (10)</h2>

      {/* Team Participated */}
      <div className='flex flex-wrap justify-between'>
        {Teams.slice(0, visibleTeams).map((team, index) => (
          <Team key={index} name={team.name} logo={team.logo} description={team.description} />
        ))}
      </div>

      {/* Show More or Show Less Button */}
      <div className="mt-10">
        {visibleTeams < Teams.length ? (
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-xl mr-2 "
            onClick={showMoreTeams}
          >
            Show More...
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-xl"
            onClick={showLessTeams}
          >
            Show Less
          </button>
        )}
      </div>
      

      {/* Prizes Section */}
      <div className='Prize mt-16'>
       <h2>Prizes</h2>
       <div className='Prizes mt-16'>
        <div className='flex justify-between '>
          {Prizes.map((prize,index)=>(
            <Prize key={index} position={prize.position} amount={prize.amount} color={prize.color}/>
          ))}
        </div>
       </div>
      </div>
      
      {/* //Event Description */}
      <EventDescription/>

      
      {/* Event Contact Detail Section 
      */}


      <EventContactDetails/>
      
    </div>
  );
}

export default Details;
