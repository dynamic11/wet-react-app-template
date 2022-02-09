import React from 'react';
import { Routes, RouteProps } from 'react-router-dom';
import { useIntl } from 'react-intl';

/**
 *
 * `Routes` component from `react-router-dom` wrapped to accept
 * `Route` components with paths that are from enum `AppRoute`
 */
const LocalizedRoutes: React.FC = ({ children }) => {
  /**
   * inject params and formatMessage through hooks, so we can localize the route
   */
  const { formatMessage, locale } = useIntl();

  /**
   *
   * @param path can be string, undefined or string array
   * @returns Localized string path or path array
   */
  function localizeRoutePath(path?: string) {
    switch (typeof path) {
      case 'undefined':
        return undefined;
      default:
        return path === '*' ? path : `/${locale}${formatMessage({ id: path })}`;
    }
  }

  /**
   * Apply localization to all routes
   * Also checks if all children elements are <Route /> components
   */
  return (
    <Routes>
      {React.Children.map(children, (child) =>
        React.isValidElement<RouteProps>(child)
          ? React.cloneElement(child, {
              ...child.props,
              path: localizeRoutePath(child.props.path),
            })
          : child
      )}
    </Routes>
  );
};

export default LocalizedRoutes;
