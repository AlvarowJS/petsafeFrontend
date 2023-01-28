import React, { useRef } from 'react'
import logo from '../../assets/logo/logo.png'
import { Link, NavLink } from 'react-router-dom'
import '../style/navbar.css'

const Navbar = () => {
    const navbar = useRef()
    const clickMenuHam = () => {
        navbar.current.classList.toggle('navbar-open')
    }
    return (
        <>
            <header className='header'>
                <img className='logo' src={logo} />
                <div onClick={clickMenuHam} className='header__menuham'>
                    <i className='bx bx-menu' ></i>
                </div>
                <nav ref={navbar} className='navbar'>
                    <ul className='navbar__list'>
                        <li className='navbar__items'>
                            <a className='navbar__links' href="">Quienes somos?</a>
                        </li>
                    </ul>
                    <ul className='navbar_list'>
                        <li className='navbar__items'>
                        <a className='navbar__links' href="">Mascotas perdidas</a>
                            
                        </li>
                    </ul>
                    <ul className='navbar__list'>
                        <li className='navbar__items'>
                        <a className='navbar__links' href=""> Unete a nosotros</a>
                           
                        </li>
                    </ul>
                    <ul className='navbar__list'>
                        <li className='navbar__items'>
                        <a className='navbar__links' href="">Albergues</a>
                            
                        </li>
                    </ul>
                    <ul className='navbar__list'>
                        <li className='navbar__items'>
                        <a className='navbar__links' href="">login</a>
                            
                        </li>
                    </ul>
                </nav>

            </header>

        </>
    )
}

export default Navbar