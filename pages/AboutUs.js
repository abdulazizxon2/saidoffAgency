import Footer from '@/src/components/Footer'
import Navbar from '@/src/components/Navbar'
import OverviewFaq from '@/src/container/home/OverviewFaq'
import OverviuwGroup from '@/src/container/home/OverviuwGroup'
import React from 'react'

export default function AboutUs() {
  return (
    <div>
      <Navbar/>
      <OverviuwGroup/>
      <OverviewFaq/>
      <Footer/>
    </div>
  )
}
