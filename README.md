# Pokédex

Uma aplicação web de Pokédex construída com **SvelteKit 5** e **TypeScript** como projeto de aprendizado. Navegue pelos 151 Pokémon originais de Kanto, confira um Pokémon aleatório do dia e explore seus tipos e descrições.

Desenvolvido por [Matheus Piovesan](https://github.com/m-piovesan).

---

## Tecnologias Utilizadas

- [SvelteKit 5](https://svelte.dev/docs/kit/introduction) — framework full-stack
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática
- [SCSS](https://sass-lang.com/) — estilização com variáveis e mixins
- [Axios](https://axios-http.com/) — requisições HTTP para a PokéAPI
- [Lucide Svelte](https://lucide.dev/) — ícones
- [Vite 5](https://vitejs.dev/) — ferramenta de build

---

## Pré-requisitos

Certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) **v18 ou superior**
- **npm** (já incluído com o Node.js)

---

## Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/m-piovesan/pokedex.git
cd pokedex
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em **http://localhost:5173** (ou na próxima porta disponível, caso a 5173 já esteja em uso).

Para abrir o app automaticamente no navegador ao iniciar o servidor:

```bash
npm run dev -- --open
```

Para expor o servidor na sua rede local (útil para testar em dispositivos móveis):

```bash
npm run dev -- --host
```

---

## Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com hot reload |
| `npm run build` | Gera o build de produção |
| `npm run preview` | Pré-visualiza o build de produção localmente |
| `npm run check` | Executa a verificação de tipos do Svelte |
| `npm run check:watch` | Executa a verificação de tipos em modo observador |
| `npm run lint` | Verifica formatação e linting do código |
| `npm run format` | Formata todos os arquivos automaticamente com o Prettier |

---

## Estrutura do Projeto

```
src/
├── components/            # Componentes reutilizáveis de UI
│   ├── BottomNav/         # Barra de navegação inferior (mobile)
│   ├── logo/              # Logo da aplicação
│   ├── Pokemon-card/      # Card individual de Pokémon
│   ├── Sidebar/           # Barra lateral de navegação (esquerda)
│   └── Sidebar-rightside/ # Painel decorativo da Pokédex (direita)
├── routes/                # Roteamento baseado em arquivos do SvelteKit
│   ├── +layout.svelte     # Layout raiz (sidebars + navegação mobile)
│   ├── +page.svelte       # Página inicial (Pokémon do dia)
│   ├── all/               # Página com grid de todos os Pokémon
│   └── profile/           # Página de perfil
├── stores/                # Stores do Svelte
│   └── PokemonStore.ts    # Store com os dados dos Pokémon (fetch via Axios)
├── styles/                # Estilos SCSS globais e mixins
├── utils/                 # Definições de tipos e mapa de cores por tipo
└── app.html               # Shell HTML
```

---

## Design Responsivo

A aplicação é totalmente responsiva em três breakpoints:

| Breakpoint | Layout |
|---|---|
| **Desktop** (≥ 1100px) | Sidebar esquerda + conteúdo + painel decorativo direito |
| **Tablet** (768px – 1099px) | Sidebar esquerda + conteúdo |
| **Mobile** (< 768px) | Conteúdo em largura total + barra de navegação inferior fixa |

---

## Observações

- Os dados dos Pokémon são buscados diretamente da [PokéAPI](https://pokeapi.co/) via Axios e armazenados em um `readable` store do Svelte no primeiro carregamento.
- Apenas os **151 Pokémon originais** de Kanto estão incluídos.
- Sei que não segui o projeto do teste, mas gostaria de entregar mesmo assim, pois gostei muito da vaga e já tinha um projeto antigo semelhante (falei com a recrutadora sobre isso). Acabei tendo umas demandas grandes de trabalho e faculdade entre ontem e hoje e não deu pr fazer, mas não queria desistir da vaga simplesmente.
