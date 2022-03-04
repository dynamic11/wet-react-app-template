import { AppTemplate } from '@arcnovus/wet-boew-react';
import { useIntl } from 'react-intl';
import AppRoute from '../../AppRoute';
import { getLocalizedPath } from '../../i18n/utils/LocalizedNavigate';
import getMatchingRoute from '../../i18n/utils/MatchingRoute';

export interface AppLayoutProps {
  /** Contents of label */
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { formatMessage } = useIntl();

  return (
    <AppTemplate
      appName={[
        {
          href: getLocalizedPath(AppRoute.Home),
          text: formatMessage({ id: 'app.title' }),
        },
      ]}
      menuLinks={[
        {
          href: getLocalizedPath(AppRoute.Home),
          text: formatMessage({ id: 'menu.home' }),
        },
        {
          href: getLocalizedPath(AppRoute.About),
          text: formatMessage({ id: 'menu.about' }),
        },
        {
          href: getLocalizedPath(AppRoute.ExampleForm),
          text: formatMessage({ id: 'menu.example.form' }),
        },
      ]}
      lngLinks={[
        {
          href: getMatchingRoute(),
          lang: formatMessage({ id: 'language.other.locale' }) as LanguageType,
          text: formatMessage({ id: 'language.other.name' }),
        },
      ]}
    >
      {children}
    </AppTemplate>
  );
};

export default AppLayout;
