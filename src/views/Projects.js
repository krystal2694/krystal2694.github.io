import React, { Component } from 'react';
import ProjectCard from "../components/ProjectCard"
import TurtleRescue from '../assets/turtle_rescue.jpg'
import StarWars from '../assets/starwars.png'
import UpLift from '../assets/uplift.png'
import Harvest from '../assets/harvest.png'
import Zombie from '../assets/zombie.png'
import Website from '../assets/website.png'


class Projects extends Component {
    render() {
        return (
            <div className="view">
                <div className="projects-container">
                    <ProjectCard title="This Website"
                                 image={Website}
                                 linkURL="https://github.com/krystal2694/krystal2694.github.io"
                                 description="A personal website I created with React for practice after learning the
                                 library over the winter break."
                                 technologies={['React', 'JavaScript', 'HTML5', 'SCSS']}/>
                    <ProjectCard title="UpLift"
                                 image={UpLift}
                                 linkURL="https://github.com/krystal2694/UpLift"
                                 description="An App designed to improve mental health in the midst of the global
                                 pandemic through the delivery of uplifting content."
                                 technologies={['Java', 'Firebase', 'Android Studio']}/>
                    <ProjectCard title="Turtle Rescue"
                                 image={TurtleRescue}
                                 linkURL="https://github.com/krystal2694/turtle_rescue"
                                 description="An educational side-scroller game that teaches young kids
                          about the effects of ocean pollution."
                                 technologies={['JavaScript', 'HTML Canvas', 'CSS3', 'Firebase', 'Bootstrap', 'Krita']}/>
                    <ProjectCard title="Harvest"
                                 image={Harvest}
                                 linkURL="https://github.com/krystal2694/harvest"
                                 description="Harvest connects like-minded gardeners with each other so that excess produce is
                          not wasted."
                                 technologies={['JavaScript', 'HTML5', 'CSS3', 'Firebase']}/>
                    <ProjectCard title="Star Wars SUD"
                                 image={StarWars}
                                 linkURL="https://github.com/krystal2694/star_wars_sud"
                                 description="A simple Star Wars game that allows the player to join the Rebel Alliance and battle
                           Imperial Forces."
                                 technologies={['Python']}/>
                    <ProjectCard title="Zombie Hunter"
                                 image={Zombie}
                                 linkURL="https://github.com/krystal2694/star_wars_sud"
                                 description="One of my very first projects; a simple zombie hunting game developed during my
                          first web development course."
                                 technologies={['JavaScript', 'HTML5', 'CSS3']}/>
                </div>
            </div>
        );
    }
}

export default Projects;
