import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductThumbnail from "../components/productThumbnail"
import {graphql, useStaticQuery} from "gatsby"

const IndexPage = ({Data}) => (
  <Layout>
    <SEO title="Home" />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    //<ProductThumbnail />
  </Layout>
)

export default IndexPage
