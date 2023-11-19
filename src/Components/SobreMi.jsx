import './SobreMi.css'
import LapTop from '../assets/laptop.jpeg'
import { useState } from 'react';
import { options } from '../constants/devTools';
import { playSoundClick } from '../utils/useSound';

export default function SobreMi() {
    const [selected, setSelected] = useState(0);

    const handleSelected = (value) => {
        playSoundClick(); // Reproducir el sonido al hacer clic en el botón
        setSelected(value);
    };

    const renderButtons = (option) => (
        <button
            key={option.value}
            onClick={() => handleSelected(option.value)}
            className={selected === option.value ? 'selectedOption' : 'noSelectedOption'}
        >
            {getIcon(option.label)} {option.label}
        </button>
    );

    const renderTecDescriptions = (option) => (
        <div key={option.name} className={`tecDescription`}>
            <p>{option.name}</p>
            <img src={option.icon} className={`tecIcon ${option.name === 'Flask' && 'flask'}`} alt={option.name} />
        </div>
    );

    const getIcon = (label) => {
        switch (label) {
            case 'Lenguajes':
                return <i className="fas fa-code"></i>;
            case 'Frameworks':
                return <i className="fas fa-cubes"></i>;
            default:
                return <i className="fas fa-sitemap"></i>;
        }
    };

    return (
        <section className="SobreMi">
            <div className="SobreMiContainer">
                <h2>🫡 Sobre Mi</h2>
                <img src={LapTop} alt="" />
                <p className='text'>
                    Soy un joven ingeniero informático egresado de la universidad Andrés Bello con una gran pasión por la tecnología y el desarrollo de software.<br/><br/>
                    Me interesa profundizar mis conocimientos sin limitarme, es por esto qué, estoy comprometido al aprendizaje constante asumiendo nuevos desafíos y explorando diversas tecnologías.<br/><br/>
                    He explorado diversas áreas del desarrollo de software, como el desarrollo web, desarrollo de aplicaciones móviles, desarrollo de aplicaciones de escritorio, entre otros. Pero te dejare los lenguajes que he aprendido y las tecnologías que he utilizado.   
                </p>
                <div className="buttonsContainer">
                    {options.map(renderButtons)}
                </div>
                <div className='tecContainer'>
                    {options[selected].description.map(renderTecDescriptions)}
                </div>
            </div>
        </section>
    );
}
