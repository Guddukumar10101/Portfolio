const express = require('express');
const Project = require('../models/Project');
const { protect, authorize, optionalAuth } = require('../middleware/auth');
const { validateProject } = require('../middleware/validation');

const router = express.Router();

// @desc    Get all projects (public)
// @route   GET /api/portfolio/projects
// @access  Public
router.get('/projects', optionalAuth, async (req, res) => {
  try {
    const { category, featured, limit = 10, page = 1 } = req.query;
    
    // Build query
    let query = {};
    if (category) query.category = category;
    if (featured === 'true') query.featured = true;

    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const projects = await Project.find(query)
      .sort({ featured: -1, order: 1, createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Project.countDocuments(query);

    res.status(200).json({
      success: true,
      count: projects.length,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / parseInt(limit)),
      data: projects
    });
  } catch (error) {
    console.error('Get projects error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching projects'
    });
  }
});

// @desc    Get single project
// @route   GET /api/portfolio/projects/:id
// @access  Public
router.get('/projects/:id', optionalAuth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.status(200).json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error('Get project error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching project'
    });
  }
});

// @desc    Create new project
// @route   POST /api/portfolio/projects
// @access  Private (Admin only)
router.post('/projects', protect, authorize('admin'), validateProject, async (req, res) => {
  try {
    const project = await Project.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: project
    });
  } catch (error) {
    console.error('Create project error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating project'
    });
  }
});

// @desc    Update project
// @route   PUT /api/portfolio/projects/:id
// @access  Private (Admin only)
router.put('/projects/:id', protect, authorize('admin'), validateProject, async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Project updated successfully',
      data: project
    });
  } catch (error) {
    console.error('Update project error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating project'
    });
  }
});

// @desc    Delete project
// @route   DELETE /api/portfolio/projects/:id
// @access  Private (Admin only)
router.delete('/projects/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (error) {
    console.error('Delete project error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while deleting project'
    });
  }
});

// @desc    Get project categories
// @route   GET /api/portfolio/categories
// @access  Public
router.get('/categories', async (req, res) => {
  try {
    const categories = await Project.distinct('category');
    
    res.status(200).json({
      success: true,
      data: categories
    });
  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching categories'
    });
  }
});

// @desc    Get featured projects
// @route   GET /api/portfolio/featured
// @access  Public
router.get('/featured', async (req, res) => {
  try {
    const projects = await Project.find({ featured: true })
      .sort({ order: 1, createdAt: -1 })
      .limit(6);

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    console.error('Get featured projects error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching featured projects'
    });
  }
});

// @desc    Search projects
// @route   GET /api/portfolio/search
// @access  Public
router.get('/search', async (req, res) => {
  try {
    const { q, category, limit = 10 } = req.query;
    
    if (!q) {
      return res.status(400).json({
        success: false,
        message: 'Search query is required'
      });
    }

    let query = {
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
        { technologies: { $in: [new RegExp(q, 'i')] } }
      ]
    };

    if (category) {
      query.category = category;
    }

    const projects = await Project.find(query)
      .sort({ featured: -1, createdAt: -1 })
      .limit(parseInt(limit));

    res.status(200).json({
      success: true,
      count: projects.length,
      query: q,
      data: projects
    });
  } catch (error) {
    console.error('Search projects error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while searching projects'
    });
  }
});

module.exports = router;