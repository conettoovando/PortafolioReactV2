import './Contacto.css'

export default function Contacto(){
    return(
        <section className="ConctoScreen">
            <div className="container">
                <h2>📲 Contacto</h2>
                <p>
                    No dudes en contactarme para cualquier consulta, duda o sugerencia.<br/>
                    Considero que podemos hacer un buen equipo de trabajo y me encuentro emocionado por la oportunidad de conocer nuevos proyectos 😁.<br/>
                    Puedes contactarme de distintas formas:
                </p>
                <div className="w-100 text-center ">
                    <div className='row'>
                        <p className='tituloContacto'>📧 Correo de contacto:</p>
                        <a href="mailto:cris.onetto01@gmail.com" className='link textoContacto' target='_blank' rel='noreferrer'>cris.onetto01@gmail.com</a>
                    </div>
                    <div className="row">
                        <p className='tituloContacto'>📞 Teléfono:</p>
                        <a href="tel:+569 5116 0254" className='link textoContacto' target='_blank' rel='noreferrer'>+569 5116 0254</a>
                    </div>
                    <div className="row">
                        <img width="36" height="36" src="https://img.icons8.com/color/48/video-conference.png" alt="video-conference"/>
                        <p className='tituloContacto ml-2'>Videollamada:</p>
                        <a href="https://tidycal.com/crisonetto01" target="_blank" className="btn btn-primary ml-2" rel="noreferrer">Agendar</a>
                        <p className='ml-2 animation'>👈</p>
                    </div>
                </div>
            </div>
        </section>
    )
}