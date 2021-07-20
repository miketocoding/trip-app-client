import React from 'react'
import Layout from '../shared/Layout'
// importing a background slider component
import BackgroundSlider from 'react-background-slider'

import image1 from './assets/image1.jpeg'
import image2 from './assets/image2.jpeg'
import image3 from './assets/image3.jpeg'
import image4 from './assets/image4.jpeg'
import image5 from './assets/image5.jpeg'

const cardContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  marginTop: '4em'
}

const card = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  padding: '30px',
  width: '335px',
  height: '280px',
  backgroundColor: 'rgba(243, 235, 228, 0.80)',
  borderRadius: '1px',
  boxShadow: '1px 6px 8px 0px #615f5f2e'
}

const Home = () => {
  return (
    <Layout>
      <BackgroundSlider
        images={[image5, image3, image4, image2, image1]}
        duration={7} transition={2} />
      <div style={ cardContainer } >
        <div style={ card } >
          <h1 className='brand-logo'>Memory Lane</h1>
          <h4>Your home for a safe and private travel blog</h4>
          <p>Take a trip down memory lane and reminisce about all your past adventures. See your travel dates, trip ratings, other travelers and more!</p>
        </div>
      </div>
    </Layout>
  )
}

export default Home
