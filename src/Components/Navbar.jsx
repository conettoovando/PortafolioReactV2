import './NavBar.css';
import { Link } from 'react-scroll';
import audioOrg from '../assets/sonido2.mp3'

export default function Navbar() {
    const playSound = () => {
        const audio = new Audio(audioOrg);
        audio.volume = 0.05;
        audio.currentTime = 0.5;
        audio.play();
    };

    return (
        <nav>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor='menu-toggle'>
                <div className='burger'></div>
            </label>
                <ul className='ulNav'>
                    <li>
                        <Link
                            activeClass="active"
                            to="Home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='link'
                            onClick={() => playSound()}
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="SobreMi"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='link'
                            onClick={() => playSound()}
                        >
                            Sobre mi
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="Proyectos"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='link'
                            onClick={() => playSound()}
                        >
                            Proyectos
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="Contacto"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='link'
                            onClick={() => playSound()}
                        >
                            Contacto
                        </Link>
                    </li>
                </ul>

        </nav>
    )
}
