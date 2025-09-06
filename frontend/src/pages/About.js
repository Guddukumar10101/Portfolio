import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiZap, FiUsers, FiAward, FiCoffee } from 'react-icons/fi';
import {
  AboutContainer,
  AboutHero,
  AboutContent,
  AboutText,
  AboutImage,
  SkillsSection,
  SkillsGrid,
  SkillCard,
  ExperienceSection,
  ExperienceTimeline,
  ExperienceItem,
  StatsSection,
  StatsGrid,
  StatCard,
  CTA
} from '../styles/AboutStyles';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: FiLayers,
      technologies: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Styled Components']
    },
    {
      category: 'Backend',
      icon: FiCode,
      technologies: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB']
    },
    {
      category: 'DevOps',
      icon: FiZap,
      technologies: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Nginx', 'Linux']
    },
    {
      category: 'Tools',
      icon: FiUsers,
      technologies: ['Git', 'VS Code', 'Figma', 'Postman', 'Jest', 'Webpack']
    }
  ];

  const experience = [
    {
      year: '2023 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      description: 'Leading development of scalable web applications using modern technologies. Mentoring junior developers and implementing best practices.'
    },
    {
      year: '2021 - 2023',
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      description: 'Developed and maintained multiple web applications. Collaborated with cross-functional teams to deliver high-quality software solutions.'
    },
    {
      year: '2020 - 2021',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Created responsive and interactive user interfaces. Worked with designers to implement pixel-perfect designs.'
    }
  ];

  const stats = [
    { icon: FiCode, number: '50+', label: 'Projects Completed' },
    { icon: FiUsers, number: '20+', label: 'Happy Clients' },
    { icon: FiAward, number: '3+', label: 'Years Experience' },
    { icon: FiCoffee, number: '1000+', label: 'Cups of Coffee' }
  ];

  return (
    <>
      <Helmet>
        <title>About Me - Portfolio</title>
        <meta name="description" content="Learn more about my background, skills, and experience as a full-stack developer" />
      </Helmet>

      <AboutContainer>
        <AboutHero>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>About Me</h1>
              <p>
                I'm a passionate full-stack developer with a love for creating 
                exceptional digital experiences. With over 3 years of experience 
                in web development, I specialize in building modern, scalable 
                applications that solve real-world problems.
              </p>
            </motion.div>
          </div>
        </AboutHero>

        <AboutContent>
          <div className="container">
            <div className="about-grid">
              <AboutText>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2>My Story</h2>
                  <p>
                    My journey into web development began during my computer science studies, 
                    where I discovered my passion for creating digital solutions. What started 
                    as curiosity about how websites work has evolved into a career dedicated 
                    to building innovative applications.
                  </p>
                  <p>
                    I believe in the power of technology to make a positive impact. Every 
                    project I work on is an opportunity to learn something new and push the 
                    boundaries of what's possible. I'm constantly exploring new technologies 
                    and methodologies to stay at the forefront of web development.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, 
                    contributing to open-source projects, or sharing knowledge with the 
                    developer community. I'm always excited to take on new challenges 
                    and collaborate with like-minded individuals.
                  </p>
                </motion.div>
              </AboutText>

              <AboutImage>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="image-container"
                >
                  <div className="image-placeholder">
                    <FiCode size={80} />
                  </div>
                  <div className="floating-elements">
                    <div className="element">React</div>
                    <div className="element">Node.js</div>
                    <div className="element">TypeScript</div>
                    <div className="element">MongoDB</div>
                  </div>
                </motion.div>
              </AboutImage>
            </div>
          </div>
        </AboutContent>

        <SkillsSection>
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Skills & Technologies
            </motion.h2>
            
            <SkillsGrid>
              {skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="skill-icon">
                    <skill.icon size={32} />
                  </div>
                  <h3>{skill.category}</h3>
                  <div className="technologies">
                    {skill.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </SkillCard>
              ))}
            </SkillsGrid>
          </div>
        </SkillsSection>

        <ExperienceSection>
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Experience
            </motion.h2>
            
            <ExperienceTimeline>
              {experience.map((exp, index) => (
                <ExperienceItem
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={index % 2 === 0 ? 'left' : 'right'}
                >
                  <div className="timeline-content">
                    <div className="year">{exp.year}</div>
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                    <p>{exp.description}</p>
                  </div>
                </ExperienceItem>
              ))}
            </ExperienceTimeline>
          </div>
        </ExperienceSection>

        <StatsSection>
          <div className="container">
            <StatsGrid>
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="stat-icon">
                    <stat.icon size={32} />
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </StatCard>
              ))}
            </StatsGrid>
          </div>
        </StatsSection>

        <CTA>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="cta-content"
            >
              <h2>Let's Work Together</h2>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my 
                best to get back to you!
              </p>
              <div className="cta-buttons">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn primary"
                >
                  Get In Touch
                </motion.a>
                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn outline"
                >
                  View My Work
                </motion.a>
              </div>
            </motion.div>
          </div>
        </CTA>
      </AboutContainer>
    </>
  );
};

export default About;