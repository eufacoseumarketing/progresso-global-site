import { motion } from "framer-motion";
import atividadeEducativa1 from "@/assets/atividade-educativa-1.jpeg";
export const History = () => {
  return <section className="section-padding bg-background" id="sobre">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-highlight/20 text-highlight mb-6">
              125 Anos de História
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              Ser Progresso é ter{" "}
              <span className="text-highlight">de História, Tradição e Inovação</span>
            </h2>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Há 125 anos, o Colégio Progresso faz parte da história de Campinas — e, principalmente, 
                da história de milhares de famílias. Fundado em 1900 com o propósito ousado de oferecer 
                às jovens da cidade uma educação de excelência sem que precisassem se afastar de seus lares, 
                o Progresso nasceu com espírito pioneiro e rapidamente se tornou referência de qualidade, 
                valores e inovação.
              </p>
              
              <p>
                De geração em geração, a escola acompanhou as transformações do mundo sem perder o que 
                a tornou única: o cuidado com cada aluno, o compromisso com o conhecimento e a formação 
                de pessoas íntegras, preparadas para a vida. Aqui, tradição nunca foi sinônimo de passado 
                — mas de base sólida para construir novos caminhos.
              </p>

              <p>
                Hoje, o Progresso segue à frente do seu tempo. Foi uma das primeiras escolas da região 
                a adotar o ensino bilíngue e tornou-se a <strong>primeira escola brasileira em Campinas 
                a oferecer o IB Diploma Programme</strong>, reconhecido internacionalmente como um dos 
                programas mais exigentes e completos do mundo. Em ambientes de aprendizagem inovadores, 
                com professores altamente qualificados e uma comunidade vibrante, formamos estudantes 
                confiantes, protagonistas e preparados para atuar em qualquer lugar do planeta.
              </p>

              <p className="font-medium text-primary">
                Mais do que uma escola, o Progresso é um lugar onde talentos florescem, sonhos ganham 
                direção e cada criança é vista em sua singularidade.
              </p>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
              <img src={atividadeEducativa1} alt="Atividade educativa no Colégio Progresso" className="w-full h-full object-cover" />
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-6 shadow-card">
              <div className="text-5xl font-bold text-primary mb-1">125</div>
              <div className="text-lg font-semibold text-highlight">Anos</div>
              <div className="text-sm text-foreground/60">de Excelência</div>
            </div>
            
            {/* Badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-lg px-4 py-2 shadow-card">
              <div className="text-sm font-bold">1ª IB em Campinas</div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-highlight/20 rounded-full blur-xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>;
};