import React from 'react';
import user_image from './../../../../../assets/images/ham.jpg'

export const UserProfile = () => {

    return (

        <article className='main-content-box'>

            <h3 className='header-main-3'>Hello User nice to see you again!</h3>

            <div className='user-wrapper'>

                <h4 className='header-4 header-4--green'>Dow Jones</h4>

                <img className='user-img' src={user_image} alt="user-img" />

            </div>

        </article>

    )
}
