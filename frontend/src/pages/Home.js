import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCode, FiLayers, FiZap } from 'react-icons/fi';
import { useQuery } from 'react-query';
import { portfolioAPI } from '../services/api';
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroButtons,
  HeroImage,
  ContentSection,
  SectionTitle,
  SectionSubtitle,
  FeatureGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  StatsGrid,
  StatCard,
  StatNumber,
  StatLabel,
  CTA,
  CTAContent,
  CTATitle,
  CTADescription,
  CTAButtons
} from '../styles/HomeStyles';

const Home = () => {
  // Fetch featured projects
  const { data: featuredProjects, isLoading } = useQuery(
    'featured-projects',
    () => portfolioAPI.getFeaturedProjects(),
    {
      select: (response) => response.data.data || []
    }
  );

  const features = [
    {
      icon: FiCode,
      title: 'Full-Stack Development',
      description: 'Expert in modern web technologies including React, Node.js, and cloud platforms.'
    },
    {
      icon: FiLayers,
      title: 'Responsive Design',
      description: 'Creating beautiful, mobile-first designs that work perfectly on all devices.'
    },
    {
      icon: FiZap,
      title: 'Performance Optimized',
      description: 'Building fast, scalable applications with modern development practices.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Portfolio - Full Stack Developer</title>
        <meta name="description" content="Professional portfolio showcasing full-stack development projects, skills, and experience. Modern web applications built with React, Node.js, and cutting-edge technologies." />
      </Helmet>

      <HeroSection>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle>
              Hi, I'm <span className="gradient-text">Your Name</span>
            </HeroTitle>
            <HeroSubtitle>Full Stack Developer</HeroSubtitle>
            <HeroDescription>
              I create exceptional digital experiences through innovative web applications. 
              Passionate about clean code, modern design, and cutting-edge technologies.
            </HeroDescription>
            <HeroButtons>
              <Link to="/projects">
                <motion.button
                  className="primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                  <FiArrowRight />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.button>
              </Link>
            </HeroButtons>
          </motion.div>
        </HeroContent>
        
        <HeroImage>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image-container"
          >
            <div className="hero-image">
              {/* Placeholder for hero image */}
              <div className="image-placeholder">
                <FiCode size={80} />
              </div>
            </div>
            <div className="floating-elements">
              <div className="floating-element element-1">React</div>
              <div className="floating-element element-2">Node.js</div>
              <div className="floating-element element-3">TypeScript</div>
              <div className="floating-element element-4">MongoDB</div>
            </div>
          </motion.div>
        </HeroImage>
      </HeroSection>

      <ContentSection>
        <div className="container">
          <SectionTitle data-aos="fade-up">What I Do</SectionTitle>
          <SectionSubtitle data-aos="fade-up" data-aos-delay="100">
            I specialize in creating modern, scalable web applications that deliver exceptional user experiences.
          </SectionSubtitle>
          
          <FeatureGrid>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <FeatureIcon>
                  <feature.icon size={32} />
                </FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeatureGrid>
        </div>
      </ContentSection>

      <ContentSection className="stats-section">
        <div className="container">
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </div>
      </ContentSection>

      {!isLoading && featuredProjects && featuredProjects.length > 0 && (
        <ContentSection>
          <div className="container">
            <SectionTitle data-aos="fade-up">Featured Projects</SectionTitle>
            <SectionSubtitle data-aos="fade-up" data-aos-delay="100">
              Here are some of my recent projects that showcase my skills and expertise.
            </SectionSubtitle>
            
            <FeatureGrid>
              {featuredProjects.slice(0, 3).map((project, index) => (
                <FeatureCard
                  key={project._id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  as={Link}
                  to={`/projects/${project._id}`}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <FeatureTitle>{project.title}</FeatureTitle>
                  <FeatureDescription>{project.shortDescription}</FeatureDescription>
                  <div className="project-tech">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </FeatureCard>
              ))}
            </FeatureGrid>
            
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link to="/projects">
                <motion.button
                  className="primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Projects
                  <FiArrowRight />
                </motion.button>
              </Link>
            </div>
          </div>
        </ContentSection>
      )}

      <CTA>
        <div className="container">
          <CTAContent>
            <CTATitle data-aos="fade-up">
              Ready to Start Your Project?
            </CTATitle>
            <CTADescription data-aos="fade-up" data-aos-delay="100">
              Let's work together to bring your ideas to life. I'm always excited to take on new challenges and create something amazing.
            </CTADescription>
            <CTAButtons data-aos="fade-up" data-aos-delay="200">
              <Link to="/contact">
                <motion.button
                  className="primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                  <FiArrowRight />
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  className="outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </CTAButtons>
          </CTAContent>
        </div>
      </CTA>
    </>
  );
};

export default Home;