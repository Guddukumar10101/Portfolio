import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import { NotFoundContainer, NotFoundContent, NotFoundTitle, NotFoundDescription, NotFoundActions } from '../styles/NotFoundStyles';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you're looking for doesn't exist" />
      </Helmet>

      <NotFoundContainer>
        <NotFoundContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <NotFoundTitle>404</NotFoundTitle>
            <NotFoundDescription>
              <h1>Page Not Found</h1>
              <p>
                The page you're looking for doesn't exist or has been moved. 
                Let's get you back on track!
              </p>
            </NotFoundDescription>
            <NotFoundActions>
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="primary"
                >
                  <FiHome size={20} />
                  Go Home
                </motion.button>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="secondary"
              >
                <FiArrowLeft size={20} />
                Go Back
              </button>
            </NotFoundActions>
          </motion.div>
        </NotFoundContent>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;