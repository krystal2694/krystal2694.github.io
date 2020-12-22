import './App.css';
import React from 'react';
import './index.css'
import Background from "./components/Background";
import Typewriter from "typewriter-effect";

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './Nav'
import Home from './views/Home'
import Credentials from './views/Credentials'
import Projects from './views/Projects'


function App() {
  return (
      <BrowserRouter>
      <div className="App">
          <div style={{position: 'relative'}}>
              <div id="canvas" style={{position: 'fixed'}}>
                  <Background />
              </div>
          </div>
          <div>
              <div id='name'>
                  <Typewriter
                      options={{
                          loop: true,
                          delay: 200,
                          deleteSpeed: 200,
                      }}
                      onInit={(typewriter) => {
                          typewriter.typeString('Krystal Wong.')
                              .pauseFor(5000)
                              .deleteAll()
                              .start();
                      }}
                  />
              </div>
              <Nav/>

          </div>
          <Route render={({ location }) => {
              return (
                  <Switch location={location}>
                      <Route exact path="/" component={Home}/>
                      <Route path="/projects" component={Projects} />
                      <Route path="/credentials" component={Credentials} />
                  </Switch>
              )
          }}/>
      </div>
      </BrowserRouter>
  );
}

export default App;
