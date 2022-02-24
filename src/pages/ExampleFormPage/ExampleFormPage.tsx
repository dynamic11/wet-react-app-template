import { useIntl, FormattedMessage } from 'react-intl';
import { Title, Button, Form, Label, Alert, Link } from '@dynamic11/wet-react';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import '../../App.css';

type FormInputType = {
  formEmail: string;
  formPass: string;
  formCheckbox: string;
};

const ExampleFormPage = () => {
  const intl = useIntl();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInputType>();

  const onSubmit = handleSubmit((data) => {
    /* eslint-disable */
    alert('form submitted!');
    console.log(data);
    /* eslint-enable */
  });

  return (
    <>
      <Title level="h1">
        <FormattedMessage id="menu.example.form" />
      </Title>

      <Alert isVisible={!!Object.keys(errors).length} variant="danger">
        <Alert.Header>
          <FormattedMessage id="form.errors" />
        </Alert.Header>
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
          <Form.Label
            isRequired
            requiredText={intl.formatMessage({ id: 'required' })}
          >
            <FormattedMessage id="email.address" />
          </Form.Label>
          <Controller
            name="formEmail"
            control={control}
            rules={{
              required: {
                value: true,
                message: intl.formatMessage({ id: 'required.field' }),
              },
            }}
            defaultValue="default@email.com"
            render={({ field }) => (
              <Form.Control
                {...field}
                type="email"
                placeholder={intl.formatMessage({ id: 'enter.email' })}
              />
            )}
          />
          <Form.Text className="text-muted">
            <FormattedMessage id="never.share.email" />
          </Form.Text>
          <br />
          <ErrorMessage
            errors={errors}
            name="formEmail"
            as={<Label variant="danger" />}
            isInvalid={!!errors.formEmail}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPass">
          <Form.Label
            isRequired
            requiredText={intl.formatMessage({ id: 'required' })}
          >
            <FormattedMessage id="password" />
          </Form.Label>
          <Controller
            name="formPass"
            control={control}
            rules={{
              required: {
                value: true,
                message: intl.formatMessage({ id: 'required.field' }),
              },
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
                placeholder={intl.formatMessage({ id: 'password' })}
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
              required: {
                value: true,
                message: intl.formatMessage({ id: 'required.field' }),
              },
            }}
            render={({ field }) => (
              <Form.Check
                {...field}
                type="checkbox"
                label={intl.formatMessage({ id: 'check.here' })}
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
          <FormattedMessage id="submit" />
        </Button>
      </Form>
    </>
  );
};

export default ExampleFormPage;
