import React from 'react'
import Header from '../../components/Header'

import Carousel from '../../components/CarouselSection'
import Footer from '../../components/Footer'
import RecomendSection from '../../components/RecomendSection'
import PopulerSection from '../../components/PopulerSection'

function Home() {
    return (
        <div>
            <Header/>
            <Carousel/>
            <RecomendSection/>
            <PopulerSection/>
            <Footer/>
        </div>
    )
}

export default Home
