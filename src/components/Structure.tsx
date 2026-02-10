import { motion } from "framer-motion";
import { Heart, Shield, AlertTriangle } from "lucide-react";
import estruturaCampus from "@/assets/estrutura-campus.jpg";

const features = [
  {
    icon: Heart,
    title: "Suporte Médico – Medicar",
    description: "Nossos alunos contam com atendimento imediato e qualificado da equipe de saúde da Medicar sempre que necessário. O serviço garante acolhimento ágil, avaliação responsável e comunicação transparente com as famílias, proporcionando cuidado e tranquilidade ao longo de toda a rotina escolar."
  },
  {
    icon: Shield,
    title: "Campus Monitorado",
    description: "O Colégio Progresso oferece um ambiente protegido e planejado para o bem-estar dos estudantes, com sistema de monitoramento por câmeras, controle de acessos e equipe de vigilância 24 horas. Cada espaço foi pensado para que os alunos possam aprender, conviver e se desenvolver com segurança e serenidade."
  },
  {
    icon: AlertTriangle,
    title: "Preparação para Emergências",
    description: "Nossa equipe participa regularmente de treinamentos de primeiros socorros e protocolos de emergência, incluindo simulações de evacuação e procedimentos preventivos. Essa preparação contínua assegura respostas rápidas e eficazes, priorizando a integridade e o cuidado com cada estudante em qualquer situação."
  }
];

export const Structure = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Estrutura Operacional
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Segurança, saúde e bem-estar são prioridades em nosso campus
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={estruturaCampus} 
                alt="Campus do Colégio Progresso" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Features */}
          <div className="space-y-6 order-1 lg:order-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl border-2 border-border hover:border-primary transition-colors bg-background"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-6 h-6 text-highlight group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                      <p className="text-foreground/70 leading-relaxed text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
