import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const AdminContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;

export const AdminHeader = styled.section`
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

export const AdminContent = styled.section`
  padding: 3rem 0;
`;

export const AdminActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--gradient-primary);
  border: none;
  border-radius: 0.5rem;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
`;

export const AdminTable = styled.div`
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.875rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1.5rem;
  border-bottom: 1px solid var(--border-color);
  transition: background-color 0.3s ease;

  &:hover {
    background: var(--bg-secondary);
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const TableCell = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: var(--text-primary);

  .project-info {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 50px;
      height: 50px;
      border-radius: 0.5rem;
      object-fit: cover;
    }

    h3 {
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }

    p {
      color: var(--text-secondary);
      font-size: 0.75rem;
      line-height: 1.4;
    }
  }

  .sender-info {
    h3 {
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }

    p {
      color: var(--text-secondary);
      font-size: 0.75rem;
    }
  }

  .subject {
    h3 {
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }

    p {
      color: var(--text-secondary);
      font-size: 0.75rem;
      line-height: 1.4;
    }
  }

  .category-tag {
    background: var(--bg-secondary);
    color: var(--text-primary);
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 500;
    border: 1px solid var(--border-color);
  }

  .status-tag {
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: capitalize;

    &.new {
      background: rgba(59, 130, 246, 0.1);
      color: var(--accent-primary);
    }

    &.read {
      background: rgba(16, 185, 129, 0.1);
      color: var(--success);
    }

    &.replied {
      background: rgba(139, 92, 246, 0.1);
      color: var(--accent-secondary);
    }

    &.archived {
      background: rgba(107, 114, 128, 0.1);
      color: var(--text-muted);
    }

    &.completed {
      background: rgba(16, 185, 129, 0.1);
      color: var(--success);
    }

    &.in-progress {
      background: rgba(245, 158, 11, 0.1);
      color: var(--warning);
    }

    &.planned {
      background: rgba(59, 130, 246, 0.1);
      color: var(--accent-primary);
    }
  }

  .action-buttons {
    display: flex;
    gap: 0.5rem;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: 1px solid var(--border-color);
      border-radius: 0.375rem;
      background: var(--bg-secondary);
      color: var(--text-primary);
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: var(--bg-tertiary);
        border-color: var(--accent-primary);
      }

      &.view:hover {
        color: var(--accent-primary);
      }

      &.edit:hover {
        color: var(--warning);
      }

      &.delete:hover {
        color: var(--error);
      }

      &.reply:hover {
        color: var(--success);
      }
    }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: 1rem;

  .spinner {
    width: 40px;
    height: 40px;
    border: 3px solid var(--border-color);
    border-radius: 50%;
    border-top-color: var(--accent-primary);
    animation: ${spin} 1s ease-in-out infinite;
  }

  p {
    color: var(--text-secondary);
    font-size: 1rem;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-secondary);

  svg {
    width: 64px;
    height: 64px;
    margin-bottom: 1rem;
    opacity: 0.5;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;