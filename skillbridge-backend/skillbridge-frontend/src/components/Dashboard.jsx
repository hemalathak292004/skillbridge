import './Dashboard.css'

export default function Dashboard({ sidebar, children, header }) {
  return (
    <div className="sb-dashboard">
      <aside className="sb-sidebar">
        {sidebar}
      </aside>
      <main className="sb-main">
        {header ? <header className="sb-header">{header}</header> : null}
        <section className="sb-content">
          {children}
        </section>
      </main>
    </div>
  )
}



