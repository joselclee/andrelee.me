import './Item.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

import asset from './assets/item-assets/billiam-demo.mp4';

const Featured = () => {
  return (
    <div className="med-size">
      <Card>
      <video src={asset} alt="Snippet" className="img-custom" autoPlay loop muted />
          <Card.Body>
            <Card.Title>billiam fakespeare </Card.Title>
            <Card.Text>
              Natural language processing model that is trained on 40,000 lines of Shakespearean text to generate 
              responses to user input. The model uses TF-IDF to vectorize the input and then uses cosine similarity
              to generate the response.
              <br/><br/>
              A very simple model but served as the catalyst for me learning more complex topics and techniques!
            </Card.Text>
            <Button variant="secondary" href="https://github.com/joselclee/chatbot">
              <FontAwesomeIcon icon={faCode}/> Python Code
            </Button>
          </Card.Body>
      </Card>
    </div>
  )
}

export default Featured