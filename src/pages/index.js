import React from "react"
import Index from "./Index"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Nima Habibkhoda - Senior React Developer"
      description="Nima Habibkhoda - Senior React Developer - Javascript Developer"
    />
    <Index />
  </Layout>
)

export default IndexPage
