import './SobreMi.css'
import LapTop from '../assets/laptop.jpeg'
import { useState } from 'react';
import { options } from '../constants/devTools';
import audioOrg from '../assets/sonido.mp3'

export default function SobreMi(){
    const [selected, setSelected] = useState(0);

    const playSound = () => {
        const audio = new Audio(audioOrg);
        audio.volume = 0.2;
        audio.play();
    };

    const handleSelected = (value) => {
        playSound(); // Reproducir el sonido al hacer clic en el botón
        setSelected(value);
    };

    return(
        <section className="SobreMi">
            <div className="SobreMiContainer">
                <h2>🫡 Sobre Mi</h2>
                <img src={LapTop} alt="" />
                <p className='text'>
                    Soy un joven ingeniero informático egresado de la universidad Andres Bello con una gran pasión por la tecnologia y el desarrollo de software.<br/><br/>
                    Me interesa profundizar mis conocimientos sin limitarme, es por esto qué, estoy comprometido al aprendizaje constante asumiendo nuevos desafíos y explorando diversas tecnologías.<br/><br/>
                    He explorado diversas áreas del desarrollo de software, como el desarrollo web, desarrollo de aplicaciones móviles, desarrollo de aplicaciones de escritorio, entre otros. Pero te dejare los lenguajes que he aprendido y las tecnologías que he utilizado.             
                </p>
                <div className="buttonsContainer">
                    {options.map(option => (
                        <button
                            key={option.value}
                            onClick={() => handleSelected(option.value)}
                            value={option.value}
                            className={selected === option.value ? 'selectedOption' : 'noSelectedOption'}
                        >
                            {option.label === 'Lenguajes' ? <i className="fas fa-code"></i> : option.label === 'Frameworks' ? <i className="fas fa-cubes"></i> : <i className="fas fa-sitemap"></i>} {option.label}
                        </button>
                    ))}
                </div>
                <div className='tecContainer'>
                    {options[selected].description.map(option => (
                        <div key={option.name} className={`tecDescription`}>
                            <p>{option.name}</p>
                            <img src={option.icon} className='tecIcon' alt={option.name} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}