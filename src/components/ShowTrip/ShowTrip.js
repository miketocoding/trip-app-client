import React, { Fragment, useState, useEffect } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { showPost, deletePost } from './../../api/travelBlog'
import messages from '../AutoDismissAlert/messages'

const ShowTrip = (props) => {
  console.log('you are in showTrip')
  // Hooks
  const [trip, setTrip] = useState([])
  const [deleted, setDeleted] = useState(false)
  const { user } = props
  // const tripId = props.match.params.id
  console.log('Value of User', user)
  console.log('Value of tripId', props.match.params.id)
  useEffect(() => {
    showPost(user, props.match.params.id)
      .then(res => {
        setTrip(res.data.trip)
        console.log(res)
      })
      .then(() => props.msgAlert({
        heading: 'Show Specific Trips Success',
        message: messages.showTripSuccess,
        variant: 'success'
      }))
      .catch(error => {
        props.msgAlert({
          heading: 'Show Specific Trips Failed with error: ' + error.message,
          message: messages.showTripFailure,
          variant: 'danger'
        })
      })
  }, [])

  const destroy = () => {
    deletePost(user, props.match.params.id)
      .then(() => setDeleted(true))
      .then(() => props.msgAlert({
        heading: 'Delete Post Success',
        message: messages.deletePostSuccess,
        variant: 'success'
      }))
      .catch(error => {
        props.msgAlert({
          heading: 'Delete Post Failed with error: ' + error.message,
          message: messages.deletePostFailure,
          variant: 'danger'
        })
      })
  }

  if (!trip) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/index-trips/', state: { msg: 'Post successfully deleted' } }
    } />
  }

  return (
    <Fragment>
      <h4>{trip.location}</h4>
      <p>{trip.standouts}</p>
      <button onClick={destroy}>Delete Post</button>
      <Link to="/index-trips/">Back to all trips</Link>
      <Link to={`/index-trips/${props.match.params.id}/edit`}>
        <button>Edit Trip</button>
      </Link>
    </Fragment>
  )
}

export default withRouter(ShowTrip)
