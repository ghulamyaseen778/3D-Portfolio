import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Contact,
  Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components';
import { useEffect } from 'react';
import { config } from './constants/config';

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className="relative">
          <Experience />
          {/* <StarsCanvas /> */}
        </div>
        <Tech />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Works />
          <StarsCanvas color="green" />
        </div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
