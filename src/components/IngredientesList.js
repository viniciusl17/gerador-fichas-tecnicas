import React from 'react';

// Estilos para os elementos internos do componente
const styles = {
    ingredienteItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '0.5rem',
    },
    inputItem: {
        flex: '3', // O nome do ingrediente ocupa mais espaço
    },
    inputQuantidade: {
        flex: '1',
    },
    removeBtn: {
        background: '#e74c3c',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '28px',
        height: '28px',
        cursor: 'pointer',
        fontSize: '1rem',
        lineHeight: '28px',
        textAlign: 'center',
    },
    addBtn: {
        backgroundColor: 'transparent',
        color: 'var(--primary-color)',
        border: '1px solid var(--primary-color)',
        borderRadius: '4px',
        padding: '8px 12px',
        cursor: 'pointer',
        marginTop: '0.5rem',
        fontWeight: '500',
    }
};

const IngredientesList = ({ ingredientes, onUpdate }) => {
  
  const handleUpdate = (index, field, value) => {
    const novosIngredientes = [...ingredientes];
    novosIngredientes[index] = { ...novosIngredientes[index], [field]: value };
    onUpdate(novosIngredientes);
  };

  const handleRemoveIngrediente = (index) => {
    const novosIngredientes = ingredientes.filter((_, i) => i !== index);
    onUpdate(novosIngredientes);
  };

  const handleAddIngrediente = () => {
    onUpdate([...ingredientes, { item: '', quantidade: '' }]);
  };

  return (
    <div className="ficha-section">
      <h3>Ingredientes</h3>
      <div>
        {ingredientes.map((ing, index) => (
          <div key={index} style={styles.ingredienteItem}>
            <input
              type="text"
              value={ing.item}
              onChange={(e) => handleUpdate(index, 'item', e.target.value)}
              placeholder="Nome do ingrediente"
              className="text-input"
              style={styles.inputItem}
            />
            <input
              type="text"
              value={ing.quantidade}
              onChange={(e) => handleUpdate(index, 'quantidade', e.target.value)}
              placeholder="Ex: 500g"
              className="text-input"
              style={styles.inputQuantidade}
            />
            <button 
              onClick={() => handleRemoveIngrediente(index)} 
              style={styles.removeBtn}
              title="Remover Ingrediente"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      <button onClick={handleAddIngrediente} style={styles.addBtn}>
        + Adicionar Ingrediente
      </button>
    </div>
  );
};

export default IngredientesList;