import React, { Component } from 'react';
import Card from "../components/Card";


class Credentials extends Component {

    render() {
        const skillsContent = <div>
            <h4>Languages</h4>
            <h5>English • Cantonese • Mandarin</h5>
            <h4>Programming</h4>
            <h5>Python • Java • C</h5>
            <h4>Web</h4>
            <h5>HTML • CSS/SCSS • JavaScript • React</h5>
            <h4>More</h4>
            <h5>SQL • Firebase • Agile • Git</h5>
        </div>;

        const experienceContent = <div>
            <h4>The Boeing Company</h4>
            <h5>Software Quality Assurance Intern</h5>
            <p>01.2020 - 08.2020</p>
            <h4>The Keg Steakhouse and Bar</h4>
            <h5>Trainer, Member of Opening Team, Cash Manager, Server, Guest Services</h5>
            <p>04.2013 - 08.2020</p>
        </div>;

        const educationContent = <div>
            <h4>British Columbia Institute of Technology</h4>
            <h5>Computer Systems Technology - GPA: 95%</h5>
            <p>01.2019 - Current</p>
            <h4>University of British Columbia</h4>
            <h5>Psychology and Sociology courses</h5>
            <p>09.2012 - 04.2014</p>
        </div>;
        return (
            <div className="view">
                <div className="credentials-container">
                    <Card width={'25em'} title="Skills" content={skillsContent}/>
                    <Card width={'28em'} title="Education" content={educationContent}/>
                    <Card width={'35em'} title="Work Experience" content={experienceContent}/>


                    {/*<div className="content">*/}
                {/*    <div className="content--inner">*/}
                {/*    </div>*/}
                {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default Credentials
