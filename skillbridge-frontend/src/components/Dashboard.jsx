import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import DashboardLayout from './DashboardLayout';

export default function Dashboard() {
  const { user } = useAuth();
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

  return (
    <DashboardLayout>
      <div className="sb-dashboard-content">
        {/* Stats Cards */}
        <section className="sb-stats-section">
          <h2 className="sb-section-title">Overview</h2>
          <div className="sb-stats-grid">
            <div className="sb-stat-card">
              <div className="sb-stat-icon">📚</div>
              <div className="sb-stat-content">
                <h3>{stats.totalCourses}</h3>
                <p>{user.role === 'instructor' ? 'Total Courses' : 'Enrolled Courses'}</p>
              </div>
            </div>
            
            <div className="sb-stat-card">
              <div className="sb-stat-icon">✅</div>
              <div className="sb-stat-content">
                <h3>{stats.completedCourses}</h3>
                <p>Completed</p>
              </div>
            </div>
            
            <div className="sb-stat-card">
              <div className="sb-stat-icon">🔄</div>
              <div className="sb-stat-content">
                <h3>{stats.inProgressCourses}</h3>
                <p>In Progress</p>
              </div>
            </div>
            
            {user.role === 'instructor' && (
              <div className="sb-stat-card">
                <div className="sb-stat-icon">👥</div>
                <div className="sb-stat-content">
                  <h3>{stats.totalStudents}</h3>
                  <p>Total Students</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="sb-actions-section">
          <h2 className="sb-section-title">Quick Actions</h2>
          <div className="sb-actions-grid">
            {user.role === 'instructor' ? (
              <>
                <button className="sb-action-btn sb-action-btn-primary">
                  <span className="sb-action-icon">➕</span>
                  Create New Course
                </button>
                <button className="sb-action-btn">
                  <span className="sb-action-icon">📊</span>
                  View Analytics
                </button>
                <button className="sb-action-btn">
                  <span className="sb-action-icon">👥</span>
                  Manage Students
                </button>
                <button className="sb-action-btn">
                  <span className="sb-action-icon">📝</span>
                  Create Assignment
                </button>
              </>
            ) : (
              <>
                <button className="sb-action-btn sb-action-btn-primary">
                  <span className="sb-action-icon">🔍</span>
                  Browse Courses
                </button>
                <button className="sb-action-btn">
                  <span className="sb-action-icon">📚</span>
                  My Courses
                </button>
                <button className="sb-action-btn">
                  <span className="sb-action-icon">📋</span>
                  Assignments
                </button>
                <button className="sb-action-btn">
                  <span className="sb-action-icon">🏆</span>
                  Certificates
                </button>
              </>
            )}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="sb-activity-section">
          <h2 className="sb-section-title">Recent Activity</h2>
          <div className="sb-activity-list">
            {stats.recentActivity.map(activity => (
              <div key={activity.id} className="sb-activity-item">
                <div className="sb-activity-icon">
                  {activity.type === 'course' ? '📚' : '📝'}
                </div>
                <div className="sb-activity-content">
                  <p>{activity.message}</p>
                  <span className="sb-activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Content */}
        <section className="sb-featured-section">
          <h2 className="sb-section-title">{user.role === 'instructor' ? 'Your Popular Courses' : 'Recommended for You'}</h2>
          <div className="sb-featured-grid">
            <div className="sb-featured-card">
              <div className="sb-featured-image">🎨</div>
              <div className="sb-featured-content">
                <h4>Web Design Fundamentals</h4>
                <p>Learn the basics of modern web design</p>
                <div className="sb-featured-meta">
                  <span className="sb-rating">⭐ 4.8</span>
                  <span className="sb-students">👥 1.2k students</span>
                </div>
              </div>
            </div>
            
            <div className="sb-featured-card">
              <div className="sb-featured-image">⚛️</div>
              <div className="sb-featured-content">
                <h4>React Development</h4>
                <p>Master React from basics to advanced</p>
                <div className="sb-featured-meta">
                  <span className="sb-rating">⭐ 4.9</span>
                  <span className="sb-students">👥 2.1k students</span>
                </div>
              </div>
            </div>
            
            <div className="sb-featured-card">
              <div className="sb-featured-image">🐍</div>
              <div className="sb-featured-content">
                <h4>Python Programming</h4>
                <p>Complete Python course for beginners</p>
                <div className="sb-featured-meta">
                  <span className="sb-rating">⭐ 4.7</span>
                  <span className="sb-students">👥 3.5k students</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

