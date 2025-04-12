# 📈 Dashboard de Campanhas
Este projeto é um dashboard simples de campanhas de marketing digitais desenvolvido com React e TypeScript. Ele exibe cards com informações importantes de performance das campanhas como CTR, conversões e custo por conversão. Os dados são simulados com uma API mock.

## 🛠️ Tecnologias Utilizadas
- React

- TypeScript

- Tailwind CSS (para estilização)

- API Mock (simulação com setTimeout)

## 📁 Estrutura do Projeto
```
src/
├── api/
│   └── mock.ts              # Simulação de chamada à API
├── components/
│   └── CampaignCard.tsx     # Componente visual de cada campanha
├── types/
│   └── Campaign.ts          # Tipagem TypeScript para campanhas
└── App.tsx                  # Página principal com filtro, loading e erro
```

## 🔍 Funcionalidades
- ✅ Exibição de campanhas com:

    - Nome e plataforma

    - CTR (Click Through Rate)

    - Total de conversões

    - Custo por conversão

- ✅ Filtros por plataforma:

    - Todas

    - Google Ads

    - Meta Ads

- ✅ Estados de carregamento e erro



## ▶️ Como Rodar o Projeto
Clone o repositório:

```
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
```

1- Instale as dependências:

```
npm install
```

2- Inicie o projeto:

```
npm run dev
```

## 🧪 Preview
Veja como o componente de campanha é exibido:
```
📈 Campanha Dia das Mães
🔁 Conversões: 120
📊 CTR: 5.00%
💰 Custo por conversão: R$ 4.17
```

## 📌 Observações
- Este projeto utiliza dados estáticos simulados. Integrações com APIs reais podem ser feitas substituindo fetchCampaigns no arquivo mock.ts.

- É um ótimo ponto de partida para projetos mais robustos com dashboards dinâmicos.

## 📄 Licença
Este projeto está sob a licença MIT.
