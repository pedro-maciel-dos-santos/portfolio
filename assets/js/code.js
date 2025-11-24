document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todos os botões de cópia
    const copyButtons = document.querySelectorAll('.copy-btn');

    // 2. Itera sobre cada botão para adicionar o ouvinte de evento
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Pega o ID do alvo (o elemento <code>) a partir do atributo data-target
            const targetId = button.getAttribute('data-target');
            const codeElement = document.getElementById(targetId);

            // Verifica se o elemento existe
            if (codeElement) {
                // Obtém o texto puro dentro do <code> para copiar
                const textToCopy = codeElement.textContent;

                // Usa a API de Clipboard para copiar o texto
                navigator.clipboard.writeText(textToCopy).then(() => {
                    // --- Início do Feedback Visual ---
                    const originalText = button.textContent;
                    
                    // 1. Define o novo estado e texto
                    button.textContent = 'Copiado!';
                    button.setAttribute('data-state', 'copied'); // Adiciona o estado para o CSS de sucesso
                    
                    // 2. Volta ao estado original após 2 segundos
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.removeAttribute('data-state'); // Remove o estado de sucesso
                    }, 2000);
                    // --- Fim do Feedback Visual ---
                    
                }).catch(err => {
                    console.error('Falha ao copiar o texto: ', err);
                    alert('Erro ao tentar copiar o código. Verifique as permissões.');
                });
            }
        });
    });
});