import apiUrl from '../apiConfig'
import axios from 'axios'

// create trip post axios call
export const createPost = (user, data) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/trips/',
    headers: { 'Authorization': `Token ${user.token}` },
    data: {
      trip: data
    }
  })
}

// Index trips axios call
export const indexPosts = (user) => {
  return axios({
    url: apiUrl + '/trips/',
    headers: { 'Authorization': `Token ${user.token}` }
  })
}

// make sure to send them in the right order (user, data)
// owner: user._id,
// location: 'location',
// start: 'start',
// end: 'end',
// travelers: 'travelers',
// rating: 'rating',
// standouts: 'standouts'
