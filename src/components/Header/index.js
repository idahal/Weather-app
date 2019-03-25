import React, { Component } from 'react';
import Title from "../Title";
import './Header.css';



class Header extends Component {
   render() {
    return (
      <div className="Header">
        <Title text="Is it raining in Gothenburg?"/>
      </div>
    );
  }
}
export default Header;
