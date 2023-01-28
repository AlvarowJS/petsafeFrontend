import React from 'react'
import '../style/quehacemos.css'
import hacemos1 from '../../assets/hacemos1.png'
import hacemos2 from '../../assets/hacemos2.png'
import hacemos3 from '../../assets/hacemos3.png'

const QueHacemos = () => {
    return (
        <>
            <aside className='aside__do'>
                <h4 className='aside__do_title'>¿Qué Hacemos?</h4>
                <div className='aside__do_container'>
                    <div className='aside__do_info'>
                        <img className='aside__do_img' src={hacemos1} alt="" />
                        <p className='aside__do_desc'>
                            Ayudamos a encontrar
                            mascotas perdidas
                        </p>
                    </div>
                    <div className='aside__do_info'>
                        <img className='aside__do_img' src={hacemos2} alt="" />
                        <p className='aside__do_desc'>
                            Buscamos hogares
                            para nuestros amigos de
                            cuatro patas
                        </p>
                    </div>
                    <div className='aside__do_info'>
                        <img className='aside__do_img' src={hacemos3} alt="" />
                        <p className='aside__do_desc'>
                            Guardamos el historial
                            de cada mascota que sea
                            registrada
                        </p>
                    </div>
                </div>

            </aside>
        </>
    )
}

export default QueHacemos