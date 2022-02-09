import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import AppRoute from '../../AppRoute';

/**
 *
 * @param {AppRoute} route AppRoute enum of desired path
 * @param {LanguageType}[language] language of path returned
 * @returns Localized string path of given AppRoute
 */
export const getLocalizedPath = (
  route: AppRoute,
  language?: LanguageType
): hrefType => {
  const { formatMessage, locale } = useIntl();

  let urlLanguage: LanguageType;

  if (language) {
    urlLanguage = language;
  } else {
    urlLanguage = locale as LanguageType;
  }

  return `/${urlLanguage}${formatMessage({ id: route })}`;
};

/**
 *
 * @param route of enum AppRoute
 * Navigates to localized string from given AppRoute
 */
const LocalizedNavigate = (route: AppRoute) => {
  const navigate = useNavigate();
  navigate(getLocalizedPath(route));
};

export default LocalizedNavigate;
