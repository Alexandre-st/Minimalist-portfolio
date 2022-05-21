import HeroImg from '../../assets/homepage/mobile/image-homepage-hero.jpg';
import HeroImgTablet from '../../assets/homepage/tablet/image-homepage-hero.jpg';
import HeroImgDesktop from '../../assets/homepage/desktop/image-homepage-hero.jpg';
import StyleButton from '../../assets/icons/down-arrows.svg';

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
              <div className="button button-hero" role="button">
                <div className="button-hero-img"></div>
                <img src={StyleButton} alt="Style button" />
                <div className="button-hero-text">
                  <p>ABOUT ME</p>
                </div>
              </div>
            </div>
          </picture>
        </div>
      </section>
    </main>
  );
}
 
export default Home;