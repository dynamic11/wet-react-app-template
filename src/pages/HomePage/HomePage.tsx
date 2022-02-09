import { FormattedMessage } from 'react-intl';
import { PageTitle } from '@arcnovus/wet-boew-react';
import { ExampleComponent } from '../../components';
import '../../App.css';

const HomePage = () => (
  <div>
    <FormattedMessage id="test.title">
      {(title) => <PageTitle text={`${title}`} />}
    </FormattedMessage>
    <h1>home page</h1>
    <ExampleComponent />
  </div>
);

export default HomePage;
