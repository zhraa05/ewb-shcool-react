import React from 'react'
import About from '../component/about-us/About'
import Company from '../component/company-section/Company'

import Header from '../component/header/Header'
import Herosection from '../component/herosection/Herosection'
import Courses from '../component/Courses-section/Courses'
import Choosus from '../component/choos-us/Choosus'
import Feuature from '../component/feauresection/Feuature'
import Freecourse from '../component/free-courses/Freecourse'
import Testimonials from '../component/Testimonial/Testimonials'
import News from '../component/naws/News'
import Footer from '../component/footer/Footer'


const Home = () => {
    return (
        <>
            <Header />
            <Herosection />
            <Company />
            <About />
            <Courses />
            <Choosus />
            <Feuature />
            <Freecourse />
            <Testimonials />
            <News />
            <Footer />
        </>
    )
}

export default Home
