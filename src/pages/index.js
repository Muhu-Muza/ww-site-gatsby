import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { GatsbyImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design, Develop & Deploy</h2>
          <h3>Full Stack developer</h3>
          <p>Ready to bring my skills to your service.</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
      </section>
    </Layout>
  )
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
        gatsbyImageData(
          width: 768
          formats: [AUTO, WEBP, AVIF]    
          )
    }
  }
}`