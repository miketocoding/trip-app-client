import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

const TripForm = ({ trip, handleSubmit, handleChange, cancelPath }) => (
  <Container fluid="md" className="no-padding col-sm-10 col-md-8 mx-auto mt-5">
    <Form onSubmit={handleSubmit}>

      <Form.Group controlId="formImageUrl">
        <Form.Label className="form-labels">Image URL</Form.Label>
        <Form.Control
          placeholder="Image URL of your trip"
          value={trip.image}
          name="image"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formLocation">
        <Form.Label className="form-labels">Location</Form.Label>
        <Form.Control
          placeholder="City, State, Country"
          value={trip.location}
          name="location"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formStart">
        <Form.Label className="form-labels">Start Date</Form.Label>
        <Form.Control
          placeholder="yyyy-mm-dd"
          value={trip.start}
          name="start"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formEnd">
        <Form.Label className="form-labels">End Date</Form.Label>
        <Form.Control
          placeholder="yyyy-mm-dd"
          value={trip.end}
          name="end"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formTravelers">
        <Form.Label className="form-labels">Other Travelers</Form.Label>
        <Form.Control
          placeholder="Names of other travelers"
          value={trip.travelers}
          name="travelers"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formRating">
        <Form.Label className="form-labels">Trip Rating (1-10)</Form.Label>
        <Form.Control
          placeholder="Trip Rating (1-10)"
          value={trip.rating}
          name="rating"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formStandouts">
        <Form.Label className="form-labels">Standouts</Form.Label>
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
  </Container>
)

export default TripForm
