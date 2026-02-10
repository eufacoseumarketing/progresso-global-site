import { motion } from "framer-motion";
import { Trophy, Target, GraduationCap, Medal } from "lucide-react";
const stats = [{
  icon: GraduationCap,
  value: "105",
  label: "Aprovações em 2025",
  description: "55 alunos aprovados em cursos como Medicina, Engenharias, Direito e Design"
}, {
  icon: Target,
  value: "59%",
  label: "Universidades Públicas",
  description: "Das aprovações em instituições públicas de ensino superior"
}, {
  icon: Medal,
  value: "300+",
  label: "Medalhas",
  description: "Em 9 olimpíadas acadêmicas - Ouro, Prata, Bronze e Honra ao Mérito"
}, {
  icon: Trophy,
  value: "1",
  label: "Aprovação Internacional",
  description: "Di Milano - aprovação em universidade internacional"
}];
export const Results = () => {
  return <section className="section-padding bg-secondary" id="resultados">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-highlight/20 text-highlight mb-6">
            Conquistas 2025
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ser Progresso é{" "}
            <span className="text-highlight">Conquistar Resultados</span>
          </h2>
          <div className="text-lg text-foreground/70 max-w-5xl mx-auto space-y-4">
            <p>
              No Colégio Progresso, excelência acadêmica não é apenas um resultado — é uma experiência vivida todos os dias. Nosso projeto pedagógico une rigor intelectual, desenvolvimento socioemocional e visão de mundo, para que cada aluno aprenda a pensar com autonomia, agir com responsabilidade e transformar conhecimento em ação.
            </p>
            <p>
              O currículo integra o melhor das referências nacionais e internacionais, com ensino bilíngue, certificação IB World School no Ensino Médio e metodologias ativas que estimulam investigação, criatividade e resolução de desafios reais. Aqui, o estudante aprende a fazer as perguntas certas. Esse trabalho é conduzido por uma equipe docente de alto nível, em constante formação, que acompanha de perto cada etapa do desenvolvimento dos alunos — do primeiro traço na Educação Infantil às grandes escolhas do Ensino Médio.
            </p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
          const Icon = stat.icon;
          return <motion.div key={stat.label} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="bg-background rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl font-bold text-highlight mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-primary mb-2">{stat.label}</div>
                <p className="text-sm text-foreground/60">{stat.description}</p>
              </motion.div>;
        })}
        </div>

        {/* Additional Info */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.4
      }} className="mt-12 p-8 bg-primary rounded-2xl text-center">
          <p className="text-primary-foreground/90 text-lg max-w-3xl mx-auto">
            Essas conquistas que revelam algo maior: a formação de jovens preparados para liderar, colaborar e construir futuros com propósito.















          </p>
          <p className="text-highlight font-semibold mt-4 text-xl">
            No Progresso, aprender vai além da sala de aula. Torna-se projeto de vida.
          </p>
        </motion.div>
      </div>
    </section>;
};