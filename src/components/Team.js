import React from 'react'
import "../App.css"
import team1 from "../assets/images/team1.png"
import shahad from "../assets/images/shahad.jpg"
import instagram from "../assets/images/instagram.svg"
import facebook from "../assets/images/facebook.svg"
import twitter from "../assets/images/twitter.svg"


const Team = () => {
    return (
        <div className='text-center mt-5 mb-5 team container' id='team'>
            <h1 className='mb-4'>MEET OUR TEAM</h1>
            <div className='row justify-content-around '>
                <div className='col-md-3 team-section'>
                    <img src={team1} className="teamImage" alt="team" />
                    <h3>Shahad</h3>
                    <div className='d-flex justify-content-around'>
                        <img className='socialIcon' src={instagram} alt="social" />
                        <img className='socialIcon' src={facebook} alt="social" />
                        <img className='socialIcon' src={twitter} alt="social" />
                    </div>
                </div>
                <div className='col-md-3 team-section'>
                    <img src={team1} className="teamImage" alt="team" />
                    <h3>Shahad</h3>
                    <div className='d-flex justify-content-around'>
                        <img className='socialIcon' src={instagram} alt="social" />
                        <img className='socialIcon' src={facebook} alt="social" />
                        <img className='socialIcon' src={twitter} alt="social" />
                    </div>
                </div>
                <div className='col-md-3 team-section'>
                    <img src={team1} className="teamImage" alt="team" />
                    <h3>Shahad</h3>
                    <div className='d-flex justify-content-around'>
                        <img className='socialIcon' src={instagram} alt="social" />
                        <img className='socialIcon' src={facebook} alt="social" />
                        <img className='socialIcon' src={twitter} alt="social" />
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Team 