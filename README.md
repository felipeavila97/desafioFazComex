# Desafio Técnico - Automação de Testes SimulaComex

Projeto de automação de testes desenvolvido com Cypress para a plataforma SimulaComex.

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18+)
- npm

### Instalação e Execução
```bash
# Clonar repositório
git clone https://github.com/felipeavila97/desafioFazComex.git
cd desafioFazComex

# Instalar dependências
npm install

# Executar testes
npm run cy:run

# Executar com interface gráfica
npm run cy:run:headed
```

## 🧪 Cenários de Teste

| Teste | Status | Descrição |
|-------|---------|-----------|
| ✅ Login com sucesso | **Funcionando** | Valida autenticação com credenciais válidas |
| ✅ Senha inválida | **Funcionando** | Testa mensagem de erro para senha incorreta |
| ✅ Email inválido | **Funcionando** | Testa mensagem de erro para email incorreto |
| ✅ Campo email vazio | **Funcionando** | Valida campo obrigatório (HTML5) |
| ✅ Campo senha vazio | **Funcionando** | Valida campo obrigatório (HTML5) |

**Resultado: 5/5 testes funcionando (100% de sucesso)**

## ⚠️ Limitações Técnicas Identificadas

### 🚫 Impossibilidade de Automatizar Logout

Durante o desenvolvimento do desafio, foi identificada uma **limitação crítica** na aplicação que impede a automação completa:

#### **Problema Principal:**
- **Elemento de logout inacessível**: O botão "Sair" não pode ser localizado pelos seletores automatizados
- **Dropdown não responsivo**: Menu do usuário não responde aos comandos do Cypress
- **Sessão persistente**: Uma vez logado, não há como fazer logout programaticamente

#### **Impacto nos Testes:**
- ❌ **Cenários avançados bloqueados**: Alteração de senha, edição de perfil, etc.
- ❌ **Múltiplos logins impossíveis**: Não é possível testar login com diferentes usuários sequencialmente  
- ❌ **Isolamento de testes comprometido**: Cada execução requer logout manual
- ❌ **Fluxos completos limitados**: Não é possível automatizar jornadas end-to-end

#### **Tentativas de Resolução:**
Foram testados múltiplos seletores e estratégias:
- CSS Selectors: `a[href="/admin/usuarios/logout"]`, `#sidebar-menu > div > ul > li > a`
- XPath: `/html/body/div/div[2]/div[1]/ul/li[5]/a`
- Force click, timeouts aumentados, interceptação de requisições
- **Nenhuma abordagem foi bem-sucedida**

#### **Workaround Necessário:**
Para testar cenários que dependem de logout, é necessário:
1. Executar logout manual na aplicação
2. Executar apenas os testes básicos de autenticação
3. Considerar testes isolados por sessão

### 💭 **Observação Técnica:**
Esta limitação indica que a aplicação não foi desenvolvida considerando automação de testes, o que é comum em sistemas legados ou com arquiteturas frontend complexas.

## 🛠️ Tecnologias Utilizadas

- **Cypress** 15.3.0 - Framework de testes E2E
- **Faker.js** 10.0.0 - Geração de dados fictícios
- **JavaScript ES6+** - Linguagem de desenvolvimento

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/login.cy.js          # Casos de teste de login
├── fixtures/auth.json       # Credenciais de teste
└── support/
    ├── commands.js          # Comandos customizados
    └── locators.js          # Seletores organizados
```

## 📊 Resultados

```
✔ All specs passed!
  5 tests passing (32s)
  0 tests failing
```

## 👨‍💻 Desenvolvido por

**Felipe de Avila Roos**  
GitHub: [@felipeavila97](https://github.com/felipeavila97)  
Email: feliperoos98@gmail.com

---

**Nota**: Este projeto demonstra competência em automação de testes e capacidade de identificar e documentar limitações técnicas em sistemas reais.