import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Logo from './Logo';
import './Dashboard.css';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [stats, setStats] = useState({
    totalCourses: 0,
    completedCourses: 0,
    inProgressCourses: 0,
    totalStudents: 0,
    recentActivity: []
  });

  useEffect(() => {
    // Simulate loading dashboard data
    // In a real app, you'd fetch this from your backend
    const mockStats = user.role === 'instructor' 
      ? {
          totalCourses: 8,
          completedCourses: 6,
          inProgressCourses: 2,
          totalStudents: 156,
          recentActivity: [
            { id: 1, type: 'course', message: 'New student enrolled in React Fundamentals', time: '2 hours ago' },
            { id: 2, type: 'assignment', message: 'Assignment submitted: JavaScript Basics', time: '4 hours ago' },
            { id: 3, type: 'course', message: 'Course "Advanced React" published', time: '1 day ago' }
          ]
        }
      : {
          totalCourses: 5,
          completedCourses: 2,
          inProgressCourses: 3,
          totalStudents: 0,
          recentActivity: [
            { id: 1, type: 'course', message: 'Completed: JavaScript Fundamentals', time: '1 hour ago' },
            { id: 2, type: 'assignment', message: 'New assignment: React Hooks', time: '3 hours ago' },
            { id: 3, type: 'course', message: 'Started: Advanced CSS', time: '2 days ago' }
          ]
        };
    
    setStats(mockStats);
  }, [user.role]);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="dashboard-header-content">
          <Logo size={32} withText={true} />
          <div className="dashboard-user-info">
            <div className="user-greeting">
              <h2>Welcome back, {user.name}!</h2>
              <span className="user-role">{user.role === 'instructor' ? 'Instructor' : 'Student'}</span>
            </div>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-container">
          {/* Stats Cards */}
          <section className="stats-section">
            <h3>Overview</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">📚</div>
                <div className="stat-content">
                  <h4>{stats.totalCourses}</h4>
                  <p>{user.role === 'instructor' ? 'Total Courses' : 'Enrolled Courses'}</p>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">✅</div>
                <div className="stat-content">
                  <h4>{stats.completedCourses}</h4>
                  <p>Completed</p>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">🔄</div>
                <div className="stat-content">
                  <h4>{stats.inProgressCourses}</h4>
                  <p>In Progress</p>
                </div>
              </div>
              
              {user.role === 'instructor' && (
                <div className="stat-card">
                  <div className="stat-icon">👥</div>
                  <div className="stat-content">
                    <h4>{stats.totalStudents}</h4>
                    <p>Total Students</p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Quick Actions */}
          <section className="actions-section">
            <h3>Quick Actions</h3>
            <div className="actions-grid">
              {user.role === 'instructor' ? (
                <>
                  <button className="action-btn primary">
                    <span className="action-icon">➕</span>
                    Create New Course
                  </button>
                  <button className="action-btn">
                    <span className="action-icon">📊</span>
                    View Analytics
                  </button>
                  <button className="action-btn">
                    <span className="action-icon">👥</span>
                    Manage Students
                  </button>
                  <button className="action-btn">
                    <span className="action-icon">📝</span>
                    Create Assignment
                  </button>
                </>
              ) : (
                <>
                  <button className="action-btn primary">
                    <span className="action-icon">🔍</span>
                    Browse Courses
                  </button>
                  <button className="action-btn">
                    <span className="action-icon">📚</span>
                    My Courses
                  </button>
                  <button className="action-btn">
                    <span className="action-icon">📋</span>
                    Assignments
                  </button>
                  <button className="action-btn">
                    <span className="action-icon">🏆</span>
                    Certificates
                  </button>
                </>
              )}
            </div>
          </section>

          {/* Recent Activity */}
          <section className="activity-section">
            <h3>Recent Activity</h3>
            <div className="activity-list">
              {stats.recentActivity.map(activity => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-icon">
                    {activity.type === 'course' ? '📚' : '📝'}
                  </div>
                  <div className="activity-content">
                    <p>{activity.message}</p>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Content */}
          <section className="featured-section">
            <h3>{user.role === 'instructor' ? 'Your Popular Courses' : 'Recommended for You'}</h3>
            <div className="featured-grid">
              <div className="featured-card">
                <div className="featured-image">🎨</div>
                <div className="featured-content">
                  <h4>Web Design Fundamentals</h4>
                  <p>Learn the basics of modern web design</p>
                  <div className="featured-meta">
                    <span className="rating">⭐ 4.8</span>
                    <span className="students">👥 1.2k students</span>
                  </div>
                </div>
              </div>
              
              <div className="featured-card">
                <div className="featured-image">⚛️</div>
                <div className="featured-content">
                  <h4>React Development</h4>
                  <p>Master React from basics to advanced</p>
                  <div className="featured-meta">
                    <span className="rating">⭐ 4.9</span>
                    <span className="students">👥 2.1k students</span>
                  </div>
                </div>
              </div>
              
              <div className="featured-card">
                <div className="featured-image">🐍</div>
                <div className="featured-content">
                  <h4>Python Programming</h4>
                  <p>Complete Python course for beginners</p>
                  <div className="featured-meta">
                    <span className="rating">⭐ 4.7</span>
                    <span className="students">👥 3.5k students</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

