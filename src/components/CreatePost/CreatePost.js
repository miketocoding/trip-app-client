import React, { Fragment, useState } from 'react'
import { Redirect } from 'react-router-dom'
// import TripForm
import TripForm from '../shared/TripForm'
// import axios call
import { createPost } from './../../api/travelBlog'

const CreatePost = (props) => {
  // using hooks
  const [trip, setTrip] = useState({ location: '', start: '', end: '', travelers: '', rating: '', standouts: '' })
  const [createdTripId, setCreatedTripId] = useState(null)

  const handleChange = event => {
    event.persist()

    setTrip(prevTrip => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedTrip = Object.assign({}, prevTrip, updatedField)
      return editedTrip
    })
  }

  const handleSubmit = event => {
    const { user } = props
    console.log('Value of user props', user)
    console.log('Value of user.token', user.token)
    event.preventDefault()
    createPost(user, trip)
      .then(res => setCreatedTripId(res.data.trip._id))
      .catch(console.error)
  }

  if (createdTripId) {
    return <Redirect to={`/trips/${createdTripId}`} />
  }

  return (
    <Fragment>
      <h3>Create your trip below</h3>
      <TripForm
        trip={trip}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath='/'
      />
    </Fragment>
  )
}

export default CreatePost

// handle submit call api function and pass (user, trip) trip--> data
// use my form to get handle submit
