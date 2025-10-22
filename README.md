# Repeat Poker — Prática de Orientação a Objetos em JavaScript

Projeto desenvolvido para a disciplina **INF321 — Projeto e Desenvolvimento de Sistemas para a Web**  
Departamento de Ciência da Computação — Universidade Federal de Viçosa (UFV)  
Professor: [Marcos H. F. Ribeiro](https://github.com/mhfribeiroufv)

---

## Objetivo

Esta prática tem como objetivo aplicar os conceitos de **Orientação a Objetos (OO)** em JavaScript (ES6), utilizando um jogo de cartas — o **Repeat Poker** — como estudo de caso.

Os estudantes devem implementar as classes e métodos responsáveis pela **lógica do jogo**, enquanto a interface (HTML, CSS e módulo `ui.js`) já é fornecida pronta.

---

## Estrutura do Projeto

```bash
RepeatPoker/
├── index.html
├── styles.css
├── cartas/
│ ├── card_spades_A.png
│ ├── card_hearts_K.png
│ ├── ...
│ └── card_back.png
└── js/
├── main.js ← ponto de entrada
├── ui.js ← interface pronta
├── card.js ← implementar
├── deck.js ← implementar
├── grid.js ← implementar
├── evaluator.js ← implementar
└── game.js ← implementar parcialmente4
```

---

## Conceitos trabalhados

- Modelagem de classes e encapsulamento  
- Cooperação entre objetos (Deck, Card, Grid, Game)  
- Manipulação de arrays e matrizes  
- Lógica de jogo e avaliação de combinações de cartas  
- Separação entre lógica de negócio e camada de interface (UI)

---

## Execução local

O jogo é executado **diretamente no navegador**, sem necessidade de servidor.

---

## Implementação esperada

As seguintes classes e funções devem ser implementadas pelos estudantes:

| Arquivo        | O que implementar                                              |
| -------------- | -------------------------------------------------------------- |
| `card.js`      | Classe `Card` com `suit`, `rank`, `value`, e `imagePath()`     |
| `deck.js`      | Classe `Deck` com construtor, embaralhamento e método `draw()` |
| `grid.js`      | Classe `Grid` com posicionamento e remoção de cartas           |
| `evaluator.js` | Função `evaluateLine()` que detecta e pontua mãos de pôquer    |
| `game.js`      | Classe `Game` coordenando o fluxo geral do jogo                |

---

## Créditos e Atribuições

- **Cartas e ícones visuais:**  
  Assets de cartas e elementos gráficos utilizados neste projeto foram criados por  
  [Kenney.nl](https://kenney.nl/assets), distribuídos sob a licença **CC0 1.0 Universal (Public Domain)**.  
  A coleção utilizada foi adaptada do pacote *"Playing Cards Pack"*.

- **Regras do jogo "Repeat Poker":**  
  Baseadas na descrição publicada em [Pagat.com – Repeat Poker Rules](https://www.pagat.com/invented/repeat_poker.html),  
  de acordo com as regras originais descritas por **Pramod Mulay**.  
  O projeto tem caráter **didático e não comercial**, destinado exclusivamente a fins educacionais.

- **Fonte tipográfica (quando aplicável):**  
  Se alguma fonte proveniente do pacote Kenney Fonts ou similar for utilizada, ela também é disponibilizada sob licença CC0.

---

## Licenças de uso:

Todos os assets e textos externos utilizados seguem suas respectivas licenças originais.  
Os demais arquivos do projeto (código-fonte, estrutura HTML/CSS/JS e documentação) estão sob **licença educacional livre**, podendo ser reutilizados para fins acadêmicos mediante atribuição.

### Autor

Marcos H. F. Ribeiro
Departamento de Informática - Universidade Federal de Viçosa (UFV)