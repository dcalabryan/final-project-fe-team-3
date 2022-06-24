import ImageLoginRegis from "../components/ImageLoginRegis";
import RegisterForm from "../components/RegisterForm";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Register = () => {
  useEffect(() => {
    document.title = "Daftar";
  }, []);

  return (
    <>
      <Container fluid style={{ paddingleft: 0, paddingright: 0}}>
        <Row style={{ marginleft: 0}}>
          <Col style={{ paddingleft: 0}}><ImageLoginRegis /></Col>
          <Col><RegisterForm /></Col>
        </Row>
      </Container>
    </>
  )
};

export default Register;