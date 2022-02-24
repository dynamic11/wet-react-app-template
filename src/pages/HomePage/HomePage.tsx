import { FormattedMessage } from 'react-intl';
import { Title } from '@dynamic11/wet-react';
import { ExampleComponent } from '../../components';
import '../../App.css';

const HomePage = () => (
  <div>
    <Title level="h1">
      <FormattedMessage id="home.title" />
    </Title>
    <ExampleComponent />
    <p>{process.env.REACT_APP_EXAMPLE}</p>
    <p>{process.env.NODE_ENV}</p>
  </div>
);

export default HomePage;
