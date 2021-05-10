import React, { useContext } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Footer = () => {

    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    return (

        <footer className='footer'>

            <nav className='footer__wrapper footer__wrapper--order-2 navbar'>

                <h2 className='header-main-3 footer-link-margin'>Menu:</h2>

                <ul>

                    <li className='footer-link-margin'>

                        <Link to='/'>

                            Home

                        </Link>

                    </li>

                    <li className='footer-link-margin'>

                        <Link to='/content'>

                            Content

                        </Link>

                    </li>

                    {isLoggedIn &&  

                        <li className='footer-link-margin'>

                            <Link to='/user'>

                                User

                            </Link>

                        </li>

                    }

                    {!isLoggedIn && 

                        <li className='footer-link-margin'>

                            <Link to='/login'>

                                Login

                            </Link>

                        </li>

                    }

                </ul>
                
            </nav>

            <div className='footer__wrapper footer__wrapper--order-1 footer__wrapper--align-center'>

                <h2 className='header-main-2 margin-bottom'>SV</h2>

                <p className='paragraph'>

                    Images from

                    <span>

                        <a href='https://www.pexels.com' target="_blank" rel="noopener noreferrer">
                            Pixels.com
                        </a>

                    </span>
                    
                </p>

                <p className='paragraph'>Created by Michał Piechulek</p>

            </div>

            <div className='footer__wrapper footer__wrapper--order-3'>

                <p className='paragraph margin-bottom'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, omnis excepturi delectus dicta, maxime aut nostrum, dolore illum porro officia reiciendis distinctio harum saepe debitis incidunt vel odio? Molestias, sed.</p>

                <p className='paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, omnis excepturi delectus dicta, maxime aut nostrum, dolore illum porro.</p>

            </div>


        </footer>

    )
}

export default Footer
