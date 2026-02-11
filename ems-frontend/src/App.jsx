function Header() {
  return (
    <header style={{ backgroundColor: '#f4f4f4', padding: '10px' }}>
      <h2 style={{ color: '#000000' }}>Apex Management System</h2>
    </header>
  );
}

function Footer() {
  return (
    <div>
      <p>Mihiranga Dev</p>
      <p>© 2026 Apex-EMS Portal</p>
    </div>
  );
}


function App() {

  return (
    <div>
      <Header/>

      <main>
        <h3>Dashboard</h3>
        <p>Hello, Admin. Welcome back.</p>
      </main>

      <Footer/>
    </div>
  );
}

export default App;