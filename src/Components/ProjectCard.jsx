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

  var getImageLength = project.tec?.length ?? 0; 
  console.log(getImageLength);

  return (
    <article className='project'>
      <h3>{project.name}</h3>
      <p className='textDescription text'>{project.pre_description}</p>
      <img src={project.Images?.[0]} alt={project.name} />
      <div className="link-container">
        <a href={project.gh} target='_blank' rel="noreferrer">
          <i className="fab fa-github"></i> Code
        </a>
        <a className='yellow' onClick={openModal}>
          <i class="fas fa-caret-right"></i> Ver más
        </a>
      </div>
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
                <p className='modalContent'>La funcionalidad de esta aplicación se logro mediante la integración de distintos servicios / frameworks tales como:</p>
                <div className='tecContainer' style={ getImageLength < 5 ? {gridTemplateColumns: `repeat(${getImageLength},1fr)`} : null}>
                  {project.tec.map((tecnologia) => (
                    <div key={tecnologia.id}>
                      <span className='textIcon'>{tecnologia.name}</span>
                      <img src={tecnologia.icon} alt={tecnologia.name} className='tecIcon' key={tecnologia.id} />
                    </div>
                  ))}
                </div>
                <p className="modalContent ">
                  Si te interesa saber más de esta aplicación puedes visitar el repositorio en GitHub o visualizarla en el siguiente video de YouTube:
                </p>
                <div className="link-container">
                  <a href={project.gh} target='_blank' rel="noreferrer">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  <a className='yellow' href={project.video} target='_blank' rel='noreferrer'>
                    <i className="fab fa-youtube"></i> Youtube
                  </a>
              </div>
              <div className="spacebottom"></div>
            </LazyModal>
          )}
        </Suspense>
    </article>
  );
}