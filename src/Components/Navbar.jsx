import './NavBar.css';
import { Link } from 'react-scroll';
import audioOrg from '../assets/sonido2.mp3'

export default function Navbar() {
    const playSound = (route) => {
        const selected = document.getElementsByClassName('active').item(0).innerHTML;
        if (selected === route) return;
        const audio = new Audio(audioOrg);
        audio.volume = 0.05;
        audio.currentTime = 0.5;
        audio.play();
        document.getElementById('menu-toggle').checked = false;
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
                  to="Home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className='link'
                  onClick={() => playSound('Inicio')}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="SobreMi"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className='link'
                  onClick={() => playSound('Sobre mi')}
                >
                  Sobre mi
                </Link>
              </li>
              <li>
                <Link
                  to="Proyectos"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className='link'
                  onClick={() => playSound('Proyectos')}
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  to="Contacto"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className='link'
                  onClick={() => playSound('Contacto')}
                >
                  Contacto
                </Link>
              </li>
            </ul>
        </nav>
    )
}
