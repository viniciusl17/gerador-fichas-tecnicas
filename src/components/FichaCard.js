import React from 'react';
import { useNavigate } from 'react-router-dom';

const cardStyle = {
  backgroundColor: 'var(--card-background)',
  borderRadius: '8px',
  padding: '1rem',
  boxShadow: '0 2px 5px var(--shadow-color)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderLeft: '5px solid var(--primary-color)'
};

const FichaCard = ({ ficha, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${ficha.id}`);
  };

  return (
    <div style={cardStyle}>
      <h3>{ficha.nomeProduto}</h3>
      <p style={{color: 'var(--text-secondary)', flexGrow: 1}}>{ficha.descricaoProduto.substring(0, 100)}...</p>
      <div style={{display: 'flex', gap: '0.5rem', marginTop: '1rem'}}>
        <button onClick={handleEdit} className="primary-button" style={{flex: 1}}>Editar</button>
        <button onClick={() => onDelete(ficha.id)} className="primary-button" style={{backgroundColor: '#c0392b'}}>Excluir</button>
      </div>
    </div>
  );
};
export default FichaCard;