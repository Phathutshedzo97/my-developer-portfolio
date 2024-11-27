// pages/contact.js
import React from 'react';
import Layout from '../components/Layout';

const ContactPage = () => {
  // phone number
  const phoneNumber = '0787061464';

  // Random address in Cape Town, South Africa
  const address = `123 Main Street, Gauteng, South Africa`;

  // Contact email address
  const email = `pha2wahamudau@gmail.com`;

  return (
    <Layout>
      <div>
        <h1>Contact me</h1>
        <p>If you'd like to get in touch, you can reach me through the following channels:</p>
        <ul>
          <li>
            <strong>Phone:</strong> {phoneNumber}
          </li>
          <li>
            <strong>Address:</strong> {address}
          </li>
          <li>
            <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default ContactPage;
