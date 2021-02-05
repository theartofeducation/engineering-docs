import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import AOEULogo from "../images/aoeu-logo-horizontal.svg"
import { ExternalLink } from "../components/external-link"
import useBaseUrl from "@docusaurus/useBaseUrl"
import styles from "./styles.module.scss"

const features = [
  {
    title: "UI Common Library",
    description: (
      <>
        Looking for our UI Common Library Documentation? <ExternalLink url="https://theartofeducation.github.io/ui-common">
        All of our shared UI assets and their accompanying documentation
        can be found there</ExternalLink>.
      </>
    )
  },
  {
    title: "Engineering Home",
    description: (
      <>
        <ExternalLink url="https://theartofeducation.github.io">You can find all
        things Software Engineering related here</ExternalLink>.
      </>
    )
  },
  {
    title: "GitHub Home",
    description: (
      <>
        <ExternalLink url="https://github.com/theartofeducation">The Art of Education
        University on GitHub</ExternalLink>.
      </>
    )
  }
]

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl)

  return (
    <div className={clsx("col col--4", styles.feature)}>
      <h3 className={styles.featureHeading}>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const {siteConfig = {}} = context

  return (
    <Layout
      title={siteConfig.title}
      description={`${siteConfig.title} - ${siteConfig.tagline}`}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <AOEULogo className={styles.aoeuLogo} />
          <p className={styles.subTitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted,
              )}
              to={useBaseUrl("pages/")}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
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
    </Layout>
  )
}

export default Home
