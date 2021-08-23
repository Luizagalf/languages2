import "bootstrap/dist/css/bootstrap.min.css";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import jsonWords from '../../jsonWords';

function Wordlist() {
    return (
        <Card>
            <Card.Header as="h5">Word list</Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                    {
                        jsonWords.map((word) =>
                            <ListGroupItem>{word.english} - {word.russian}</ListGroupItem>
                        )
                    }
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default Wordlist;