import { motion } from "motion/react";
import { ChefHat } from "lucide-react";

export function Menu() {
  const whatsappNumber = "5511999999999";
  const message = "Olá! Gostaria de fazer um pedido do cardápio Don Mangione.";
  
  const handleWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // IMAGENS TEMPORÁRIAS (placeholder)
  const menuPages = [
  "/images/cardapio1.jpg",
  "/images/cardapio2.jpg",
  "/images/cardapio3.jpg",
  "/images/cardapio4.jpg"
  ];

  return (
    <div className="pt-16 min-h-screen bg-zinc-950">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-amber-600/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-600/10 rounded-full mb-6">
              <ChefHat className="text-amber-500" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Nosso <span className="text-amber-500">Cardápio</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8">
              Descubra nossa seleção de pratos artesanais, preparados com
              ingredientes premium e muito sabor
            </p>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg transition-all hover:scale-105 font-semibold"
            >
              Fazer Pedido pelo WhatsApp
            </button>
          </motion.div>
        </div>
      </section>

      {/* Menu Pages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {menuPages.map((page, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-zinc-900 border-2 border-amber-600/20 rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src={page}
                    alt={`Cardápio Don Mangione - Página ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
