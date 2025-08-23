"use client";

import React, { useState } from 'react';
import { 
  Users, 
  Plus, 
  Search, 
  Bell, 
  Settings, 
  Star, 
  Calendar, 
  MessageCircle, 
  TrendingUp,
  Code,
  Palette,
  PenTool,
  Database,
  Award,
  Clock,
  Filter,
  MapPin
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data
  const userStats = {
    activeProjects: 3,
    completedProjects: 12,
    teamMembers: 28,
    rating: 4.8
  };

  const activeProjects = [
    {
      id: 1,
      title: "E-commerce Website for Local Shop",
      description: "Building a complete online store with payment integration",
      skills: ["React", "Node.js", "UI/UX", "Content Writing"],
      teamSize: 4,
      progress: 75,
      deadline: "Dec 15, 2025",
      budget: "₹15,000",
      status: "In Progress"
    },
    {
      id: 2,
      title: "Mobile App for Food Delivery",
      description: "Cross-platform mobile application with real-time tracking",
      skills: ["React Native", "Firebase", "UI/UX"],
      teamSize: 3,
      progress: 40,
      deadline: "Jan 20, 2026",
      budget: "₹25,000",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Logo Design for Startup",
      description: "Brand identity and logo design for tech startup",
      skills: ["Graphic Design", "Branding"],
      teamSize: 2,
      progress: 90,
      deadline: "Nov 30, 2025",
      budget: "₹5,000",
      status: "Review"
    }
  ];

  const availableProjects = [
    {
      id: 4,
      title: "Blog Website for Travel Agency",
      description: "WordPress-based blog with custom theme and SEO optimization",
      skills: ["WordPress", "PHP", "SEO", "Content Writing"],
      teamSize: "3-4 members needed",
      budget: "₹12,000",
      postedBy: "Sarah Khan",
      location: "Remote",
      applicants: 8
    },
    {
      id: 5,
      title: "Social Media Management Tool",
      description: "Dashboard for managing multiple social media accounts",
      skills: ["Python", "Django", "APIs", "UI/UX"],
      teamSize: "4-5 members needed",
      budget: "₹30,000",
      postedBy: "Rahul Sharma",
      location: "Hybrid",
      applicants: 15
    }
  ];

  const skillIcons = {
    "React": <Code className="w-4 h-4" />,
    "Node.js": <Database className="w-4 h-4" />,
    "UI/UX": <Palette className="w-4 h-4" />,
    "Content Writing": <PenTool className="w-4 h-4" />,
    "React Native": <Code className="w-4 h-4" />,
    "Firebase": <Database className="w-4 h-4" />,
    "Graphic Design": <Palette className="w-4 h-4" />,
    "WordPress": <Code className="w-4 h-4" />,
    "PHP": <Code className="w-4 h-4" />,
    "Python": <Code className="w-4 h-4" />,
    "Django": <Database className="w-4 h-4" />
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-indigo-600">Cobuildify</h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search projects, skills, or members..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-500">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Settings className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-700">User1</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-8 mb-8 border-b">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'active', label: 'Active Projects' },
            { id: 'available', label: 'Find Projects' },
            { id: 'team', label: 'My Team' },
            { id: 'profile', label: 'Profile' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Projects</p>
                    <p className="text-3xl font-bold text-gray-900">{userStats.activeProjects}</p>
                  </div>
                  <div className="p-3 bg-indigo-100 rounded-full">
                    <TrendingUp className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Completed</p>
                    <p className="text-3xl font-bold text-gray-900">{userStats.completedProjects}</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-full">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Team Members</p>
                    <p className="text-3xl font-bold text-gray-900">{userStats.teamMembers}</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Rating</p>
                    <div className="flex items-center space-x-1">
                      <p className="text-3xl font-bold text-gray-900">{userStats.rating}</p>
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <Star className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors">
                  <Plus className="w-5 h-5 text-indigo-600" />
                  <span className="font-medium text-indigo-600">Post New Project</span>
                </button>
                <button className="flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors">
                  <Search className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-600">Find Teammates</span>
                </button>
                <button className="flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
                  <MessageCircle className="w-5 h-5 text-purple-600" />
                  <span className="font-medium text-purple-600">Join Community</span>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">Sarah joined your "E-commerce Website" project</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">You completed a milestone in "Mobile App for Food Delivery"</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">New project recommendation: "Blog Website for Travel Agency"</p>
                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Active Projects Tab */}
        {activeTab === 'active' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Active Projects</h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                <Plus className="w-4 h-4" />
                <span>New Project</span>
              </button>
            </div>

            <div className="grid gap-6">
              {activeProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                      <p className="text-gray-600 mt-1">{project.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill) => (
                      <div key={skill} className="flex items-center space-x-1 px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {skillIcons[skill]}
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{project.teamSize} members</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{project.deadline}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <TrendingUp className="w-4 h-4" />
                      <span>{project.budget}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{project.progress}% complete</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Progress</span>
                      <span className="text-sm text-gray-600">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium">View Details</button>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                        <MessageCircle className="w-4 h-4" />
                      </button>
                      <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700">
                        Continue Work
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Find Projects Tab */}
        {activeTab === 'available' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Available Projects</h2>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>

            <div className="grid gap-6">
              {availableProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                      <p className="text-gray-600 mt-1">{project.description}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <span>Posted by {project.postedBy}</span>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{project.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{project.budget}</div>
                      <div className="text-sm text-gray-500">{project.applicants} applicants</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill) => (
                      <div key={skill} className="flex items-center space-x-1 px-3 py-1 bg-green-100 rounded-full text-sm text-green-800">
                        {skillIcons[skill]}
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      <Users className="w-4 h-4 inline mr-1" />
                      {project.teamSize}
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                        Save for Later
                      </button>
                      <button className="px-4 py-2 bg-green-600 text-white rounded-md text-sm hover:bg-green-700">
                        Apply to Join
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {(activeTab === 'team' || activeTab === 'profile') && (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <div className="text-gray-400 mb-4">
              <Users className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {activeTab === 'team' ? 'Team Management' : 'Profile Settings'}
            </h3>
            <p className="text-gray-600">
              {activeTab === 'team' 
                ? 'Manage your team members, view collaboration history, and team analytics.'
                : 'Update your profile, skills, portfolio, and account settings.'
              }
            </p>
            <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              {activeTab === 'team' ? 'View Team' : 'Edit Profile'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 