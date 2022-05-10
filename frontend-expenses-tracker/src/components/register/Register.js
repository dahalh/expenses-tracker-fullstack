import React, { useState } from "react";
import { Alert, Button, Form, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { postRegister } from "../../helpers/axiosHelper";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // call api using axios
    const { data } = await postRegister(formData);
    // console.log(data);
    setResponse(data);
    setIsLoading(false);
  };

  return (
    <Row className="login-comp mt-5">
      <Form onSubmit={handleOnSubmit}>
        <h3>Register Here!</h3>
        <hr />
        {isLoading && <Spinner variant="primary" animation="border" />}

        {response.message && (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response.message}
          </Alert>
        )}
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            type="text"
            name="name"
            required
            placeholder="Your Full Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            type="email"
            name="email"
            required
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Register
        </Button>
        <div className="text-end">
          Existing Account? <Link to="/">Login</Link>
        </div>
      </Form>
    </Row>
  );
};
