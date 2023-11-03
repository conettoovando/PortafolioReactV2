/* eslint-disable */
import { useState, lazy, Suspense } from 'react';

const LazyModal = lazy(() => import('./Modal'));

export default function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.classList.add('no-scroll')
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove('no-scroll');
  };

  const formattedDescription = JSON.stringify(project.description).replace(/\\n/g, '<br/>').replace(/\"/g, '');

  return (
    <article className='project'>
      <h3>{project.name}</h3>
      <p className='textDescription text'>{project.pre_description}</p>
      <img src={project.Images?.[0]} alt={project.name} />
      <div className="link-container">
        <a href={project.gh} target='_blank' rel="noreferrer">Code</a>
        <a className='yellow' onClick={openModal}>Ver más</a>
        <Suspense fallback={<div>Loading...</div>}>
          {isOpen && (
            <LazyModal isOpen={isOpen} closeModal={closeModal}>
              <h3>{project.name}</h3>
              <p className='textDescription text' dangerouslySetInnerHTML={{ __html: formattedDescription }} />
            </LazyModal>
          )}
        </Suspense>
      </div>
    </article>
  );
}