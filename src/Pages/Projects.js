import React from 'react';

import './Projects.css';

const Projects = () => {
    return( 
        <section className ="section-project" id = "project">
        <div className="u-center-text u-margin-top">
            <h2 className="heading-secondary">
                Most Popular Projects
            </h2>
        </div>
        <div className = "row">
            <div className = "container">
            <div className= "col-1-of-3">
                <div className="card">

                    <div className="card_side card_side--front">
                        <div className="card_picture card_picture--1">
                            &nbsp;
                        </div>
                        <h4 className="card_heading card_heading-front">
                           <sapn className="card_heading_span card_heading_span-1">   
                                Where to
                           </sapn>
                        </h4>  
                    </div>

                    <div className="card_side card_side--back card_side--back-1">
                        <div className="card_detail">
                            <h4 className="card_heading card_heading-back">
                                <span className="card_heading_span card_heading_span-1">   
                                Project-1
                                </span>
                             </h4>
                             <ul>
                                <li>
                                    <a href="https://sjahmed1445.github.io/whereto/" target="/">Github link</a>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </div>    
            </div>

            <div className= "col-1-of-3">
                <div className="card">

                    <div className="card_side card_side--front">
                        <div className="card_picture card_picture--2">
                            &nbsp;
                        </div>
                        <h4 className="card_heading card_heading-front">
                            <span className="card_heading_span card_heading_span-2">   
                                 Devit
                            </span>
                         </h4>
                    </div>

                    <div className="card_side card_side--back card_side--back-2">
                        <div className="card_detail">
                            <h4 className="card_heading card_heading-back">
                                <sapn className="card_heading_span card_heading_span-2">   
                                Project-2
                                </sapn>
                             </h4>
                             <ul>
                                <li>
                                    <a href="https://salty-stream-26516.herokuapp.com/" target="/">heroku-app</a>
                                </li>
                                <li>
                                    <a href="https://github.com/ahmeda47/project-2" target="/">Github link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>    
            </div>

            <div className= "col-1-of-3">
                <div className="card">

                    <div className="card_side card_side--front">
                        <div className="card_picture card_picture--3">
                            &nbsp;
                        </div>
                        <h4 className="card_heading card_heading-front">
                            <span className="card_heading_span card_heading_span-3">   
                                 eat-da-burger
                            </span>
                         </h4>
                    </div>

                    <div className="card_side card_side--back card_side--back-3">
                        <div className="card_detail">
                            <h4 className="card_heading card_heading-back">
                                <span className="card_heading_span card_heading_span-3">   
                                Project-3
                                </span>
                             </h4>
                             <ul>
                                <li>
                                    <a href="https://burger-is-ready-to-eat.herokuapp.com/" target="/">Heroku-app</a>
                                </li>
                                <li>
                                    <a href="https://github.com/bipan82gill/burger" target="/" >Github link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>     
            </div>
        </div>
    </div>
   </section>
    )
}
export default Projects;