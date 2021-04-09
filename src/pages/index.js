import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to follow',
    imageUrl: 'img/core/undraw_steps.svg',
    description: (
      <>
        Objective of this workshop is to enable you to create a fully operational
        solution for your usecase by following simple steps
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/core/undraw_focus.svg',
    description: (
      <>
        Amorphic lets you focus on your usecase, and we&apos;ll do the chores. Go
        ahead and click the <code>Get Started</code> link above.
      </>
    ),
  },
  {
    title: 'Powered by Amorphic',
    imageUrl: 'img/core/undraw_powered_by_amorphic.svg',
    description: (
      <>
        Extend or customize your usecase with the help of Amorphic.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Amorphic workshop for retail usecase">
      <header className={clsx('hero hero--white', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main className={clsx('main-blue')}>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <header className={clsx('hero hero--white')}>
        <div className="container">
          <img src="/img/core/factory.svg" className="amorphic-glass" alt="Amorphic Glass" />
          <h1 className="hero__title mb-0">Amorphic</h1>
          <p className="hero__subtitle">A single pane of glass for all your data analytics needs.</p>
        </div>
      </header>
    </Layout>
  );
}
