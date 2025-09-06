# Professional Portfolio - Full Stack Application

A modern, responsive portfolio website with complete authentication system, built with React frontend and Node.js backend.

## 🚀 Features

### Frontend
- **Modern React Application** with hooks and context API
- **Responsive Design** that works on all devices
- **Dark/Light Theme** toggle with system preference detection
- **Smooth Animations** using Framer Motion and AOS
- **Authentication System** with protected routes
- **Portfolio Sections**: Hero, About, Projects, Skills, Contact
- **Admin Dashboard** for managing projects and messages
- **Form Validation** with React Hook Form
- **Toast Notifications** for user feedback
- **SEO Optimized** with React Helmet

### Backend
- **RESTful API** with Express.js
- **JWT Authentication** with secure token handling
- **Password Hashing** with bcrypt
- **MongoDB Database** with Mongoose ODM
- **Input Validation** with express-validator
- **Rate Limiting** for API protection
- **CORS Configuration** for cross-origin requests
- **Error Handling** middleware
- **Security Headers** with Helmet

### Authentication Features
- User registration and login
- Password strength validation
- JWT token management
- Protected routes
- Role-based access control (Admin/User)
- Profile management
- Password change functionality

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router DOM
- React Query (TanStack Query)
- React Hook Form
- Framer Motion
- Styled Components
- React Icons
- React Hot Toast
- AOS (Animate On Scroll)
- React Helmet Async

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- express-validator
- cors
- helmet
- express-rate-limit
- dotenv

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Git

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:3000
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Create a `.env` file in the frontend directory:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

Start the frontend development server:
```bash
npm start
```

### 4. Database Setup
Make sure MongoDB is running on your system. The application will automatically create the necessary collections when you first run it.

## 🚀 Usage

### Development
1. Start MongoDB service
2. Run backend: `cd backend && npm run dev`
3. Run frontend: `cd frontend && npm start`
4. Open http://localhost:3000 in your browser

### Creating an Admin User
To create an admin user, you can either:
1. Register a new user and manually update the role in the database
2. Use MongoDB Compass or similar tool to update the user document

```javascript
// In MongoDB, update user role to 'admin'
db.users.updateOne(
  { email: "your-email@example.com" },
  { $set: { role: "admin" } }
)
```

## 📁 Project Structure

```
portfolio/
├── backend/
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── server.js        # Main server file
│   └── package.json
├── frontend/
│   ├── public/          # Static files
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── contexts/    # React contexts
│   │   ├── services/    # API services
│   │   ├── styles/      # Styled components
│   │   └── App.js       # Main app component
│   └── package.json
└── README.md
```

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
- `NODE_ENV`: Environment (development/production)
- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `JWT_EXPIRE`: JWT token expiration time
- `FRONTEND_URL`: Frontend URL for CORS

#### Frontend (.env)
- `REACT_APP_API_URL`: Backend API URL

### Customization

1. **Update Personal Information**:
   - Edit `frontend/src/pages/Home.js` for hero section
   - Update `frontend/src/pages/About.js` for about section
   - Modify contact information in `frontend/src/pages/Contact.js`

2. **Styling**:
   - Colors and themes in `frontend/src/styles/GlobalStyles.js`
   - Component-specific styles in respective style files

3. **Content**:
   - Add your projects through the admin dashboard
   - Update skills and experience in About page

## 🚀 Deployment

### Backend Deployment (Heroku)
1. Create a Heroku app
2. Set environment variables in Heroku dashboard
3. Connect your GitHub repository
4. Deploy from main branch

### Frontend Deployment (Vercel/Netlify)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Add environment variables

### Database (MongoDB Atlas)
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get connection string
4. Update `MONGODB_URI` in environment variables

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token authentication
- Rate limiting on API endpoints
- Input validation and sanitization
- CORS configuration
- Security headers with Helmet
- Protected routes and role-based access

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Theme Support

- Light theme (default)
- Dark theme
- System preference detection
- Smooth theme transitions

## 📊 Admin Features

- Project management (CRUD operations)
- Contact message management
- User profile management
- Analytics dashboard (placeholder)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:
1. Check the console for errors
2. Verify environment variables
3. Ensure MongoDB is running
4. Check network connectivity

## 🔄 Updates

To update the application:
1. Pull latest changes
2. Update dependencies: `npm update`
3. Restart development servers

---

**Built with ❤️ using modern web technologies**