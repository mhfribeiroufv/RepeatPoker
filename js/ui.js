export class UI {
  constructor() {
    this.gridEl = document.getElementById('grid');
    this.leftEl = document.getElementById('left');
    this.scoreEl = document.getElementById('score');
    this.nextEl = document.getElementById('next');
    this.histEl = document.getElementById('history');
    this.deckDraw = document.getElementById('deck-back');
    this.btnNew = document.getElementById('btn-new');
  }

  renderGrid(grid) {
    this.gridEl.innerHTML = '';
    const total = grid.rows * grid.cols;
    for (let i=0; i<total; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.index = i;
      this.gridEl.appendChild(cell);
    }
  }

  onCellClick(handler) {
    this.gridEl.addEventListener('click', (e) => {
      const cell = e.target.closest('.cell');
      if (!cell) return;
      const index = Number(cell.dataset.index);
      handler(index);
    });
  }

  setCell(r, c, card) {
    const index = r*5 + c;
    const cell = this.gridEl.children[index];
    cell.classList.add('filled');
    cell.innerHTML = '';
    const img = document.createElement('img');
    img.src = card.imagePath;
    img.alt = card.toString();
    cell.appendChild(img);
  }

  removePositions(positions) {
    for (const [r,c] of positions) {
      const index = r*5 + c;
      const cell = this.gridEl.children[index];
      cell.classList.remove('filled');
      cell.innerHTML = '';
    }
  }

  flashRow(rowIndex) {
    for (let c=0; c<5; c++) {
      const i = rowIndex*5 + c;
      this.gridEl.children[i].classList.add('highlight');
      setTimeout(()=> this.gridEl.children[i].classList.remove('highlight'), 600);
    }
  }

  updateLeft(n) { this.leftEl.textContent = n; }
  updateScore(s) { this.scoreEl.textContent = s; }
  showNext(card) {
    this.nextEl.src = card ? card.imagePath : './cartas/card_empty.png';
    this.nextEl.alt = card ? card.toString() : 'sem carta';
  }

  log(msg) {
    const li = document.createElement('li');
    li.textContent = msg;
    this.histEl.prepend(li);
  }
  logClear() { this.histEl.innerHTML=''; }

  enableDraw(on) { this.deckDraw.disabled = !on; }

  setDeckEnabled(on) {
    this.deckDraw.style.pointerEvents = on ? 'auto' : 'none';
    this.deckDraw.style.opacity = on ? '1' : '0.5';
  }

}
