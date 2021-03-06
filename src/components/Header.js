import React from 'react';
import { BsFillTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs'
import { BiMenuAltRight } from 'react-icons/bi'
import Logo from '../assets/logo.png'

const Header = () => {
    return <header className='content'>
        <nav>
            <div className="logo"><img src={Logo} alt='Logo' /></div>
            <div>
                <ul className="listNav">
                    <li>Accueil</li>
                    <li>la caverne</li>
                    <li>A propos</li>
                </ul>
            </div>
            <div className="information">
                <div className='inscription'>Inscription</div>
                <div className='header-right'>
                    <div className='phone'>
                        <BsFillTelephoneFill />
                        <p>+212 67 67 67 67</p>
                    </div>
                    <div className='boite'>
                        <BsFillEnvelopeFill />
                        <p>info@yoursite.com</p>
                    </div>
                </div>
            </div>
            <div className='burger-menu'>
                <BiMenuAltRight size={30} />
            </div>
        </nav>

    </header>;
};

export default Header;
