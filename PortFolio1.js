import React from 'react';
import './PortFolio1css.scss';

const PortFolio1 = () => {
  return <>
  
  <div ClassName="resume">
  <div ClassName="base">
    <div ClassName="profile">
      <div ClassName="photo">
        
        <i ClassName="fas fa-rocket"></i>
      </div>
      <div ClassName="info">
        <h1 ClassName="name">Naomi Weatherford</h1>
        <h2 ClassName="job">Frontend Web Designer</h2>
      </div>
    </div>
    <div ClassName="about">
      <h3>About Me</h3>I'm a web designer for Fiserv, specializing in web design, graphic design, and UX. Experienced with the Adobe Creative Suite, responsive design, social media management, and prototyping.
    </div>
    <div ClassName="contact">
      <h3>Contact Me</h3>
      <div ClassName="call"><a href="tel:123-456-7890"><i ClassName="fas fa-phone"></i><span>123-456-7890</span></a></div>
      <div ClassName="address"><a href="https://goo.gl/maps/fiTBGT6Vnhy"><i ClassName="fas fa-map-marker"></i><span>Provo, Utah</span></a>
      </div>
      <div ClassName="email"><a href="mailto:astronaomical@gmail.com"><i ClassName="fas fa-envelope"></i><span>astronaomical</span></a></div>
      <div ClassName="website"><a href="http://astronaomical.com/" > <i ClassName="fas fa-home"></i><span>astronaomical.com</span></a></div>
    </div>
    <div ClassName="follow">
      <h3>Follow Me</h3>
      <div ClassName="box">
        <a href="https://www.facebook.com/astronaomical/"  ><i ClassName="fab fa-facebook"></i></a>
        <a href="https://www.instagram.com/astronaomical/"><i ClassName="fab fa-instagram "></i></a>
        <a href="https://www.pinterest.com/astronaomical/" ><i ClassName="fab fa-pinterest"></i></a>
        <a href="https://www.linkedin.com/in/naomi-weatherford-758385112/" ><i ClassName="fab fa-linkedin"></i></a>
        <a href="https://codepen.io/astronaomical/"><i ClassName="fab fa-codepen"></i></a>
        <a href="https://www.behance.net/astronaomical" ><i ClassName="fab fa-behance"></i></a>
      </div>
    </div>
  </div>
  <div ClassName="func">
    <div ClassName="work">
      <h3><i ClassName="fa fa-briefcase"></i>Experience</h3>
      <ul>
        <li><span>Technical Consultant -<br />Web Design</span><small>Fiserv</small><small>Apr 2018 - Now</small></li>
        <li><span>Web Designer</span><small>Lynden</small><small>Jan 2018 - Apr 2018</small></li>
        <li><span>Intern - Web Design</span><small>Lynden</small><small>Aug 2017 - Dec 2017</small></li>
      </ul>
    </div>
    <div ClassName="edu">
      <h3><i ClassName="fa fa-graduation-cap"></i>Education</h3>
      <ul>
        <li><span>Bachelor of Science<br />Web Design and Development</span><small>BYU-Idaho</small><small>Jan. 2016 - Apr. 2018</small></li>
        <li><span>Computer Science</span><small>Edmonds Community College</small><small>Sept. 2014 - Dec. 2015</small></li>
        <li><span>High School</span><small>Henry M. Jackson High School</small><small>Jan. 2013 - Jun. 2015</small></li>
      </ul>
    </div>
    <div ClassName="skills-prog">
      <h3><i ClassName="fas fa-code"></i>Programming Skills</h3>
      <ul>
        <li data-percent="95"><span>HTML5</span>
          <div ClassName="skills-bar">
            <div ClassName="bar"></div>
          </div>
        </li>
        <li data-percent="90"><span>CSS3 & SCSS</span>
          <div ClassName="skills-bar">
            <div ClassName="bar"></div>
          </div>
        </li>
        <li data-percent="60"><span>JavaScript</span>
          <div ClassName="skills-bar">
            <div ClassName="bar"></div>
          </div>
        </li>
        <li data-percent="50"><span>jQuery</span>
          <div ClassName="skills-bar">
            <div ClassName="bar"></div>
          </div>
        </li>
        <li data-percent="40"><span>JSON</span>
          <div ClassName="skills-bar">
            <div ClassName="bar"></div>
          </div>
        </li>
        <li data-percent="55"><span>PHP</span>
          <div ClassName="skills-bar">
            <div ClassName="bar"></div>
          </div>
        </li>
        <li data-percent="40"><span>MySQL</span>
          <div ClassName="skills-bar">
            <div ClassName="bar"></div>
          </div>
        </li>
      </ul>
    </div>
    <div ClassName="skills-soft">
      <h3><i ClassName="fas fa-bezier-curve"></i>Software Skills</h3>
      <ul>
        <li data-percent="90">
          <svg viewbox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
            <circle ClassName="cbar" cx="50" cy="50" r="45"></circle>
          </svg><span>Illustrator</span><small></small>
        </li>
        <li data-percent="75">
          <svg viewbox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
            <circle ClassName="cbar" cx="50" cy="50" r="45"></circle>
          </svg><span>Photoshop</span><small></small>
        </li>
        <li data-percent="85">
          <svg viewbox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
            <circle ClassName="cbar" cx="50" cy="50" r="45"></circle>
          </svg><span>InDesign</span><small></small>
        </li>
        <li data-percent="65">
          <svg viewbox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
            <circle ClassName="cbar" cx="50" cy="50" r="45"></circle>
          </svg><span>Dreamweaver</span><small></small>
        </li>
      </ul>
    </div>
    <div ClassName="interests">
      <h3><i ClassName="fas fa-star"></i>Interests</h3>
      <div ClassName="interests-items">
        <div ClassName="art"><i ClassName="fas fa-palette"></i><span>Art</span></div>
        <div ClassName="art"><i ClassName="fas fa-book"></i><span>Books</span></div>
        <div ClassName="movies"><i ClassName="fas fa-film"></i><span>Movies</span></div>
        <div ClassName="music"><i ClassName="fas fa-headphones"></i><span>Music</span></div>
        <div ClassName="games"><i ClassName="fas fa-gamepad"></i><span>Games</span></div>
      </div>
    </div>
  </div>
</div>
  
  </>;
};
export default PortFolio1;