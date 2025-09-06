import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DashboardContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;

export const DashboardHeader = styled.section`
  padding: 3rem 0;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.125rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const DashboardCard = styled(Link)`
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: ${props => {
      switch (props.$color) {
        case 'blue': return 'var(--accent-primary)';
        case 'green': return 'var(--success)';
        case 'purple': return 'var(--accent-secondary)';
        case 'orange': return 'var(--warning)';
        default: return 'var(--accent-primary)';
      }
    }};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => {
      switch (props.$color) {
        case 'blue': return 'var(--accent-primary)';
        case 'green': return 'var(--success)';
        case 'purple': return 'var(--accent-secondary)';
        case 'orange': return 'var(--warning)';
        default: return 'var(--accent-primary)';
      }
    }};
  }
`;

export const CardHeader = styled.div`
  margin-bottom: 1.5rem;

  .card-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    &.blue {
      background: var(--accent-primary);
    }

    &.green {
      background: var(--success);
    }

    &.purple {
      background: var(--accent-secondary);
    }

    &.orange {
      background: var(--warning);
    }
  }
`;

export const CardContent = styled.div`
  margin-bottom: 1.5rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

export const CardDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.875rem;
`;

export const CardAction = styled.div`
  color: var(--accent-primary);
  font-weight: 500;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::after {
    content: '→';
    transition: transform 0.3s ease;
  }

  ${DashboardCard}:hover &::after {
    transform: translateX(4px);
  }
`;

export const QuickActions = styled.section`
  margin: 4rem 0;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-primary);
    text-align: center;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  .actions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const ActionButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;

  &:hover {
    background: var(--bg-tertiary);
    border-color: var(--accent-primary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  .action-icon {
    width: 50px;
    height: 50px;
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;
  }

  .action-content {
    flex: 1;

    h3 {
      font-size: 1rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.25rem;
    }

    p {
      color: var(--text-secondary);
      font-size: 0.875rem;
      line-height: 1.4;
      margin: 0;
    }
  }
`;