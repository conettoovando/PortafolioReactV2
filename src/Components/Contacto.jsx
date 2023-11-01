import './Contacto.css'

export default function Contacto(){
    return(
        <section className="ConctoScreen">
            <div className="container">
                <h2>📲 Contacto</h2>
                <p>
                    No dudes en contactarme para cualquier consulta, duda o sugerencia.
                </p>
                <p>
                    Considero que podemos hacer un buen equipo de trabajo y me encuentro emocionado por la oportunidad de conocer nuevos proyectos y personas 😁.
                </p>
                <span>
                    Puedes contactarme de distintas formas:
                </span>
                <div className="w-9 center">
                    <p className='tituloContacto'>📧 Correo de contacto:</p>
                    <a href="mailto:cris.onetto01@gmail.com" className='link'>cris.onetto01@gmail.com</a>
                </div>
            </div>
        </section>
    )
}