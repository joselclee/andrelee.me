import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

import snippetImage from './assets/snippet1.jpg';

const Item3 = () => {
  return (
    <div>
        <Card>
        <Card.Img variant="top" src={snippetImage} alt="Snippet" />
            <Card.Body>
                <Card.Title>Moviesseur</Card.Title>
                <Card.Text>
                  Fullstack application that taught me about implementing APIs and how to connect and
                  troubleshoot between the backend and frontend.
                </Card.Text>
                <Button variant="secondary" href="https://github.com/joselclee/Moviesseur">
                  <FontAwesomeIcon icon={faCode} /> Backend
                  </Button>
                  {' '}
                  <Button variant="secondary" href="https://github.com/joselclee/Moviesseur-Front-End">
                  <FontAwesomeIcon icon={faCode} /> Frontend
                  </Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Item3