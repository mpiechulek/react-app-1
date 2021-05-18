import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext';
import { Redirect } from 'react-router-dom'
import { UserProfile } from './components/UserProfile/UserProfile';

const UserPage = () => {

    const { isLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn) {

        return <Redirect to='/home' />

    }

    return (

        <section className="user-page-container">

            <UserProfile />

        </section>
    )
}

export default UserPage
