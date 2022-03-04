import { useIntl, FormattedMessage } from 'react-intl';
import { Title, Button, Form, Label, Alert, Link } from '@dynamic11/wet-react';
import { useForm, Controller, FieldErrors } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import '../../App.css';

type FormInputType = {
  formEmail: string;
  formPass: string;
  formCheckbox: string;
  sampleRadio: string;
};

interface FormErrorSummaryProps extends React.HTMLAttributes<HTMLElement> {
  /** Errors to display */
  errors: FieldErrors;
}

const FormErrorSummary = ({ errors, ...rest }: FormErrorSummaryProps) => (
  <Alert isVisible={!!Object.keys(errors).length} variant="danger" {...rest}>
    <Alert.Header level="h3">
      <FormattedMessage id="form.errors" />
    </Alert.Header>
    <Alert.Body>
      <ul>
        {Object.keys(errors).map((fieldName, index) => (
          <li key={fieldName}>
            <Button
              onClick={() => errors[fieldName].ref.focus()}
              variant="link"
              className="p-0"
              size="lg"
            >
              {`Error ${index + 1}: `}
              <ErrorMessage errors={errors} name={fieldName} />
            </Button>
          </li>
        ))}
      </ul>
    </Alert.Body>
  </Alert>
);

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

      <FormErrorSummary errors={errors} />

      <Form onSubmit={onSubmit}>
        <Form.Group
          className="mb-3"
          controlId="formEmail"
          isInvalid={!!errors.formEmail}
          isRequired
        >
          <Form.Label requiredText={formatMessage({ id: 'required' })}>
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
          />
        </Form.Group>

        <Form.Group
          className="mb-0"
          controlId="formPass"
          isInvalid={!!errors.formPass}
          isRequired
        >
          <Form.Label requiredText={formatMessage({ id: 'required' })}>
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

        <Form.Group
          className="mb-3"
          controlId="formCheckbox"
          isRequired
          isInvalid={!!errors.formCheckbox}
        >
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
                isInvalid={!!errors.formCheckbox}
                className="mt-3 mb-1"
                checked={!!selectedFormcheckbox}
              />
            )}
          />
          <ErrorMessage
            className="form-field-alert"
            errors={errors}
            name="formCheckbox"
            as={<Label variant="danger" />}
          />

          {!!selectedFormcheckbox && (
            <Form.Group
              className="mt-4 mb-5"
              controlId="sampleRadio"
              isRequired
              isInvalid={!!errors.sampleRadio}
            >
              <Form.Label requiredText="custom required">
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
              />
            </Form.Group>
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          <FormattedMessage id="submit" />
        </Button>
      </Form>
    </>
  );
};

export default ExampleFormPage;
