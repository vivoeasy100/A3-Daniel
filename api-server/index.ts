import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// --- ROTAS DA API (CONFORME ANTEPROJETO) ---

// 1. Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'API WorkUp ativa', ods: 8, timestamp: new Date() });
});

// 2. Currículos
app.get('/curriculos', (req, res) => {
  res.json([
    { id: 1, name: 'Daniel Matos', city: 'Belo Horizonte', summary: 'Estudante de IHC' }
  ]);
});

app.post('/curriculos', (req, res) => {
  res.status(201).json({ message: 'Currículo criado com sucesso' });
});

// 3. Empresas (ODS 8 Parceiras)
app.get('/companies', (req, res) => {
  res.json([
    { id: 1, name: 'TechInova', sector: 'Tecnologia', impact: 'Alto' },
    { id: 2, name: 'DesignCo', sector: 'Design', impact: 'Médio' }
  ]);
});

// 4. Indicadores ODS 8
app.get('/indicators', (req, res) => {
  res.json({
    totalEmpregosGerados: 1250,
    crescimentoAnual: '15%',
    metaAtingida: '75%'
  });
});

// 5. Treinamentos e Cursos
app.get('/trainings', (req, res) => {
  res.json([
    { id: 1, title: 'Introdução ao React', duration: '12h', level: 'Iniciante' },
    { id: 2, title: 'Heurísticas de UX', duration: '8h', level: 'Intermediário' }
  ]);
});

// 6. Dashboard de Evolução
app.get('/dashboard/evolution', (req, res) => {
  res.json({
    currentPoints: 1250,
    nextLevel: 'Especialista Jr',
    progress: 80
  });
});

// 7. Vagas de Emprego
app.get('/vacancies', (req, res) => {
  res.json([
    { id: 1, title: 'Desenvolvedor Frontend Jr', company: 'TechInova', location: 'Remoto', salary: 'R$ 4.500 - 5.500' },
    { id: 2, title: 'Analista de UX/UI', company: 'DesignCo', location: 'São Paulo, SP', salary: 'R$ 5.000 - 7.000' },
    { id: 3, title: 'Assistente Administrativo', company: 'LogísticaBrasil', location: 'Belo Horizonte, MG', salary: 'R$ 2.500 - 3.200' },
    { id: 4, title: 'Social Media ODS', company: 'SustentaImpacto', location: 'Rio de Janeiro, RJ', salary: 'R$ 3.000 - 4.000' }
  ]);
});

app.get('/', (req, res) => {
  res.send('API WorkUp - ODS 8 está rodando! Acesse /health para verificar o status.');
});

app.listen(port, () => {
  console.log(`🚀 Servidor WorkUp rodando em http://localhost:${port}`);
});
