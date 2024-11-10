import React from 'react';
import "../Styles/education.css"

export default function Educationpage() {
  return (
    <div className="education-container">
      <h1 className="education-title">Education</h1>
      <p className="education-description">
        I am currently pursuing an IT course at GIAIC enhancing my skills for a career as a full-stack developer. 
        I hold a bachelors degree from Govt Karachi University and completed my intermediate studies at S.M.B Fatimah Jinnah College. 
        My educational journey began with my matriculation from GOVT Girls School, providing me with a solid foundation in technology.
      </p>

      <ul className="education-list">
        <li className="education-item">
          <span className="education-institution">GIAIC</span><br />
          IT Course (Continue)
        </li>
        <li className="education-item">
          <span className="education-institution">Karachi University</span><br />
          Bachelors Degree (2019-2021)
        </li>
        <li className="education-item">
          <span className="education-institution">S.M.B Fatima Jinnah Govt Girls College</span><br />
          Intermediate Studies in Arts (2017-2019)
        </li>
        <li className="education-item">
          <span className="education-institution">Govt Ibrahim Ali Girl School</span><br />
          Matriculation in Arts (2015-2017)
        </li>
      </ul>
    </div>
  );
}
