import React, { Component } from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import People from './components/People/People';
import {Route, Link, Switch, NavLink} from 'react-router-dom';
import FAQ from './components/About/FAQ/FAQ';
import Company from './components/About/Company/Company';
import Character from './components/Character/Character';

export const routes = <div>
        <nav>
          <NavLink exact activeClassName="active" to = "/" >Home </NavLink>
          <NavLink to ="/about"> About  </NavLink>
          <NavLink to ="/people"> People  </NavLink>
          </nav>
        <Route exact path ="/" component ={Home} />
        <Route path ="/about" render ={() => <About>
        {
          <Route path="/about/FAQ" component ={FAQ} />
          // <Route path="/about/Company" component ={Company} />
        }
        </About> }/>
        <Switch>
        <Route exact path="/people" component ={People} />
        <Route path ="/people/:id" component={Character} />
        </Switch>


      </div>
    
