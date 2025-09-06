import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { FiExternalLink, FiGithub, FiSearch, FiFilter } from 'react-icons/fi';
import { portfolioAPI } from '../services/api';
import {
  ProjectsContainer,
  ProjectsHeader,
  ProjectsFilters,
  FilterButton,
  SearchBox,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  ProjectTech,
  ProjectLinks,
  ProjectLink,
  LoadingContainer,
  EmptyState
} from '../styles/ProjectsStyles';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch projects
  const { data: projectsData, isLoading, error } = useQuery(
    ['projects', selectedCategory, searchQuery],
    () => {
      if (searchQuery) {
        return portfolioAPI.searchProjects(searchQuery, { category: selectedCategory !== 'all' ? selectedCategory : undefined });
      }
      return portfolioAPI.getProjects({ 
        category: selectedCategory !== 'all' ? selectedCategory : undefined 
      });
    },
    {
      select: (response) => response.data.data || []
    }
  );

  // Fetch categories
  const { data: categories } = useQuery(
    'categories',
    () => portfolioAPI.getCategories(),
    {
      select: (response) => response.data.data || []
    }
  );

  const allCategories = ['all', ...(categories || [])];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (isLoading) {
    return (
      <ProjectsContainer>
        <LoadingContainer>
          <div className="spinner" />
          <p>Loading projects...</p>
        </LoadingContainer>
      </ProjectsContainer>
    );
  }

  if (error) {
    return (
      <ProjectsContainer>
        <EmptyState>
          <p>Failed to load projects. Please try again later.</p>
        </EmptyState>
      </ProjectsContainer>
    );
  }

  return (
    <>
      <Helmet>
        <title>Projects - Portfolio</title>
        <meta name="description" content="Explore my portfolio of web development projects showcasing various technologies and skills" />
      </Helmet>

      <ProjectsContainer>
        <ProjectsHeader>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>My Projects</h1>
              <p>
                A collection of projects that showcase my skills in web development, 
                from simple websites to complex web applications.
              </p>
            </motion.div>
          </div>
        </ProjectsHeader>

        <div className="container">
          <ProjectsFilters>
            <SearchBox>
              <FiSearch size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </SearchBox>

            <div className="filter-buttons">
              {allCategories.map((category) => (
                <FilterButton
                  key={category}
                  $isActive={selectedCategory === category}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category === 'all' ? 'All Projects' : category.charAt(0).toUpperCase() + category.slice(1)}
                </FilterButton>
              ))}
            </div>
          </ProjectsFilters>

          {projectsData && projectsData.length > 0 ? (
            <ProjectsGrid>
              {projectsData.map((project, index) => (
                <ProjectCard
                  key={project._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <ProjectImage>
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <Link to={`/projects/${project._id}`}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Details
                        </motion.button>
                      </Link>
                    </div>
                  </ProjectImage>

                  <ProjectContent>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.shortDescription}</ProjectDescription>
                    
                    <ProjectTech>
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="tech-tag more">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </ProjectTech>

                    <ProjectLinks>
                      {project.githubUrl && (
                        <ProjectLink
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiGithub size={16} />
                          Code
                        </ProjectLink>
                      )}
                      {project.liveUrl && (
                        <ProjectLink
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiExternalLink size={16} />
                          Live Demo
                        </ProjectLink>
                      )}
                    </ProjectLinks>
                  </ProjectContent>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          ) : (
            <EmptyState>
              <FiFilter size={64} />
              <h3>No projects found</h3>
              <p>
                {searchQuery 
                  ? `No projects match your search for "${searchQuery}"`
                  : `No projects found in the ${selectedCategory} category`
                }
              </p>
            </EmptyState>
          )}
        </div>
      </ProjectsContainer>
    </>
  );
};

export default Projects;