import React from 'react';

import './Skill.css';

const Skill = () => {
    return( 
        <React.Fragment>
        <div class = "container-skills">
        <div className = "smallCard">
            <h1 className="heading">React&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;NodeJS&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Express</h1><br/>
            <h1 className="heading">Html 5&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;CSS 3&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;JavaScript</h1><br/>
            <h1 className="heading">MongoDB&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;Mysql&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;Sequelize</h1><br/>
            <h1 className="heading">Handlebars&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;ejs&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;pug</h1>
           
        </div> 
        </div>
        </React.Fragment>
    )
}
export default Skill;