// A chave de API agora é lida de forma segura a partir das variáveis de ambiente.
const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

// Adicionando um console.log para ter certeza que a chave está sendo carregada.
console.log('CHAVE DE API CARREGADA:', API_KEY ? 'Sim' : 'Não/Undefined');


export const gerarFichaTecnicaIA = async (promptUsuario) => {
  // Verifica se a chave de API foi carregada corretamente.
  if (!API_KEY) {
    console.error("Chave de API do Gemini não encontrada. Verifique seu arquivo .env.local");
    throw new Error("API Key not found.");
  }
  
  // Prompt refinado para ser mais direto ao ponto.
  const promptParaIA = `
    Sua única tarefa é gerar um objeto JSON para uma ficha técnica sobre "${promptUsuario}".
    NÃO inclua nenhuma palavra antes do JSON.
    NÃO inclua markdown como \`\`\`json.
    Sua resposta deve ser APENAS o JSON.
    O JSON deve ter a seguinte estrutura:
    {
      "nomeProduto": "Nome do Produto",
      "descricaoProduto": "Uma descrição breve e atraente.",
      "ingredientes": [
        { "item": "Ingrediente 1", "quantidade": "" },
        { "item": "Ingrediente 2", "quantidade": "" }
      ],
      "modoPreparo": "1. Primeiro passo... 2. Segundo passo...",
      "informacoesNutricionais": "Calorias: X kcal, Proteínas: Y g, Carboidratos: Z g",
      "tempoPreparo": "Aproximadamente X minutos",
      "rendimento": "Serve X pessoas ou rende Y unidades"
    }
  `;

  // CORREÇÃO FINAL: O nome do modelo foi atualizado para "gemini-1.5-flash-latest"
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: promptParaIA }] }],
      }),
    });

    // Se a resposta não for OK, vamos capturar e mostrar o corpo do erro.
    if (!response.ok) {
      const errorBody = await response.json();
      console.error("Erro da API do Google:", errorBody);
      throw new Error(`Falha na API: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Tratamento de segurança caso a resposta não venha como esperado
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
        console.error("Resposta da API em formato inesperado:", data);
        throw new Error("Formato de resposta inesperado da IA.");
    }
    
    const jsonText = data.candidates[0].content.parts[0].text;
    return JSON.parse(jsonText);

  } catch (error) {
    console.error("Erro ao processar a requisição para a IA:", error);
    throw error;
  }
};