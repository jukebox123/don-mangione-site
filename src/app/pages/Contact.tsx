import { motion } from "motion/react";
import { MapPin, Phone, Clock, MessageCircle, Instagram, Mail } from "lucide-react";

export function Contact() {
  const whatsappNumber = "5511992873425";
  const message = "Olá! Gostaria de fazer uma reserva no Don Mangione.";
  
  const handleWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Monsenhor Couto, 581",
      subtitle: "Salto/SP – Brasil",
      subtitle2: "CEP: 13320-210",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 99287-3425",
      subtitle: "Ligue para fazer sua reserva",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@mangioneristorante.com.br",
      subtitle: "Envie sua mensagem",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "(11) 99287-3425",
      subtitle: "Atendimento rápido e direto",
      action: handleWhatsApp,
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      content: "Terça a Domingo: 11h30 - 23h00",
      subtitle: "Segunda-feira: Fechado",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-zinc-950">
      
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-amber-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Entre em <span className="text-amber-500">Contato</span>
            </h1>
            <p className="text-xl text-zinc-300">
              Estamos prontos para atendê-lo e proporcionar uma experiência incrível
            </p>
          </motion.div>
        </div>
      </section>

      {/* Informações */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, i) => (
            <div
              key={i}
              onClick={info.action}
              className={`bg-zinc-900 border border-amber-600/20 rounded-lg p-6 ${
                info.action ? "cursor-pointer hover:bg-zinc-800 transition" : ""
              }`}
            >
              <info.icon className="text-amber-500 mb-4" size={32} />
              <h3 className="text-white font-semibold text-lg mb-1">
                {info.title}
              </h3>
              <p className="text-amber-500 font-medium">{info.content}</p>
              {info.subtitle && (
                <p className="text-zinc-400 text-sm">{info.subtitle}</p>
              )}
              {info.subtitle2 && (
                <p className="text-zinc-400 text-sm">{info.subtitle2}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Mapa */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-zinc-900 border border-amber-600/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              Nossa Localização
            </h2>

            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Rua+Monsenhor+Couto+581+Salto+SP&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <div className="text-center mt-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rua+Monsenhor+Couto+581+Salto+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 font-semibold"
              >
                Abrir no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Redes Sociais */}
      <section className="py-20 bg-zinc-900 border-t border-amber-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-3xl font-bold text-white mb-4">
              Siga-nos nas Redes Sociais
            </h2>
            <p className="text-zinc-400 mb-6">
              Acompanhe novidades, pratos e promoções
            </p>

            <div className="flex justify-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600/10 hover:bg-amber-600/20 text-amber-500 px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <Instagram size={20} />
                Instagram
              </a>

              <button
                onClick={handleWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-zinc-950 to-zinc-900 text-center">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-4xl font-bold text-white mb-4">
              Aguardamos Sua Visita!
            </h2>
            <p className="text-zinc-300 mb-6">
              Reserve sua mesa e viva uma experiência gastronômica única
            </p>

            <button
              onClick={handleWhatsApp}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold"
            >
              Fazer Reserva Agora
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
