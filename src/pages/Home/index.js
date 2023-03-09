import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navegation';

// import { Container } from './styles';

function Home() {
  return (
    <div>
      <Layout.Header>
        <Header/>
      </Layout.Header>
      <Layout.SideNav>
        <Navigation />
      </Layout.SideNav>
      <h1>Home</h1>
      <Footer/>
    </div>
  );
}

export default Home;