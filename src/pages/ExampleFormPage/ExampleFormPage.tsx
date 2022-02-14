import { FormattedMessage } from 'react-intl';
import { Title, Button, Form } from '@dynamic11/wet-react';
import '../../App.css';

const handleFormSubmit = (event: any) => {
  event.preventDefault();
  console.log('submitted', event.target.elements.formBasicEmail.value);
};

const ExampleFormPage = () => (
  <div>
    <Title level="h1">
      <FormattedMessage id="menu.example.form" />
    </Title>
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>
);

export default ExampleFormPage;
