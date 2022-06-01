import React, { useState } from 'react';
import './Projects.scss';
import Header from './Header';

const Projects = () => {
  return (
    <>
      <title>Matias Bavera</title>
      <div id="display"></div>
      <div id="projects">
        <Header />
        <div className={`large right project`}>
          <img className="screenshot" src="/me/resources/pictures/romi-dashboard.png" />
          <div className="description">
            <h2>
              <a href="https://www.openrobotics.org/">RoMi Dashboard OSRF</a>&nbsp;&middot;
              <a
                className="uil uil-github light-violet"
                title="Github"
                href="https://github.com/osrf/romi-dashboard"
              ></a>
            </h2>
            <h6>
              {' '}
              Web application that provides overall visualization and control over robots, doors, lift, etc.
            </h6>
            <p>
              Collabored with the development of this Open Source project owned by OSRF (Open Source Robotic Fundation).
            </p>
            <br />
            <p>
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Leaflet</span>
              <span className="tag">Ros2</span>
              <span className="tag">Nodejs</span>
              <span className="tag">Websockets</span>
            </p>
          </div>
        </div>

        <div className={`large right project`}>
          <img className="screenshot" src="/me/resources/pictures/ts.png" />
          <div className="description">
            <h2>
              <a href="">Crash Course Typescript</a>&nbsp;&middot;
              <a
                className="uil uil-github light-violet"
                title="Github"
                href="https://github.com/matiasbavera/typescript-crash-course"
              ></a>
            </h2>
            <h6>
              {' '}
              A crash course in TypeScript.
            </h6>
            <p>
              TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
            </p>
            <br />
            <p>
              <span className="tag">TypeScript</span>
            </p>
          </div>
        </div>

        {/* <div className={`large right project`}>
          <img className="screenshot" src="/me/resources/pictures/romi-dashboard.png" />
          <div className="description">
            <h2>
              <a href="">Course management system</a>&nbsp;&middot;
              <a
                className="uil uil-github light-violet"
                title="Github"
                href="https://github.com/matiasbavera/typescript-crash-course"
              ></a>
            </h2>
            <h6>
              {' '}
              Web application for course management.
            </h6>
            <p> 
              Web application for course management, it has modules for billing, enrollment, students, teachers, debt creation, fees and reports.
            </p>
            <br />
            <p>
              <span className="tag">Python 3</span>
              <span className="tag">Django</span>
              <span className="tag">JavaScript</span>
            </p>
          </div>
        </div> */}

      </div>
    </>
  );
};

export default Projects;
