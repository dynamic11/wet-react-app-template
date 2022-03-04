import { useIntl, FormattedMessage } from 'react-intl';
import { Title, Button, Form, Label, Alert, Link } from '@dynamic11/wet-react';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import '../../App.css';

type FormInputType = {
  formEmail: string;
  formPass: string;
  formCheckbox: string;
  sampleRadio: string;
};

const ExampleFormPage = () => {
  const { formatMessage } = useIntl();
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormInputType>({
    shouldUnregister: true,
    defaultValues: { formEmail: 'default@email.com', formCheckbox: 'true' },
  });

  const [selectedFormcheckbox, selectedSampleRadio] = watch([
    'formCheckbox',
    'sampleRadio',
  ]);

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
              <li key={fieldName}>
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
            requiredText={formatMessage({ id: 'required' })}
          >
            <FormattedMessage id="email.address" />
          </Form.Label>
          <Controller
            name="formEmail"
            control={control}
            rules={{
              required: {
                value: true,
                message: formatMessage({ id: 'required.field' }),
              },
            }}
            render={({ field }) => (
              <Form.Control
                {...field}
                type="email"
                placeholder={formatMessage({ id: 'enter.email' })}
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

        <Form.Group className="mb-0" controlId="formPass">
          <Form.Label
            isRequired
            requiredText={formatMessage({ id: 'required' })}
          >
            <FormattedMessage id="password" />
          </Form.Label>
          <Controller
            name="formPass"
            control={control}
            rules={{
              required: {
                value: true,
                message: formatMessage({ id: 'required.field' }),
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
                placeholder={formatMessage({ id: 'password' })}
                isRequired
                isInvalid={!!errors.formPass}
              />
            )}
          />
          <ErrorMessage
            className="form-field-alert"
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
                message: formatMessage({ id: 'required.field' }),
              },
            }}
            render={({ field }) => (
              <Form.Check
                {...field}
                type="checkbox"
                label={formatMessage({ id: 'check.here' })}
                isRequired
                isInvalid={!!errors.formCheckbox}
                className="mt-3 mb-1"
                checked={!!selectedFormcheckbox}
              />
            )}
          />

          {!!selectedFormcheckbox && (
            <Form.Group className="mb-0" controlId="sampleRadio">
              <Form.Label isRequired requiredText="custom required">
                Are you cool?
              </Form.Label>
              <Controller
                name="sampleRadio"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: formatMessage({ id: 'required.field' }),
                  },
                }}
                render={({ field }) => (
                  <>
                    <Form.Check
                      {...field}
                      id="sampleRadio-yes"
                      type="radio"
                      label="Yes"
                      value="true"
                      checked={selectedSampleRadio === 'true'}
                    />
                    <Form.Check
                      {...field}
                      id="sampleRadio-no"
                      type="radio"
                      label="No"
                      value="false"
                      checked={selectedSampleRadio === 'false'}
                    />
                  </>
                )}
              />
              <ErrorMessage
                errors={errors}
                name="sampleRadio"
                as={<Label variant="danger" className="form-field-alert" />}
                isInvalid={!!errors.sampleRadio}
              />
            </Form.Group>
          )}
          <ErrorMessage
            className="form-field-alert"
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
