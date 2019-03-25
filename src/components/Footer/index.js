import React from 'react';
import PropTypes from "prop-types";
import './Footer.css';


const Footer = props => {
 return (
   <footer>
     {props.children}
  </footer>
)
}

Footer.propTypes = {
  text: PropTypes.string
};

Footer.defaultProps = {
  text: "Copyright"
};

export default Footer;
