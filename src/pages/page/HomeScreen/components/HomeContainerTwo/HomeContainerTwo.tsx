import React from 'react'
import imageAuth from './../../../../../assets/images/2859367.jpg'
import imageBuilding from './../../../../../assets/images/3610226.jpeg'

const HomeContainerTwo = () => {
    return (

        <div>

            <section className='main-content-box'>

                <div className='container-wrapper'>
                    
                    <div className='wrapper-col wrapper-col--margin-right'>

                        <h2 className='header-main-2'>01</h2>

                        <h3 className='header-main-3'>Founders</h3>

                        <h3 className='header-main-3 par-margin-bottom'>Vision</h3>

                        <div className='main-line main-line--margin-bottom'></div>                        

                        <p className='paragraph par-margin-bottom'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optio sit est obcaecati odit, reprehenderit possimus quae vel earum aut rem tenetur laboriosam alias dicta eveniet culpa laborum deserunt voluptatibus.
                        </p>

                        <p className='paragraph par-margin-bottom'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                    </div>

                    <div className='wrapper-col wrapper-col--margin-right '>
                        <img className='image-size' src={imageAuth} alt="img_author" />
                    </div>

                    <div className='wrapper-col wrapper-col--margin-right'>
                        <img className='image-size' src={imageBuilding} alt="img_building" />
                    </div>

                </div>

                <div className='main-line main-line--margin-top'></div>

            </section>

        </div>

    )
}

export default HomeContainerTwo
