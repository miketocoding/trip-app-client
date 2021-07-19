import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const TripForm = ({ trip, handleSubmit, handleChange, cancelPath }) => (
  <Form onSubmit={handleSubmit}>

    <Form.Group controlId="formImageUrl">
      <Form.Label>Image URL</Form.Label>
      <Form.Control
        placeholder="Image URL of your trip"
        value={trip.image}
        name="image"
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="formLocation">
      <Form.Label>Location</Form.Label>
      <Form.Control
        placeholder="City, State, Country"
        value={trip.location}
        name="location"
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="formStart">
      <Form.Label>Start Date</Form.Label>
      <Form.Control
        placeholder="yyyy-mm-dd"
        value={trip.start}
        name="start"
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="formEnd">
      <Form.Label>End Date</Form.Label>
      <Form.Control
        placeholder="yyyy-mm-dd"
        value={trip.end}
        name="end"
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="formTravelers">
      <Form.Label>Other Travelers</Form.Label>
      <Form.Control
        placeholder="Names of the other travelers"
        value={trip.travelers}
        name="travelers"
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="formRating">
      <Form.Label>Trip Rating (1-10)</Form.Label>
      <Form.Control
        placeholder="Trip Rating (1-10)"
        value={trip.rating}
        name="rating"
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="formStandouts">
      <Form.Label>Standouts</Form.Label>
      <Form.Control
        as="textarea"
        placeholder="The most memorable parts were..."
        value={trip.standouts}
        name="standouts"
        onChange={handleChange}
      />
    </Form.Group>

    <Button type="submit">Submit</Button>
    <Link to={cancelPath}>
      <Button>Cancel</Button>
    </Link>

  </Form>
)

export default TripForm
