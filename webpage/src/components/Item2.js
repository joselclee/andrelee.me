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
                  This is a simple machine learning model that is able to
                  discern handwritten digits and classify them. The dataset
                  is taken from MNIST and I have provided 18 hand-drawn 
                  images to classify. The current accuracy of the model is 50%.
                </Card.Text>
                <Button variant="secondary">
                  <FontAwesomeIcon icon={faCode} /></Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Item2