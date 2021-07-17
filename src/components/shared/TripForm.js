import React from 'react'
import { Link } from 'react-router-dom'

const TripForm = ({ trip, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Location</label>
    <input
      placeholder="Travel Location"
      value={trip.location}
      name="location"
      onChange={handleChange}
    />

    <label>Start Date</label>
    <input
      placeholder="yyyy-mm-dd"
      value={trip.start}
      name="start"
      onChange={handleChange}
    />

    <label>End Date</label>
    <input
      placeholder="yyyy-mm-dd"
      value={trip.end}
      name="end"
      onChange={handleChange}
    />

    <label>Other Travelers</label>
    <input
      placeholder="Other Travelers"
      value={trip.travelers}
      name="travelers"
      onChange={handleChange}
    />

    <label>Trip Rating (1-10)</label>
    <input
      placeholder="Trip Rating (1-10)"
      value={trip.rating}
      name="rating"
      onChange={handleChange}
    />

    <label>Standouts</label>
    <textarea
      placeholder="Standouts"
      value={trip.standouts}
      name="standouts"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>

  </form>
)

export default TripForm
