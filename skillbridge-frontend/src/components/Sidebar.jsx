import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="sb-sidebar" aria-label="Sidebar">
      <div className="sb-sidebar-inner">
        <nav className="sb-nav">
          <NavLink to="/dashboard" end className={({ isActive }) => `sb-nav-item${isActive ? ' active' : ''}`}>
            <span className="sb-nav-icon">📊</span>
            Overview
          </NavLink>
          <NavLink to="/dashboard/courses" className={({ isActive }) => `sb-nav-item${isActive ? ' active' : ''}`}>
            <span className="sb-nav-icon">📚</span>
            Courses
          </NavLink>
          <NavLink to="/dashboard/assignments" className={({ isActive }) => `sb-nav-item${isActive ? ' active' : ''}`}>
            <span className="sb-nav-icon">📝</span>
            Assignments
          </NavLink>
          <NavLink to="/dashboard/analytics" className={({ isActive }) => `sb-nav-item${isActive ? ' active' : ''}`}>
            <span className="sb-nav-icon">📈</span>
            Analytics
          </NavLink>
          <NavLink to="/dashboard/settings" className={({ isActive }) => `sb-nav-item${isActive ? ' active' : ''}`}>
            <span className="sb-nav-icon">⚙️</span>
            Settings
          </NavLink>
        </nav>
      </div>
    </aside>
  )
}
