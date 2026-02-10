import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Users, Lightbulb, GraduationCap, Globe, MessageCircle, ClipboardCheck } from "lucide-react";

// Import cycle images
import cicloInfantil from "@/assets/ciclo-infantil.jpeg";
import cicloIniciais from "@/assets/ciclo-iniciais.jpeg";
import cicloFinais from "@/assets/ciclo-finais.jpeg";
import cicloMedio from "@/assets/ciclo-medio.jpg";
import cicloIB from "@/assets/ciclo-ib.jpg";

// Map cycle IDs to images
const cycleImages: Record<string, string> = {
  infantil: cicloInfantil,
  iniciais: cicloIniciais,
  finais: cicloFinais,
  medio: cicloMedio,
  ib: cicloIB
};
interface EducationLevel {
  id: string;
  title: string;
  icon: typeof BookOpen;
  parcelas: {
    p13: string;
    p12: string;
    p11: string;
  };
  parcelasExtra?: {
    p13: string;
    p12: string;
    p11: string;
  };
  headline: string;
  description: string[];
  highlights: string[];
  highlightsIntro?: string;
  extras: string[];
  extracurriculares?: string[];
  comunicacao?: string[];
  avaliacao?: {
    intro?: string;
    year2?: string;
    items: string[];
    extra?: string;
  };
  schedule: {
    manha: string;
    tarde: string;
  };
  curriculum?: {
    pt?: string[];
    en?: string[];
    es?: string[];
    all?: string[];
    series12?: string[];
    ib?: string[];
    core?: string[];
  };
  isIB?: boolean;
}
const educationLevels: EducationLevel[] = [{
  id: "infantil",
  title: "Educação Infantil",
  icon: BookOpen,
  parcelas: {
    p13: "R$ 3.160,20",
    p12: "R$ 3.423,55",
    p11: "R$ 3.734,78"
  },
  headline: "Aprender com sentido, descoberta e afeto",
  description: ["Ao longo da Educação Infantil, promovemos a construção ativa dos conhecimentos pelas crianças, por meio da leitura fruição diária, do brincar em diferentes ambientes adaptados para a faixa etária e da expressão através de múltiplas linguagens.", "As interações sociais são um elemento essencial da rotina, experimentadas e incentivadas com intencionalidade tanto nas vivências que compõem os projetos como nos momentos de brincadeiras."],
  highlights: ["Projetos Literários em Inglês: com atividades que envolvem todas as áreas do conhecimento, desenvolvidos a partir de um título por bimestre, ampliando a formação cultural para além da literária", "A partir do Kinder 2: Projetos Literários também em Português e material estruturado para trabalho com o letramento e o pensamento lógico-matemático e investigativo"],
  extras: ["Progresso Completo: contraturno escolar com atividades lúdicas, esportivas, culturais e tarefa de casa", "Extracurricular: modalidades esportivas e culturais que adensam a formação regular"],
  comunicacao: ["Aplicativo de envio de comunicados institucionais semanais e troca de mensagens entre família e escola, garantindo rapidez no contato e fortalecendo a proximidade", "Reuniões bimestrais: agendamento individual da professora com as famílias para acompanhamento do desenvolvimento", "Equipe pedagógica específica do segmento, que cuida da conexão família-escola, conhecendo em profundidade cada criança e seus familiares"],
  extracurriculares: ["Ballet Baby Class"],
  curriculum: {
    pt: ["Música"],
    en: ["Logical and mathematical thinking", "Languages", "Movement", "Natural sciences", "Cooking class", "Physical education", "Relationships and transformations"]
  },
  schedule: {
    manha: "7h30 às 12h20",
    tarde: "13h10 às 18h"
  }
}, {
  id: "iniciais",
  title: "Anos Iniciais",
  icon: Users,
  parcelas: {
    p13: "R$ 3.537,19",
    p12: "R$ 3.831,96",
    p11: "R$ 4.180,32"
  },
  headline: "Consolidando a alfabetização e múltiplas linguagens",
  description: ["Ao longo dos Anos Iniciais, nossos estudantes consolidam o processo de alfabetização para que possam ler, interpretar e se comunicar por meio de linguagens diversas. A formação socioemocional e momentos ricos de brincadeiras e interações permanecem na rotina, promovendo a convivência respeitosa, gentil e ética."],
  highlights: ["Material didático em Português e Inglês", "Projetos Literários em Inglês e Português, com atividades que envolvem todas as áreas do conhecimento, desenvolvidos a partir de um título por bimestre, ampliando a formação cultural para além da literária", "Programa Semente: formação socioemocional estruturada a partir de propostas, situações, reflexões e proposições adequadas a cada faixa etária", "Cultura Maker: projetos que desenvolvem a criatividade e a resolução de problemas, incentivando a postura propositiva e o trabalho em equipe dentro da cultura maker"],
  extras: ["Progresso Completo: contraturno escolar com atividades lúdicas, esportivas, culturais e tarefas de casa", "Extracurricular: modalidades esportivas e culturais que adensam a formação regular", "Saídas pedagógicas: vivências externas que promovem a interlocução e o aprimoramento dos conhecimentos escolares com o mundo"],
  avaliacao: {
    intro: "A partir das observações diárias das crianças e das atividades produzidas por elas, as professoras realizam o registro de desenvolvimento do aluno em um documento individual, apresentado bimestralmente às famílias.",
    year2: "A partir do Year 2, novos instrumentos passam gradualmente a fazer parte do processo de avaliação e composição da nota:",
    items: ["Trabalho em Grupo: desenvolvido em sala de aula, com orientação e mediação da professora", "O Espaço é Seu: pesquisa de interesse individual e apresentação oral, a partir de um tema relacionado ao Projeto Literário", "Avaliações dissertativas: por disciplina, para análise da consolidação dos conhecimentos do bimestre", "Pasta de Produções de Texto - Português e Inglês: escrita semanal em sala de aula"],
    extra: "Os alunos realizam também, anualmente, uma avaliação de proficiência da Língua Inglesa."
  },
  comunicacao: ["Aplicativo de envio de comunicados institucionais semanais e troca de mensagens entre família e escola, garantindo rapidez no contato e fortalecendo a proximidade", "Reuniões bimestrais: agendamento individual da professora com as famílias para acompanhamento do desenvolvimento", "Equipe pedagógica específica do segmento, que cuida da conexão família-escola, conhecendo em profundidade cada criança e seus familiares"],
  extracurriculares: ["Ballet Baby Class"],
  schedule: {
    manha: "7h10 às 12h20",
    tarde: "13h10 às 18h20"
  },
  curriculum: {
    pt: ["Português", "Artes", "História", "Geografia"],
    en: ["Physical Education", "Language", "Math", "Science", "Social Emotional"]
  }
}, {
  id: "finais",
  title: "Anos Finais",
  icon: Lightbulb,
  parcelas: {
    p13: "R$ 3.913,18",
    p12: "R$ 4.239,27",
    p11: "R$ 4.624,66"
  },
  headline: "Aprofundando conhecimentos e expandindo horizontes",
  description: ["Ao longo dos Anos Finais, os conhecimentos são aprofundados por meio de atividades de maior complexidade, que desafiam os estudantes a estabelecerem relações entre as disciplinas da escola e o mundo.", "O trabalho com desenvolvimento da linguagem e literatura se amplia para o terceiro idioma, somando o Espanhol ao Inglês e Português.", "Autonomia, responsabilidade e habilidades socioemocionais são focais nas interações e em vivências acadêmicas, para promover o convívio respeitoso e gentil entre os alunos."],
  highlights: ["Material didático em Português, Inglês e Espanhol", "Projetos Literários em Inglês, Português e Espanhol, com atividades que envolvem todas as áreas do conhecimento, desenvolvidos a partir de um título por bimestre, ampliando a formação cultural para além da literária", "Programa Semente: formação socioemocional estruturada a partir de propostas, situações, reflexões e proposições adequadas a cada faixa etária", "Pensamento Maker: projetos que desenvolvem a criatividade e resolução de problemas, incentivando a postura propositiva e o trabalho em equipe dentro da cultura maker"],
  extras: ["Turmas Olímpicas: grupos para preparo para olimpíadas acadêmicas em diferentes áreas de conhecimento", "Progresso Completo: contraturno escolar com atividades lúdicas, esportivas, culturais e tarefas de casa", "Extracurricular: modalidades esportivas e culturais que adensam a formação regular", "Saídas pedagógicas: vivências externas que promovem a interlocução e o aprimoramento dos conhecimentos escolares com o mundo"],
  avaliacao: {
    items: ["Trabalho em Grupo: envolvendo múltiplos temas, gêneros textuais e suportes de comunicação", "Trabalho de Pesquisa Individual: desenvolvimento de pesquisa escrita e apresentação oral a partir de um tema de interesse e escolha do estudante, alinhado aos Objetivos de Desenvolvimento Sustentável da ONU", "Avaliações objetivas: envolvendo todas as áreas de conhecimento, auxiliam no acompanhamento do processo ensino-aprendizagem durante o bimestre", "Avaliações dissertativas: por disciplina, para análise da consolidação dos conhecimentos do bimestre", "Produção de Texto: escrita semanal, com discussão da proposta em sala de aula"],
    extra: "Os alunos realizam também, anualmente, uma avaliação de proficiência da Língua Inglesa."
  },
  comunicacao: ["Aplicativo de envio de comunicados institucionais semanais e troca de mensagens entre família e escola, garantindo rapidez no contato e fortalecendo a proximidade", "Reuniões bimestrais: agendamento individual da professora com as famílias para acompanhamento do desenvolvimento", "Equipe pedagógica específica do segmento, que cuida da conexão família-escola, conhecendo em profundidade cada criança e seus familiares"],
  extracurriculares: ["Ballet", "Coral", "Futsal", "Ginástica", "Violão", "Vôlei"],
  schedule: {
    manha: "7h10 às 12h40",
    tarde: "Y8 e Y9 conforme cronograma específico"
  },
  curriculum: {
    pt: ["Português", "Artes", "História", "Geografia", "Matemática", "Redação", "Educação Financeira", "Ciências", "A partir do Y8: Biologia, Química e Física"],
    en: ["Physical Education", "Language", "Science (Y8 e Y9)", "Social Emotional", "Drama"],
    es: ["Espanhol"]
  }
}, {
  id: "medio",
  title: "Ensino Médio",
  icon: GraduationCap,
  parcelas: {
    p13: "R$ 4.326,35",
    p12: "R$ 4.686,88",
    p11: "R$ 5.112,96"
  },
  headline: "Preparação sólida para universidades nacionais e internacionais",
  description: ["Ao longo do Ensino Médio, os conhecimentos ganham solidez para que os estudantes estejam preparados para ingressar nas principais universidades nacionais e internacionais.", "Por meio de um trabalho acadêmico e cultural amplo, os conteúdos e habilidades de todas as disciplinas são exercitados para que o aluno tenha instrumentos para adotar uma visão de mundo reflexiva-propositiva.", "O acompanhamento e a orientação individualizados para a escolha de carreira universitária garantem suporte completo para esse momento importante e desafiador.", "As relações sociais, o respeito, a gentileza e o bem-estar são cuidados com ações específicas para as necessidades dessa faixa etária."],
  highlights: ["Material didático para todas as disciplinas", "Materiais específicos para trabalho com Inglês, Redação, Atualidades, Filosofia, Sociologia, História da Arte"],
  extras: ["Turmas Olímpicas: grupos para preparo para olimpíadas acadêmicas em diferentes áreas de conhecimento", "Semana de Profissões: palestras e visitas a empresas e instituições de ensino superior, que ampliam o olhar do estudante para uma escolha mais consciente", "Saídas e eventos esportivos - Intercup - e culturais - Feira Científica: vivências externas que promovem a interlocução e o aprimoramento dos conhecimentos escolares com o mundo, o repertório cultural e as interações sociais", "Atividades extracurriculares com modalidades esportivas e culturais que adensam a formação regular"],
  avaliacao: {
    items: ["Trabalho em Grupo: envolvendo múltiplos temas, gêneros textuais e suportes de comunicação", "Trabalho de Pesquisa Individual: desenvolvimento de pesquisa escrita e apresentação oral a partir de um tema de interesse e escolha do estudante, alinhado aos Objetivos de Desenvolvimento Sustentável da ONU", "Avaliações objetivas - Simulado: envolvendo todas as áreas de conhecimento, preparam os estudantes para o modelo das provas de 1ª fase dos principais vestibulares e ENEM", "Avaliações dissertativas: por disciplina, preparam os estudantes para o modelo das provas de 2ª fase dos principais vestibulares", "Produção de Texto: escrita semanal em sala de aula, com modelos de propostas dos principais vestibulares"]
  },
  comunicacao: ["Aplicativo de envio de comunicados institucionais semanais e troca de mensagens entre família e escola, garantindo rapidez no contato e fortalecendo a proximidade", "Reuniões bimestrais: agendamento individual da professora com as famílias para acompanhamento do desenvolvimento", "Equipe pedagógica específica do segmento, que cuida da conexão família-escola, conhecendo em profundidade cada criança e seus familiares"],
  extracurriculares: ["Violão", "Vôlei", "Futsal", "Handebol", "Itinerários de Obras Literárias", "Laboratório de Química", "Biologia Marinha", "Cinema"],
  schedule: {
    manha: "7h15 às 13h",
    tarde: "Conforme grade específica de cada turma"
  },
  curriculum: {
    all: ["Gramática", "Literatura", "Redação", "Matemática", "Física", "Química", "Biologia", "Sociologia", "Filosofia", "História", "Geografia", "Educação Física", "Inglês"],
    series12: ["Educação Financeira", "Interpretação de Texto"]
  }
}, {
  id: "ib",
  title: "IB Diploma Programme",
  icon: Globe,
  isIB: true,
  parcelas: {
    p13: "R$ 7.051,55",
    p12: "R$ 7.639,18",
    p11: "R$ 8.333,65"
  },
  headline: "Um mundo de oportunidades",
  description: ["No Colégio Progresso, acreditamos que preparar nossos estudantes para o futuro vai além de conteúdos acadêmicos: envolve ampliar horizontes, desenvolver pensamento crítico e formar cidadãos capazes de atuar em qualquer lugar do mundo.", "Por isso, conquistamos a certificação internacional como IB World School, tornando-nos a primeira escola brasileira de Campinas a oferecer o IB Diploma Programme, um dos programas de ensino mais reconhecidos globalmente.", "Criado em 1968, na Suíça, o International Baccalaureate (IB) está presente em mais de 160 países e reúne mais de 5.800 escolas que compartilham a mesma visão: formar estudantes globais, preparados para os desafios acadêmicos e profissionais do século XXI."],
  highlightsIntro: "O Colégio Progresso é, assim, parte de uma comunidade educacional internacional que promove excelência acadêmica e valores humanos, preparando cada estudante para ser protagonista de sua própria história em qualquer lugar do mundo.",
  highlights: ["Desenvolve pensamento crítico e autonomia intelectual", "Estimula a visão de mundo ampla e multicultural", "Conecta os estudantes às melhores universidades do Brasil e do exterior", "Complementa a preparação para a vida universitária, acadêmica e profissional"],
  extras: [],
  schedule: {
    manha: "7h15 às 13h",
    tarde: "Conforme grade específica de cada turma"
  },
  curriculum: {
    ib: ["Estudos em Língua e Literatura (Studies in Language and Literature)", "Aquisição de Línguas (Language Acquisition)", "Indivíduos e Sociedades (Individuals and Societies)", "Ciências (Sciences)", "Matemática (Mathematics)", "Artes (The Arts) ou Eletiva"],
    core: ["Theory of Knowledge (TOK)", "Extended Essay (Monografia)", "Creativity, Activity, Service (CAS)"]
  }
}];
export const EducationTabs = () => {
  const [activeTab, setActiveTab] = useState("infantil");
  const activeLevel = educationLevels.find(l => l.id === activeTab)!;

  // Listen for tab change events from Header navigation
  useEffect(() => {
    const handleTabChange = (event: CustomEvent<{
      tabId: string;
    }>) => {
      const {
        tabId
      } = event.detail;
      if (educationLevels.some(l => l.id === tabId)) {
        setActiveTab(tabId);
      }
    };
    window.addEventListener('changeEducationTab', handleTabChange as EventListener);
    return () => {
      window.removeEventListener('changeEducationTab', handleTabChange as EventListener);
    };
  }, []);
  return <section className="section-padding bg-primary" id="ciclos">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Navegue por Ciclo de Ensino
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Selecione abaixo o segmento para conhecer a proposta de cada fase
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 lg:gap-3 mb-10">
          {educationLevels.map(level => {
          const Icon = level.icon;
          return <button key={level.id} onClick={() => setActiveTab(level.id)} className={`
                  flex items-center gap-2 px-3 py-2 lg:px-4 lg:py-2.5 rounded-full font-medium text-xs lg:text-sm
                  transition-all duration-300 border-2 whitespace-nowrap
                  ${activeTab === level.id ? "bg-highlight text-primary border-highlight" : "bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10"}
                `}>
                <Icon size={16} className="hidden sm:block" />
                <span>{level.title}</span>
              </button>;
        })}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.3
        }} className="bg-background rounded-2xl shadow-elevated overflow-hidden" id={activeTab}>
            {/* Cycle Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img key={activeTab} src={cycleImages[activeTab]} alt={activeLevel.title} initial={{
                opacity: 0,
                scale: 1.1
              }} animate={{
                opacity: 1,
                scale: 1
              }} exit={{
                opacity: 0,
                scale: 0.95
              }} transition={{
                duration: 0.5
              }} className="w-full h-full object-cover object-[center_30%]" />
              </AnimatePresence>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              {/* Level badge */}
              <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary backdrop-blur-sm">
                  <activeLevel.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary drop-shadow-lg">
                    {activeLevel.title}
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              {/* Headline */}
              <h4 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                {activeLevel.headline}
              </h4>

              {/* Description - Multiple paragraphs */}
              <div className="space-y-4 mb-8">
                {activeLevel.description.map((paragraph, idx) => <p key={idx} className="text-foreground/80 leading-relaxed text-lg">
                    {paragraph}
                  </p>)}
              </div>

              {/* Layout for Highlights and Extras */}
              <div className="space-y-8">
                {/* Highlights - Materiais e Programas Centrais */}
                <div>
                  <h5 className="font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-highlight" />
                    {activeLevel.isIB ? "Com o IB Diploma Programme" : "Materiais e Programas Centrais"}
                  </h5>
                  <ul className="space-y-3">
                    {activeLevel.highlights.map((item, idx) => <li key={idx} className="flex items-start gap-3 text-foreground/80">
                        <span className="text-highlight font-bold mt-1">•</span>
                        <span>{item}</span>
                      </li>)}
                  </ul>
                  {activeLevel.highlightsIntro && <p className="text-foreground/80 leading-relaxed text-lg mt-4">
                      {activeLevel.highlightsIntro}
                    </p>}
                </div>

                {/* Extras - Para Além da Sala de Aula */}
                {activeLevel.extras.length > 0 && <div>
                    <h5 className="font-bold text-primary mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-highlight" />
                      Para Além da Sala de Aula
                    </h5>
                    <ul className="space-y-3">
                      {activeLevel.extras.map((item, idx) => <li key={idx} className="flex items-start gap-3 text-foreground/80">
                          <span className="text-highlight font-bold mt-1">•</span>
                          <span>{item}</span>
                        </li>)}
                    </ul>
                  </div>}
              </div>

              {/* Avaliação da Aprendizagem */}
              {activeLevel.avaliacao && <div className="mt-8">
                  <h5 className="font-bold text-primary mb-4 flex items-center gap-2">
                    <ClipboardCheck className="w-4 h-4 text-highlight" />
                    Avaliação da Aprendizagem - Instrumentos
                  </h5>
                  {activeLevel.avaliacao.intro && <p className="text-foreground/80 mb-4">{activeLevel.avaliacao.intro}</p>}
                  {activeLevel.avaliacao.year2 && <p className="text-foreground/80 mb-3 font-medium">{activeLevel.avaliacao.year2}</p>}
                  <ul className="space-y-2">
                    {activeLevel.avaliacao.items.map((item, idx) => <li key={idx} className="flex items-start gap-3 text-foreground/80">
                        <span className="text-highlight font-bold mt-1">•</span>
                        <span>{item}</span>
                      </li>)}
                  </ul>
                  {activeLevel.avaliacao.extra && <p className="text-foreground/80 mt-4 font-medium">{activeLevel.avaliacao.extra}</p>}
                </div>}

              {/* Comunicação */}
              {activeLevel.comunicacao && <div className="mt-8">
                  <h5 className="font-bold text-primary mb-4 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-highlight" />
                    Comunicação
                  </h5>
                  <ul className="space-y-3">
                    {activeLevel.comunicacao.map((item, idx) => <li key={idx} className="flex items-start gap-3 text-foreground/80">
                        <span className="text-highlight font-bold mt-1">•</span>
                        <span>{item}</span>
                      </li>)}
                  </ul>
                </div>}

              {/* Curriculum & Extracurriculares Section */}
              <div className={`mt-8 grid gap-6 ${activeLevel.extracurriculares && activeLevel.extracurriculares.length > 0 ? 'md:grid-cols-2' : ''}`}>
                {/* Currículo */}
                {activeLevel.curriculum && <div className={`p-6 bg-secondary/50 rounded-xl ${!activeLevel.extracurriculares || activeLevel.extracurriculares.length === 0 ? 'col-span-full' : ''}`}>
                    <h5 className="font-bold text-primary mb-4">Currículo</h5>
                    
                    {activeLevel.curriculum.pt && <div className="mb-4">
                        <span className="text-sm font-semibold text-foreground/60 block mb-2">Em Português:</span>
                        <div className="flex flex-wrap gap-2">
                          {activeLevel.curriculum.pt.map((item, idx) => <span key={idx} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                              {item}
                            </span>)}
                        </div>
                      </div>}
                    
                    {activeLevel.curriculum.en && <div className="mb-4">
                        <span className="text-sm font-semibold text-foreground/60 block mb-2">Em Inglês:</span>
                        <div className="flex flex-wrap gap-2">
                          {activeLevel.curriculum.en.map((item, idx) => <span key={idx} className="px-3 py-1.5 bg-accent/20 text-primary rounded-full text-sm font-medium">
                              {item}
                            </span>)}
                        </div>
                      </div>}
                    
                    {activeLevel.curriculum.es && <div className="mb-4">
                        <span className="text-sm font-semibold text-foreground/60 block mb-2">Em Espanhol:</span>
                        <div className="flex flex-wrap gap-2">
                          {activeLevel.curriculum.es.map((item, idx) => <span key={idx} className="px-3 py-1.5 bg-highlight/20 text-primary rounded-full text-sm font-medium">
                              {item}
                            </span>)}
                        </div>
                      </div>}
                    
                    {activeLevel.curriculum.all && <div className="mb-4">
                        <span className="text-sm font-semibold text-foreground/60 block mb-2">1ª, 2ª e 3ª séries:</span>
                        <div className="flex flex-wrap gap-2">
                          {activeLevel.curriculum.all.map((item, idx) => <span key={idx} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                              {item}
                            </span>)}
                        </div>
                      </div>}
                    
                    {activeLevel.curriculum.series12 && <div>
                        <span className="text-sm font-semibold text-foreground/60 block mb-2">1ª e 2ª séries:</span>
                        <div className="flex flex-wrap gap-2">
                          {activeLevel.curriculum.series12.map((item, idx) => <span key={idx} className="px-3 py-1.5 bg-accent/20 text-primary rounded-full text-sm font-medium">
                              {item}
                            </span>)}
                        </div>
                      </div>}
                    
                    {activeLevel.curriculum.ib && <div className="mb-4">
                        <span className="text-sm font-semibold text-foreground/60 block mb-2">6 Matérias:</span>
                        <div className="flex flex-wrap gap-2">
                          {activeLevel.curriculum.ib.map((item, idx) => <span key={idx} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                              {item}
                            </span>)}
                        </div>
                      </div>}
                    
                    {activeLevel.curriculum.core && <div>
                        <span className="text-sm font-semibold text-foreground/60 block mb-2">Core (Núcleo):</span>
                        <div className="flex flex-wrap gap-2">
                          {activeLevel.curriculum.core.map((item, idx) => <span key={idx} className="px-3 py-1.5 bg-highlight/20 text-highlight rounded-full text-sm font-medium">
                              {item}
                            </span>)}
                        </div>
                      </div>}
                  </div>}

                {/* Extracurriculares */}
                {activeLevel.extracurriculares && activeLevel.extracurriculares.length > 0 && <div className="p-6 bg-secondary/50 rounded-xl">
                    <h5 className="font-bold text-primary mb-4">Atividades Extracurriculares</h5>
                    <div className="flex flex-wrap gap-2">
                      {activeLevel.extracurriculares.map((item, idx) => <span key={idx} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {item}
                        </span>)}
                    </div>
                  </div>}
              </div>

              {/* Schedule & Pricing */}
              <div className="mt-8 grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-secondary rounded-xl">
                  <h5 className="font-bold text-primary mb-4">Horários</h5>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-foreground/60">Manhã:</span>
                      <p className="font-semibold text-primary">{activeLevel.schedule.manha}</p>
                    </div>
                    <div>
                      <span className="text-foreground/60">Tarde:</span>
                      <p className="font-semibold text-primary">{activeLevel.schedule.tarde}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-highlight/10 border border-highlight/30 rounded-xl">
                  <h5 className="font-bold text-primary mb-2">Parcelas 2025/2026</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/70">13x (até Dez/25):</span>
                      <span className="font-bold text-highlight text-lg">{activeLevel.parcelas.p13}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/70">12x (a partir Jan/26):</span>
                      <span className="font-bold text-highlight text-lg">{activeLevel.parcelas.p12}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/70">11x (a partir Fev/26):</span>
                      <span className="font-bold text-highlight text-lg">{activeLevel.parcelas.p11}</span>
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-highlight/20 mt-3 text-primary">
                    Materiais didáticos já inclusos na parcela
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progresso Completo Section - Fixed content outside tabs */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mt-10 bg-background rounded-2xl shadow-elevated overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Progresso Completo
                </h3>
                <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                  Progresso Completo é o programa que estende a vivência dos alunos na escola, com acompanhamento pedagógico, realização de tarefas, práticas esportivas e atividades culturais, promovendo o desenvolvimento dos estudantes. Mais que integral, é Completo.
                </p>
                <p className="text-foreground/60 italic">
                  Consulte condições e valores com a equipe de admissões.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};