import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Building2, 
  FileText, 
  BookOpen, 
  User, 
  TrendingUp, 
  Search, 
  Bell, 
  ChevronRight,
  Briefcase,
  GraduationCap,
  Award,
  Loader2,
  Plus
} from 'lucide-react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { useQuery } from '@tanstack/react-query';

const API_URL = 'http://localhost:3000';

// --- COMPONENTS ---

const SidebarItem = ({ icon: Icon, label, active, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`flex items-center w-full px-6 py-4 transition-all duration-300 group ${
      active 
        ? 'text-emerald-600 bg-emerald-50/50 border-r-4 border-emerald-500' 
        : 'text-slate-500 hover:text-emerald-500 hover:bg-emerald-50/30'
    }`}
  >
    <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${active ? 'text-emerald-500' : ''}`} />
    <span className="mx-4 font-medium">{label}</span>
  </button>
);

const VacancyCard = ({ title, company, location, salary }: any) => (
  <div className="p-5 transition-all duration-300 bg-white border border-slate-100 rounded-2xl hover:shadow-xl hover:shadow-emerald-500/10 group animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-emerald-50 rounded-xl">
        <Briefcase className="w-6 h-6 text-emerald-600" />
      </div>
      <span className="px-3 py-1 text-xs font-semibold text-emerald-600 bg-emerald-50 rounded-full">Disponível</span>
    </div>
    <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">{title}</h3>
    <p className="text-slate-500 text-sm mb-4">{company} • {location}</p>
    <div className="flex justify-between items-center pt-4 border-t border-slate-50">
      <span className="font-bold text-slate-700">{salary || 'A combinar'}</span>
      <button className="flex items-center text-emerald-600 font-semibold text-sm hover:underline">
        Candidatar-se <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  </div>
);

const CourseCard = ({ title, duration, level }: any) => (
  <div className="flex items-center p-4 bg-white border border-slate-100 rounded-2xl hover:border-emerald-200 transition-all group">
    <div className="p-3 bg-blue-50 rounded-xl mr-4 group-hover:bg-blue-100 transition-colors">
      <GraduationCap className="w-6 h-6 text-blue-600" />
    </div>
    <div className="flex-1">
      <h4 className="font-bold text-slate-800">{title}</h4>
      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{duration} • {level}</p>
    </div>
    <button className="p-2 text-slate-400 hover:text-emerald-500 transition-colors">
      <ChevronRight className="w-5 h-5" />
    </button>
  </div>
);

// --- MAIN APP ---

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // API FETCHING WITH TANSTACK QUERY
  const { data: indicators, isLoading: loadingStats } = useQuery({
    queryKey: ['indicators'],
    queryFn: () => fetch(`${API_URL}/indicators`).then(res => res.json()),
  });

  const { data: vacancies, isLoading: loadingVacancies } = useQuery({
    queryKey: ['vacancies'],
    queryFn: () => fetch(`${API_URL}/vacancies`).then(res => res.json()),
  });

  const { data: courses, isLoading: loadingCourses } = useQuery({
    queryKey: ['trainings'],
    queryFn: () => fetch(`${API_URL}/trainings`).then(res => res.json()),
  });

  const { data: resumes, isLoading: loadingResumes } = useQuery({
    queryKey: ['resumes'],
    queryFn: () => fetch(`${API_URL}/curriculos`).then(res => res.json()),
  });

  const odsData = [
    { name: 'Jan', empregos: 400 },
    { name: 'Fev', empregos: 520 },
    { name: 'Mar', empregos: 680 },
    { name: 'Abr', empregos: 810 },
    { name: 'Mai', empregos: indicators?.totalEmpregosGerados || 950 },
  ];

  return (
    <div className="flex h-screen bg-[#f8fafc]">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-200 flex flex-col z-20 shadow-xl shadow-slate-200/50">
        <div className="p-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <TrendingUp className="text-white w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black tracking-tight text-slate-900">Work<span className="text-emerald-500">Up</span></h2>
          </div>
        </div>

        <nav className="flex-1 mt-4">
          <SidebarItem 
            icon={LayoutDashboard} 
            label="Dashboard Geral" 
            active={activeTab === 'dashboard'} 
            onClick={() => setActiveTab('dashboard')}
          />
          <SidebarItem 
            icon={Briefcase} 
            label="Vagas de Emprego" 
            active={activeTab === 'vacancies'} 
            onClick={() => setActiveTab('vacancies')}
          />
          <SidebarItem 
            icon={BookOpen} 
            label="Cursos e Capacitação" 
            active={activeTab === 'courses'} 
            onClick={() => setActiveTab('courses')}
          />
          <SidebarItem 
            icon={FileText} 
            label="Meus Currículos" 
            active={activeTab === 'resumes'} 
            onClick={() => setActiveTab('resumes')}
          />
          <SidebarItem 
            icon={Building2} 
            label="Empresas Parceiras" 
            active={activeTab === 'companies'} 
            onClick={() => setActiveTab('companies')}
          />
        </nav>

        <div className="p-6 border-t border-slate-100">
          <div className="p-4 bg-emerald-50 rounded-2xl relative overflow-hidden group cursor-pointer">
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
              <Award className="w-12 h-12 text-emerald-700" />
            </div>
            <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">Meta ODS 8</p>
            <div className="h-2 bg-emerald-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-1000" 
                style={{ width: indicators?.metaAtingida || '0%' }}
              ></div>
            </div>
            <p className="text-[10px] text-emerald-600 mt-2 font-bold">{indicators?.metaAtingida || '75%'} atingida hoje</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative">
        {/* Header */}
        <header className="sticky top-0 z-30 glass px-8 py-4 flex justify-between items-center border-b border-slate-200/50">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Buscar vagas por habilidades (ex: React, Design)..." 
              className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all placeholder:text-slate-400"
            />
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative p-2.5 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-3 right-3 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
              <div className="text-right">
                <p className="text-sm font-bold text-slate-800">Daniel Matos</p>
                <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">ODS Ambassador</p>
              </div>
              <div className="w-11 h-11 bg-slate-200 rounded-xl overflow-hidden ring-4 ring-emerald-500/5 shadow-inner">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel" alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto pb-20">
          {activeTab === 'dashboard' && (
            <div className="space-y-8 animate-in fade-in duration-700">
              {/* Welcome Section */}
              <div className="flex justify-between items-end">
                <div>
                  <h1 className="text-3xl font-black text-slate-900">Olá, Daniel! 👋</h1>
                  <p className="text-slate-500 mt-1 font-medium">Sua jornada rumo ao trabalho decente (ODS 8) continua aqui.</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl text-sm hover:bg-slate-50 transition-colors shadow-sm">
                    Exportar Relatório
                  </button>
                  <button className="px-5 py-2.5 bg-emerald-500 text-white font-bold rounded-xl text-sm hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 flex items-center">
                    <Plus className="w-4 h-4 mr-2" /> Novo Currículo
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-7 bg-emerald-500 rounded-[2rem] text-white shadow-2xl shadow-emerald-500/30 relative overflow-hidden group">
                  <div className="relative z-10">
                    <p className="text-emerald-100 text-sm font-bold mb-1 opacity-80">Vagas p/ seu perfil</p>
                    <h3 className="text-5xl font-black">{loadingVacancies ? '...' : (vacancies?.length * 8 || 24)}</h3>
                    <p className="text-emerald-100 text-[10px] mt-4 flex items-center font-bold tracking-wider">
                      <TrendingUp className="w-4 h-4 mr-1.5" /> +12% HOJE • ODS 8 IMPACT
                    </p>
                  </div>
                  <TrendingUp className="absolute -right-6 -bottom-6 w-40 h-40 text-white/10 group-hover:scale-110 transition-transform duration-700" />
                </div>

                <div className="p-7 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-500">
                  <p className="text-slate-500 text-sm font-bold mb-1 opacity-70">Cursos em andamento</p>
                  <h3 className="text-5xl font-black text-slate-800">03</h3>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                    <p className="text-slate-400 text-[10px] font-bold uppercase">Próxima aula: Design de IHC</p>
                  </div>
                </div>

                <div className="p-7 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-500">
                  <p className="text-slate-500 text-sm font-bold mb-1 opacity-70">Pontos de Evolução</p>
                  <h3 className="text-5xl font-black text-emerald-500">1,250</h3>
                  <div className="flex gap-1.5 mt-5">
                    {[1,2,3,4,5].map(i => <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= 3 ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-slate-100'}`}></div>)}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
                {/* Chart Section */}
                <div className="lg:col-span-2 space-y-8">
                  <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-8">
                      <div>
                        <h3 className="text-xl font-black text-slate-800 tracking-tight">Indicadores ODS 8</h3>
                        <p className="text-sm text-slate-500 font-medium">Geração de trabalho decente no sistema</p>
                      </div>
                      <div className="flex items-center gap-4 bg-slate-50 p-1.5 rounded-xl">
                        <button className="px-4 py-1.5 bg-white text-xs font-bold text-slate-800 rounded-lg shadow-sm">6 Meses</button>
                        <button className="px-4 py-1.5 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">1 Ano</button>
                      </div>
                    </div>
                    <div className="h-[300px] w-full">
                      {loadingStats ? (
                        <div className="h-full w-full flex items-center justify-center">
                          <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
                        </div>
                      ) : (
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={odsData}>
                            <defs>
                              <linearGradient id="colorEmpregos" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 'bold'}} dy={15} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 'bold'}} />
                            <Tooltip 
                              cursor={{ stroke: '#10b981', strokeWidth: 2 }}
                              contentStyle={{borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)', padding: '15px'}}
                            />
                            <Area 
                              type="monotone" 
                              dataKey="empregos" 
                              stroke="#10b981" 
                              strokeWidth={4} 
                              fillOpacity={1} 
                              fill="url(#colorEmpregos)" 
                              animationDuration={2000}
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-6 px-2">
                      <h3 className="text-xl font-black text-slate-800">Principais Vagas</h3>
                      <button 
                        onClick={() => setActiveTab('vacancies')}
                        className="text-emerald-600 font-bold text-sm hover:translate-x-1 transition-transform flex items-center"
                      >
                        Ver todas <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                    {loadingVacancies ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[1,2].map(i => <div key={i} className="h-48 bg-slate-100 rounded-3xl animate-pulse"></div>)}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {vacancies?.slice(0, 2).map((v: any) => (
                          <VacancyCard 
                            key={v.id}
                            title={v.title} 
                            company={v.company} 
                            location={v.location} 
                            salary={v.salary} 
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-8">
                  <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl shadow-slate-900/40">
                    <Award className="absolute -right-4 -top-4 w-28 h-28 text-white/5 rotate-12" />
                    <div className="relative z-10">
                      <h4 className="text-xl font-black mb-3">Evolução Profissional</h4>
                      <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">Você está progredindo rápido! Complete mais 2 cursos e ganhe o selo de "Especialista em UX".</p>
                      <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl transition-all shadow-lg shadow-emerald-500/30 flex items-center justify-center group">
                        Continuar Trilha <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center px-2">
                      <GraduationCap className="w-6 h-6 mr-3 text-blue-500" /> Sugestões de Cursos
                    </h3>
                    <div className="space-y-4">
                      {loadingCourses ? (
                        [1,2,3].map(i => <div key={i} className="h-20 bg-slate-50 rounded-2xl animate-pulse"></div>)
                      ) : (
                        courses?.map((c: any) => (
                          <CourseCard key={c.id} title={c.title} duration={c.duration} level={c.level} />
                        ))
                      )}
                    </div>
                      <button 
                        onClick={() => setActiveTab('courses')}
                        className="w-full mt-4 py-3 border-2 border-slate-100 text-slate-500 font-bold text-sm rounded-2xl hover:border-emerald-200 hover:text-emerald-500 transition-all"
                      >
                        Ver Catálogo Completo
                      </button>
                  </div>

                  <div className="p-7 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border-2 border-dashed border-emerald-500/20 rounded-[2rem]">
                    <p className="text-center text-slate-600 text-sm font-medium leading-relaxed">
                      Quer aumentar suas chances em <span className="font-bold text-emerald-600">85%</span>? <br/>
                      <button className="text-emerald-600 font-black mt-2 hover:underline decoration-2 underline-offset-4">Otimizar meu currículo com IA</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vacancies' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
               <div className="flex justify-between items-center mb-8">
                  <div>
                    <h1 className="text-3xl font-black text-slate-900">Vagas de Emprego 💼</h1>
                    <p className="text-slate-500 mt-1 font-medium">Oportunidades alinhadas com seu perfil e com a ODS 8.</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl text-sm flex items-center gap-2">
                      <Search className="w-4 h-4" /> Filtros
                    </button>
                  </div>
               </div>
               
               {loadingVacancies ? (
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1,2,3,4,5,6].map(i => <div key={i} className="h-56 bg-slate-50 rounded-3xl animate-pulse"></div>)}
                 </div>
               ) : (
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {vacancies?.map((v: any) => (
                      <VacancyCard 
                        key={v.id}
                        title={v.title} 
                        company={v.company} 
                        location={v.location} 
                        salary={v.salary} 
                      />
                    ))}
                 </div>
               )}
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
               <div className="mb-8">
                  <h1 className="text-3xl font-black text-slate-900">Capacitação Profissional 🎓</h1>
                  <p className="text-slate-500 mt-1 font-medium">Cursos gratuitos e trilhas de aprendizado recomendadas.</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-800 flex items-center px-2">
                      <Award className="w-5 h-5 mr-2 text-emerald-500" /> Trilhas Recomendadas
                    </h3>
                    {loadingCourses ? (
                      [1,2,3].map(i => <div key={i} className="h-24 bg-slate-50 rounded-3xl animate-pulse"></div>)
                    ) : (
                      courses?.map((c: any) => (
                        <div key={c.id} className="p-6 bg-white border border-slate-100 rounded-3xl hover:shadow-lg transition-all group cursor-pointer">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                              <div className="p-4 bg-blue-50 rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-all">
                                <BookOpen className="w-6 h-6" />
                              </div>
                              <div>
                                <h4 className="font-bold text-slate-800 text-lg">{c.title}</h4>
                                <p className="text-slate-400 text-xs font-bold uppercase">{c.duration} • {c.level}</p>
                              </div>
                            </div>
                            <button className="px-4 py-2 bg-slate-50 text-slate-600 font-bold text-xs rounded-xl group-hover:bg-emerald-500 group-hover:text-white transition-all">Iniciar</button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  
                  <div className="p-10 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden h-fit">
                    <div className="relative z-10">
                      <h3 className="text-2xl font-black mb-4">Por que se capacitar?</h3>
                      <p className="text-slate-400 leading-relaxed mb-8">
                        A ODS 8 foca no crescimento econômico inclusivo. Ao desenvolver novas habilidades, você não apenas melhora seu currículo, mas contribui para um mercado de trabalho mais qualificado e decente para todos.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <p className="text-sm font-bold text-slate-300">Acesso a vagas premium</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <p className="text-sm font-bold text-slate-300">Certificações reconhecidas</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <p className="text-sm font-bold text-slate-300">Mentoria com especialistas</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -right-10 -bottom-10 opacity-20">
                      <TrendingUp className="w-64 h-64" />
                    </div>
                  </div>
               </div>
            </div>
          )}

          {activeTab === 'resumes' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
               <div className="flex justify-between items-center mb-8">
                  <div>
                    <h1 className="text-3xl font-black text-slate-900">Meus Currículos 📄</h1>
                    <p className="text-slate-500 mt-1 font-medium">Gerencie seus currículos personalizados para cada vaga.</p>
                  </div>
                  <button className="px-6 py-3 bg-emerald-500 text-white font-black rounded-2xl shadow-lg shadow-emerald-500/30 flex items-center gap-2 hover:bg-emerald-600 transition-all">
                    <Plus className="w-5 h-5" /> Criar Novo
                  </button>
               </div>
               
               {loadingResumes ? (
                 <div className="flex justify-center py-20">
                    <Loader2 className="w-10 h-10 text-emerald-500 animate-spin" />
                 </div>
               ) : (
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resumes?.map((r: any) => (
                      <div key={r.id} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-xl transition-all relative group overflow-hidden border-b-8 border-b-emerald-500">
                        <div className="absolute top-4 right-4 p-2 bg-slate-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                          <FileText className="w-5 h-5 text-slate-400" />
                        </div>
                        <h4 className="text-xl font-black text-slate-800 mb-2">{r.name}</h4>
                        <p className="text-slate-500 text-sm font-medium mb-6 line-clamp-2">{r.summary || 'Sem resumo cadastrado.'}</p>
                        <div className="flex items-center gap-4 mb-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
                           <span className="flex items-center gap-1"><Building2 className="w-3 h-3" /> {r.city}</span>
                        </div>
                        <div className="flex gap-3">
                          <button className="flex-1 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl text-xs hover:bg-slate-200 transition-colors">Editar</button>
                          <button className="flex-1 py-3 bg-emerald-50 text-emerald-600 font-bold rounded-xl text-xs hover:bg-emerald-100 transition-colors">Visualizar</button>
                        </div>
                      </div>
                    ))}
                    <div className="p-8 border-4 border-dashed border-slate-100 rounded-[2.5rem] flex flex-col items-center justify-center text-slate-400 hover:border-emerald-200 hover:text-emerald-500 transition-all cursor-pointer group">
                       <div className="p-4 bg-slate-50 rounded-full mb-4 group-hover:bg-emerald-50 transition-colors">
                        <Plus className="w-8 h-8" />
                       </div>
                       <p className="font-bold">Adicionar outro modelo</p>
                    </div>
                 </div>
               )}
            </div>
          )}

          {activeTab === 'companies' && (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-in zoom-in duration-300">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-12 h-12 text-slate-300" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Empresas ODS 8</h3>
              <p className="text-slate-500 mt-2">Lista de empresas comprometidas com o trabalho decente.</p>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className="mt-8 px-8 py-3 bg-emerald-500 text-white font-black rounded-2xl hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20"
              >
                Voltar ao Início
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
