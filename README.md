# WorkUp – Plataforma de Inclusão e Capacitação Profissional (A3) 🚀

O **WorkUp** é uma solução digital desenvolvida para a disciplina de **Interação Humano-Computador e UX**, focada em resolver desafios de empregabilidade e qualificação profissional, em estrito alinhamento com a **ODS 8 (Trabalho Decente e Crescimento Econômico)** da ONU.

---

## 👥 Identificação Acadêmica
*   **Instituição:** Centro Universitário UNA
*   **Professor:** Daniel Henrique Matos de Paiva
*   **Curso:** Tecnologia em Análise e Desenvolvimento de Sistemas
*   **Projeto:** WorkUp (TrabalhoJusto)

---

## 🛠️ Stack Tecnológica

### **Frontend (Interface)**
*   **React + Vite:** Framework ágil para interfaces modernas.
*   **TypeScript:** Garantia de tipagem e segurança de código.
*   **Tailwind CSS:** Estilização responsiva com design premium.
*   **TanStack Query (v5):** Sincronização de dados em tempo real com o backend.
*   **Recharts:** Visualização de indicadores de impacto social (ODS 8).
*   **Lucide React:** Iconografia moderna e intuitiva.

### **Backend (Servidor)**
*   **Node.js + Express:** API REST para gerenciamento de dados.
*   **TypeScript:** Padronização entre frontend e backend.
*   **Drizzle ORM:** Comunicação eficiente com o banco de dados.
*   **Zod:** Validação rigorosa de esquemas e dados da API.
*   **CORS:** Configurado para integração segura entre as plataformas.

---

## 📂 Estrutura do Projeto

```text
A3 Daniel/
├── artifacts/           # Documentação técnica e Canvas do Anteprojeto
├── api-server/         # Backend (Servidor Express em Node.js)
├── trabalho-justo/     # Frontend (Aplicação React + Vite)
└── lib/                # Definições de banco de dados e Spec da API
```

---

## 🛠️ Preparação do Ambiente (Para computadores do zero)

Se você não tem nada instalado no computador, siga estes passos antes de rodar o projeto:

### **1. Instalar o Node.js**
O Node.js é o motor que roda o projeto.
*   Acesse: [https://nodejs.org/](https://nodejs.org/)
*   Baixe e instale a versão **LTS** (Recomendada para a maioria).
*   Avance em todas as etapas da instalação padrão.

### **2. Instalar o Git (Opcional, mas recomendado)**
Para baixar o projeto do GitHub com facilidade.
*   Acesse: [https://git-scm.com/](https://git-scm.com/)
*   Baixe para Windows e instale com as opções padrão.

### **3. Verificar a Instalação**
Abra o **PowerShell** ou **Prompt de Comando** (CMD) e digite:
```powershell
node -v
npm -v
```
*Se aparecerem os números das versões, seu PC está pronto!*

---

## 🚀 Como Rodar o Projeto (Passo a Passo)

### **1. Baixar o Projeto**
Se você tiver o Git:
```powershell
git clone https://github.com/seu-usuario/A3-Daniel.git
cd "A3 Daniel"
```
*(Ou apenas extraia o arquivo .ZIP do projeto e abra a pasta no VS Code)*

### **2. Configuração do Backend (Servidor)**
Abra um terminal na pasta do projeto e execute:
```powershell
# Entre na pasta do servidor
cd api-server

# Instale as dependências
npm install

# Inicie o servidor
npm run dev
```
> **Nota:** O servidor rodará em `http://localhost:3000`.

### **3. Configuração do Frontend (Interface)**
Abra um **segundo terminal** (mantenha o do backend rodando) e execute:
```powershell
# Entre na pasta do frontend
cd trabalho-justo

# Instale as dependências
npm install

# Inicie a aplicação
npm run dev
```
> **Nota:** A aplicação rodará em `http://localhost:5173`.

---

## 💡 Princípios de IHC e UX Aplicados
O desenvolvimento seguiu as **Heurísticas de Nielsen**, focando em:
*   **Visibilidade do Status:** Uso de gráficos e barras de progresso (Meta ODS 8).
*   **Consistência:** Design system unificado com Tailwind.
*   **Estética e Design Minimalista:** Interface limpa para evitar sobrecarga cognitiva em usuários iniciantes.
*   **Acessibilidade:** Alto contraste e tipografia legível (Fonte Outfit).

---

## 🏛️ Alinhamento ODS 8
A plataforma contribui para a meta 8.6 da ONU: *"Até 2020, reduzir substancialmente a proporção de jovens sem emprego, educação ou formação"*, oferecendo trilhas de capacitação gratuitas integradas à busca de vagas.

---

## 🚀 Melhorias Futuras (Roadmap)
Para evoluir o WorkUp além do protótipo acadêmico, as seguintes melhorias são propostas:
1.  **Autenticação e Segurança:** Implementação de login via JWT ou NextAuth para perfis personalizados.
2.  **Banco de Dados Real:** Conexão com PostgreSQL via Drizzle ORM para persistência definitiva dos dados.
3.  **IA de Recomendação:** Algoritmo para cruzar habilidades do currículo com requisitos de vagas automaticamente.
4.  **Notificações Push:** Alertas em tempo real sobre novas oportunidades e cursos concluídos.
5.  **Versão Mobile (PWA):** Transformação em Web App Progressivo para instalação direta no smartphone.
6.  **Dashboard de Empresas:** Painel exclusivo para empresas parceiras gerenciarem vagas e impacto social.
<img width="3840" height="2016" alt="Captura de tela 2026-04-26 155232" src="https://github.com/user-attachments/assets/17b11713-cae3-47ef-a4f5-5d218b6e856b" />
<img width="3840" height="2016" alt="Captura de tela 2026-04-26 155228" src="https://github.com/user-attachments/assets/16f230c0-66dd-4260-a4b5-cab0e1a0bc6b" />
<img width="3840" height="2016" alt="Captura de tela 2026-04-26 155223" src="https://github.com/user-attachments/assets/f5d94b2c-0459-42a0-86c2-2e1fc03d9b4c" />
<img width="3840" height="2016" alt="Captura de tela 2026-04-26 153916" src="https://github.com/user-attachments/assets/e8ffb7b4-ea6a-4932-b0c2-b297baf34a09" />
<img width="3840" height="2016" alt="Captura de tela 2026-04-26 155217" src="https://github.com/user-attachments/assets/62d2cb6f-80fd-4e65-ba56-897e24208868" />
<img width="3840" height="2016" alt="Captura de tela 2026-04-26 155212" src="https://github.com/user-attachments/assets/b00c0286-a635-480f-a69f-40c61304200c" />
<img width="3840" height="2016" alt="Captura de tela 2026-04-26 153926" src="https://github.com/user-attachments/assets/9e54f347-ba62-4422-ba84-b141492c7826" />
