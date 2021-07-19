import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { indexPosts } from './../../api/travelBlog'
import messages from '../AutoDismissAlert/messages'
import Image from 'react-bootstrap/Image'

const IndexTrips = (props) => {
  const [trips, setTrips] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    indexPosts(props.user)
      .then(res => setTrips(res.data.trips))
      .then(() => props.msgAlert({
        heading: 'Index Trips Success',
        message: messages.indexTripsSuccess,
        variant: 'success'
      }))
      .catch(error => {
        props.msgAlert({
          heading: 'Index Trips Failed with error: ' + error.message,
          message: messages.indexTripsFailure,
          variant: 'danger'
        })
      })
  }, [])
  // Set up a filter so I can search through trips object to see matching posts
  const tripLinks = trips.filter((val) => {
    // if search is empty then return all values
    if (searchTerm === '') {
      return val
    // make everything lowercase. If search term matches anything in trip, return it.
    } else if (val.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    val.start.toLowerCase().includes(searchTerm.toLowerCase()) ||
    val.travelers.toLowerCase().includes(searchTerm.toLowerCase()) ||
    val.standouts.toLowerCase().includes(searchTerm.toLowerCase()) ||
    // convert number value of rating to string so search can work
    val.rating.toString().includes(searchTerm.toString())) {
      return val
    }
  }).map(trip => (
    <li key={trip.id}>
      <Link to={`/index-trips/${trip.id}`}><Image src={trip.image} thumbnail fluid />{trip.location}, id: {trip.id}</Link>
    </li>
  ))

  return (
    <Fragment>
      <h1>Your Past Trips!</h1>
      <input
        type='text'
        placeholder='Search...'
        onChange={(event) => {
          setSearchTerm(event.target.value)
        }}
      />
      <ul>{tripLinks}</ul>
      {console.log('Current contents of trips', trips)}
    </Fragment>
  )
}

export default IndexTrips
