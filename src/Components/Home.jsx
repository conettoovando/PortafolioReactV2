import './Home.css';
import profileImage from '../assets/profileImage.png'

export default function Home(){
    return (
        <section className="Home">
            <img src={profileImage} alt='Foto de perfil'/>
            <div className="content">
                <h1>Bienvenidos 👋<br />Soy Cristian Onetto</h1>
                <p>Desarrollador Web Full Stack</p>
            </div>
        </section>   
    )
}