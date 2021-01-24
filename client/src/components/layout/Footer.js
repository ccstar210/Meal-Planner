import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/"><img alt="logo" src="./images/crossiantLogo.svg" height="50px" width="50px" className="logo"></img></Link>
      <p><Link to="/" className="text-light">MealPlansForYou</Link></p>
      <p>&copy; 2021</p>
    </div>
  );
}
export default Footer;