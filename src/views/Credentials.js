import React, { Component } from 'react';
import Card from "../components/Card";


class Credentials extends Component {

    render() {
        const skillsContent = <div>
            <h4>Languages</h4>
            <h5>English . Cantonese . Mandarin</h5>
            <h4>Languages</h4>
            <h5>English . Cantonese . Mandarin</h5>
        </div>;

        const experienceContent = <div>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
        </div>;
        return (
            <div className="view">
                <div className="credentials-container">
                    <Card title="Skills" content={skillsContent}/>
                    <Card title="Work Experience" content={experienceContent}/>
                    <Card title="Education" content={skillsContent}/>

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
