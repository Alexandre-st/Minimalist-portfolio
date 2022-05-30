import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { projects } from '../data/projects';
import TalkComponent from '../components/TalkComponent';

import ArrowLeft from '../assets/icons/arrow-left.svg';
import ArrowRight from '../assets/icons/arrow-right.svg';

const Project = () => {
  const { work } = useParams();

  const data = projects;

  return ( 
    <main className="container">
      { data.filter(project => project.title.toLowerCase() === work).map((project) => (
        <section key={uuidv4()}>
          <picture>
            <source 
              srcSet={`/images/detail/desktop/${project.imgHero}@2x.jpg`} 
              media="(min-width: 1024px)" 
            />
            <source 
              srcSet={`/images/detail/tablet/${project.imgHero}@2x.jpg`} 
              media="(min-width: 768px)" 
            />
            <img src={`/images/detail/mobile/${project.imgHero}@2x.jpg`} alt="The project" />
          </picture>
          
          <section className="details">
            <aside className="details-aside">
              <div className="border" />
              <div className="details-aside-content">
                <div className="details-aside-aside">
                  <h1 className="middle-title">{project.title}</h1>
                  <p className="details-aside-normal-text small-text">{project.infos}</p>
                  <div className="details-aside-text">
                    <p className="text-infos">{project.type}</p>
                    <p className="text-infos">{project.technos.join(' / ')}</p>
                    <button className="button button-project">VIEW PROJECT</button>
                  </div>
                </div>
                <div className="details-aside-content-tablet">
                  <p className="small-text">{project.infos}</p>
                </div>
              </div>
              <div className="border" />
            </aside>

            <div className="details-content">
              <h2 className="little-title">Project Background</h2>
              <p className="small-text">{project.description}</p>
              <h3 className="little-title">Static Previews</h3>

              <picture className="details-content-preview">
                <source 
                  srcSet={`/images/detail/desktop/${project.preview1}@2x.jpg`} 
                  media="(min-width: 1024px)" 
                />
                <source 
                  srcSet={`/images/detail/tablet/${project.preview1}@2x.jpg`} 
                  media="(min-width: 768px)" 
                />
                <img src={`/images/detail/mobile/${project.preview1}@2x.jpg`} alt="Preview of the project" />
              </picture>
              <picture className="details-content-preview-second">
                <source 
                  srcSet={`/images/detail/desktop/${project.preview2}@2x.jpg`} 
                  media="(min-width: 1024px)" 
                />
                <source 
                  srcSet={`/images/detail/tablet/${project.preview2}@2x.jpg`} 
                  media="(min-width: 768px)" 
                />
                <img src={`/images/detail/mobile/${project.preview2}@2x.jpg`} alt="Second preview of the project" />
              </picture>
            </div>
          </section>

          <section className="project-link">
            <div className="project-link-left">
              <img className="project-link-img" src={ArrowLeft} alt="Arrow towards the previous project" />
              <Link to={`/portfolio/${project.previousProject}`}>
                <h4 className="little-title project-link-title">{project.previousProject}</h4>
                <p className="text">Previous Project</p>
              </Link>
            </div>
            <div className="border border-rotate" />
            <div className="project-link-right">
              <img className="project-link-img" src={ArrowRight} alt="Arrow towards the next project" />
              <Link to={`/portfolio/${project.nextProject}`}>
                <h4 className="little-title project-link-title">{project.nextProject}</h4>
                <p className="small-text">Next Project</p>
              </Link>
            </div>
          </section>
        </section>
      )) }

      <TalkComponent />
    </main>
  );
}
 
export default Project;


