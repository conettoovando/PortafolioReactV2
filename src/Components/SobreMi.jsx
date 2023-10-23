import './SobreMi.css'
import LapTop from '../assets/laptop.jpeg'
import { useState } from 'react';
import { options } from '../constants/devTools';

export default function SobreMi(){
    const [selected, setSelected] = useState(0);

    const handleSelected = (value) => {
        setSelected(value);
    }
    return(
        <section className="SobreMi">
            <div className="SobreMiContainer">
                <h2>🫡 Sobre Mi</h2>
                <img src={LapTop} alt="" />
                <p>
                    Soy un joven ingeniero informático de 22 años con una gran pasión por el mundo de la programación y la tecnología.
                </p>
                <p>
                    Me interesa profundizar mis conocimientos sin limitarme, por lo qué, estoy comprometido al aprendizaje constante asumiendo nuevos 
                </p>
                <p>
                    desafíos y explorando diversas tecnologías.Mis conocimientos constan de:
                </p>
                <div className="buttonsContainer">
                    {options.map(option => (
                        <button
                            key={option.value}
                            onClick={() => handleSelected(option.value)}
                            value={option.value}
                            className={selected === option.value ? 'selectedOption' : 'noSelectedOption'}
                        >
                            {option.label}
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