import React from 'react'
import HomeContainerOne from './components/HomeContainerOne/HomeContainerOne';
import HomeContainerTwo from './components/HomeContainerTwo/HomeContainerTwo';
import HomeContainerThree from './components/HomeContainerThree/HomeContainerThree';
import HomeContainerFour from './components/HomeContainerFour/HomeContainerFour';

const HomeScreen = () => {

    return (

        <div className="home-container">
            
            <HomeContainerOne />

            <HomeContainerTwo />

            <HomeContainerThree />

            <HomeContainerFour />

        </div>

    )
}

export default HomeScreen
