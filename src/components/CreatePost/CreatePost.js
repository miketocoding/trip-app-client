import React, { Fragment, useState } from 'react'
import { Redirect } from 'react-router-dom'
// import TripForm
import TripForm from '../shared/TripForm'
// import axios call
import { createPost } from './../../api/travelBlog'
import messages from '../AutoDismissAlert/messages'

const CreatePost = (props) => {
  // using hooks
  const [trip, setTrip] = useState({ image: '', location: '', start: '', end: '', travelers: '', rating: '', standouts: '' })
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
    const { user, msgAlert } = props
    event.preventDefault()
    createPost(user, trip)
      .then(res => setCreatedTripId(res.data.trip._id))
      .then(() => msgAlert({
        heading: 'Create Post Success',
        message: messages.createPostSuccess,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Create Post Failed with error: ' + error.message,
          message: messages.createPostFailure,
          variant: 'danger'
        })
      })
    setTrip({ image: '', location: '', start: '', end: '', travelers: '', rating: '', standouts: '' })
  }

  if (createdTripId) {
    return <Redirect to={`/trips/${createdTripId}`} />
  }

  return (
    <Fragment>
      <h2 className='to-center mt-4'>Create your trip below</h2>
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
