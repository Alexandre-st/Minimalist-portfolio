import { Link } from 'react-router-dom';

import TalkComponent from '../components/TalkComponent';
import ManageImg from '../assets/portfolio/mobile/image-portfolio-manage@2x.jpg';
import ManageImgTablet from '../assets/portfolio/tablet/image-portfolio-manage@2x.jpg';
import ManageImgDesktop from '../assets/portfolio/desktop/image-portfolio-manage@2x.jpg';
import BookMarkImg from '../assets/portfolio/mobile/image-portfolio-bookmark@2x.jpg';
import BookMarkImgTablet from '../assets/portfolio/tablet/image-portfolio-bookmark@2x.jpg';
import BookMarkImgDesktop from '../assets/portfolio/desktop/image-portfolio-bookmark@2x.jpg';
import InsureImg from '../assets/portfolio/mobile/image-portfolio-insure@2x.jpg';
import InsureImgTablet from '../assets/portfolio/tablet/image-portfolio-insure@2x.jpg';
import InsureImgDesktop from '../assets/portfolio/desktop/image-portfolio-insure@2x.jpg';
import FyloImg from '../assets/portfolio/mobile/image-portfolio-fylo@2x.jpg';
import FyloImgTablet from '../assets/portfolio/tablet/image-portfolio-fylo@2x.jpg';
import FyloImgDesktop from '../assets/portfolio/desktop/image-portfolio-fylo@2x.jpg';

const Portfolio = () => {
  return ( 
    <main className="container">

      <section className="project">
        <div className="project-container">
          <picture className="project-img">
            <source srcSet={ManageImgDesktop} media="(min-width: 1024px)" />
            <source srcSet={ManageImgTablet}  media="(min-width: 768px)" />
            <img src={ManageImg} alt="Manage Project" />
          </picture>
          <div className="project-content">
            <div className="border"></div>
            <div className="project-content-text">
              <h2 className="middle-title">Manage</h2>
              <p className="small-text">
                This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.
              </p>
              <Link className="button button-project" to="/portfolio/manage">VIEW PROJECT</Link>
            </div>
            <div className="border"></div>
          </div>
        </div>
      </section>

      <section className="project project-top">
      <div className="project-container project-container-reverse">
        <picture className="project-img">
          <source srcSet={BookMarkImgDesktop} media="(min-width: 1024px)" />
          <source srcSet={BookMarkImgTablet}  media="(min-width: 768px)" />
          <img src={BookMarkImg} alt="BookMark Project" />
        </picture>
        <div className="project-content">
          <div className="border"></div>
          <div className="project-content-text">
            <h2 className="middle-title">Bookmark</h2>
            <p className="small-text">
              This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.
            </p>
            <Link className="button button-white" to="/portfolio/bookmark">VIEW PROJECT</Link>
          </div>
          <div className="border"></div>
        </div>
      </div>
    </section>

    <section className="project project-top">
      <div className="project-container">
        <picture className="project-img">
          <source srcSet={InsureImgDesktop} media="(min-width: 1024px)" />
          <source srcSet={InsureImgTablet}  media="(min-width: 768px)" />
          <img src={InsureImg} alt="Insure Project" />
        </picture>
        <div className="project-content">
          <div className="border"></div>
          <div className="project-content-text">
            <h2 className="middle-title">Insure</h2>
            <p className="small-text">
              This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.
            </p>
            <Link className="button button-white" to="/portfolio/insure">VIEW PROJECT</Link>
          </div>
          <div className="border"></div>
        </div>
      </div>
    </section>

    <section className="project project-top">
      <div className="project-container project-container-reverse">
        <picture className="project-img">
          <source srcSet={FyloImgDesktop} media="(min-width: 1024px)" />
          <source srcSet={FyloImgTablet}  media="(min-width: 768px)" />
          <img src={FyloImg} alt="Fylo Project" />
        </picture>
        <div className="project-content">
          <div className="border"></div>
          <div className="project-content-text">
            <h2 className="middle-title">Fylo</h2>
            <p className="small-text">
              This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.
            </p>
            <Link className="button button-white" to="/portfolio/fylo">VIEW PROJECT</Link>
          </div>
          <div className="border"></div>
        </div>
      </div>
    </section>

    <TalkComponent />

    </main>
  );
}
 
export default Portfolio;