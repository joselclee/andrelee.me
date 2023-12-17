import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

import asset from './assets/item-assets/Item3.mp4';

const Item3 = () => {
  return (
    <div>
        <Card className="normalize">
        <video src={asset} alt="Snippet" className="img-custom" autoPlay loop muted />
            <Card.Body>
                <Card.Title>Moviesseur</Card.Title>
                <Card.Text>
                  Fullstack application that taught me about implementing APIs and how to connect and
                  troubleshoot between the backend and frontend.
                </Card.Text>
                <Button variant="secondary" href="https://github.com/joselclee/Moviesseur" target = "_blank">
                  <FontAwesomeIcon icon={faCode} /> Backend
                  </Button>
                  <br/><br/>
                  <Button variant="secondary" href="https://github.com/joselclee/Moviesseur-Front-End" target = "_blank">
                  <FontAwesomeIcon icon={faCode} /> Frontend
                  </Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Item3