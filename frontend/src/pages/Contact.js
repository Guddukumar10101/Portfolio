import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';
import { contactAPI } from '../services/api';
import toast from 'react-hot-toast';
import {
  ContactContainer,
  ContactHeader,
  ContactContent,
  ContactInfo,
  ContactForm,
  InfoCard,
  InfoIcon,
  InfoTitle,
  InfoText,
  FormGroup,
  Input,
  TextArea,
  Label,
  ErrorMessage,
  SubmitButton,
  SuccessMessage
} from '../styles/ContactStyles';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await contactAPI.sendMessage(data);
      if (response.data.success) {
        setIsSubmitted(true);
        reset();
        toast.success('Message sent successfully!');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      text: 'contact@example.com',
      link: 'mailto:contact@example.com'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      text: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      text: 'San Francisco, CA',
      link: 'https://maps.google.com'
    }
  ];

  if (isSubmitted) {
    return (
      <ContactContainer>
        <ContactHeader>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>Message Sent!</h1>
              <p>Thank you for reaching out. I'll get back to you soon.</p>
            </motion.div>
          </div>
        </ContactHeader>

        <div className="container">
          <SuccessMessage>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FiCheckCircle size={64} />
              <h2>Thank You!</h2>
              <p>
                Your message has been sent successfully. I'll review it and get back to you 
                within 24 hours. In the meantime, feel free to explore my projects or learn 
                more about my experience.
              </p>
              <motion.button
                onClick={() => setIsSubmitted(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Another Message
              </motion.button>
            </motion.div>
          </SuccessMessage>
        </div>
      </ContactContainer>
    );
  }

  return (
    <>
      <Helmet>
        <title>Contact - Portfolio</title>
        <meta name="description" content="Get in touch with me for project inquiries, collaborations, or just to say hello" />
      </Helmet>

      <ContactContainer>
        <ContactHeader>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>Get In Touch</h1>
              <p>
                Have a project in mind or just want to chat? I'd love to hear from you. 
                Send me a message and I'll respond as soon as possible.
              </p>
            </motion.div>
          </div>
        </ContactHeader>

        <ContactContent>
          <div className="container">
            <div className="contact-grid">
              <ContactInfo>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2>Let's Connect</h2>
                  <p>
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you have a question or just want to say hi, I'll try my 
                    best to get back to you!
                  </p>

                  <div className="info-cards">
                    {contactInfo.map((info, index) => (
                      <InfoCard
                        key={index}
                        as={info.link ? 'a' : 'div'}
                        href={info.link}
                        target={info.link ? '_blank' : undefined}
                        rel={info.link ? 'noopener noreferrer' : undefined}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                      >
                        <InfoIcon>
                          <info.icon size={24} />
                        </InfoIcon>
                        <div>
                          <InfoTitle>{info.title}</InfoTitle>
                          <InfoText>{info.text}</InfoText>
                        </div>
                      </InfoCard>
                    ))}
                  </div>
                </motion.div>
              </ContactInfo>

              <ContactForm>
                <motion.form
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <FormGroup>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      {...register('name', {
                        required: 'Name is required',
                        minLength: {
                          value: 2,
                          message: 'Name must be at least 2 characters'
                        }
                      })}
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && (
                      <ErrorMessage>{errors.name.message}</ErrorMessage>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && (
                      <ErrorMessage>{errors.email.message}</ErrorMessage>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      {...register('subject', {
                        required: 'Subject is required',
                        minLength: {
                          value: 5,
                          message: 'Subject must be at least 5 characters'
                        }
                      })}
                      className={errors.subject ? 'error' : ''}
                    />
                    {errors.subject && (
                      <ErrorMessage>{errors.subject.message}</ErrorMessage>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="message">Message *</Label>
                    <TextArea
                      id="message"
                      placeholder="Tell me about your project or just say hello..."
                      rows={6}
                      {...register('message', {
                        required: 'Message is required',
                        minLength: {
                          value: 10,
                          message: 'Message must be at least 10 characters'
                        }
                      })}
                      className={errors.message ? 'error' : ''}
                    />
                    {errors.message && (
                      <ErrorMessage>{errors.message.message}</ErrorMessage>
                    )}
                  </FormGroup>

                  <SubmitButton
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={20} />
                        Send Message
                      </>
                    )}
                  </SubmitButton>
                </motion.form>
              </ContactForm>
            </div>
          </div>
        </ContactContent>
      </ContactContainer>
    </>
  );
};

export default Contact;