import React from 'react'
import Heroswiper from './Heroswiper'
import Hero from './Hero'
import HeroNavbar from './HeroNavbar'
import Navbar from './Navbar'
import Footer from './Footer'
import Section from './Section'
import Section1 from './Section1'
import HoverImage from './HoverImage'


function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <HeroNavbar />
            <Heroswiper />
            <Section />
            <Section1 />
            <HoverImage />
            <Footer />
            
        </>
    )
}

export default Home
