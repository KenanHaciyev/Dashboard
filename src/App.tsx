import './App.css'
import MainPage from "./Layouts/MainPage";
import {Col, Row} from "antd";

function App() {
  return (
    <div>
      <Row justify='center' align='middle' style={{height: '100vh'}} >
          <Col>
              <MainPage/>
          </Col>
      </Row>
    </div>
  )
}

export default App
