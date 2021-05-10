import React from 'react'
import Context from './components/Context/Context'
import Gallery from './components/Gallery/Gallery'

const ContentScreen = () => {

    return (

        <section className='content-container'>
        
            <Context />

            <Gallery />

        </section>
    )
}

export default ContentScreen
