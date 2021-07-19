import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { indexPosts } from './../../api/travelBlog'
import messages from '../AutoDismissAlert/messages'
// import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

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
    <Card style={{ width: '22rem', margin: '8px' }} key={trip.id}>
      <Link to={`/index-trips/${trip.id}`}>
        <Card.Img variant="top" src={trip.image} />
        <Card.Body>
          <Card.Title>{trip.location}</Card.Title>
          <Card.Text>
            Trip ID: {trip.id}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
    // <Button variant="primary">Go somewhere</Button>
    // <li key={trip.id}>
    //   <Link to={`/index-trips/${trip.id}`}><Image src={trip.image} thumbnail fluid />{trip.location}, id: {trip.id}</Link>
    // </li>
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
      <Container fluid className="no-padding mt-4">
        <Row className="justify-content-center mt-5 mb-5">
          {tripLinks}
        </Row>
      </Container>
      {console.log('Current contents of trips', trips)}
    </Fragment>
    // <ul>{tripLinks}</ul>
  )
}

export default IndexTrips
