# SkillBridge Dashboard

## Overview
The SkillBridge Dashboard is a comprehensive, role-based dashboard that provides different experiences for students and instructors after authentication.

## Features

### For Students:
- **Overview Stats**: Enrolled courses, completed courses, in-progress courses
- **Quick Actions**: Browse courses, view my courses, check assignments, view certificates
- **Recent Activity**: Track learning progress and course updates
- **Recommended Courses**: Personalized course recommendations

### For Instructors:
- **Overview Stats**: Total courses, completed courses, in-progress courses, total students
- **Quick Actions**: Create new courses, view analytics, manage students, create assignments
- **Recent Activity**: Track student enrollments, assignment submissions, course updates
- **Popular Courses**: View your most popular courses

## Technical Details

### Components:
- `Dashboard.jsx` - Main dashboard component with role-based rendering
- `Dashboard.css` - Comprehensive styling with modern design
- Integrated with existing `Logo.jsx` component
- Uses existing `AuthContext` for user management

### Routing:
- `/dashboard` - Main dashboard route (protected)
- All login/signup flows redirect to `/dashboard`
- Existing home routes redirect to dashboard

### Authentication:
- Fully integrated with existing authentication system
- Role-based access control (student/instructor)
- Automatic logout functionality
- Persistent user session

## Setup Instructions

1. **Backend**: Ensure your backend server is running on `http://localhost:5000`
2. **Frontend**: Start the frontend development server
3. **Environment**: The dashboard uses the existing API configuration

## Usage

1. **Login/Signup**: Use existing authentication flows
2. **Dashboard Access**: After successful authentication, users are automatically redirected to `/dashboard`
3. **Role-based Content**: The dashboard automatically adapts based on user role
4. **Logout**: Click the logout button in the top-right corner

## Customization

The dashboard is designed to be easily customizable:
- Modify `Dashboard.jsx` to add new features
- Update `Dashboard.css` for styling changes
- Add new API endpoints to fetch real data
- Extend the stats and activity sections as needed

## Integration with Backend

The dashboard is ready to integrate with your backend:
- User data is available through `AuthContext`
- API calls can be made using the existing `api.js` service
- Stats and activity data can be fetched from your backend endpoints

