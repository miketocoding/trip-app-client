import React, { Fragment, useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
// import tripform
import TripForm from '../shared/TripForm'
import { showPost, editPost } from './../../api/travelBlog'
import messages from '../AutoDismissAlert/messages'

const EditPost = (props) => {
  console.log('You are at EditPost')
  const [trip, setTrip] = useState({ location: '', start: '', end: '', travelers: '', rating: '', standouts: '' })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    showPost(props.user, props.match.params.id)
      .then(res => {
        setTrip(res.data.trip)
        console.log('this is res data', res)
      })
      .then(() => props.msgAlert({
        heading: 'Show Specific Trips Success',
        message: messages.showTripSuccess,
        variant: 'success'
      }))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()

    setTrip(prevTrip => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedTrip = Object.assign({}, prevTrip, updatedField)
      return editedTrip
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    editPost(props.user, props.match.params.id, trip)
      .then(() => {
        setUpdated(true)
        props.msgAlert({
          heading: 'Edit Post Success',
          message: messages.editPostSuccess,
          variant: 'success'
        })
      })
      .catch(error => {
        props.msgAlert({
          heading: 'Edit Post Failed with error: ' + error.message,
          message: messages.editPostFailure,
          variant: 'danger'
        })
      })
    setTrip({ location: '', start: '', end: '', travelers: '', rating: '', standouts: '' })
  }

  if (updated) {
    return <Redirect to={`/index-trips/${props.match.params.id}`} />
  }

  return (
    <Fragment>
      <TripForm
        trip={trip}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/index-trips/${props.match.params.id}`}
      />
    </Fragment>
  )
}

export default withRouter(EditPost)
