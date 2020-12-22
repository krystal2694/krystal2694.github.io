import React, { Component } from 'react';
import "../css/ProjectCard.scss"


function ProjectCard(props) {
    const technologies = props.technologies;
    const listTechnologies = technologies.map((tech) =>
        <li>{tech}</li>
    );
    return(
        <div className="container">
            <a href={props.linkURL}>
            <div className="post">
                <div className="header_post">
                    <img src={props.image} alt=""/>
                </div>

                <div className="body_post">
                    <div className="post_content">

                        <h1><span className='title-dots'>  </span>{props.title} <span className='title-dots'>  </span></h1>

                        <p>{props.description}</p>

                        <div className="container_infos">

                            <div className="container_tags">
                                <span>Technologies</span>
                                <div className="tags">
                                    <ul>{listTechnologies}</ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </a>
        </div>
    );
}

export default ProjectCard;