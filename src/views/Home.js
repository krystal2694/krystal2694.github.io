import React, { Component } from 'react';
import me from '../assets/me.png'
import github from '../assets/github.png'
import linkedIn from '../assets/linkedin.png'
import Email from '../assets/email.png'
import Icon from '../components/Icon'

class Home extends Component {
    render() {
        return(
            <div>
                <img id='me' src={me} alt='me'/>
                <div id='icon-container'>
                    <Icon linkURL='https://www.linkedin.com/in/krystalwong263' imagePath={linkedIn}/>
                    <Icon linkURL='https://github.com/krystal2694' imagePath={github}/>
                    <Icon linkURL='mailto:krystal.w221@gmail.com' imagePath={Email}/>
                </div>
            </div>

        );
    }
}

export default Home;
