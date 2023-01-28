import React from 'react'
import portada from '../../assets/portada.png'
import '../style/portada.css'
const Portada = () => {
  return (
    <>
        <img src={portada} className='portada' />
        <div className='header_info'>
                <h3 className='header_info_title'>PetSafe</h3>
                <p className='header_info_text'>Perdiste a tu mascota?</p>
                <p className='header_info_text'>Aqui te ayudamos a encontrarla</p>
                <button className='header_info_button'>Reportar Mascota</button>
            </div>
    </>
  )
}

export default Portada