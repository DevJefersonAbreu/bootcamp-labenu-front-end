import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ErrorPage from './pages/ErrorPage';

// Página de Produto
function ProductPage() {
  return (
    <section>
      <h1>Página do Produto</h1>
      {/* Aqui você pode adicionar lógica para exibir detalhes do produto */}
    </section>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Página Inicial</Link></li>
          <li><Link to="/profile">Página de Perfil</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
