import Footer from '@/src/components/Footer'
import Navbar from '@/src/components/Navbar'
import AboutHeader from '@/src/container/aboutUs/AboutHeader'
import AboutSertificate from '@/src/container/aboutUs/AboutSertificate'
import OverviewFaq from '@/src/container/home/OverviewFaq'
import OverviewSuggestions from '@/src/container/home/OverviewSuggestions'
import OverviuwGroup from '@/src/container/home/OverviuwGroup'
import React from 'react'

export default function AboutUs() {
  return (
    <div>
      <div className='conatiner mx-auto overflow-hidden '>
      <Navbar/>
      <AboutHeader/>
      <AboutSertificate/>
      <OverviewSuggestions/>
      <OverviuwGroup/>
      <OverviewFaq/>
      <Footer/>
      </div>
    </div>
  )
}
