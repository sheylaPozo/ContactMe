import React from 'react';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { FaTwitterSquare } from 'react-icons/fa';
import { AiFillMediumCircle } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';

const HomePage = () => (
  <div className="homemain" id="homePage">
    <img src="https://user-images.githubusercontent.com/54015740/128003276-cb5b205d-e69b-4a4a-a17c-4295d55dd338.jpg" alt="profilephoto" className="profile-image"/>
    <section className="intro">
      <header>
        <h1 className="font-colour">Hey there!</h1>
        <h3 className="font-colour">I&apos;m Sheyla Pozo</h3>
        <h4 className="font-colour">Full Stack Developer</h4>
      </header>
      <p className="text-light mt-3">
        I can help you build and design a product,
        feature, or website. Look through some of my work
        and experience. If you like what you
        see and have a project you need
        coded, do not hesitate to contact me.
      </p>
    </section>
    <section className="socials">
      <ul className="d-flex justify-content-around">
        <li>
          <a href="https://www.linkedin.com/in/sheypozo/" target="_blank" rel="noreferrer">
            <SiLinkedin className="icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/sheylaPozo" target="_blank" rel="noreferrer">
            <SiGithub className="icon_second" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/sheyPozo" target="_blank" rel="noreferrer">
            <FaTwitterSquare className="icon" />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@sheylum" target="_blank" rel="noreferrer">
            <AiFillMediumCircle className="icon_second" />
          </a>
        </li>
        <li>
          <a href="mailto:shey.sternenstaub@gmail.com" target="_blank" rel="noreferrer">
            <IoMdMail className="icon" />
          </a>
        </li>
      </ul>
    </section>
  </div>
);

export default HomePage;
