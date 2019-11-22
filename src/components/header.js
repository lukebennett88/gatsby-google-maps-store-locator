import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Link, navigate } from 'gatsby';
import PropTypes from 'prop-types';

const Header = ({ siteTitle }) => {
  const [isOpen, toggleOpen] = useState(false);
  return (
    <header className="bg-teal-600 mb-6 text-white w-screen">
      <div className="flex items-center justify-between mx-auto max-w-4xl px-4 py-6">
        <h1 className="font-bold text-4xl">
          <Link to="/">{siteTitle}</Link>
        </h1>
        <button
          onClick={() => toggleOpen(!isOpen)}
          type="button"
          className="border border-white font-semibold inline-block leading-none px-3 py-2 relative text-sm tracking-wide uppercase z-50"
        >
          Menu
        </button>
        <ReactModal
          isOpen={isOpen}
          contentLabel="Site navigation"
          className="bg-teal-600 flex inset-0 items-center justify-center h-full text-white text-3xl"
        >
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => {
                    toggleOpen(false);
                    navigate('/');
                  }}
                  type="button"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    toggleOpen(false);
                    navigate('/page-2');
                  }}
                  type="button"
                >
                  Page 2
                </button>
              </li>
            </ul>
          </nav>
        </ReactModal>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
