import {Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import Words from './components/Words';
const jsonWords = require("./jsonWords.js");


function App() {
  return (
    <Row xs={1} md={3} className="g-4 justify-content-md-center">
      {
        jsonWords.map((word) =>
        <Col className="d-flex p-2">
          <Words name={word.name} url={word.url} transcription={word.transcription} translation={word.translation} theme={word.theme}></Words>
        </Col>
        )
      }
    </Row>
  );
}

export default App;
