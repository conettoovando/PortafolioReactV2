/* eslint-disable */
import { useState, lazy, Suspense } from 'react';
import './ProjectCard.css';

const LazyModal = lazy(() => import('./Modal'));

export default function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const openModal = () => {
    setIsOpen(true);
    document.body.classList.add('no-scroll')
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove('no-scroll');
  };

  var imagesLen = project.Images?.length;

  const formattedDescription = JSON.stringify(project.description).replace(/\\n/g, '<br/>').replace(/\"/g, '');

  const handleImageSelector = (e) => {
    /*Trasladar carrousel */
    const carrousel = document.querySelector('.grande');
    const puntos = document.querySelector('.puntos');
    const punto = document.querySelectorAll('.punto');
    carrousel.style.transform = `translateX(-${e * 100/imagesLen}%)`;
    punto.forEach(punto => punto.classList.remove('activo'));
    punto[e].classList.add('activo');
  }

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
                <h3 className='modalTitle'>{project.name}</h3>
                <p className='modalContent' dangerouslySetInnerHTML={{ __html: formattedDescription }} />
                <div className="carrousel">
                  <div className='grande' style={{width: `${imagesLen * 100}%`}}>
                    {project.Images?.map((imagen, index) => (
                      <img src={imagen} alt={`Imagen ${index}`} className="img" key={index} />
                    ))}
                  </div>
                  <ul className="puntos">
                    {project.Images?.map((imagen, index) => (
                      selectedImage === index ? 
                        <li className="punto activo" key={index} onClick={() => handleImageSelector(index)}></li> 
                          : 
                        <li className="punto" key={index} onClick={() => handleImageSelector(index)}></li>
                    ))}
                  </ul>
                </div>
            </LazyModal>
          )}
        </Suspense>
      </div>
    </article>
  );
}