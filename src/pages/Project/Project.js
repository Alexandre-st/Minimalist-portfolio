import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { projects } from '../../data/projects';
import TalkComponent from '../../components/TalkComponent';

const Project = () => {
  const { work } = useParams();

  const data = projects;

  const results = data.filter(project => project.title.toLowerCase() === work).map((project) => (
    project.imgHero.mobile
  )) 
  console.log(results);


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
              <h1 className="middle-title">{project.title}</h1>
              <p className="small-text">{project.infos}</p>
              <div className="text-infos">{project.type}</div>
              <p className="text-infos">{project.technos}</p>
              <div className="border" />
            </aside>
            <div className="details-content">
              <h2 className="details-content-title">Project Background</h2>
              <p className="small-text">{project.description}</p>
              <h3 className="details-content-subtitle">Static Previews</h3>

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

          <section className="project">
            <div className="project-left">
              <Link className="project-link" to={`/portfolio/${project.previousProject}`}>{project.previousProject}</Link>
              <p className="text">Previous Project</p>
            </div>
            <div className="project-right">
              <Link className="project-link" to={`/portfolio/${project.nextProject}`}>{project.nextProject}</Link>
              <p className="text">Next Project</p>
            </div>
          </section>
        </section>
      )) }

      <TalkComponent />
    </main>
  );
}
 
export default Project;


