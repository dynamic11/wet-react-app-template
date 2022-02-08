import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import AppRoute from '../../AppRoute';

/**
 *
 * @param route of enum AppRoute
 * @returns Localized string path of given AppRoute
 */
export const getLocalizedPath = (route: AppRoute): `/${string}` => {
  const { formatMessage, locale } = useIntl();
  return `/${locale}${formatMessage({ id: route })}`;
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
