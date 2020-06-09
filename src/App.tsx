import React from 'react';
import './App.scss';
import './shared/oui/main.sass';

import Footer from './portfolio/Footer';
import Projects from './portfolio/Projects';

function App() {
  return (
    <div className="App">
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
