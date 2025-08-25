import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CriarFichaPage from './pages/CriarFichaPage';
import FichasSalvasPage from './pages/FichasSalvasPage';
import { useLocalStorage } from './hooks/useLocalStorage';
import './styles/App.css';

function App() {
  const [fichas, setFichas] = useLocalStorage('fichasTecnicas', []);

  return (
    <div className="page-container">
      <Header />
      <main>
        <Routes>
          <Route 
            path="/" 
            element={<CriarFichaPage fichas={fichas} setFichas={setFichas} />} 
          />
          <Route 
            path="/edit/:id" 
            element={<CriarFichaPage fichas={fichas} setFichas={setFichas} />} 
          />
          <Route 
            path="/salvas" 
            element={<FichasSalvasPage fichas={fichas} setFichas={setFichas} />} 
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;