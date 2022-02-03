import { WetProvider, useLanguage } from '@arcnovus/wet-boew-react';
import { useCallback } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AppLayout, LangLandingLayout } from './layouts';
import { HomePage, AboutPage } from './pages';

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
        <AppLayout>
          <Routes>
            <Route path="/:lang" element={<HomePage />} />
            <Route path="/:lang/about" element={<AboutPage />} />
          </Routes>
        </AppLayout>
      )}
    </WetProvider>
  );
};

export default App;
