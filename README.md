# Desafio Técnico - Automação de Testes SimulaComex

Projeto de automação de testes desenvolvido com Cypress para a plataforma SimulaComex.

## Como Executar

### Pré-requisitos
- Node.js
- npm

### Instalação

npm install
npm install cypress --save-dev
npm install cypress-xpath --save-dev

### Executar testes
npx cypress ope
```
## Limitações Técnicas

### Problema: Impossibilidade de Automatizar Logout

Durante o desenvolvimento identifiquei uma limitação que impede a automação completa:

- **Elemento de logout não localizável**: Múltiplos seletores testados sem sucesso
- **Dropdown menu inacessível**: Botão "Sair" em menu que não responde aos comandos automatizados
- **Sessão persistente**: Impossível fazer logout programaticamente

### Impacto
- Cenários avançados bloqueados (alteração de senha, edição de perfil)
- Múltiplos logins sequenciais impossíveis
- Logout manual necessário entre execuções
- Fluxos end-to-end limitados

### Tentativas de Resolução
Seletores testados:
- `a[href="/admin/usuarios/logout"]`
- `#sidebar-menu > div > ul > li > a`
- XPath: `/html/body/div/div[2]/div[1]/ul/li[5]/a`
- Force click, timeouts aumentados

**Conclusão**: A arquitetura da aplicação apresenta barreiras para automação no fluxo de logout.

## Desenvolvido por

Felipe de Avila Roos  
GitHub: @felipeavila97  
Email: feliperoos98@gmail.com