import React from 'react';

const loaderOverlayStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  textAlign: 'center',
  color: 'var(--text-secondary)',
};

const Loader = () => {
  return (
    <div style={loaderOverlayStyle}>
      <div className="spinner"></div>
      <p style={{ marginTop: '1rem' }}>Aguarde, a IA está criando sua ficha técnica...</p>
    </div>
  );
};

export default Loader;