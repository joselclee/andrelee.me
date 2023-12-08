import './Item.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

import snippetImage from './assets/csun.jpg';

const Item5 = () => {
  return (
    <div>
        <Card>
        <Card.Img variant="top" src={snippetImage} alt="Snippet" />
            <Card.Body>
                <Card.Title>Matamunch</Card.Title>
                <Card.Text>
                  Food searching program that can search for food using
                  prices, calories, location, and name.
                </Card.Text>
                <Button variant="secondary" href="https://github.com/joselclee/COMP-282-Matamunch">
                  <FontAwesomeIcon icon={faCode} /> JavaScript
                  </Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Item5