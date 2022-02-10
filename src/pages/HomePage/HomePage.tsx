import { FormattedMessage } from 'react-intl';
import { Title } from '@dynamic11/react-wet';
import { ExampleComponent } from '../../components';
import '../../App.css';

const HomePage = () => (
  <div>
    <Title level="h1">
      <FormattedMessage id="home.title" />
    </Title>
    <ExampleComponent />
  </div>
);

export default HomePage;
