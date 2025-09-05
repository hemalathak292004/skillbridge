import { Link } from 'react-router-dom'

export default function Logo({ size = 28, withText = true }) {
  return (
    <Link to="/" className="sb-logo" aria-label="SkillBridge Home">
      <img src="/skillbridge.svg" alt="SkillBridge logo" width={size} height={size} />
      {withText && <span className="sb-logo-text">SkillBridge</span>}
    </Link>
  )
} 