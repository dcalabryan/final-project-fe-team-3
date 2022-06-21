import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

import './RegisterForm.Module.css'

function RegisterForm() {
  return (
    <div className='login-form'>
      <Form>
        <Form.Group className="mb-3 mx-5" controlId="formBasicEmail">
          <h1>Daftar</h1>
          <Form.Label>Nama</Form.Label>
          <Form.Control type="email" placeholder="Nama Lengkap" />
        </Form.Group>

        <Form.Group className="mb-3 mx-5" controlId="formBasicEmail">
          <Form.Label>Nama</Form.Label>
          <Form.Control type="email" placeholder="Contoh: johmdee@gmail.com" />
        </Form.Group>

        <Form.Group className="mb-3 mx-5" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Masukkan password" />
        </Form.Group>
        <Button className='mx-5' variant="primary" type="submit" style={{ backgroundColor: "#7126B5" }}>
          Daftar
        </Button>
      </Form>

      <Form>
        <Form.Group className="my-3 mx-5 text-register">
          <Form.Text>Sudah punya akun? </Form.Text><Link to="/login"><Form.Text>Masuk di sini</Form.Text></Link>
        </Form.Group>
      </Form>
    </div>

  );
}

export default RegisterForm;