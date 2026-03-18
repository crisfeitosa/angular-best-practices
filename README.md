# 🅰️ Angular Best Practices

Projeto Angular focado em boas práticas com **componentização**, **pipes customizados**, **diretivas** e **arquitetura modular**.

## 🚀 Tecnologias

- **Angular** 19
- **Bootstrap** 5
- **ng-bootstrap** 18
- **ngx-toastr** / **ngx-spinner**
- **Font Awesome** 6
- **date-fns**
- **JSON Server** (API fake)

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) >= 20
- npm >= 10

## 📦 Instalação

```bash
npm install
```

## ▶️ Executando o projeto

Inicie a API fake e o servidor de desenvolvimento em terminais separados:

```bash
# Terminal 1 — API (json-server na porta 3000)
npm run server

# Terminal 2 — Angular (localhost:4200)
npm start
```

Acesse [http://localhost:4200](http://localhost:4200).

## 📋 Scripts disponíveis

| Comando          | Descrição                            |
| ---------------- | ------------------------------------ |
| `npm start`      | Inicia o servidor de desenvolvimento |
| `npm run server` | Inicia o JSON Server (API fake)      |
| `npm run build`  | Build de produção                    |
| `npm run watch`  | Build em modo watch (development)    |
| `npm test`       | Executa os testes unitários          |

## 📁 Estrutura do projeto

```
src/
├── api/                    # db.json para o JSON Server
├── app/
│   ├── core/               # Módulo core (header, content, interceptors)
│   ├── features/
│   │   ├── courses/        # CRUD de cursos
│   │   └── students/       # CRUD de alunos
│   └── shared/             # Componentes, pipes e módulos compartilhados
├── assets/
└── environments/
```

## 💡 Boas práticas aplicadas

- 🧩 **Arquitetura modular**: Core, Features e Shared modules
- ⚡ **Lazy loading**: módulos de features carregados sob demanda
- 🔧 **Componentização**: componentes reutilizáveis (card lists, select)
- 🔀 **Pipes customizados**: `shortName`, `age`
- 📝 **Custom Value Accessor**: componente `SelectCourse` integrado com Reactive Forms
- 🛡️ **Interceptors HTTP**: loading spinner global e tratamento de erros
- 📡 **Resolvers**: pré-carregamento de dados nas rotas
