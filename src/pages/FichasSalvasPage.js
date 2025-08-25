import React from 'react';
import { Link } from 'react-router-dom';
import FichaCard from '../components/FichaCard';

const FichasSalvasPage = ({ fichas, setFichas }) => {
  const handleDelete = (idToDelete) => {
    const novasFichas = fichas.filter(f => f.id !== idToDelete);
    setFichas(novasFichas);
  };
  
  if (fichas.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h2>Nenhuma ficha salva ainda.</h2>
        <p>Vá para a <Link to="/">página de criação</Link> para gerar sua primeira ficha.</p>
      </div>
    );
  }
  
  return (
    <div>
      <h2 style={{borderBottom: '2px solid var(--primary-color)', paddingBottom: '10px'}}>Minhas Fichas Técnicas</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {fichas.map(ficha => (
          <FichaCard key={ficha.id} ficha={ficha} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default FichasSalvasPage;