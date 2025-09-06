import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiMail, 
  FiHeart,
  FiArrowUp
} from 'react-icons/fi';
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterLink,
  FooterSocial,
  FooterBottom,
  ScrollToTopButton
} from './FooterStyles';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  const legalLinks = [
    { to: '/privacy', label: 'Privacy Policy' },
    { to: '/terms', label: 'Terms of Service' },
    { to: '/cookies', label: 'Cookie Policy' },
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Portfolio</FooterTitle>
          <p>
            A modern, responsive portfolio showcasing my work as a full-stack developer. 
            Built with React, Node.js, and modern web technologies.
          </p>
          <FooterSocial>
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </FooterSocial>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <ul>
            {quickLinks.map((link, index) => (
              <motion.li
                key={link.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FooterLink to={link.to}>{link.label}</FooterLink>
              </motion.li>
            ))}
          </ul>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Legal</FooterTitle>
          <ul>
            {legalLinks.map((link, index) => (
              <motion.li
                key={link.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FooterLink to={link.to}>{link.label}</FooterLink>
              </motion.li>
            ))}
          </ul>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact Info</FooterTitle>
          <div>
            <p>
              <strong>Email:</strong> contact@example.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p>
              <strong>Location:</strong> San Francisco, CA
            </p>
          </div>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <div className="container">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            © {currentYear} Portfolio. Made with <FiHeart color="#ef4444" /> by Your Name.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            All rights reserved.
          </motion.p>
        </div>
      </FooterBottom>

      <ScrollToTopButton
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <FiArrowUp size={20} />
      </ScrollToTopButton>
    </FooterContainer>
  );
};

export default Footer;