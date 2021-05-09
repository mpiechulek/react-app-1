import React from 'react'
import image_1 from './../../../../../assets/images/1762973.jpeg'
import image_2 from './../../../../../assets/images/2516539.jpeg'
import image_3 from './../../../../../assets/images/3610226.jpeg'

const HomeContainerFour = () => {
    return (

        <div>

            <section className='main-content-box'>

                <div className='container-wrapper'>

                    <div className='wrapper-col wrapper-col--margin-right'>

                        <h2 className='header-main-2'>02</h2>

                        <h3 className='header-main-3'>Style &</h3>

                        <h3 className='header-main-3 par-margin-bottom'>Classicism</h3>

                        <div className='main-line main-line--margin-bottom'></div>

                        <p className='paragraph par-margin-bottom'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optio sit est obcaecati odit, reprehenderit possimus quae vel earum aut rem tenetur laboriosam alias dicta eveniet culpa laborum deserunt voluptatibus.
                        </p>

                        <p className='paragraph par-margin-bottom'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optio sit est obcaecati odit, reprehenderit possimus quae vel earum aut rem tenetur laboriosam alias dicta eveniet culpa laborum deserunt voluptatibus.
                        </p>

                    </div>

                    <div className='wrapper-col wrapper-col--margin-right '>
                        <div className='image-flex-container'>
                           <img className='image-size ' src={image_2} alt="img_11" />
                           <img className='image-size flex-item-2' src={image_3} alt="img_22" />

                        </div>
                    </div>

                    <div className='wrapper-col wrapper-col--margin-right'>
                        <img className='image-size' src={image_1} alt="img_33" />
                    </div>

                </div>

                <div className='main-line main-line--margin-top'></div>

            </section>

        </div>

    )
}

export default HomeContainerFour
