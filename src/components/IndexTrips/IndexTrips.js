import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { indexPosts } from './../../api/travelBlog'

const IndexTrips = (props) => {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    indexPosts(props.user)
      .then(res => setTrips(res.data.trips))
      .catch(console.error)
  }, [])

  const tripLinks = trips.map(trip => (
    <li key={trip._id}>
      <Link to={`/books/${trip._id}`}>{trip.location}</Link>
    </li>
  ))

  return (
    <Fragment>
      <h1>Your Past Trips!</h1>
      <ul>{tripLinks}</ul>
    </Fragment>
  )
}

export default IndexTrips
