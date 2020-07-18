import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h1>Hello</h1>
        <h2>I am Full Stack Developer / Data Engineer</h2>
        <p>
          Need a developer ? <Link to="/contact">contact me</Link>
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
