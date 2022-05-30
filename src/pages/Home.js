import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import HeroImg from '../assets/homepage/mobile/image-homepage-hero@2x.jpg';
import HeroImgTablet from '../assets/homepage/tablet/image-homepage-hero@2x.jpg';
import HeroImgDesktop from '../assets/homepage/desktop/image-homepage-hero@2x.jpg';
import AboutImg from '../assets/homepage/mobile/image-homepage-profile@2x.jpg';
import AboutImgTablet from '../assets/homepage/tablet/image-homepage-profile@2x.jpg';
import AboutImgDesktop from '../assets/homepage/desktop/image-homepage-profile@2x.jpg';
import StyleButton from '../assets/icons/down-arrows.svg';
import TalkComponent from '../components/TalkComponent';

const Home = () => {
  return ( 
    <main className="container">

      <section className="hero">
        <div className="hero-content">
          <picture className="hero-img">
            <source srcSet={HeroImgDesktop} media="(min-width: 1024px)" />
            <source srcSet={HeroImgTablet}  media="(min-width: 768px)" />
            <img src={HeroImg} alt="Website in creation" />
            <div className="hero-text">
              <h1 className="big-title">
                Hey, I’m Alex Spencer and I love building beautiful websites
              </h1>
              <HashLink smooth to="#about" className="button button-hero">
                <div className="button-hero-img"></div>
                <img src={StyleButton} alt="Style button" />
                <div className="button-hero-text">
                  <p>ABOUT ME</p>
                </div>
              </HashLink>
            </div>
          </picture>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-container">
          <picture className="about-img">
            <source srcSet={AboutImgDesktop} media="(min-width: 1024px)" />
            <source srcSet={AboutImgTablet}  media="(min-width: 768px)" />
            <img src={AboutImg} alt="My profil" />
          </picture>
          <div className="about-content">
            <div className="border"></div>
            <div className="about-content-text">
              <h2 className="middle-title">About Me</h2>
              <p className="text">
                I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.
              </p>
              <Link className="button button-white" to="/portfolio">GO TO PORTFOLIO</Link>
            </div>
            <div className="border"></div>
          </div>
        </div>
      </section>

      <TalkComponent />
    </main>
  );
}
 
export default Home;