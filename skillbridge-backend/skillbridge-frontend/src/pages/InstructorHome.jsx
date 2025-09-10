import Dashboard from '../components/Dashboard'

export default function InstructorHome() {
  return (
    <Dashboard
      sidebar={(
        <nav className="sb-nav">
          <a href="#">Overview</a>
          <a href="#">Courses</a>
          <a href="#">Students</a>
          <a href="#">Reports</a>
          <a href="#">Settings</a>
        </nav>
      )}
      header={(
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <strong>Instructor Dashboard</strong>
          <input placeholder="Search..." style={{
            background: '#0f172a', border: '1px solid #1f2937', color: '#e5e7eb',
            borderRadius: 8, padding: '6px 10px', width: 220
          }} />
        </div>
      )}
    >
      <h1>Welcome, Instructor!</h1>
      <p className="sb-muted">Manage your courses, materials, and student progress here.</p>
    </Dashboard>
  );
}
