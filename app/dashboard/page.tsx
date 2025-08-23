"use client";

import React, { useState } from 'react';
import { 
  Users, 
  Plus, 
  Search, 
  Bell, 
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
  MapPin,
  Sun,
  Moon
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

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
    "Django": <Database className="w-4 h-4" />,
    "SEO": <Search className="w-4 h-4" />,
    "APIs": <Database className="w-4 h-4" />,
    "Branding": <Palette className="w-4 h-4" />
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-black' : 'bg-gray-50'
    }`}>
      {/* Header */}
      <header className={`shadow-lg border-b transition-all duration-300 backdrop-blur-sm ${
        isDarkMode 
          ? 'bg-gray-900/95 border-gray-800 shadow-black/50' 
          : 'bg-white/95 border-gray-200 shadow-gray-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <h1 className={`text-xl sm:text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                isDarkMode 
                  ? 'from-white via-gray-200 to-gray-400' 
                  : 'from-indigo-600 via-purple-600 to-blue-600'
              }`}>CollabHub</h1>
              <div className="relative hidden md:block">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                  isDarkMode ? 'text-gray-500' : 'text-gray-400'
                }`} />
                <input
                  type="text"
                  placeholder="Search projects, skills, or members..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`pl-10 pr-4 py-2 w-64 lg:w-80 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border-gray-700 text-gray-100 placeholder-gray-500 backdrop-blur-sm' 
                      : 'bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 backdrop-blur-sm'
                  }`}
                />
              </div>
              <button className={`md:hidden p-2 hover:text-gray-500 transition-colors ${
                isDarkMode ? 'text-gray-400' : 'text-gray-400'
              }`}>
                <Search className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button 
                onClick={toggleDarkMode}
                className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'text-amber-400 hover:bg-amber-400/10 bg-gray-800/50 shadow-lg' 
                    : 'text-slate-600 hover:bg-slate-100 bg-white/80 shadow-md'
                }`}
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? 
                  <Sun className="w-5 h-5 sm:w-6 sm:h-6" /> : 
                  <Moon className="w-5 h-5 sm:w-6 sm:h-6" />
                }
              </button>
              <button className={`relative p-2.5 rounded-xl transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'text-gray-300 hover:bg-gray-800/50 bg-gray-800/50' 
                  : 'text-gray-600 hover:bg-gray-100 bg-white/80'
              }`}>
                <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">3</span>
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format"
                  alt="Profile"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full"
                />
                <span className={`text-xs sm:text-sm font-medium hidden sm:inline transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>Pradeep</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className={`flex space-x-4 sm:space-x-8 mb-6 sm:mb-8 border-b overflow-x-auto transition-colors duration-300 ${
          isDarkMode ? 'border-gray-800/50' : 'border-gray-200'
        }`}>
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'active', label: 'Active Projects', shortLabel: 'Active' },
            { id: 'available', label: 'Find Projects', shortLabel: 'Find' },
            { id: 'team', label: 'My Team', shortLabel: 'Team' },
            { id: 'profile', label: 'Profile' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 sm:pb-4 px-1 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-300 relative ${
                activeTab === tab.id
                  ? isDarkMode 
                    ? 'border-gray-400 text-gray-200' 
                    : 'border-indigo-500 text-indigo-600'
                  : isDarkMode 
                    ? 'border-transparent text-gray-500 hover:text-gray-300' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="sm:hidden">{tab.shortLabel || tab.label}</span>
              <span className="hidden sm:inline">{tab.label}</span>
              {activeTab === tab.id && (
                <div className={`absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full ${
                  isDarkMode ? 'bg-gradient-to-r from-gray-400 to-gray-600' : 'bg-gradient-to-r from-indigo-500 to-purple-500'
                }`}></div>
              )}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className={`rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-105 border ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800/50 shadow-black/50' 
                  : 'bg-gradient-to-br from-white to-gray-50 border-gray-200/50 shadow-gray-200/50'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-sm font-medium transition-colors ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Active Projects</p>
                    <p className={`text-3xl font-bold transition-colors ${
                      isDarkMode ? 'text-gray-100' : 'text-gray-900'
                    }`}>{userStats.activeProjects}</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className={`rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-105 border ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800/50 shadow-black/50' 
                  : 'bg-gradient-to-br from-white to-gray-50 border-gray-200/50 shadow-gray-200/50'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-sm font-medium transition-colors ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Completed</p>
                    <p className={`text-3xl font-bold transition-colors ${
                      isDarkMode ? 'text-gray-100' : 'text-gray-900'
                    }`}>{userStats.completedProjects}</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className={`rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-105 border ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800/50 shadow-black/50' 
                  : 'bg-gradient-to-br from-white to-gray-50 border-gray-200/50 shadow-gray-200/50'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-sm font-medium transition-colors ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Team Members</p>
                    <p className={`text-3xl font-bold transition-colors ${
                      isDarkMode ? 'text-gray-100' : 'text-gray-900'
                    }`}>{userStats.teamMembers}</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className={`rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-105 border ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800/50 shadow-black/50' 
                  : 'bg-gradient-to-br from-white to-gray-50 border-gray-200/50 shadow-gray-200/50'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-sm font-medium transition-colors ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Rating</p>
                    <div className="flex items-center space-x-1">
                      <p className={`text-3xl font-bold transition-colors ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-900'
                      }`}>{userStats.rating}</p>
                      <Star className="w-5 h-5 text-amber-400 fill-current drop-shadow-sm" />
                    </div>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className={`rounded-lg shadow p-4 sm:p-6 transition-colors duration-200 ${
              isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white'
            }`}>
              <h3 className={`text-base sm:text-lg font-semibold mb-4 transition-colors ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Quick Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <button className={`flex items-center justify-center space-x-2 p-3 sm:p-4 border-2 border-dashed rounded-lg transition-all ${
                  isDarkMode 
                    ? 'border-gray-700 hover:border-indigo-500 hover:bg-indigo-900 hover:bg-opacity-20' 
                    : 'border-gray-300 hover:border-indigo-500 hover:bg-indigo-50'
                }`}>
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                  <span className="font-medium text-indigo-600 text-sm sm:text-base">Post New Project</span>
                </button>
                <button className={`flex items-center justify-center space-x-2 p-3 sm:p-4 border-2 border-dashed rounded-lg transition-all ${
                  isDarkMode 
                    ? 'border-gray-700 hover:border-green-500 hover:bg-green-900 hover:bg-opacity-20' 
                    : 'border-gray-300 hover:border-green-500 hover:bg-green-50'
                }`}>
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  <span className="font-medium text-green-600 text-sm sm:text-base">Find Teammates</span>
                </button>
                <button className={`flex items-center justify-center space-x-2 p-3 sm:p-4 border-2 border-dashed rounded-lg transition-all sm:col-span-2 lg:col-span-1 ${
                  isDarkMode 
                    ? 'border-gray-700 hover:border-purple-500 hover:bg-purple-900 hover:bg-opacity-20' 
                    : 'border-gray-300 hover:border-purple-500 hover:bg-purple-50'
                }`}>
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  <span className="font-medium text-purple-600 text-sm sm:text-base">Join Community</span>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className={`rounded-lg shadow p-6 transition-colors duration-200 ${
              isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 transition-colors ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className={`text-sm transition-colors ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-900'
                    }`}>Sarah joined your "E-commerce Website" project</p>
                    <p className={`text-xs transition-colors ${
                      isDarkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className={`text-sm transition-colors ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-900'
                    }`}>You completed a milestone in "Mobile App for Food Delivery"</p>
                    <p className={`text-xs transition-colors ${
                      isDarkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <p className={`text-sm transition-colors ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-900'
                    }`}>New project recommendation: "Blog Website for Travel Agency"</p>
                    <p className={`text-xs transition-colors ${
                      isDarkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Active Projects Tab */}
        {activeTab === 'active' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <h2 className={`text-xl sm:text-2xl font-bold transition-colors ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Active Projects</h2>
              <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm sm:text-base">
                <Plus className="w-4 h-4" />
                <span>New Project</span>
              </button>
            </div>

            <div className="grid gap-4 sm:gap-6">
              {activeProjects.map((project) => (
                <div key={project.id} className={`rounded-lg shadow p-4 sm:p-6 transition-colors duration-200 ${
                  isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                    <div className="flex-1">
                      <h3 className={`text-base sm:text-lg font-semibold transition-colors ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>{project.title}</h3>
                      <p className={`mt-1 text-sm sm:text-base transition-colors ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>{project.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium self-start ${
                      project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill) => (
                      <div key={skill} className={`flex items-center space-x-1 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm transition-colors ${
                        isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {skillIcons[skill] || <Code className="w-4 h-4" />}
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4">
                    <div className={`flex items-center space-x-2 text-xs sm:text-sm transition-colors ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{project.teamSize} members</span>
                    </div>
                    <div className={`flex items-center space-x-2 text-xs sm:text-sm transition-colors ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{project.deadline}</span>
                    </div>
                    <div className={`flex items-center space-x-2 text-xs sm:text-sm transition-colors ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{project.budget}</span>
                    </div>
                    <div className={`flex items-center space-x-2 text-xs sm:text-sm transition-colors ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{project.progress}% complete</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-xs sm:text-sm font-medium transition-colors ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>Progress</span>
                      <span className={`text-xs sm:text-sm transition-colors ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>{project.progress}%</span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${
                      isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                    }`}>
                      <div 
                        className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm sm:text-base text-left">View Details</button>
                    <div className="flex space-x-2">
                      <button className={`px-3 py-1 border rounded-md text-xs sm:text-sm transition-colors ${
                        isDarkMode 
                          ? 'border-gray-700 hover:bg-gray-800 text-gray-300' 
                          : 'border-gray-300 hover:bg-gray-50 text-gray-700'
                      } flex items-center`}>
                        <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                      <button className="px-3 py-2 bg-indigo-600 text-white rounded-md text-xs sm:text-sm hover:bg-indigo-700">
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
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <h2 className={`text-xl sm:text-2xl font-bold transition-colors ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Available Projects</h2>
              <button className={`flex items-center justify-center space-x-2 px-4 py-2 border rounded-lg text-sm sm:text-base transition-colors ${
                isDarkMode 
                  ? 'border-gray-700 hover:bg-gray-800 text-gray-300' 
                  : 'border-gray-300 hover:bg-gray-50 text-gray-700'
              }`}>
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>

            <div className="grid gap-4 sm:gap-6">
              {availableProjects.map((project) => (
                <div key={project.id} className={`rounded-lg shadow p-4 sm:p-6 border-l-4 border-green-500 transition-colors duration-200 ${
                  isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white'
                }`}>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 gap-3">
                    <div className="flex-1">
                      <h3 className={`text-base sm:text-lg font-semibold transition-colors ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>{project.title}</h3>
                      <p className={`mt-1 text-sm sm:text-base transition-colors ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>{project.description}</p>
                      <div className={`flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 text-xs sm:text-sm gap-1 sm:gap-0 transition-colors ${
                        isDarkMode ? 'text-gray-500' : 'text-gray-500'
                      }`}>
                        <span>Posted by {project.postedBy}</span>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{project.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-left lg:text-right">
                      <div className="text-lg sm:text-xl font-bold text-green-600">{project.budget}</div>
                      <div className={`text-xs sm:text-sm transition-colors ${
                        isDarkMode ? 'text-gray-500' : 'text-gray-500'
                      }`}>{project.applicants} applicants</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill) => (
                      <div key={skill} className="flex items-center space-x-1 px-2 sm:px-3 py-1 bg-green-100 rounded-full text-xs sm:text-sm text-green-800">
                        {skillIcons[skill] || <Code className="w-4 h-4" />}
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <div className={`text-xs sm:text-sm transition-colors ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
                      {project.teamSize}
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                      <button className={`px-3 sm:px-4 py-2 border rounded-md text-xs sm:text-sm text-center transition-colors ${
                        isDarkMode 
                          ? 'border-gray-700 hover:bg-gray-800 text-gray-300' 
                          : 'border-gray-300 hover:bg-gray-50 text-gray-700'
                      }`}>
                        Save for Later
                      </button>
                      <button className="px-3 sm:px-4 py-2 bg-green-600 text-white rounded-md text-xs sm:text-sm hover:bg-green-700 text-center">
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
          <div className={`rounded-lg shadow p-12 text-center transition-colors duration-200 ${
            isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white'
          }`}>
            <div className={`mb-4 transition-colors ${
              isDarkMode ? 'text-gray-600' : 'text-gray-400'
            }`}>
              <Users className="w-16 h-16 mx-auto" />
            </div>
            <h3 className={`text-lg font-semibold mb-2 transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {activeTab === 'team' ? 'Team Management' : 'Profile Settings'}
            </h3>
            <p className={`transition-colors ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
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