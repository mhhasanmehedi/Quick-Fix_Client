import React from 'react';
import boris from '../../../images/boris.jpg';
import cherlie from '../../../images/cherlie.jpg';
import eva from '../../../images/eva.jpg';
import jacobe from '../../../images/jacobe.jpg';
import TeamDetail from '../TeamDetail/TeamDetail';
import './Team.css'


const teamData = [
    {
        name: "Cherlie Smith",
        title: "Computer Engeneer",
        img: cherlie
    },
    {
        name: "Eva Clevis",
        title: "Computer Engeneer",
        img: eva
    },
    {
        name: "Jacobe Martin",
        title: "Computer Engeneer",
        img: jacobe
    },
    {
        name: "Boris Wilson",
        title: "Computer Engeneer",
        img: boris
    }
]



const Team = () => {
    return (
        <section className="team text-center">
            <div className="container">
                <h2 className="head-title">Our Experts</h2>
                <div className="row">
                    {
                        teamData.map(team => <TeamDetail team={team} key={team.name} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;