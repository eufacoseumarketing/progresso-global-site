import { motion } from "framer-motion";
import { Globe, Users, BookOpen, Award } from "lucide-react";
const stats = [{
  value: "115",
  label: "Escolas"
}, {
  value: "25",
  label: "Países"
}, {
  value: "92.503",
  label: "Alunos"
}, {
  value: "14.111",
  label: "Colaboradores"
}, {
  value: "24",
  label: "Currículos Acadêmicos"
}];
const highlights = [{
  value: "+26.000",
  label: "estudantes participam de programas internacionais da ISP todos os dias"
}, {
  value: "93%",
  label: "dos alunos chegam onde querem chegar"
}, {
  value: "83%",
  label: "dos formandos dominam proficiência B2 ou superior em idioma adicional"
}];
export const ISPEcosystem = () => {
  return <section className="section-padding bg-primary" id="isp">
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
      }} className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-highlight/20 text-highlight mb-6">
            Part of ISP
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ser Progresso é Fazer Parte de um{" "}
            <span className="text-highlight">Ecossistema Global</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto mb-4">
            No Progresso Bilíngue, os alunos são protagonistas do seu aprendizado, guiados pela curiosidade 
            e pela investigação, assumindo a responsabilidade pelo seu crescimento enquanto colaboram com 
            colegas de todo o mundo.
          </p>
          <p className="text-base text-primary-foreground/70 max-w-3xl mx-auto">
            Como parte da International Schools Partnership – ISP, nossa missão é desenvolver as mentes mais curiosas e confiantes do mundo. Com nossa abordagem Learning.First™, cada momento é planejado para ajudar os alunos a se tornarem a melhor versão de si mesmos, capacitando-os a explorar suas paixões, enfrentar desafios e vivenciar momentos incríveis de aprendizado.
          </p>
        </motion.div>

        {/* Main Stats */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {stats.map((stat, index) => <div key={stat.label} className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-highlight mb-1">{stat.value}</div>
              <div className="text-sm text-primary-foreground/70">{stat.label}</div>
            </div>)}
        </motion.div>

        {/* Highlights */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.2
      }} className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => <div key={index} className="bg-background rounded-2xl p-8 text-center shadow-card">
              <div className="text-4xl md:text-5xl font-bold text-highlight mb-3">{item.value}</div>
              <p className="text-foreground/70">{item.label}</p>
            </div>)}
        </motion.div>

        {/* Description */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.3
      }} className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-4">
            Um dos principais diferenciais em fazer parte do Grupo ISP é o acesso a uma gama ampliada de oportunidades de aprendizagem e de experiências multiculturais e internacionais com alunos das outras escolas ISP do mundo todo, desenvolvendo nos estudantes habilidades essenciais para o sucesso em um mundo globalizado.
          </p>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
            Na ISP, aplicamos o método Learning.First™ e promovemos um ecossistema internacional de excelência, colaboração e resultados concretos.
          </p>
          <p className="text-highlight text-xl font-semibold leading-relaxed">
            Venha conhecer e se encantar pela experiência única que o Colégio Progresso proporciona!
          </p>
        </motion.div>
      </div>
    </section>;
};