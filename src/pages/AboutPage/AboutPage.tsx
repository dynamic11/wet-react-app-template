import { FormattedMessage } from 'react-intl';
import { Title } from '@dynamic11/react-wet';
import { ExampleComponent2 } from '../../components';
import '../../App.css';

const AboutPage = () => (
  <div>
    <Title level="h1">
      <FormattedMessage id="about.title" />
    </Title>
    <ExampleComponent2 />
  </div>
);

export default AboutPage;
