import { Link } from "react-router";
import { motion } from "motion/react";
import { ChevronRight, Flame, Beer, Sparkles, Star } from "lucide-react";

export function Home() {
  const whatsappNumber = "5511999999";
  const message = "Olá! Gostaria de fazer uma reserva no Don Mangione.";
  
  const handleWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const highlights = [
    {
      icon: Flame,
      title: "Churrasco Premium",
      description: "Tábuas de carnes nobres selecionadas, preparadas com maestria",
      image: "https://images.unsplash.com/photo-1544536542-85eec703819d?w=1080",
    },
    {
      icon: Beer,
      title: "Chope Artesanal",
      description: "Variedade de chopes premium gelados no ponto perfeito",
      image: "https://images.unsplash.com/photo-1774109049275-6b6fa2f7cd4a?w=1080",
    },
    {
      icon: Sparkles,
      title: "Ambiente Único",
      description: "Decoração sofisticada que une rusticidade e modernidade",
      image: "https://images.unsplash.com/photo-1771308161631-775781e86745?w=1080",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1676300185579-ed2b14891d82?w=1080",
    "https://images.unsplash.com/photo-1761314037083-329b3050b351?w=1080",
    "https://images.unsplash.com/photo-1643988612981-0e25f77dfc7a?w=1080",
    "https://images.unsplash.com/photo-1743793055911-52e19beba5d8?w=1080",
    "https://images.unsplash.com/photo-1764397514739-57a0ac81330d?w=1080",
    "https://images.unsplash.com/photo-1544536542-85eec703819d?w=1080",
  ];

  const testimonials = [
    {
      name: "Ricardo Silva",
      text: "Melhor churrasco de Salto! O ambiente é incrível e o atendimento impecável. Sempre volto com a família.",
    },
    {
      name: "Ana Paula",
      text: "Experiência maravilhosa! As tábuas de carnes são simplesmente perfeitas e o chope estava no ponto.",
    },
    {
      name: "Carlos Mendes",
      text: "Lugar aconchegante com comida de primeira qualidade. Recomendo muito para jantares especiais!",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1544536542-85eec703819d?w=1080"
            alt="Don Mangione"
            className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/50 to-zinc-950" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-amber-500">Sabor Autêntico,</span>
              <br />
              <span className="text-white">Experiência Premium</span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Descubra o verdadeiro prazer da carne nobre e chope artesanal
            </p>

            {/* BOTÕES TURBINADOS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              {/* Ver Cardápio */}
              <Link
                to="/cardapio"
                className="group bg-amber-600 text-white px-8 py-4 rounded-lg
                flex items-center justify-center gap-2
                transition-all duration-300
                hover:bg-amber-500 hover:scale-105 hover:-translate-y-1
                hover:shadow-xl hover:shadow-amber-500/30
                active:scale-95"
              >
                Ver Cardápio
                <ChevronRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  size={20}
                />
              </Link>

              {/* Reservar Mesa */}
              <button
                onClick={handleWhatsApp}
                className="group bg-white/10 text-white px-8 py-4 rounded-lg
                flex items-center justify-center gap-2
                transition-all duration-300 backdrop-blur-sm
                hover:bg-white/20 hover:scale-105 hover:-translate-y-1
                hover:shadow-xl hover:shadow-white/10
                active:scale-95"
              >
                Reservar Mesa
                <ChevronRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  size={20}
                />
              </button>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {highlights.map((h, i) => (
            <div key={i}>
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={h.image}
                  className="w-full h-64 object-cover transition-all duration-500 hover:scale-110 hover:brightness-110"
                />
              </div>
              <h3 className="text-white text-xl">{h.title}</h3>
              <p className="text-zinc-400">{h.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Galeria */}
      <section className="py-20 bg-zinc-950">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-lg">
              <img
                src={img}
                className="w-full h-64 object-cover transition-all duration-500 hover:scale-110 hover:brightness-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-zinc-800 p-6 rounded-lg">
              <p className="text-white mb-4">"{t.text}"</p>
              <p className="text-amber-500">{t.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
