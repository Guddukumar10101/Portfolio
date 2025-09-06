import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  display: inline-block;
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  border: 3px solid var(--border-color);
  border-radius: 50%;
  border-top-color: var(--accent-primary);
  animation: ${spin} 1s ease-in-out infinite;
`;

const LoadingSpinner = ({ size, className }) => {
  return (
    <SpinnerContainer size={size} className={className} />
  );
};

export default LoadingSpinner;