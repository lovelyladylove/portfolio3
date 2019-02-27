import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Associations from './associations';
import Skills from './skills';
import avatar from '../img/1.png';

import './resume.css';


class Resume extends Component {
 render() {
  return(
    <div className="resume-body" >
      <Grid>
        <Cell col={4}>
          <div style={{textAlign: 'center'}}>
            <img
                src={avatar}
                alt="avatar"
                style={{height: '200px'}}
            />
          </div>
          <h2 style={{paddingTop: '2em'}}>Lovely Wagemann</h2>
          <h4 style={{color: 'grey'}}>Full Stack Web Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/ >
          <h5>Address</h5>
          <p>Herbergstraße 12</p>
          <p>58332 Schwelm</p>
          <p>Deutschland</p>
          <h5>Email</h5>
          <p>lovewagemann@gmail.com</p>
          <h5>Website</h5>
          <p>lovelyladylove.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          <h5>Skills</h5>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>Javascript</p>
          <p>ES6</p>
          <p>Node.Js</p>
          <p>JQuery</p>
          <p>LESS</p>
          <p>SASS</p>
          <p>React</p>
          <p>Bootstrap</p>
          <p>MySQL</p>
          <p>MongoDB</p>
          <p>Postman</p>
          <p>mLab</p>
          <p>Github</p>
          <p>Heroku</p>
          <p></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          <h5>Language</h5>
          <p>English</p>
          <p>Deutsch</p>
          <p>Filipino</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
        </Cell>

        <Cell className="resume-right-col" col={8}>
          <h2>Education</h2>
            <Education
              start="June 2018"
              end="May 2019"
              schoolName="DCI Digital Career Institute GmbH"
              course="Full Stack Web Development"
              address="Mindener Straße, 40227 Düsseldorf"
               />
            <Education
              start="June 2017"
              end="November 2018"
              schoolName="DCI Digital Career Institute GmbH"
              course="Full Stack Web Development"
              address="Hütten Straße, 40215 Düsseldorf"
               />
            <Education
              start="January 2016"
              end="February 2017"
              schoolName="VHS"
              course="Deutschkurs B1, B2 und Integrationskurs"
              address="Sprockhövel und Ennepetal"
                />
            <Education
              start="June 1999"
              end="March 2003"
              schoolName="De La Salle University Lipa, Philippines"
              course="Bachelor of Science and Commerce Major in Business Management"
              address="Lipa City 4217 Batangas, Philippines"
                />
          <hr style={{borderTop: '3px solid #e22947'}} />

          <h2>Experience</h2>
            <Experience
              start="December 2013"
              end="April 2014"
              jobName="Master Darts Sports Bar"
              position="Marketing Assistant"
              address="Johor Bahru, Malaysia"
              />
            <Experience
              start="February 2013"
              end="November 2013"
              jobName="Oktober Munich Restaurant & Bar"
              position="Marketing Assistant"
              address="Penang, Malaysia"
              />
            <Experience
              start="July 2012"
              end="February 2013"
              jobName="Overtime Restaurant & Bistro"
              position="Marketing Assistant"
              address="Johor Bahru, Malaysia"
              />
            <Experience
              start="June 2007"
              end="June 2012"
              jobName="Private Entity"
              position="Caregiver"
              address="Johor Bahru, Malaysia"
              />
            <Experience
              start="June 2004"
              end="February 2007"
              jobName="Global Reach Business Process Solutions Inc."
              position="Contract Analyst"
              address="Alabang, Philippines"
              />
            <Experience
              start="April 2003"
              end="July 2003"
              jobName="Advance Contract Solutions Inc."
              position="Call Center Agent"
              address="Cabuao, Laguna, Philippines"
              />

          <hr style={{borderTop: '3px solid #e22947'}} />

          <h2>Associations // Volunteer work</h2>
            <Associations
              start="January 2012"
              end="December 2013"
              associationName="Johor Oversears Filipino Association (Main Chapter)"
              position="Auditor"
              address="Johor Bahru, Malaysia"
              />
            <Associations
              start="January 2011"
              end="December 2012"
              associationName="Johor Oversear Filipino Association (Skudai Chapter)"
              position="Auditor"
              address="Johor Bahru, Malaysia"
              />
            <Associations
              start="June 1999"
              end="March 2003"
              associationName="De La Salle Kalikasan"
              position="Environmental Protector"
              address="Lipa City, Philippines"
              />
            <Associations
              start="March 2003"
              end="Present"
              associationName="De La Sall Alumni"
              position="Alumni"
              address="Lipa City, Philippines"
              />

        </Cell>
      </Grid>
    </div>
  )
 }
}
export default Resume;