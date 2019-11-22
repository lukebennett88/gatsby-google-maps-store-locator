/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="antialiased flex flex-col min-h-screen text-gray-600">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main id="main" className="flex-1 mx-auto max-w-4xl px-4 pb-6 w-full">
        {children}
      </main>
      <footer className="mx-auto max-w-4xl p-4 w-full">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a
          href="https://www.gatsbyjs.org"
          className="font-semibold hover:text-teal-600"
        >
          Gatsby
        </a>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
