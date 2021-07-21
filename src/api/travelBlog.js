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

// Show single trip
export const showPost = (user, postId) => {
  return axios({
    url: apiUrl + '/trips/' + postId,
    method: 'GET',
    headers: { 'Authorization': `Token ${user.token}` }
  })
}

// Delete a post
export const deletePost = (user, postId) => {
  return axios({
    url: apiUrl + '/trips/' + postId,
    method: 'DELETE',
    headers: { 'Authorization': `Token ${user.token}` }
  })
}

// Edit a trip post
export const editPost = (user, postId, data) => {
  return axios({
    url: apiUrl + '/trips/' + postId + '/',
    method: 'PATCH',
    headers: { 'Authorization': `Token ${user.token}` },
    data: {
      trip: data
    }
  })
}
