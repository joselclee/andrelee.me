import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

import snippetImage from './assets/snippet1.jpg';

const Item1 = () => {
  return (
    <div>
        <Card>
        <Card.Img variant="top" src={snippetImage} alt="Snippet" />
            <Card.Body>
                <Card.Title>Source code</Card.Title>
                <Card.Text>
                  This is a snippet of the code behind this website.
                  Click the button below to view the repository.
                </Card.Text>
                <Button variant="secondary">
                  <FontAwesomeIcon icon={faCode} /></Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Item1