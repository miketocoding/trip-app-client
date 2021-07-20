import React from 'react'
import Layout from '../shared/Layout'
// importing a background slider component
import BackgroundSlider from 'react-background-slider'

import image1 from './assets/image1.jpeg'
import image2 from './assets/image2.jpeg'
import image3 from './assets/image3.jpeg'
import image4 from './assets/image4.jpeg'
import image5 from './assets/image5.jpeg'

const Home = () => {
  return (
    <Layout>
      <BackgroundSlider
        images={[image1, image2, image3, image4, image5]}
        duration={7} transition={2} />
      <h1>You are on the Home Page</h1>
    </Layout>
  )
}

export default Home
