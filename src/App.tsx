import { useCallback } from 'react';
import { IntlProvider } from 'react-intl';
import { WetProvider, useLanguage, Language } from '@arcnovus/wet-boew-react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AppLayout, LangLandingLayout } from './layouts';
import { HomePage, AboutPage } from './pages';
import msg from './i18n/lang';
// import * as messagesFr from './i18n/lang/fr';

const App = () => {
  const { currentLanguage } = useLanguage(useLocation());
  const navigate = useNavigate();

  const handleClick = useCallback(
    (a) => {
      navigate(a.href.replace(window.location.origin, ''));
    },
    [navigate]
  );

  return (
    <WetProvider linkHandler={handleClick}>
      {currentLanguage == null ? (
        <LangLandingLayout />
      ) : (
        <IntlProvider
          locale={currentLanguage}
          messages={currentLanguage === Language.FR ? msg.fr : msg.en}
        >
          <AppLayout>
            <Routes>
              <Route path="/:lang" element={<HomePage />} />
              <Route path="/:lang/about" element={<AboutPage />} />
            </Routes>
          </AppLayout>
        </IntlProvider>
      )}
    </WetProvider>
  );
};

export default App;
