import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Vrukshal Patel's personal website. Phoenix based ASU Graduate Student"
    + ' Technical Assistant @ ASU for Executive Administration Two times Software Enginner intern and Two years of Research Aide experience at Nirma University'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            This is the personal portfolio website for my projects and achievements and experience
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/vrukshal">here</a>.</p>
    </article>
  </Main>
);

export default Index;
