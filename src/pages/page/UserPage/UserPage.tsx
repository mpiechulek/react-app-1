import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext';
import {Redirect} from 'react-router-dom'

export const UserPage = () => {

    const { isLoggedIn } = useContext(AuthContext);

    if(!isLoggedIn) {
        
        return <Redirect to='/home'/>

    }

    return (
        <section className="user-page-container">

            <h1>User Page</h1>
            
        </section>
    )
}
