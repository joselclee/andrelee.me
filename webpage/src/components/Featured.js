import './Item.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

import snippetImage from './assets/openai-logo2.png';

const Featured = () => {
  return (
    <div className="med-size">
      <Card>
        <Card.Img variant="top" src={snippetImage} alt="Snippet"/>
          <Card.Body>
            <Card.Title>Customized Large Language Model</Card.Title>
            <Card.Text>
              A large language model that can generate text based on most 
              nutritional facts available on the internet. Finetuning
              dataset includes over x million parameters.
            </Card.Text>
            <Button variant="secondary" href="https://github.com/joselclee/andrelee.dev">
              <FontAwesomeIcon icon={faCode}/> Python Code
            </Button>
          </Card.Body>
      </Card>
    </div>
  )
}

export default Featured