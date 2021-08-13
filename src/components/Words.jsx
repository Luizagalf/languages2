import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';

function Words(props) {
        return (
            <Card className="text-center">
                <Card.Img variant="top" src={props.url} alt={props.name} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle>{props.theme}</Card.Subtitle>
                    <Card.Text>{props.transcription}</Card.Text>
                    <Card.Text>{props.translation}</Card.Text>
                </Card.Body>
            </Card>
        );
}

export default Words;