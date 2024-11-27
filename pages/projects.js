// pages/projects.js
import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const ProjectsPage = () => {
  return (
    <Layout>
      <div>
        <h1>Projects</h1>
        <p>Here are some of my coding projects:</p>
        <ul>
          <li>
            <strong>Hangman App:</strong> A fun hangman game built using React.{' '}
            <Link legacyBehavior href="https://github.com/Phathutshedzo97/hangman-game">
              <a target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </Link>
          </li>
          <li>
            <strong>iTunes App:</strong> An application to search for music on iTunes.{' '}
            <Link legacyBehavior href="https://github.com/Phathutshedzo97/itunes-search">
              <a target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </Link>
          </li>
        </ul>
        <img
          src="/static/images/github.png"
          alt="Github Link"
          style={{ maxWidth: '100%', marginTop: '20px' }}
        />
      </div>
    </Layout>
  );
};

export default ProjectsPage;
