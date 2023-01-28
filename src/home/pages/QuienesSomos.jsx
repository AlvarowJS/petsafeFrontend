import React from 'react'
import '../style/quienesomos.css'
import quien from '../../assets/quienessomos.png'
const QuienesSomos = () => {
    return (
        <>
            <aside className='aside__who'>
                <h4 className='aside_who_title'>¿Quienes Somos? </h4>
                <div className='aside_who_info'>
                    <div>
                        <img className='aside__who_cat' src={quien} alt="" />
                    </div>
                    <div>
                        <p className='aside_who_descripcion'>Somos un aplicativo web al servicio de la comunidad
                            Huanuqueña que busca apoyar a albergues, mascotas,
                            dueños y población en general...</p>
                        <button className='aside_who_boton'>ÚNETE A NOSOTROS</button>
                    </div>
                </div>
            </aside>

        </>
    )
}

export default QuienesSomos