import React, { useState } from 'react';

const promptContainerStyle = {
  display: 'flex',
  gap: '1rem',
  marginBottom: '2rem',
};

const PromptInput = ({ onGerar, disabled }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim() && !disabled) {
      onGerar(prompt);
      setPrompt(''); // Limpa o campo após o envio
    }
  };

  return (
    <form onSubmit={handleSubmit} style={promptContainerStyle}>
      <input
        type="text"
        className="text-input"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Digite um produto. Ex: Crie uma ficha para hambúrguer artesanal"
        disabled={disabled}
        style={{ flexGrow: 1 }}
      />
      <button type="submit" className="primary-button" disabled={disabled}>
        {disabled ? 'Gerando...' : 'Gerar com IA'}
      </button>
    </form>
  );
};

export default PromptInput;