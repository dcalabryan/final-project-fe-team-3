import ImageLoginRegis from "../components/ImageLoginRegis";
import LoginForm from "../components/LoginForm";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Login = () => {
  useEffect(() => {
    document.title = "Masuk";
  }, []);

  return (
    <>
      <Container fluid style={{ paddingleft: 0, paddingright: 0}}>
        <Row style={{ marginleft: 0}}>
          <Col style={{ paddingleft: 0}}><ImageLoginRegis /></Col>
          <Col><LoginForm /></Col>
        </Row>
      </Container>
    </>
  )
};

export default Login;