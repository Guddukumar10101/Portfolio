import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiPlus, FiEdit, FiTrash2, FiEye } from 'react-icons/fi';
import { useQuery } from 'react-query';
import { portfolioAPI } from '../../services/api';
import { AdminContainer, AdminHeader, AdminContent, AdminActions, ActionButton, AdminTable, TableHeader, TableRow, TableCell, LoadingContainer, EmptyState } from '../styles/AdminStyles';

const AdminProjects = () => {
  const { data: projects, isLoading, error } = useQuery(
    'admin-projects',
    () => portfolioAPI.getProjects({ limit: 100 }),
    {
      select: (response) => response.data.data || []
    }
  );

  if (isLoading) {
    return (
      <AdminContainer>
        <LoadingContainer>
          <div className="spinner" />
          <p>Loading projects...</p>
        </LoadingContainer>
      </AdminContainer>
    );
  }

  return (
    <>
      <Helmet>
        <title>Admin Projects - Portfolio</title>
        <meta name="description" content="Manage portfolio projects" />
      </Helmet>

      <AdminContainer>
        <AdminHeader>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>Manage Projects</h1>
              <p>Add, edit, and manage your portfolio projects</p>
            </motion.div>
          </div>
        </AdminHeader>

        <AdminContent>
          <div className="container">
            <AdminActions>
              <ActionButton>
                <FiPlus size={20} />
                Add New Project
              </ActionButton>
            </AdminActions>

            {projects && projects.length > 0 ? (
              <AdminTable>
                <TableHeader>
                  <TableCell>Project</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Created</TableCell>
                  <TableCell>Actions</TableCell>
                </TableHeader>
                {projects.map((project, index) => (
                  <TableRow
                    key={project._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <TableCell>
                      <div className="project-info">
                        <img src={project.image} alt={project.title} />
                        <div>
                          <h3>{project.title}</h3>
                          <p>{project.shortDescription}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="category-tag">{project.category}</span>
                    </TableCell>
                    <TableCell>
                      <span className={`status-tag ${project.status}`}>
                        {project.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      {new Date(project.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="action-buttons">
                        <button className="view">
                          <FiEye size={16} />
                        </button>
                        <button className="edit">
                          <FiEdit size={16} />
                        </button>
                        <button className="delete">
                          <FiTrash2 size={16} />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </AdminTable>
            ) : (
              <EmptyState>
                <FiPlus size={64} />
                <h3>No projects yet</h3>
                <p>Get started by adding your first project to your portfolio.</p>
                <ActionButton>
                  <FiPlus size={20} />
                  Add New Project
                </ActionButton>
              </EmptyState>
            )}
          </div>
        </AdminContent>
      </AdminContainer>
    </>
  );
};

export default AdminProjects;