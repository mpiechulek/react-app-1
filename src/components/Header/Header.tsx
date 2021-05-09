import React, { useContext } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {

    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    return (

        <div className='header-container'>

            <h2 className="header-main main-header-margin">SupremeVision</h2>

            <nav className='navbar'>

                <ul className='nav-list'>

                    <li className='nav-list__list-item'>

                        <NavLink activeClassName='nav-active-link' to='/home'>

                            Home

                        </NavLink>

                    </li>

                    <li className='nav-list__list-item'>

                        <NavLink activeClassName='nav-active-link' to='/content'>

                            Content

                        </NavLink>

                    </li>                    

                    {isLoggedIn && 

                        <li className='nav-list__list-item'>

                            <NavLink activeClassName='nav-active-link' to='/user'>

                                User

                            </NavLink>

                        </li>

                    }

                    {!isLoggedIn && 

                        <li className='nav-list__list-item'>

                            <NavLink activeClassName='nav-active-link' to='/login'>

                                Login

                            </NavLink>

                        </li>

                    }

                    {isLoggedIn && 
                    
                        <li className='nav-list__list-item'>

                            <button
                                className='btn btn--logout logout-btn-text'
                                onClick={() =>
                                    setIsLoggedIn(!isLoggedIn)
                                }
                            >

                                Logout

                            </button>

                        </li>

                    }

                </ul>

            </nav>

        </div>

    )
}

export default Header
