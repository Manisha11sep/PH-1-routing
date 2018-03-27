import React from 'react';
import {Route, Link} from 'react-router-dom';

export default function About(props) {
  return (
    <div>
      <h1>This is the About component</h1>
     
          
      <h3>FAQ  <Link to ="/about/FAQ" > FAQ </Link> </h3>
      <h3>Company <Link to ="/about/Company"> Company </Link></h3>
      {props.children}
    </div>
  )
}