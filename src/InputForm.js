import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from 'react-toastify';

const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;

export function InputForm(props) {
  const [values, setValues] = useState({
    width: '',
    height: '',
  });
  const [visible, setVisible] = useState(true);

  const handleInputChange = (e) => {
    const re = /^[0-9\b]+$/;

    const { name, value } = e.target;
    if (e.target.value === '' || re.test(e.target.value)) {
      setValues({ ...values, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleValues(values);
    setVisible(false);
  };

  const handleValues = (values) => {
    props.onValueChanges({
      width: values.width,
      height: values.height,
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
            }
          : { display: 'none' }
      }
    >
      <form onSubmit={handleSubmit}>
        <Form.Group className='form'>
          <Form.Label>Width (provide a number)</Form.Label>
          <Form.Control
            type='text'
            value={values.width}
            name='width'
            pattern='[+-]?\d+(?:[.,]\d+)?'
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Height (provide a number)</Form.Label>
          <Form.Control
            type='text'
            value={values.height}
            name='height'
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
