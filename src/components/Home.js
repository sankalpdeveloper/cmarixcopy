import React from 'react'
import Heroswiper from '../Heroswiper'
import Hero from './Hero'
import HeroNavbar from './HeroNavbar'
import Navbar from './Navbar'
import Footer from './Footer'


function Home() {
    return (
        <>
        <Navbar/>
        <Hero/>
        <HeroNavbar/>
       <Heroswiper/>
       <Footer/>
        </>
    )
}

export default Home
