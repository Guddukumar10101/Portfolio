import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiUser, FiMail, FiSave, FiKey } from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';
import { ProfileContainer, ProfileHeader, ProfileContent, ProfileForm, FormGroup, Input, Label, ErrorMessage, SubmitButton, PasswordSection, SectionTitle } from '../styles/ProfileStyles';

const Profile = () => {
  const { user, updateProfile, changePassword } = useAuth();
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const {
    register: registerProfile,
    handleSubmit: handleProfileSubmit,
    formState: { errors: profileErrors },
    reset: resetProfile
  } = useForm({
    defaultValues: {
      name: user?.name || '',
      email: user?.email || ''
    }
  });

  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors },
    reset: resetPassword,
    watch
  } = useForm();

  const newPassword = watch('newPassword');

  const onProfileSubmit = async (data) => {
    setIsUpdatingProfile(true);
    try {
      const result = await updateProfile(data);
      if (result.success) {
        resetProfile(data);
      }
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  const onPasswordSubmit = async (data) => {
    setIsChangingPassword(true);
    try {
      const result = await changePassword(data.currentPassword, data.newPassword);
      if (result.success) {
        resetPassword();
      }
    } finally {
      setIsChangingPassword(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Profile - Portfolio</title>
        <meta name="description" content="Manage your profile settings" />
      </Helmet>

      <ProfileContainer>
        <ProfileHeader>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>Profile Settings</h1>
              <p>Manage your personal information and account settings</p>
            </motion.div>
          </div>
        </ProfileHeader>

        <ProfileContent>
          <div className="container">
            <div className="profile-grid">
              <ProfileForm>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <SectionTitle>
                    <FiUser size={20} />
                    Personal Information
                  </SectionTitle>

                  <form onSubmit={handleProfileSubmit(onProfileSubmit)}>
                    <FormGroup>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        {...registerProfile('name', {
                          required: 'Name is required',
                          minLength: {
                            value: 2,
                            message: 'Name must be at least 2 characters'
                          }
                        })}
                        className={profileErrors.name ? 'error' : ''}
                      />
                      {profileErrors.name && (
                        <ErrorMessage>{profileErrors.name.message}</ErrorMessage>
                      )}
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        disabled
                        value={user?.email}
                        className="disabled"
                      />
                      <p className="help-text">
                        Email cannot be changed. Contact support if you need to update your email.
                      </p>
                    </FormGroup>

                    <SubmitButton
                      type="submit"
                      disabled={isUpdatingProfile}
                    >
                      {isUpdatingProfile ? (
                        <>
                          <div className="spinner" />
                          Updating...
                        </>
                      ) : (
                        <>
                          <FiSave size={20} />
                          Update Profile
                        </>
                      )}
                    </SubmitButton>
                  </form>
                </motion.div>
              </ProfileForm>

              <PasswordSection>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <SectionTitle>
                    <FiKey size={20} />
                    Change Password
                  </SectionTitle>

                  <form onSubmit={handlePasswordSubmit(onPasswordSubmit)}>
                    <FormGroup>
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input
                        id="currentPassword"
                        type="password"
                        {...registerPassword('currentPassword', {
                          required: 'Current password is required'
                        })}
                        className={passwordErrors.currentPassword ? 'error' : ''}
                      />
                      {passwordErrors.currentPassword && (
                        <ErrorMessage>{passwordErrors.currentPassword.message}</ErrorMessage>
                      )}
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        {...registerPassword('newPassword', {
                          required: 'New password is required',
                          minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters'
                          }
                        })}
                        className={passwordErrors.newPassword ? 'error' : ''}
                      />
                      {passwordErrors.newPassword && (
                        <ErrorMessage>{passwordErrors.newPassword.message}</ErrorMessage>
                      )}
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        {...registerPassword('confirmPassword', {
                          required: 'Please confirm your password',
                          validate: value => value === newPassword || 'Passwords do not match'
                        })}
                        className={passwordErrors.confirmPassword ? 'error' : ''}
                      />
                      {passwordErrors.confirmPassword && (
                        <ErrorMessage>{passwordErrors.confirmPassword.message}</ErrorMessage>
                      )}
                    </FormGroup>

                    <SubmitButton
                      type="submit"
                      disabled={isChangingPassword}
                    >
                      {isChangingPassword ? (
                        <>
                          <div className="spinner" />
                          Changing...
                        </>
                      ) : (
                        <>
                          <FiKey size={20} />
                          Change Password
                        </>
                      )}
                    </SubmitButton>
                  </form>
                </motion.div>
              </PasswordSection>
            </div>
          </div>
        </ProfileContent>
      </ProfileContainer>
    </>
  );
};

export default Profile;