import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <header style={{ padding: '1rem', background: '#f4f4f4' }}>
        <h2>GitHub User Search</h2>
      </header>

      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<h3>Home</h3>} />
          <Route path="/search" element={<h3>Search Users</h3>} />
        </Routes>
      </main>
    </>
  )
}

export default App
