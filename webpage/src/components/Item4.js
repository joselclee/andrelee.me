import './Item.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

import snippetImage from './assets/tracker.jpg';

const Item4 = () => {
  return (
    <div>
        <Card>
        <Card.Img variant="top" src={snippetImage} alt="Snippet" />
            <Card.Body>
                <Card.Title>Todo List</Card.Title>
                <Card.Text>
                  Simple Todo list in React with basic functionality like 
                  adding, removing, and marking tasks as complete.
                </Card.Text>
                <Button variant="secondary" href="https://github.com/joselclee/todo-list" target = "_blank">
                  <FontAwesomeIcon icon={faCode} /> JavaScript
                  </Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Item4