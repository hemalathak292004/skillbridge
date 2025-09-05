import Logo from './Logo.jsx'

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="sb-auth-wrap">
      <header className="sb-auth-header">
        <Logo size={32} />
      </header>
      <main className="sb-auth-main">
        <div className="sb-auth-card">
          <h1 className="sb-auth-title">{title}</h1>
          {subtitle && <p className="sb-auth-subtitle">{subtitle}</p>}
          {children}
        </div>
      </main>
      <footer className="sb-auth-footer">
        <p className="sb-muted">© {new Date().getFullYear()} SkillBridge</p>
      </footer>
    </div>
  )
} 