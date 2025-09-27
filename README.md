# 🚀 Automação de Testes - SimulaComex

Projeto de automação de testes end-to-end para a plataforma SimulaComex, desenvolvido com Cypress.

## 📋 Sobre o Projeto

Este projeto implementa uma suíte completa de testes automatizados para a funcionalidade de login da plataforma SimulaComex, cobrindo diversos cenários de validação e comportamentos da interface.

## ✨ Funcionalidades Testadas

- ✅ **Login com sucesso** - Validação do fluxo principal de autenticação
- ✅ **Credenciais inválidas** - Testes com senha e email incorretos
- ✅ **Validações de campos** - Verificação de campos obrigatórios
- ✅ **Mensagens de erro** - Validação de feedback para o usuário
- ✅ **Validações HTML5** - Testes de validação nativa do browser

## 🛠️ Tecnologias Utilizadas

- **[Cypress](https://cypress.io/)** - Framework de testes end-to-end
- **[Faker.js](https://fakerjs.dev/)** - Geração de dados fake para testes
- **JavaScript/ES6+** - Linguagem de desenvolvimento
- **Page Object Pattern** - Padrão de organização de locators

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** (gerenciador de pacotes do Node.js)
- **Git** (para clonar o repositório)

### Verificar instalações:

```bash
node --version
npm --version
git --version
```

## 🚀 Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU_USUARIO/DesafioTecnico_fazComex.git
cd DesafioTecnico_fazComex
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Executar os testes

#### Executar todos os testes (modo headless):
```bash
npm run cy:run
```

#### Executar com interface gráfica visível:
```bash
npm run cy:run:headed
```

#### Abrir interface do Cypress (se disponível):
```bash
npm run cy:open
```

## 📁 Estrutura do Projeto

```
📦 DesafioTecnico_fazComex/
├── 📁 cypress/
│   ├── 📁 e2e/
│   │   └── 📄 login.cy.js          # Casos de teste de login
│   ├── 📁 fixtures/
│   │   └── 📄 auth.json            # Dados de autenticação
│   └── 📁 support/
│       ├── 📄 commands.js          # Comandos personalizados
│       ├── 📄 locators.js          # Seletores organizados
│       └── 📄 e2e.js              # Configurações globais
├── 📄 cypress.config.js            # Configuração do Cypress
├── 📄 package.json                 # Dependências e scripts
├── 📄 .gitignore                   # Arquivos ignorados pelo Git
└── 📄 README.md                    # Este arquivo
```

## 🧪 Casos de Teste

| Teste | Descrição | Validação |
|-------|-----------|-----------|
| **Login Sucesso** | Autentica com credenciais válidas | URL não contém `/login` |
| **Senha Inválida** | Tenta login com senha incorreta | Mensagem de erro exibida |
| **Email Inválido** | Tenta login com email incorreto | Mensagem de erro exibida |
| **Campo Email Vazio** | Submete sem preencher email | Validação HTML5 ativa |
| **Campo Senha Vazio** | Submete sem preencher senha | Validação HTML5 ativa |

## ⚙️ Scripts Disponíveis

```bash
# Executar testes em modo headless
npm run cy:run

# Executar testes com browser visível
npm run cy:run:headed

# Abrir interface do Cypress
npm run cy:open

# Executar apenas um teste específico
npx cypress run --spec "cypress/e2e/login.cy.js"
```

## 🔧 Configurações

### Credenciais de Teste

As credenciais estão configuradas em `cypress/fixtures/auth.json`:

```json
{
  "login": "feliperoos98@gmail.com",
  "password": "583680",
  "url": "https://app.simulacomex.com.br/admin/usuarios/login"
}
```

### Timeouts Configurados

- **Timeout de página**: 60 segundos
- **Timeout de comandos**: 20 segundos
- **Timeout de requisições**: 20 segundos

## 📊 Resultados dos Testes

Após a execução, você verá um relatório similar a:

```
✔ Todos os testes passaram!
   5 tests passing (32s)
   0 tests failing
```

## 🐛 Solução de Problemas

### Problema: "Element not found"
- Verifique se a aplicação está rodando
- Confirme se os seletores estão atualizados

### Problema: Timeout nos testes
- Verifique sua conexão de internet
- Aumente os timeouts no `cypress.config.js`

### Problema: Dependências não instaladas
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📈 Próximos Passos

- [ ] Implementar testes de navegação pós-login
- [ ] Adicionar testes de alteração de senha
- [ ] Implementar relatórios de cobertura
- [ ] Configurar CI/CD pipeline

## 👨‍💻 Autor

**Felipe de Avila Roos**
- GitHub: [@SEU_USUARIO](https://github.com/SEU_USUARIO)
- Email: feliperoos98@gmail.com

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

⭐ **Se este projeto foi útil, deixe uma estrela!**
