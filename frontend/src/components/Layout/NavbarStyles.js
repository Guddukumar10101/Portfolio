import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.$isScrolled 
    ? 'rgba(255, 255, 255, 0.95)' 
    : 'rgba(255, 255, 255, 0.8)'};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
  transition: all 0.3s ease;

  [data-theme="dark"] & {
    background: ${props => props.$isScrolled 
      ? 'rgba(15, 23, 42, 0.95)' 
      : 'rgba(15, 23, 42, 0.8)'};
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;

    @media (max-width: 768px) {
      padding: 0 0.75rem;
    }
  }
`;

export const NavbarBrand = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  font-weight: 500;
  color: ${props => props.$isActive ? 'var(--accent-primary)' : 'var(--text-primary)'};
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 0.5rem 0;

  &:hover {
    color: var(--accent-primary);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 2px;
    background: var(--gradient-primary);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const NavbarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--bg-tertiary);
    transform: scale(1.05);
  }
`;

export const UserMenu = styled.div`
  position: relative;
`;

export const UserMenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  color: var(--text-primary);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--bg-tertiary);
    border-color: var(--accent-primary);
  }

  span {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const UserDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 0.75rem;
  box-shadow: var(--shadow-xl);
  min-width: 200px;
  overflow: hidden;
  z-index: 1001;
`;

export const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: var(--bg-secondary);
  }

  &:first-child {
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
  }

  &:last-child {
    border-bottom-left-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 0.5rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--bg-tertiary);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  backdrop-filter: blur(4px);

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: var(--bg-primary);
  border-left: 1px solid var(--border-color);
  z-index: 1000;
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    display: none;
  }

  .mobile-menu-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    border-bottom: 1px solid var(--border-color);

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text-primary);
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 0.375rem;
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      color: var(--text-primary);
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: var(--bg-tertiary);
      }
    }
  }

  .mobile-menu-links {
    flex: 1;
    padding: 1rem 0;

    a {
      display: block;
      padding: 1rem 1.5rem;
      color: var(--text-primary);
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      border-left: 3px solid transparent;

      &:hover {
        background: var(--bg-secondary);
        border-left-color: var(--accent-primary);
      }

      &.active {
        background: var(--bg-secondary);
        border-left-color: var(--accent-primary);
        color: var(--accent-primary);
      }
    }
  }

  .mobile-menu-auth {
    padding: 1.5rem;
    border-top: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    a {
      display: block;
      padding: 0.75rem 1rem;
      text-align: center;
      border-radius: 0.5rem;
      font-weight: 500;
      text-decoration: none;
      transition: all 0.3s ease;

      &:first-child {
        background: transparent;
        color: var(--text-primary);
        border: 1px solid var(--border-color);

        &:hover {
          background: var(--bg-secondary);
        }
      }

      &:last-child {
        background: var(--gradient-primary);
        color: white;

        &:hover {
          transform: translateY(-1px);
          box-shadow: var(--shadow-md);
        }
      }
    }
  }
`;