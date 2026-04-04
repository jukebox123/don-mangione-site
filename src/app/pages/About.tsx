import { motion } from "motion/react";
import { Link } from "react-router";
import { Heart, Users, Award, ChefHat, ChevronRight } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Paixão pela Gastronomia",
      description:
        "Cada prato é preparado com amor e dedicação, usando apenas ingredientes selecionados e técnicas aprimoradas ao longo dos anos.",
    },
    {
      icon: Users,
      title: "Experiência do Cliente",
      description:
        "Nosso compromisso é criar momentos memoráveis, onde cada detalhe é pensado para proporcionar conforto e satisfação.",
    },
    {
      icon: Award,
      title: "Qualidade Premium",
      description:
        "Trabalhamos apenas com fornecedores de confiança, garantindo que cada ingrediente atenda aos mais altos padrões de qualidade.",
    },
    {
      icon: ChefHat,
      title: "Tradição e Inovação",
      description:
        "Respeitamos as raízes da culinária tradicional enquanto incorporamos toques modernos para surpreender seu paladar.",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-zinc-950">
      
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1771308161631-775781e86745?w=1080"
            alt="Don Mangione Interior"
            className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/70 to-zinc-950" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Nossa <span className="text-amber-500">História</span>
            </h1>
            <p className="text-xl text-zinc-300">
              Mais do que um restaurante, uma experiência que une tradição,
              sabor e hospitalidade
            </p>
          </motion.div>
        </div>
      </section>

      {/* História */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-zinc-300 leading-relaxed">
            
            <p>
              O <span className="text-amber-500 font-semibold">Don Mangione</span> nasceu de um sonho: criar um
              espaço onde as pessoas pudessem se reunir para celebrar os
              melhores momentos da vida em torno de uma mesa farta.
            </p>

            <p>
              Inspirados pela tradição italiana e pelo churrasco brasileiro,
              criamos um conceito único que une o melhor de dois mundos.
            </p>

            <p>
              Localizados no coração de <span className="text-white font-semibold">Salto/SP</span>,
              somos referência em experiência gastronômica.
            </p>

            <p className="text-xl text-amber-500 font-semibold italic pt-4">
              "Don Mangione não é apenas onde você come – é onde você pertence."
            </p>

          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-zinc-950 border-y border-amber-600/20">
        <div className="container mx-auto px-4">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nossos <span className="text-amber-500">Valores</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-zinc-900 p-8 rounded-lg
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10"
              >
                <value.icon className="text-amber-500 mb-4" size={32} />
                <h3 className="text-white text-xl mb-2">{value.title}</h3>
                <p className="text-zinc-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-4xl text-white mb-4">
          Venha Nos Visitar
        </h2>

        <Link
          to="/contato"
          className="group inline-flex items-center gap-2
          bg-amber-600 text-white px-8 py-4 rounded-lg
          transition-all duration-300
          hover:bg-amber-500 hover:scale-105 hover:-translate-y-1
          hover:shadow-xl hover:shadow-amber-500/30
          active:scale-95"
        >
          Ver Localização
          <ChevronRight
            className="transition-transform duration-300 group-hover:translate-x-1"
            size={20}
          />
        </Link>
      </section>
    </div>
  );
}
