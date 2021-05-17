import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => {
  console.log(data)
  return(
  <Layout>
    <Seo title="Home" />
    <h1>{data.site.siteMetadata.title}</h1>
    <p>To jest prosta strona stworzona w Gatsby.</p>
    <p><img 
    src={data.file.childImageSharp.fluid.src}
    srcSet={data.file.childImageSharp.fluid.srcSet}
    sizes={data.file.childImageSharp.fluid.sizes}
    alt="Ekran z kodem"
    /></p>
  </Layout>
)}

export default IndexPage

export const query = graphql`
  query{
    site{
      siteMetadata{
        title
      }
    }
    file(name: {eq: "shahadat-rahman-BfrQnKBulYQ-unsplash"}) {
      childImageSharp{
        fluid(maxWidth: 600, maxHeight: 400, quality: 100) {
          src
          srcSet
          sizes
        }
      }
    }
  }`
