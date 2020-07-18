import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link to="/" activeClassName={headerStyles.activeNavItem}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName={headerStyles.activeNavItem}>
              Contact me
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName={headerStyles.activeNavItem}>
              About me
            </Link>
          </li>
          <li>
            <Link to="/blog" activeClassName={headerStyles.activeNavItem}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
