import React from 'react';
import './Projects.scss';

const Header = () => {
  return (
    <div>
      <div className="profile enhance">
        <img src="/me/resources/profile.png" />
        <h2>Matias Bavera</h2>
        <p>
          Full Stack Software Engineer &middot;{' '}
          <a href="https://www.ekumenlabs.com/">
            <strong className="ekumen">@Ekumen</strong>
          </a>{' '}
        </p>
      </div>
    </div>
  );
};

export default Header;
