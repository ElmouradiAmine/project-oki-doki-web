import Header from 'components/Header/Header';
import Layout from 'components/Layout/Layout';
import Main from 'components/Main/Main';
import Feed from 'features/feed/components/Feed/Feed';
import React from 'react';

const Home = () => {
  return (
    <Layout>
      <Header />
      <Main>
        <Feed />
      </Main>
    </Layout>
  );
};

export default Home;
