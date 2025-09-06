import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMenu, 
  FiX, 
  FiSun, 
  FiMoon, 
  FiUser, 
  FiLogOut,
  FiSettings,
  FiHome
} from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import {
  NavbarContainer,
  NavbarBrand,
  NavbarLinks,
  NavbarActions,
  MobileMenuButton,
  MobileMenu,
  MobileMenuOverlay,
  NavLink,
  ThemeToggle,
  UserMenu,
  UserMenuButton,
  UserDropdown,
  DropdownItem
} from './NavbarStyles';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isUserMenuOpen && !event.target.closest('.user-menu')) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isUserMenuOpen]);

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <NavbarContainer $isScrolled={isScrolled}>
      <div className="container">
        <NavbarBrand>
          <Link to="/">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Portfolio
            </motion.span>
          </Link>
        </NavbarBrand>

        <NavbarLinks>
          {navLinks.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              $isActive={location.pathname === link.to}
            >
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {link.label}
              </motion.span>
            </NavLink>
          ))}
        </NavbarLinks>

        <NavbarActions>
          <ThemeToggle onClick={toggleTheme} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </ThemeToggle>

          {isAuthenticated ? (
            <UserMenu className="user-menu">
              <UserMenuButton onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
                <FiUser size={20} />
                <span>{user?.name}</span>
              </UserMenuButton>

              <AnimatePresence>
                {isUserMenuOpen && (
                  <UserDropdown
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <DropdownItem as={Link} to="/dashboard">
                      <FiHome size={16} />
                      Dashboard
                    </DropdownItem>
                    <DropdownItem as={Link} to="/profile">
                      <FiSettings size={16} />
                      Profile
                    </DropdownItem>
                    {user?.role === 'admin' && (
                      <>
                        <DropdownItem as={Link} to="/admin/projects">
                          <FiSettings size={16} />
                          Admin Projects
                        </DropdownItem>
                        <DropdownItem as={Link} to="/admin/messages">
                          <FiSettings size={16} />
                          Admin Messages
                        </DropdownItem>
                      </>
                    )}
                    <DropdownItem onClick={handleLogout}>
                      <FiLogOut size={16} />
                      Logout
                    </DropdownItem>
                  </UserDropdown>
                )}
              </AnimatePresence>
            </UserMenu>
          ) : (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Link to="/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'transparent',
                    border: '1px solid var(--border-color)',
                    borderRadius: '0.5rem',
                    color: 'var(--text-primary)',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Login
                </motion.button>
              </Link>
              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'var(--gradient-primary)',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Register
                </motion.button>
              </Link>
            </div>
          )}

          <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </MobileMenuButton>
        </NavbarActions>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <MobileMenuOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="mobile-menu-header">
                <h3>Menu</h3>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <FiX size={24} />
                </button>
              </div>

              <div className="mobile-menu-links">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={location.pathname === link.to ? 'active' : ''}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {!isAuthenticated && (
                <div className="mobile-menu-auth">
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    Login
                  </Link>
                  <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                    Register
                  </Link>
                </div>
              )}
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar;