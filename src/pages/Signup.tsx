import React from 'react';
import { useHistory } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import Signup from 'features/auth/components/Signup/Signup';

const SignupPage = () => {
  const history = useHistory();
  return (
    <Layout>
      <Signup onModeChange={() => history.push('/login')} />
    </Layout>
  );
};

export default SignupPage;
