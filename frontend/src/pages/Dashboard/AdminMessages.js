import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiMail, FiEye, FiTrash2, FiReply } from 'react-icons/fi';
import { useQuery } from 'react-query';
import { contactAPI } from '../../services/api';
import { AdminContainer, AdminHeader, AdminContent, AdminTable, TableHeader, TableRow, TableCell, LoadingContainer, EmptyState } from '../styles/AdminStyles';

const AdminMessages = () => {
  const { data: messages, isLoading, error } = useQuery(
    'admin-messages',
    () => contactAPI.getMessages({ limit: 100 }),
    {
      select: (response) => response.data.data || []
    }
  );

  if (isLoading) {
    return (
      <AdminContainer>
        <LoadingContainer>
          <div className="spinner" />
          <p>Loading messages...</p>
        </LoadingContainer>
      </AdminContainer>
    );
  }

  return (
    <>
      <Helmet>
        <title>Admin Messages - Portfolio</title>
        <meta name="description" content="Manage contact form messages" />
      </Helmet>

      <AdminContainer>
        <AdminHeader>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>Contact Messages</h1>
              <p>View and manage messages from your contact form</p>
            </motion.div>
          </div>
        </AdminHeader>

        <AdminContent>
          <div className="container">
            {messages && messages.length > 0 ? (
              <AdminTable>
                <TableHeader>
                  <TableCell>From</TableCell>
                  <TableCell>Subject</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Actions</TableCell>
                </TableHeader>
                {messages.map((message, index) => (
                  <TableRow
                    key={message._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <TableCell>
                      <div className="sender-info">
                        <h3>{message.name}</h3>
                        <p>{message.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="subject">
                        <h3>{message.subject}</h3>
                        <p>{message.message.substring(0, 100)}...</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`status-tag ${message.status}`}>
                        {message.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      {new Date(message.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="action-buttons">
                        <button className="view">
                          <FiEye size={16} />
                        </button>
                        <button className="reply">
                          <FiReply size={16} />
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
                <FiMail size={64} />
                <h3>No messages yet</h3>
                <p>Messages from your contact form will appear here.</p>
              </EmptyState>
            )}
          </div>
        </AdminContent>
      </AdminContainer>
    </>
  );
};

export default AdminMessages;