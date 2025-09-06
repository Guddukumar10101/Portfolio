import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiEye, FiEyeOff, FiMail, FiLock } from 'react-icons/fi';
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
  SocialButton
} from '../Auth/AuthStyles';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const onSubmit = async (data) => {
    const result = await login(data.email, data.password);
    if (result.success) {
      navigate(from, { replace: true });
    }
  };

  if (isAuthenticated) {
    return null; // Prevent flash of login form
  }

  return (
    <>
      <Helmet>
        <title>Login - Portfolio</title>
        <meta name="description" content="Login to your portfolio account" />
      </Helmet>

      <AuthContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AuthCard>
            <AuthHeader>
              <AuthTitle>Welcome Back</AuthTitle>
              <AuthSubtitle>
                Sign in to your account to continue
              </AuthSubtitle>
            </AuthHeader>

            <AuthForm onSubmit={handleSubmit(onSubmit)}>
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
                {errors.password && (
                  <ErrorMessage>{errors.password.message}</ErrorMessage>
                )}
              </FormGroup>

              <SubmitButton
                type="submit"
                disabled={isSubmitting || isLoading}
              >
                {isSubmitting || isLoading ? (
                  <>
                    <div className="spinner" />
                    Signing In...
                  </>
                ) : (
                  'Sign In'
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
                Don't have an account?{' '}
                <AuthLink as={Link} to="/register">
                  Sign up
                </AuthLink>
              </p>
              <AuthLink as={Link} to="/forgot-password">
                Forgot your password?
              </AuthLink>
            </AuthFooter>
          </AuthCard>
        </motion.div>
      </AuthContainer>
    </>
  );
};

export default Login;