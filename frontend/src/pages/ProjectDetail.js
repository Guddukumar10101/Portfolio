import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useQuery } from 'react-query';
import { FiArrowLeft, FiExternalLink, FiGithub, FiCalendar, FiTag } from 'react-icons/fi';
import { portfolioAPI } from '../services/api';
import { ProjectDetailContainer, ProjectHeader, ProjectContent, ProjectImage, ProjectInfo, ProjectDescription, ProjectTech, ProjectLinks, LoadingContainer, ErrorMessage } from '../styles/ProjectDetailStyles';

const ProjectDetail = () => {
  const { id } = useParams();
  
  const { data: project, isLoading, error } = useQuery(
    ['project', id],
    () => portfolioAPI.getProject(id),
    {
      select: (response) => response.data.data,
      enabled: !!id
    }
  );

  if (isLoading) {
    return (
      <ProjectDetailContainer>
        <LoadingContainer>
          <div className="spinner" />
          <p>Loading project...</p>
        </LoadingContainer>
      </ProjectDetailContainer>
    );
  }

  if (error || !project) {
    return (
      <ProjectDetailContainer>
        <ErrorMessage>
          <h2>Project Not Found</h2>
          <p>The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/projects">Back to Projects</Link>
        </ErrorMessage>
      </ProjectDetailContainer>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} - Portfolio</title>
        <meta name="description" content={project.shortDescription} />
      </Helmet>

      <ProjectDetailContainer>
        <ProjectHeader>
          <div className="container">
            <Link to="/projects" className="back-link">
              <FiArrowLeft size={20} />
              Back to Projects
            </Link>
            
            <h1>{project.title}</h1>
            <p className="project-subtitle">{project.shortDescription}</p>
          </div>
        </ProjectHeader>

        <ProjectContent>
          <div className="container">
            <div className="project-grid">
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>

              <ProjectInfo>
                <ProjectDescription>
                  <h2>About This Project</h2>
                  <p>{project.description}</p>
                </ProjectDescription>

                <ProjectTech>
                  <h3>
                    <FiTag size={20} />
                    Technologies Used
                  </h3>
                  <div className="tech-list">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </ProjectTech>

                <ProjectLinks>
                  <h3>Project Links</h3>
                  <div className="links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link github"
                      >
                        <FiGithub size={20} />
                        View Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link live"
                      >
                        <FiExternalLink size={20} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </ProjectLinks>

                <div className="project-meta">
                  <div className="meta-item">
                    <FiCalendar size={16} />
                    <span>Started: {new Date(project.startDate).toLocaleDateString()}</span>
                  </div>
                  {project.endDate && (
                    <div className="meta-item">
                      <FiCalendar size={16} />
                      <span>Completed: {new Date(project.endDate).toLocaleDateString()}</span>
                    </div>
                  )}
                  <div className="meta-item">
                    <FiTag size={16} />
                    <span>Category: {project.category}</span>
                  </div>
                </div>
              </ProjectInfo>
            </div>
          </div>
        </ProjectContent>
      </ProjectDetailContainer>
    </>
  );
};

export default ProjectDetail;