import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql, StaticQuery} from 'gatsby'
import '../styles/style.scss';
import Header from './header'
import Footer from './footer';

const Layout = ({children}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {name: 'description', content: 'Indore Startups'},
            {name: 'keywords', content: 'Indore Startups'},
          ]}
        >
          <html lang="en"/>
        </Helmet>

        <section className="section-main">
          <Header/>
          <div>
            {children}
          </div>

          <Footer/>
        </section>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
