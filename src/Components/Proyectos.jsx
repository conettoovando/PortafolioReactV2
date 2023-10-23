import './Proyectos.css';
import {projects} from '../mocks/projects.json'

export default function Proyectos(){
    return (
        <section className='projectScreen'>
          <div className="container">
            <h2>💻Proyectos</h2>
            <section className='projectContainer'>
              {projects.map((project) => (
                <article className='project' key={project.id}>
                    <h3>{project.name}</h3>
                    <p className='textDescription'>{project.pre_description}</p>
                    <img src={project.Images?.[0]} alt={project.name} />
                    <div className="link-container">
                      <a  href={project.gh} target='_blank' rel="noreferrer">Code</a>
                      {/* <a className='yellow' onClick={() => toggleModal(project.id)}>Ver más</a> */}
                    </div>
                </article>
              ))}
            </section>
            </div>
        </section>
      );
}