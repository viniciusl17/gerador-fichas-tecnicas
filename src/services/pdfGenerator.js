import { jsPDF } from 'jspdf';

export const gerarPdfDaFicha = (ficha) => {
  const doc = new jsPDF('p', 'mm', 'a4');

  const pageHeight = doc.internal.pageSize.getHeight();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 15;
  const maxWidth = pageWidth - margin * 2;
  let y = 20;

  const primaryColor = '#008080';
  const textColor = '#333333';
  // NOVO: Cor para o texto do rodapé
  const footerColor = '#888888';

  // Função para adicionar o rodapé em todas as páginas (se houver mais de uma)
  const addFooter = () => {
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      
      const footerY = pageHeight - 15;
      const lineY = footerY - 2;
      
      // Linha separadora do rodapé
      doc.setDrawColor(primaryColor);
      doc.setLineWidth(0.2);
      doc.line(margin, lineY, pageWidth - margin, lineY);

      // Texto do rodapé
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(footerColor);
      const footerText = `Desenvolvido por Vinícius Leal© ${new Date().getFullYear()} | Todos os direitos reservados.`;
      doc.text(footerText, pageWidth / 2, footerY, { align: 'center' });
    }
  };

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(primaryColor);
  doc.text(ficha.nomeProduto, pageWidth / 2, y, { align: 'center' });
  y += 15;

  const drawSection = (title, bodyText) => {
    // Aumentamos a margem inferior para dar espaço ao rodapé
    if (y > pageHeight - 25) {
      doc.addPage();
      y = margin;
    }
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(primaryColor);
    doc.text(title, margin, y);
    y += 7;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.setTextColor(textColor);
    
    const lines = doc.splitTextToSize(bodyText, maxWidth);
    doc.text(lines, margin, y);
    
    y += (lines.length * 5) + 5; 
  };
  
  // 4. DESENHA AS SEÇÕES DO DOCUMENTO
  drawSection('Descrição do Produto', ficha.descricaoProduto);

  // MUDANÇA: Formato dos ingredientes invertido para "Item - Quantidade"
  drawSection('Ingredientes', 
    ficha.ingredientes.map(ing => `- ${ing.item} - ${ing.quantidade || '(sem qtd.)'}`).join('\n')
  );

  drawSection('Modo de Preparo', ficha.modoPreparo);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(primaryColor);
  doc.text('Detalhes', margin, y);
  y += 7;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(textColor);

  const tempoLines = doc.splitTextToSize(`Tempo de Preparo: ${ficha.tempoPreparo}`, maxWidth);
  doc.text(tempoLines, margin, y);
  y += (tempoLines.length * 5);

  const rendimentoLines = doc.splitTextToSize(`Rendimento: ${ficha.rendimento}`, maxWidth);
  doc.text(rendimentoLines, margin, y);
  y += (rendimentoLines.length * 5) + 5;

  const nutricionalLines = doc.splitTextToSize(`Informações Nutricionais: ${ficha.informacoesNutricionais}`, maxWidth);
  doc.text(nutricionalLines, margin, y);
  y += (nutricionalLines.length * 5);
  
  // NOVO: Adiciona o rodapé antes de salvar
  addFooter();
  
  // 5. SALVA O ARQUIVO
  doc.save(`${ficha.nomeProduto.replace(/ /g, '_') || 'ficha-tecnica'}.pdf`);
};