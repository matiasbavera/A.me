import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div id="copyright">
          <p>
            &copy; 2020 <a href="/">Matias</a>
          </p>
          <h2 className="social-section">
            <a
              className="uil uil-github light-violet"
              title="Github"
              href="https://github.com/baviera08"
            ></a>
            <a
              className="uil uil-linkedin dark-sky"
              title="LinkedIn"
              href="https://linkedin.com/in/matiasbavera"
            ></a>
            <a
              className="uil uil-twitter light-sky"
              title="Twitter"
              href="https://twitter.com/matibavera"
            ></a>
          </h2>
        </div>
        <div>
          <p>
            <strong>Open Source</strong>
          </p>
          <ul>
            <li>
              <a href="https://github.com/osrf/romi-dashboard">romi-dashboard</a>
              <div className="tooltip">test</div>
            </li>
          </ul>
        </div>
        <div>
          <p>
            <strong>Apps</strong>
          </p>
          <ul>
            <li>
              <a href="">Test</a>
            </li>
          </ul>
        </div>
        <div>
          <p>
            <strong>Doodles</strong>
          </p>
          <ul>
            <li>
              <a href="">Test</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default Footer;
