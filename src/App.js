import React, { Component, Fragment } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'

// import Home component for home page
import Home from './components/Home/Home'
// import createPost component
import CreatePost from './components/CreatePost/CreatePost'
// import IndexTrips component
import IndexTrips from './components/IndexTrips/IndexTrips'
import ShowTrip from './components/ShowTrip/ShowTrip'
import EditPost from './components/EditPost/EditPost'
// import Stats from './components/Stats/Stats'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map(msgAlert => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />

          {/* Add home page route. Route not authenticated. */}
          <Route exact path='/' component={Home} />
          {/* Add create post route. Route authenticated. */}
          <AuthenticatedRoute user={user} exact path='/create-post' render={() => (
            <CreatePost msgAlert={this.msgAlert} user={user} />
          )} />
          {/* Add index trips route. Route authenticated. */}
          <AuthenticatedRoute user={user} exact path='/index-trips' render={() => (
            <IndexTrips msgAlert={this.msgAlert} user={user} />
          )} />
          {/* Add show trip route. Route authenticated. */}
          <AuthenticatedRoute user={user} exact path='/index-trips/:id' render={() => (
            <ShowTrip msgAlert={this.msgAlert} user={user} />
          )} />
          {/* Add edit post route. Route authenticated. */}
          <AuthenticatedRoute user={user} exact path='/index-trips/:id/edit' render={() => (
            <EditPost msgAlert={this.msgAlert} user={user} />
          )} />
          {/* Add Stats page route. Route authenticated. */}
          {/* <AuthenticatedRoute user={user} exact path='/stats' render={() => (
            <Stats msgAlert={this.msgAlert} user={user} />
          )} /> */}

        </main>
      </Fragment>
    )
  }
}

export default withRouter(App)
