import Dashboard from '../components/Dashboard'

export default function StudentHome() {
  return (
    <Dashboard
      sidebar={(
        <nav className="sb-nav">
          <a href="#">Overview</a>
          <a href="#">My Courses</a>
          <a href="#">Assignments</a>
          <a href="#">Settings</a>
        </nav>
      )}
      header={(
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <strong>Student Dashboard</strong>
          <input placeholder="Search..." style={{
            background: '#0f172a', border: '1px solid #1f2937', color: '#e5e7eb',
            borderRadius: 8, padding: '6px 10px', width: 220
          }} />
        </div>
      )}
    >
      <h1>Welcome, Student!</h1>
      <p className="sb-muted">You can continue learning from your dashboard.</p>
    </Dashboard>
  );
}
