import { Routes, Route, Navigate } from 'react-router-dom'
import RoleSelect from './pages/RoleSelect.jsx'
import StudentLogin from './pages/auth/StudentLogin.jsx'
import StudentSignup from './pages/auth/StudentSignup.jsx'
import InstructorLogin from './pages/auth/InstructorLogin.jsx'
import InstructorSignup from './pages/auth/InstructorSignup.jsx'
import StudentHome from './pages/StudentHome.jsx'
import InstructorHome from './pages/InstructorHome.jsx'
import { AuthProvider, useAuth } from './context/AuthContext.jsx'
import './App.css'

function Protected({ children, role }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/" replace />;
  if (role && user.role !== role) return <Navigate to="/" replace />;
  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <div className="sb-app">
        <Routes>
          <Route path="/" element={<RoleSelect />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student/signup" element={<StudentSignup />} />
          <Route path="/instructor/login" element={<InstructorLogin />} />
          <Route path="/instructor/signup" element={<InstructorSignup />} />
          <Route path="/student/home" element={
            <Protected role="student"><StudentHome /></Protected>
          } />
          <Route path="/instructor/home" element={
            <Protected role="instructor"><InstructorHome /></Protected>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </AuthProvider>
  )
}
