import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function InstructorHome() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard after a brief moment
    const timer = setTimeout(() => {
      navigate('/dashboard', { replace: true });
    }, 100);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="sb-container">
      <h1>Welcome, Instructor!</h1>
      <p className="sb-muted">Redirecting to your dashboard...</p>
    </div>
  );
}
