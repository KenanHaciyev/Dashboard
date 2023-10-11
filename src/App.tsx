import './App.css'
import MainPage from "./Layouts/MainPage";
import { Col, Layout, Row } from 'antd';

function App() {
  return (
    <div>
      <Row justify='center' align='middle' style={{height: '100vh'}} >
          <Col>
              <Layout>
                <MainPage/>
              </Layout>
          </Col>
      </Row>
    </div>
  )
}

export default App
