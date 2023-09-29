import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Corporate Integration Engineer</title>
        <meta property="og:title" content="Corporate Integration Engineer" />
      </Helmet>
    </div>
  )
}

export default Home
