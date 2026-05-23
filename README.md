# The Internet — Automação Cypress

Suite E2E profissional para o site de prática [The Internet](https://the-internet.herokuapp.com/), cobrindo **todos os exemplos** disponíveis na página inicial.

## Stack

- [Cypress](https://www.cypress.io/) 14+
- TypeScript
- Page Object Model (POM)
- Comandos customizados (Basic/Digest Auth)
- GitHub Actions (CI)

## Estrutura do projeto

```
the-internet-cypress/
├── cypress/
│   ├── e2e/              # 44 specs (1 por exemplo + home)
│   ├── fixtures/         # Dados e arquivos de upload
│   ├── pages/            # Page Objects
│   └── support/          # Commands, constants, setup global
├── .github/workflows/    # Pipeline CI
├── cypress.config.ts
└── package.json
```

## Pré-requisitos

- Node.js 18 ou superior
- npm 9+

## Instalação

```bash
git clone https://github.com/moschettimarcos/the-internet-cypress.git
cd the-internet-cypress
npm install
```

## Executar testes

| Comando | Descrição |
|---------|-----------|
| `npm run cy:open` | Abre o Cypress Test Runner (modo interativo) |
| `npm run cy:run` | Executa todos os testes em modo headless |
| `npm run cy:run:chrome` | Executa no Chrome |
| `npm run cy:run:headed` | Headless desligado (vê o navegador) |

## Credenciais (site de prática)

| Cenário | Usuário | Senha |
|---------|---------|-------|
| Basic Auth / Digest Auth / Download seguro | `admin` | `admin` |
| Form Authentication | `tomsmith` | `SuperSecretPassword!` |

## Cobertura dos exemplos

| # | Exemplo | Arquivo de teste |
|---|---------|------------------|
| 1 | Home | `01-home.cy.ts` |
| 2 | A/B Testing | `02-ab-testing.cy.ts` |
| 3 | Add/Remove Elements | `03-add-remove-elements.cy.ts` |
| 4 | Basic Auth | `04-basic-auth.cy.ts` |
| 5 | Broken Images | `05-broken-images.cy.ts` |
| 6 | Challenging DOM | `06-challenging-dom.cy.ts` |
| 7 | Checkboxes | `07-checkboxes.cy.ts` |
| 8 | Context Menu | `08-context-menu.cy.ts` |
| 9 | Digest Authentication | `09-digest-auth.cy.ts` (validação via `cy.request`; Digest tem suporte limitado no Cypress) |
| 10 | Disappearing Elements | `10-disappearing-elements.cy.ts` |
| 11 | Drag and Drop | `11-drag-and-drop.cy.ts` |
| 12 | Dropdown | `12-dropdown.cy.ts` |
| 13 | Dynamic Content | `13-dynamic-content.cy.ts` |
| 14 | Dynamic Controls | `14-dynamic-controls.cy.ts` |
| 15 | Dynamic Loading | `15-dynamic-loading.cy.ts` |
| 16 | Entry Ad | `16-entry-ad.cy.ts` |
| 17 | Exit Intent | `17-exit-intent.cy.ts` |
| 18 | File Download | `18-file-download.cy.ts` |
| 19 | File Upload | `19-file-upload.cy.ts` |
| 20 | Floating Menu | `20-floating-menu.cy.ts` |
| 21 | Forgot Password | `21-forgot-password.cy.ts` |
| 22 | Form Authentication | `22-form-authentication.cy.ts` |
| 23 | Frames | `23-frames.cy.ts` |
| 24 | Geolocation | `24-geolocation.cy.ts` |
| 25 | Horizontal Slider | `25-horizontal-slider.cy.ts` |
| 26 | Hovers | `26-hovers.cy.ts` |
| 27 | Infinite Scroll | `27-infinite-scroll.cy.ts` |
| 28 | Inputs | `28-inputs.cy.ts` |
| 29 | JQuery UI Menus | `29-jquery-ui-menus.cy.ts` |
| 30 | JavaScript Alerts | `30-javascript-alerts.cy.ts` |
| 31 | JavaScript Error | `31-javascript-error.cy.ts` |
| 32 | Key Presses | `32-key-presses.cy.ts` |
| 33 | Large & Deep DOM | `33-large-dom.cy.ts` |
| 34 | Multiple Windows | `34-multiple-windows.cy.ts` |
| 35 | Notification Messages | `35-notification-messages.cy.ts` |
| 36 | Redirect Link | `36-redirect-link.cy.ts` |
| 37 | Secure File Download | `37-secure-file-download.cy.ts` |
| 38 | Shadow DOM | `38-shadow-dom.cy.ts` |
| 39 | Shifting Content | `39-shifting-content.cy.ts` |
| 40 | Slow Resources | `40-slow-resources.cy.ts` |
| 41 | Sortable Data Tables | `41-sortable-data-tables.cy.ts` |
| 42 | Status Codes | `42-status-codes.cy.ts` |
| 43 | Typos | `43-typos.cy.ts` |
| 44 | WYSIWYG Editor | `44-wysiwyg-editor.cy.ts` |

## Boas práticas aplicadas

- **baseUrl** centralizada em `cypress.config.ts`
- **Retries** em modo CI (`runMode: 2`)
- **Fixtures** para credenciais e upload
- **Page Objects** para fluxos reutilizáveis (Home, Login)
- **Comandos customizados** para autenticação HTTP
- **Tratamento de exceções** conhecidas (ResizeObserver, Script error)
- **Timeouts** adequados para páginas lentas e dynamic loading
- **Stubs** para geolocalização, alertas e múltiplas janelas

## Licença

MIT — uso livre para estudo e portfólio.
