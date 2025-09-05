import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../../components/AuthLayout.jsx'
import { api } from '../../services/api.js'
import { useAuth } from '../../context/AuthContext.jsx'
import { useState } from 'react'

export default function InstructorSignup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const { login } = useAuth()

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      const data = await api('/api/auth/register', { method: 'POST', body: { name, email, password, role: 'instructor' } })
      login(data) // New instructor goes directly to instructor home
      navigate('/instructor/home')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <AuthLayout title="Create Instructor Account" subtitle="Start teaching on SkillBridge">
      <form className="sb-form" onSubmit={onSubmit}>
        <div className="sb-field">
          <label>Full name</label>
          <input type="text" placeholder="John Smith" required value={name} onChange={e=>setName(e.target.value)} />
        </div>
        <div className="sb-field">
          <label>Email</label>
          <input type="email" placeholder="you@instructor.edu" required value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div className="sb-field">
          <label>Password</label>
          <input type="password" placeholder="Create a strong password" required value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        {error && <p className="sb-error">{error}</p>}
        <button className="sb-btn accent w-full" type="submit">Create Account</button>
        <p className="sb-muted center">Already have an account? <Link to="/instructor/login">Log in</Link></p>
      </form>
    </AuthLayout>
  )
} 
