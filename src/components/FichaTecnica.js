import React from 'react';
import IngredientesList from './IngredientesList';

const FichaTecnica = ({ data, onUpdate }) => {
  const handleChange = (field, value) => {
    onUpdate({ ...data, [field]: value });
  };
  
  const handleIngredientesChange = (newIngredientes) => {
     onUpdate({ ...data, ingredientes: newIngredientes });
  };

  return (
    <div id="ficha-tecnica-container" className="ficha-card">
      <input 
        type="text"
        value={data.nomeProduto}
        onChange={(e) => handleChange('nomeProduto', e.target.value)}
        className="ficha-title-input"
        placeholder="Nome do Produto"
      />
      
      <div className="ficha-section">
        <h3>Descrição do Produto</h3>
        <textarea
          value={data.descricaoProduto}
          onChange={(e) => handleChange('descricaoProduto', e.target.value)}
          className="textarea-input"
          rows="3"
        />
      </div>

      <IngredientesList 
        ingredientes={data.ingredientes || []}
        onUpdate={handleIngredientesChange}
      />

      <div className="ficha-section">
        <h3>Modo de Preparo</h3>
        <textarea
          value={data.modoPreparo}
          onChange={(e) => handleChange('modoPreparo', e.target.value)}
          className="textarea-input"
          rows="8"
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div className="ficha-section">
          <h3>Tempo de Preparo</h3>
          <input
            type="text"
            value={data.tempoPreparo}
            onChange={(e) => handleChange('tempoPreparo', e.target.value)}
            className="text-input"
          />
        </div>
        <div className="ficha-section">
          <h3>Rendimento</h3>
          <input
            type="text"
            value={data.rendimento}
            onChange={(e) => handleChange('rendimento', e.target.value)}
            className="text-input"
          />
        </div>
      </div>

       <div className="ficha-section">
          <h3>Informações Nutricionais (Estimado)</h3>
          <input
            type="text"
            value={data.informacoesNutricionais}
            onChange={(e) => handleChange('informacoesNutricionais', e.target.value)}
            className="text-input"
          />
        </div>
    </div>
  );
};

export default FichaTecnica;