import './Item.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

import snippetImage from './assets/openai-logo.jpg';

const Featured = () => {
  return (
    <div>
        <Card>
        <Card.Img variant="top" src={snippetImage} alt="Snippet" />
            <Card.Body>
                <Card.Title>Customized Large Language Model</Card.Title>
                <Card.Text>
                  text text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text text
                  text text text text text text text text text text text text text text text
                </Card.Text>
                <Button variant="secondary" href="https://github.com/joselclee/andrelee.dev">
                  <FontAwesomeIcon icon={faCode} />
                  </Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Featured