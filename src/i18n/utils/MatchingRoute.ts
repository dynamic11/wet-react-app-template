import { useIntl } from 'react-intl';
import { useLocation } from 'react-router-dom';
import { i18nMessages } from '..';
import { LanguageStrings } from '../lang/en';

/**
 *
 * To find the translated route of the current page.
 * Is useful when switching language on current page
 * @returns Translated matching route for current page
 */
const getMatchingRoute = (): hrefType => {
  const { pathname } = useLocation();
  const { messages, locale } = useIntl();

  let language: LanguageType;

  if (locale === 'en') {
    language = 'fr';
  } else language = 'en';

  const route = pathname.substring(3);
  const routeKey = Object.keys(messages).find(
    (key) => messages[key] === route
  ) as keyof LanguageStrings;

  let matchingRoute = '/';
  if (routeKey) matchingRoute = i18nMessages[language][routeKey];

  return `/${language}${matchingRoute}`;
};

export default getMatchingRoute;
