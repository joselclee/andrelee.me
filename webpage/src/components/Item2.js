import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

import snippetImage from './assets/numbers.png';

const Item2 = () => {
  return (
    <div>
        <Card>
        <Card.Img variant="top" src={snippetImage} alt="Snippet" />
            <Card.Body>
                <Card.Title>Digit Classifier Model</Card.Title>
                <Card.Text>
                  This marks my first step into machine learning! For this model, I provided 18 self-drawn 
                  images with the current real-world accuracy of the model at 50%.
                </Card.Text>
                <Button variant="secondary" href="https://github.com/joselclee/Handwritten-Number-Identifier">
                  <FontAwesomeIcon icon={faCode} /> Python
                  </Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Item2