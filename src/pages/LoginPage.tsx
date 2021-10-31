import React from 'react';

import Layout from 'components/Layout/Layout';
import Login from 'features/auth/components/Login/Login';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const history = useHistory();

  return (
    <Layout>
      <Login onModeChange={() => history.push('/signup')} />
    </Layout>
  );
};

export default LoginPage;
