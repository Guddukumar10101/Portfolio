import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiEye, FiEyeOff, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';
import {
  AuthContainer,
  AuthCard,
  AuthHeader,
  AuthTitle,
  AuthSubtitle,
  AuthForm,
  FormGroup,
  InputGroup,
  Input,
  InputIcon,
  PasswordToggle,
  ErrorMessage,
  SubmitButton,
  AuthFooter,
  AuthLink,
  Divider,
  SocialLogin,
  SocialButton,
  PasswordStrength
} from '../Auth/AuthStyles';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const { register: registerUser, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm();

  const password = watch('password', '');

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  // Calculate password strength
  useEffect(() => {
    if (password) {
      let strength = 0;
      if (password.length >= 6) strength += 1;
      if (password.match(/[a-z]/)) strength += 1;
      if (password.match(/[A-Z]/)) strength += 1;
      if (password.match(/[0-9]/)) strength += 1;
      if (password.match(/[^a-zA-Z0-9]/)) strength += 1;
      setPasswordStrength(strength);
    } else {
      setPasswordStrength(0);
    }
  }, [password]);

  const onSubmit = async (data) => {
    const result = await registerUser(data.name, data.email, data.password);
    if (result.success) {
      navigate(from, { replace: true });
    }
  };

  if (isAuthenticated) {
    return null; // Prevent flash of register form
  }

  return (
    <>
      <Helmet>
        <title>Register - Portfolio</title>
        <meta name="description" content="Create your portfolio account" />
      </Helmet>

      <AuthContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AuthCard>
            <AuthHeader>
              <AuthTitle>Create Account</AuthTitle>
              <AuthSubtitle>
                Join us and start building amazing projects
              </AuthSubtitle>
            </AuthHeader>

            <AuthForm onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <InputGroup>
                  <InputIcon>
                    <FiUser size={20} />
                  </InputIcon>
                  <Input
                    type="text"
                    placeholder="Full name"
                    {...register('name', {
                      required: 'Name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters'
                      },
                      maxLength: {
                        value: 50,
                        message: 'Name cannot exceed 50 characters'
                      }
                    })}
                    className={errors.name ? 'error' : ''}
                  />
                </InputGroup>
                {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <InputGroup>
                  <InputIcon>
                    <FiMail size={20} />
                  </InputIcon>
                  <Input
                    type="email"
                    placeholder="Email address"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={errors.email ? 'error' : ''}
                  />
                </InputGroup>
                {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <InputGroup>
                  <InputIcon>
                    <FiLock size={20} />
                  </InputIcon>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters'
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                        message: 'Password must contain at least one lowercase letter, one uppercase letter, and one number'
                      }
                    })}
                    className={errors.password ? 'error' : ''}
                  />
                  <PasswordToggle
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                  </PasswordToggle>
                </InputGroup>
                {password && (
                  <PasswordStrength>
                    <div className="strength-bar">
                      <div 
                        className={`strength-fill strength-${passwordStrength}`}
                      />
                    </div>
                    <span className="strength-text">
                      {passwordStrength === 0 && 'Very Weak'}
                      {passwordStrength === 1 && 'Weak'}
                      {passwordStrength === 2 && 'Fair'}
                      {passwordStrength === 3 && 'Good'}
                      {passwordStrength === 4 && 'Strong'}
                      {passwordStrength === 5 && 'Very Strong'}
                    </span>
                  </PasswordStrength>
                )}
                {errors.password && (
                  <ErrorMessage>{errors.password.message}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <InputGroup>
                  <InputIcon>
                    <FiLock size={20} />
                  </InputIcon>
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm password"
                    {...register('confirmPassword', {
                      required: 'Please confirm your password',
                      validate: value => value === password || 'Passwords do not match'
                    })}
                    className={errors.confirmPassword ? 'error' : ''}
                  />
                  <PasswordToggle
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                  </PasswordToggle>
                </InputGroup>
                {errors.confirmPassword && (
                  <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
                )}
              </FormGroup>

              <SubmitButton
                type="submit"
                disabled={isSubmitting || isLoading}
              >
                {isSubmitting || isLoading ? (
                  <>
                    <div className="spinner" />
                    Creating Account...
                  </>
                ) : (
                  'Create Account'
                )}
              </SubmitButton>
            </AuthForm>

            <Divider>
              <span>or</span>
            </Divider>

            <SocialLogin>
              <SocialButton type="button">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </SocialButton>
            </SocialLogin>

            <AuthFooter>
              <p>
                Already have an account?{' '}
                <AuthLink as={Link} to="/login">
                  Sign in
                </AuthLink>
              </p>
            </AuthFooter>
          </AuthCard>
        </motion.div>
      </AuthContainer>
    </>
  );
};

export default Register;