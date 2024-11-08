import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { NextPage } from 'next';

const withAuth = (Component: NextPage) => {
  return withPageAuthRequired(Component as any);
};

export default withAuth;
