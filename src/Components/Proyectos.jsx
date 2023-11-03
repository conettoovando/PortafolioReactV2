import { projects } from '../mocks/projects.json';
import './Proyectos.css';
import ProjectCard from './ProjectCard';

export default function Proyectos() {
  return (
    <section className='projectScreen'>
      <div className="container">
        <h2>💻Proyectos</h2>
        <section className='projectContainer'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </div>
    </section>
  );
}
