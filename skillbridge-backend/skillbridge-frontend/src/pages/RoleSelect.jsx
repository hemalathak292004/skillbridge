import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'

export default function RoleSelect() {
  return (
    <AuthLayout title="Welcome to SkillBridge" subtitle="Choose your role to continue">
      <div className="sb-grid-2">
        <div className="sb-role student">
          <h2>Student</h2>
          <p className="sb-muted">Learn from videos, take quizzes, and track progress.</p>
          <div className="sb-actions">
            <Link className="sb-btn primary" to="/student/login">Student Login</Link>
            <Link className="sb-btn ghost" to="/student/signup">Create Student Account</Link>
          </div>
        </div>
        <div className="sb-role instructor">
          <h2>Instructor</h2>
          <p className="sb-muted">Upload lectures, notes, quizzes, and monitor student progress.</p>
          <div className="sb-actions">
            <Link className="sb-btn accent" to="/instructor/login">Instructor Login</Link>
            <Link className="sb-btn ghost" to="/instructor/signup">Create Instructor Account</Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
} 