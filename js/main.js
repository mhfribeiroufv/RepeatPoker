import { UI } from './ui.js';
import { Game } from './game.js';

const ui = new UI();
const game = new Game(ui);

ui.onCellClick((index) => game.placeAt(index));

document.getElementById('deck-back').addEventListener('click', () => game.draw());
document.getElementById('btn-new').addEventListener('click', () => {
    // só reinicia se o jogador confirmar
    const confirmar = window.confirm("Tem certeza de que deseja iniciar um novo jogo?");
    if (!confirmar) return; // cancela a ação se clicar em "Cancelar"
    
    game.newGame();
});
