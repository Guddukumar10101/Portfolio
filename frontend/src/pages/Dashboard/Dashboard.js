import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiUser, FiSettings, FiFolder, FiMail, FiBarChart3, FiPlus } from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';
import { DashboardContainer, DashboardHeader, DashboardGrid, DashboardCard, CardHeader, CardContent, CardTitle, CardDescription, CardAction, QuickActions, ActionButton } from '../Dashboard/DashboardStyles';

const Dashboard = () => {
  const { user } = useAuth();

  const dashboardCards = [
    {
      title: 'Profile',
      description: 'Manage your personal information and account settings',
      icon: FiUser,
      link: '/profile',
      color: 'blue'
    },
    {
      title: 'Projects',
      description: 'View and manage your portfolio projects',
      icon: FiFolder,
      link: '/admin/projects',
      color: 'green',
      adminOnly: true
    },
    {
      title: 'Messages',
      description: 'View and respond to contact form submissions',
      icon: FiMail,
      link: '/admin/messages',
      color: 'purple',
      adminOnly: true
    },
    {
      title: 'Analytics',
      description: 'View portfolio statistics and performance metrics',
      icon: FiBarChart3,
      link: '/admin/analytics',
      color: 'orange',
      adminOnly: true
    }
  ];

  const quickActions = [
    {
      title: 'Add New Project',
      description: 'Create a new project for your portfolio',
      icon: FiPlus,
      link: '/admin/projects/new',
      adminOnly: true
    },
    {
      title: 'Update Profile',
      description: 'Edit your personal information',
      icon: FiSettings,
      link: '/profile'
    }
  ];

  const filteredCards = dashboardCards.filter(card => 
    !card.adminOnly || user?.role === 'admin'
  );

  const filteredActions = quickActions.filter(action => 
    !action.adminOnly || user?.role === 'admin'
  );

  return (
    <>
      <Helmet>
        <title>Dashboard - Portfolio</title>
        <meta name="description" content="Manage your portfolio dashboard" />
      </Helmet>

      <DashboardContainer>
        <DashboardHeader>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>Welcome back, {user?.name}!</h1>
              <p>Manage your portfolio and view your account information</p>
            </motion.div>
          </div>
        </DashboardHeader>

        <div className="container">
          <DashboardGrid>
            {filteredCards.map((card, index) => (
              <DashboardCard
                key={index}
                as={Link}
                to={card.link}
                $color={card.color}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <CardHeader>
                  <div className={`card-icon ${card.color}`}>
                    <card.icon size={24} />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardContent>
                <CardAction>
                  <span>View Details</span>
                </CardAction>
              </DashboardCard>
            ))}
          </DashboardGrid>

          <QuickActions>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Quick Actions
            </motion.h2>
            
            <div className="actions-grid">
              {filteredActions.map((action, index) => (
                <ActionButton
                  key={index}
                  as={Link}
                  to={action.link}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                >
                  <div className="action-icon">
                    <action.icon size={20} />
                  </div>
                  <div className="action-content">
                    <h3>{action.title}</h3>
                    <p>{action.description}</p>
                  </div>
                </ActionButton>
              ))}
            </div>
          </QuickActions>
        </div>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;