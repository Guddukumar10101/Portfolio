import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  position: relative;
  margin-top: auto;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 1rem 2rem;
  }
`;

export const FooterSection = styled.div`
  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.75rem;
    }
  }

  div {
    p {
      margin-bottom: 0.75rem;
      color: var(--text-secondary);
      font-size: 0.875rem;

      strong {
        color: var(--text-primary);
        font-weight: 600;
      }
    }
  }
`;

export const FooterTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

export const FooterLink = styled(Link)`
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-primary);
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 50%;
    color: var(--text-secondary);
    transition: all 0.3s ease;

    &:hover {
      background: var(--accent-primary);
      color: white;
      border-color: var(--accent-primary);
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid var(--border-color);
  padding: 1.5rem 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 0.5rem;
      text-align: center;
    }

    p {
      color: var(--text-secondary);
      font-size: 0.875rem;
      margin: 0;
    }
  }
`;

export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: var(--gradient-primary);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  box-shadow: var(--shadow-lg);
  z-index: 100;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: var(--shadow-xl);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    width: 45px;
    height: 45px;
  }
`;