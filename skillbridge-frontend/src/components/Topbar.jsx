import { useAuth } from '../context/AuthContext'
import Logo from './Logo'

export default function Topbar() {
  const { user, logout } = useAuth()

  return (
    <header className="sb-topbar">
      <div className="sb-topbar-left">
        <Logo size={22} />
      </div>
      <div className="sb-topbar-right">
        <div className="sb-user">
          <div className="sb-user-info">
            <span className="sb-user-name">{user?.name || 'Guest'}</span>
            <span className="sb-user-role">{user?.role === 'instructor' ? 'Instructor' : 'Student'}</span>
          </div>
          <button onClick={logout} className="sb-logout-btn">
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}
