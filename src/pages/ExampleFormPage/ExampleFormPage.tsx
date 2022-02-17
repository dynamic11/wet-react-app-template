import { FormattedMessage } from 'react-intl';
import { Title, Button, Form, Label } from '@dynamic11/wet-react';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import '../../App.css';

// const handleFormSubmit = (event: any) => {
//   event.preventDefault();
//   console.log('submitted', event.target.elements.formBasicEmail.value);
// };

type FormInputType = {
  formEmail: string;
  formPass: string;
  formCheckbox: boolean;
};

const ExampleFormPage = () => {
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormInputType>();
  const onSubmit = handleSubmit((data) => console.log(data));

  console.log('email:', watch('formEmail')); // watch input value by passing the name of it
  console.log('pass:', watch('formPass')); // watch input value by passing the name of it
  console.log('check:', watch('formCheckbox'));

  return (
    <>
      <Title level="h1">
        <FormattedMessage id="menu.example.form" />
      </Title>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Controller
            name="formEmail"
            control={control}
            rules={{ required: { value: true, message: 'This is required.' } }}
            defaultValue="default@email.com"
            render={({ field }) => (
              <Form.Control {...field} type="email" placeholder="Enter email" />
            )}
          />
          <Form.Text className="text-muted">
            We will never share your email with anyone else.
          </Form.Text>
          <ErrorMessage
            errors={errors}
            name="formEmail"
            as={<Label variant="danger" />}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPass">
          <Form.Label>Password</Form.Label>
          <Controller
            name="formPass"
            control={control}
            rules={{
              required: { value: true, message: 'This is required.' },
              maxLength: {
                value: 10,
                message: 'Must be less than 10 characters',
              },
              minLength: {
                value: 4,
                message: 'Must be more than 4 characters',
              },
            }}
            render={({ field }) => (
              <Form.Control {...field} type="password" placeholder="Password" />
            )}
          />
          <ErrorMessage
            errors={errors}
            name="formPass"
            as={<Label variant="danger" />}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCheckbox">
          <Controller
            name="formCheckbox"
            control={control}
            rules={{ required: { value: true, message: 'This is required.' } }}
            render={({ field }) => (
              <Form.Check {...field} type="checkbox" label="Check me out" />
            )}
          />
          <ErrorMessage
            errors={errors}
            name="formCheckbox"
            as={<Label variant="danger" />}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ExampleFormPage;
