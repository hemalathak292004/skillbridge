import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../../components/AuthLayout.jsx'
import { api } from '../../services/api.js'
import { useAuth } from '../../context/AuthContext.jsx'
import { useState } from 'react'

export default function StudentLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const { login } = useAuth()

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      const data = await api('/api/auth/login', { method: 'POST', body: { email, password } })
      if (data?.user?.role !== 'student') throw new Error('Not a student account')
      login(data)
      navigate('/student/home')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <AuthLayout title="Student Login" subtitle="Log in to continue learning">
      <form className="sb-form" onSubmit={onSubmit}>
        <div className="sb-field">
          <label>Email</label>
          <input type="email" placeholder="you@student.edu" required value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div className="sb-field">
          <label>Password</label>
          <input type="password" placeholder="••••••••" required value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        {error && <p className="sb-error">{error}</p>}
        <button className="sb-btn primary w-full" type="submit">Log In</button>
        <p className="sb-muted center">No account? <Link to="/student/signup">Sign up</Link></p>
      </form>
    </AuthLayout>
  )
} 
