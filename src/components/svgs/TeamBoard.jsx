import React from 'react'
import { Jersey } from './jersey'
import GroundSvg from './GroundSvg'

const TeamBoard = () => {
    const GroupWithTeams =({className})=>{
        const jersey_data ={
            primaryColor:'blue',
            secondaryColor:'purple',
            textColor:"white",
            neckLineColor:'white',
            players:[
                { className: "goal_keeper", name: "Goal Keeper", jersey: 1 },
                { className: "defense center-left", name: "Defense", jersey: 2 },
                { className: "defense center-right", name: "Defense", jersey: 3 },
                { className: "defense left", name: "Defense", jersey: 4 },
                { className: "defense right", name: "Defense", jersey: 5 },
                { className: "middle left", name: "Midfield", jersey: 6 },
                { className: "middle right", name: "Midfield", jersey: 7 },
                { className: "front right", name: "Forward", jersey: 8 },
                { className: "front left", name: "Forward", jersey: 9 },
                { className: "front center-left", name: "Forward", jersey: 10 },
                { className: "front center-right", name: "Forward", jersey: 11 }
            ]
        }
          
        return(
            <div className={`team_ground ${className}`}>
                {jersey_data.players.map((elem,index)=>{
                    return(
                    <Jersey className={`ground_jersey ${elem?.className}`} name={elem?.name} jersey={elem?.jersey} primaryColor={jersey_data.primaryColor} secondaryColor={jersey_data.secondaryColor} textColor={jersey_data.textColor} neckLineColor={jersey_data.neckLineColor}/>
                    )
                })}
            {/* <GroundSvg width={500} height={500}/> */}

            <div className="goal_post"></div>
            <div className="team_area"></div>
            <div className="post_center"></div>
            <div className="ground_center"></div>
            <div className="penalty_point"></div>
            </div>
        )
    }
  return (
    <div className='team_box_container'>
        <div className="box box1"></div>
        <GroupWithTeams
            className="box team1"
        />
    </div>
  )
}

export default TeamBoard