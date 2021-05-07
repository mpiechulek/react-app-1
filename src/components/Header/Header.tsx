import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => {

    return (

        <div className='header-container'>

            <h2 className="header-main main-header-margin">SupremeVision</h2>

            <nav className='navbar'>


                <ul className='nav-list'>

                    <li className='nav-list__list-item'>

                        <Link to='/'>

                            Home

                        </Link>

                    </li>

                    <li className='nav-list__list-item'>

                        <Link to='/content'>

                            Content

                        </Link>

                    </li>

                    <li className='nav-list__list-item'>

                        <Link to='/login'>

                            Login

                        </Link>

                    </li>

                </ul>

            </nav>

        </div>

    )
}

export default Header
