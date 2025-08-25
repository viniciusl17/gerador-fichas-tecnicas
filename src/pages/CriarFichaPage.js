import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PromptInput from '../components/PromptInput';
import FichaTecnica from '../components/FichaTecnica';
import Loader from '../components/Loader';
import { gerarFichaTecnicaIA } from '../services/aiApi';
import { gerarPdfDaFicha } from '../services/pdfGenerator'; // <-- MUDANÇA: Importa o novo serviço de PDF

const CriarFichaPage = ({ fichas, setFichas }) => {
  const [fichaAtiva, setFichaAtiva] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fichaExistente = fichas.find(f => f.id === id);
      if (fichaExistente) {
        setFichaAtiva(fichaExistente);
      } else {
        navigate('/'); // Redireciona se o ID não for encontrado
      }
    } else {
      setFichaAtiva(null); // Limpa ao ir para a página de criação
    }
  }, [id, fichas, navigate]);

  const handleGerarFicha = async (prompt) => {
    setIsLoading(true);
    setError('');
    setFichaAtiva(null);
    try {
      const novaFicha = await gerarFichaTecnicaIA(prompt);
      setFichaAtiva({ ...novaFicha, id: `ficha_${Date.now()}` });
    } catch (err) {
      setError('Erro ao gerar a ficha técnica. Verifique sua chave de API e tente novamente.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateFicha = (updatedFicha) => {
    setFichaAtiva(updatedFicha);
  };
  
  const handleSalvarFicha = () => {
    if (!fichaAtiva) return;

    const index = fichas.findIndex(f => f.id === fichaAtiva.id);
    let novasFichas;

    if (index > -1) {
      // Atualiza ficha existente
      novasFichas = [...fichas];
      novasFichas[index] = fichaAtiva;
    } else {
      // Adiciona nova ficha
      novasFichas = [...fichas, fichaAtiva];
    }
    
    setFichas(novasFichas);
    navigate(`/salvas`);
  };

  // MUDANÇA: A função agora é muito mais simples!
  const handleGerarPDF = () => {
    if (fichaAtiva) {
      gerarPdfDaFicha(fichaAtiva);
    } else {
      alert("Não há ficha ativa para gerar o PDF.");
    }
  };

  return (
    <div>
      <PromptInput onGerar={handleGerarFicha} disabled={isLoading} />
      {isLoading && <Loader />}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {fichaAtiva && (
        <>
          <FichaTecnica 
            data={fichaAtiva} 
            onUpdate={handleUpdateFicha} 
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem' }}>
            <button onClick={handleSalvarFicha} className="primary-button">
              {id ? 'Atualizar Ficha' : 'Salvar Ficha'}
            </button>
            <button onClick={handleGerarPDF} className="primary-button">
              Gerar PDF
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CriarFichaPage;