import './Navbar.css';
import { Link } from 'react-scroll';
import { playSoundSwift } from '../utils/useSound';

export default function Navbar() {
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
                  onClick={() => playSoundSwift('Inicio')}
                  offset={0}
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
                  onClick={() => playSoundSwift('Sobre mi')}
                  offset={50}
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
                  onClick={() => playSoundSwift('Proyectos')}
                  offset={50}
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
                  onClick={() => playSoundSwift('Contacto')}
                  offset={50}
                >
                  Contacto
                </Link>
              </li>
            </ul>
        </nav>
    )
}
