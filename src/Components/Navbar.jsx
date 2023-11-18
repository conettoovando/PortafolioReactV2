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
                >
                  Contacto
                </Link>
              </li>
            </ul>
        </nav>
    )
}
