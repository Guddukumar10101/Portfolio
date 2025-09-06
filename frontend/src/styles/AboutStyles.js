import styled from 'styled-components';

export const AboutContainer = styled.div`
  padding-top: 80px;
`;

export const AboutHero = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  text-align: center;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: 2.25rem;
    }
  }

  p {
    font-size: 1.25rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const AboutContent = styled.section`
  padding: 5rem 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
`;

export const AboutText = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-size: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const AboutImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .image-container {
    position: relative;
    width: 300px;
    height: 300px;

    @media (max-width: 768px) {
      width: 250px;
      height: 250px;
    }
  }

  .image-placeholder {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-lg);
    position: relative;
    overflow: hidden;

    svg {
      color: var(--accent-primary);
      opacity: 0.3;
    }
  }

  .floating-elements {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;

    .element {
      position: absolute;
      background: var(--bg-primary);
      border: 1px solid var(--border-color);
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--text-primary);
      box-shadow: var(--shadow-md);
      animation: float 6s ease-in-out infinite;

      &:nth-child(1) {
        top: 10%;
        right: -20%;
        animation-delay: 0s;
      }

      &:nth-child(2) {
        top: 30%;
        left: -20%;
        animation-delay: 1.5s;
      }

      &:nth-child(3) {
        bottom: 30%;
        right: -20%;
        animation-delay: 3s;
      }

      &:nth-child(4) {
        bottom: 10%;
        left: -20%;
        animation-delay: 4.5s;
      }
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

export const SkillsSection = styled.section`
  padding: 5rem 0;
  background: var(--bg-secondary);

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    color: var(--text-primary);
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const SkillCard = styled.div`
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--accent-primary);
  }

  .skill-icon {
    width: 80px;
    height: 80px;
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: white;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
  }

  .technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;

    .tech-tag {
      background: var(--bg-secondary);
      color: var(--text-primary);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.75rem;
      font-weight: 500;
      border: 1px solid var(--border-color);
    }
  }
`;

export const ExperienceSection = styled.section`
  padding: 5rem 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    color: var(--text-primary);
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
`;

export const ExperienceTimeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--border-color);
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 2rem;
    }
  }
`;

export const ExperienceItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  width: 50%;

  &.left {
    left: 0;
    padding-right: 3rem;

    @media (max-width: 768px) {
      width: 100%;
      padding-left: 4rem;
      padding-right: 0;
    }

    .timeline-content {
      text-align: right;

      @media (max-width: 768px) {
        text-align: left;
      }
    }

    &::before {
      right: -6px;

      @media (max-width: 768px) {
        left: 1.25rem;
        right: auto;
      }
    }
  }

  &.right {
    left: 50%;
    padding-left: 3rem;

    @media (max-width: 768px) {
      width: 100%;
      left: 0;
      padding-left: 4rem;
      padding-right: 0;
    }

    &::before {
      left: -6px;

      @media (max-width: 768px) {
        left: 1.25rem;
      }
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 1rem;
    width: 12px;
    height: 12px;
    background: var(--accent-primary);
    border-radius: 50%;
    border: 3px solid var(--bg-primary);
    z-index: 1;
  }

  .timeline-content {
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: var(--shadow-sm);
    transition: all 0.3s ease;

    &:hover {
      box-shadow: var(--shadow-md);
      transform: translateY(-2px);
    }

    .year {
      color: var(--accent-primary);
      font-weight: 600;
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.25rem;
    }

    h4 {
      font-size: 1rem;
      font-weight: 500;
      color: var(--text-secondary);
      margin-bottom: 1rem;
    }

    p {
      color: var(--text-secondary);
      line-height: 1.6;
      font-size: 0.875rem;
    }
  }
`;

export const StatsSection = styled.section`
  padding: 5rem 0;
  background: var(--bg-secondary);

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

export const StatCard = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }

  .stat-icon {
    width: 60px;
    height: 60px;
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    color: white;
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: 800;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .stat-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-secondary);
  }
`;

export const CTA = styled.section`
  padding: 5rem 0;
  background: var(--gradient-primary);
  color: white;
  text-align: center;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .cta-content {
    max-width: 600px;
    margin: 0 auto;

    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;

      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }

    p {
      font-size: 1.125rem;
      margin-bottom: 2rem;
      opacity: 0.9;
      line-height: 1.6;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;

      .btn {
        display: inline-flex;
        align-items: center;
        padding: 1rem 2rem;
        border-radius: 0.75rem;
        font-weight: 600;
        font-size: 1rem;
        text-decoration: none;
        transition: all 0.3s ease;
        cursor: pointer;
        border: none;

        &.primary {
          background: white;
          color: var(--accent-primary);

          &:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
          }
        }

        &.outline {
          background: transparent;
          color: white;
          border: 2px solid white;

          &:hover {
            background: white;
            color: var(--accent-primary);
          }
        }
      }
    }
  }
`;