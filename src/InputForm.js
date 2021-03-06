import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export function InputForm(props) {
  const [values, setValues] = useState({
    size: '',
    steps: '',
  });
  const [visible, setVisible] = useState(true);

  const handleInputChange = (e) => {
    const re = /^[0-9\b]+$/;

    const { name, value } = e.target;
    if (e.target.value === '' || re.test(e.target.value)) {
      if (e.target.value <= 15) {
        setValues({ ...values, [name]: value });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleValues(values);
    setVisible(false);
  };

  const handleValues = (values) => {
    props.onValueChanges({
      size: values.size,
      steps: values.steps,
    });
  };

  return (
    <Container
      style={
        visible
          ? {
              zIndex: 1500,
              position: 'fixed' /* Sit on top of the page content */,
              width: '100%' /* Full width (cover the whole page) */,
              height: '100%' /* Full height (cover the whole page) */,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }
          : { display: 'none' }
      }
    >
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '40px 20px',
        }}
        onSubmit={handleSubmit}
      >
        <Form.Group>
          <Form.Label>Size (provide a number under 16)</Form.Label>
          <Form.Control
            type='text'
            value={values.size}
            name='size'
            pattern='[+-]?\d+(?:[.,]\d+)?'
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Steps (provide a number under 16)</Form.Label>
          <Form.Control
            type='text'
            value={values.steps}
            name='steps'
            pattern='[+-]?\d+(?:[.,]\d+)?'
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </form>
    </Container>
  );
}
