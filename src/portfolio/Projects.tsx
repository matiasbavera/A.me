import React from 'react';
import './Projects.scss';
import Header from './Header';

const Projects = () => {
  return (
    <>
      <title>Matias Bavera</title>
      <div id="display"></div>
      <div id="projects">
        <Header />
        <div className="large right">
          <img className="screenshot" src="/resources/pictures/romi-dashboard.png" />
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
              Web application that provides overall visualization and control over the RoMi-H
              system.
            </h6>
            <p>
              Web application that provides overall visualization and control over the RoMi-H
              system.
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
      </div>
    </>
  );
};

export default Projects;
