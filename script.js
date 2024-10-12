// JavaScript para abrir/fechar as caixas de informação
const caixasInfo = document.querySelectorAll('.caixa-info');

caixasInfo.forEach(caixa => {
    caixa.addEventListener('click', () => {
        caixa.classList.toggle('aberta');
        caixa.classList.toggle('fechada');
    });
});