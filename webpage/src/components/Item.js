import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const Item = () => {
  return (
    <div>
        <Card>
            <Card.Body>
                <Card.Title>Internship</Card.Title>
                <Card.Text>
                    Testing Testing Testing
                </Card.Text>
                <Button variant="secondary">Push me!</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Item