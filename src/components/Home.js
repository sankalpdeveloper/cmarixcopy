import React from 'react'
import Heroswiper from '../Heroswiper'
import Hero from './Hero'
import HeroNavbar from './HeroNavbar'
import Navbar from './Navbar'


function Home() {
    return (
        <>
        <Navbar/>
        <Hero/>
        <HeroNavbar/>
       <Heroswiper/>
        </>
    )
}

export default Home
