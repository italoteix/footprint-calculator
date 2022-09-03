import { ErrorDisplay } from '../../components/ErrorDisplay';

export const Error404 = () => (
  <ErrorDisplay
    title='Page not found!'
    message="The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved."
  />
);