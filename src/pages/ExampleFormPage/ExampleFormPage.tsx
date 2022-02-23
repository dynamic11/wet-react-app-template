import { FormattedMessage } from 'react-intl';
import { Title, Button, Form, Label, Alert, Link } from '@dynamic11/wet-react';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import '../../App.css';

type FormInputType = {
  formEmail: string;
  formPass: string;
  formCheckbox: boolean;
};

const ExampleFormPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInputType>();

  const onSubmit = handleSubmit((data) => {
    alert('form submitted!');
    console.log(data);
  });

  return (
    <>
      <Title level="h1">
        <FormattedMessage id="menu.example.form" />
      </Title>

      <Alert isVisible={!!Object.keys(errors).length} variant="danger">
        <Alert.Header>Form Errors</Alert.Header>
        <Alert.Body>
          <ul>
            {Object.keys(errors).map((fieldName, index) => (
              <li>
                <Link href={`#${fieldName}`}>
                  {`Error ${index + 1}: `}
                  <ErrorMessage errors={errors} name={fieldName} />
                </Link>
              </li>
            ))}
          </ul>
        </Alert.Body>
      </Alert>

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
            isInvalid={!!errors.formEmail}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPass">
          <Form.Label isRequired>Password</Form.Label>
          <Controller
            name="formPass"
            control={control}
            rules={{
              required: { value: true, message: 'This field is required.' },
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
              <Form.Control
                {...field}
                type="password"
                placeholder="Password"
                isRequired
                isInvalid={!!errors.formPass}
              />
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
            rules={{
              required: { value: true, message: 'This field is required.' },
            }}
            render={({ field }) => (
              <Form.Check
                {...field}
                type="checkbox"
                label="Check me out"
                isRequired
                isInvalid={!!errors.formCheckbox}
              />
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
