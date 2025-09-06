// Initialize MongoDB database
db = db.getSiblingDB('portfolio');

// Create collections
db.createCollection('users');
db.createCollection('projects');
db.createCollection('contacts');

// Create indexes for better performance
db.users.createIndex({ "email": 1 }, { unique: true });
db.projects.createIndex({ "featured": 1, "order": 1 });
db.projects.createIndex({ "category": 1 });
db.contacts.createIndex({ "status": 1, "createdAt": -1 });

// Insert sample data
db.projects.insertMany([
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard.",
    shortDescription: "Modern e-commerce platform with React and Node.js",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
    category: "web",
    featured: true,
    order: 1,
    status: "completed",
    startDate: new Date("2023-01-15"),
    endDate: new Date("2023-03-20"),
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://your-ecommerce-demo.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern web technologies.",
    shortDescription: "Collaborative task management with real-time updates",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    technologies: ["React", "Socket.io", "Node.js", "PostgreSQL", "Redis"],
    category: "web",
    featured: true,
    order: 2,
    status: "completed",
    startDate: new Date("2023-04-01"),
    endDate: new Date("2023-06-15"),
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://your-task-manager-demo.com"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities. Features include location-based weather, interactive maps, and weather alerts.",
    shortDescription: "Interactive weather dashboard with location services",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
    technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js", "PWA"],
    category: "web",
    featured: false,
    order: 3,
    status: "completed",
    startDate: new Date("2023-07-01"),
    endDate: new Date("2023-08-15"),
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://your-weather-demo.com"
  },
  {
    title: "Mobile Banking App",
    description: "A secure mobile banking application with biometric authentication, transaction history, bill payments, and money transfer features. Built with React Native.",
    shortDescription: "Secure mobile banking with biometric authentication",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
    technologies: ["React Native", "Node.js", "MongoDB", "Biometric Auth", "Encryption"],
    category: "mobile",
    featured: true,
    order: 4,
    status: "in-progress",
    startDate: new Date("2023-09-01"),
    githubUrl: "https://github.com/yourusername/mobile-banking",
    liveUrl: "https://your-banking-demo.com"
  }
]);

print("Database initialized successfully with sample data!");