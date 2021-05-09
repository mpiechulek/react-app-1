import React from 'react';
import { BrowserRouter as Router, Link, NavLink} from 'react-router-dom';

const Header = () => {

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

                    <li className='nav-list__list-item'>

                        <NavLink activeClassName='nav-active-link' to='/login'>

                            Login

                        </NavLink>

                    </li>

                </ul>

            </nav>

        </div>

    )
}

export default Header
