import { SplashTemplate } from '@arcnovus/wet-boew-react';
import AppRoute from '../../AppRoute';
import { getLocalizedPath } from '../../i18n/utils/LocalizedNavigate';

const LangLandingLayout = () => (
  <SplashTemplate
    nameEng="Some awesome app."
    nameFra="Une application merveilleuse."
    indexEng={getLocalizedPath(AppRoute.Home, 'en')}
    indexFra={getLocalizedPath(AppRoute.Home, 'fr')}
  />
);

export default LangLandingLayout;
