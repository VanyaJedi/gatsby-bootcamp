import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <ul>
        <li>Twitter - balbla@bla.com</li>
        <li>telega - balbla@bla.com</li>
      </ul>
      <a href="https://google.com" target="_blank"> google </a>
    </Layout>
  );
}

export default ContactPage;