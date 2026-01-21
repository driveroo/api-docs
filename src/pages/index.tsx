import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

const Home: React.FC = () => {
  // Path to intro
  const userApiGettingStartedHref = '/api-docs/docs/intro';

  return (
    <Layout
      title="Roo API Docs"
      description="ROO.AI public API for building inspections, assets and workflows integrations."
    >
      <main>
        {/* Hero section */}
        <section className="hero hero--primary" style={{padding: '4rem 0'}}>
          <div className="container">
            <Heading as="h1" className="hero__title">
              Roo API Documentation
            </Heading>
            <p className="hero__subtitle">
              Connect your systems to ROO.AI to manage assets, inspections and workflows
              programmatically.
            </p>

            <div style={{marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
              <Link
                className="button button--secondary button--lg"
                to={userApiGettingStartedHref}
              >
                Get started with the User API
              </Link>

              <Link className="button button--outline button--lg" to="/api-docs/docs/reference/user-api">
                Browse all API reference
              </Link>
            </div>

            <p style={{marginTop: '1.5rem', opacity: 0.8}}>
              Current public API version: <strong>v1</strong>
            </p>
          </div>
        </section>

        {/* Value props / high-level overview */}
        <section className="margin-vert--lg">
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <Heading as="h2" className="text--center">
                  What you can do
                </Heading>
                <p>
                  Use the Roo API to authenticate users, manage assets (vehicles and other
                  equipment), configure teams and locations, trigger inspections and consume
                  workflow results in your internal tools.
                </p>
              </div>

              <div className="col col--4">
                <Heading as="h2" className="text--center">
                  Core domain objects
                </Heading>
                <ul>
                  <li>Users and authentication</li>
                  <li>Assets (vehicles, equipment)</li>
                  <li>Teams / Locations</li>
                  <li>Inspections &amp; workflows</li>
                  <li>Triggers and notifications</li>
                  {/* TODO: Add more entities */}
                </ul>
              </div>

              <div className="col col--4">
                <Heading as="h2" className="text--center">
                  How to integrate
                </Heading>
                <ol>
                  <li>Request API access and credentials from ROO.AI</li>
                  <li>Review authentication and environment setup.</li>
                  <li>Start with a simple use case (for example, creating a user and assigning an asset).</li>
                  <li>Use the API reference and guides to expand your integration.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Optional: links to other resources */}
        <section className="margin-bottom--xl">
          <div className="container">
            <Heading as="h2">Related resources</Heading>
            <ul>
              <li>
                <a href="https://roo.ai/" target="_blank" rel="noopener noreferrer">
                  ROO.AI main website
                </a>
              </li>
              <li>
                <a href="https://support.roo.ai/" target="_blank" rel="noopener noreferrer">
                  Help Center
                </a>
              </li>
              {/* TODO: Add link to Postman collection or SDK, when ready */}
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
