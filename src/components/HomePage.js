import React from 'react'
import Footer from './Footer'
import Header from './Header'
import SectionOfHome from './SectionOfHome'

function HomePage() {
  return (
    <React.Fragment>
        <Header />
        <SectionOfHome 
          title='UPCOMING LAUNCH'
          subtitle='STARLINK MISSION'
          btnTxt='watch'
          backgroundImage='first.webp'
        />
        <SectionOfHome 
         subtitle='STARSHIP UPDATE'
         btnTxt='LEARN MORE'
         backgroundImage='second.webp'
        />
        <SectionOfHome 
         title='RECENT LAUNCH'
         subtitle='NROL-87 MISSION'
         btnTxt='RE-WATCH'
         backgroundImage='third.webp'
        />
        <SectionOfHome 
         subtitle='STARSHIP TO LAND NASA ASTRONAUTS ON THE MOON'
         btnTxt='LEARN MORE'
         backgroundImage='fourth.webp'
        />
        <Footer />
    </React.Fragment>
  )
}

export default HomePage