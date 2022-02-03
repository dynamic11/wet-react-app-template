import { AppTemplate } from '@arcnovus/wet-boew-react';

export interface AppLayoutProps {
  /** Contents of label */
  children?: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => (
  <AppTemplate
    appName={[
      {
        href: '/',
        text: 'sample app',
      },
    ]}
    menuLinks={[
      {
        href: '/en/',
        text: 'Home',
      },
      {
        href: '/en/about',
        text: 'About',
      },
    ]}
  >
    {children}
  </AppTemplate>
);

export default AppLayout;
