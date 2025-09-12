import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function DashboardLayout({ children }) {
  return (
    <div className="sb-dashboard">
      <Topbar />
      <div className="sb-dashboard-body">
        <Sidebar />
        <main className="sb-dashboard-main">
          {children}
        </main>
      </div>
    </div>
  )
}
