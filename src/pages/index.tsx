import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

const Home: React.FC = () => {
  const heroBg = useBaseUrl('/img/home-hero.webp');
  const userApiGettingStartedHref = '/api-docs/docs/intro';

  return (
    <Layout
      title="Roo API Docs"
      description="ROO.AI public API for building inspections, assets and workflows integrations."
    >
      <header
        className={styles.hero}
        style={{backgroundImage: `url(${heroBg})`}}
      >
        <div className={styles.overlay} />

        <div className={clsx('container', styles.heroInner)}>
          <Heading as="h1" className={styles.title}>
            Roo API Documentation
          </Heading>
          <p className={styles.subtitle}>
            Connect your systems to ROO.AI to manage assets, inspections and workflows programmatically.
          </p>

          <div className={styles.ctaRow}>
            <Link className={styles.primaryButton} to={userApiGettingStartedHref}>
              Get started with the User API
            </Link>
            <Link className={styles.secondaryButton} to="/api-docs/docs/reference/user-api">
              Browse all API reference
            </Link>
          </div>

          <p style={{marginTop: '1.5rem', color: 'rgba(255, 255, 255, 0.8)'}}>
            Current public API version: <strong>v1</strong>
          </p>
        </div>
      </header>
    </Layout>
  );
};

export default Home;
