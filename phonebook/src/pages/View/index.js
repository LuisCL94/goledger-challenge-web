import React, { Component } from 'react';

// import { } from './styles';
import { Link } from "react-router-dom";


export default class View extends Component {
  render() {
    return (
      <>
        <h1>Hello View!</h1>
        <Link to="/">
          <button>Back</button>
        </Link>
      </>
    );
  }
}