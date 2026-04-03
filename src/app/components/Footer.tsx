import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo.png"; // ajuste o nome do arquivo

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-amber-600/20 text-zinc-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Don Mangione"
                className="h-20 object-contain"
              />
              <span className="text-white font-bold text-2xl leading-none">
                Don <span className="text-amber-500">Mangione</span>
              </span>
            </div>

            <p className="text-sm text-zinc-400">
              Experiência única em churrasco premium e chope artesanal em um
              ambiente sofisticado e acolhedor.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-amber-500 mt-0.5" />
                <span>
                  Rua Monsenhor Couto, 581<br />
                  Salto/SP – Brasil
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={18} className="text-amber-500" />
                <span>(11) 99287-3425</span>
              </div>

              <div className="flex items-start gap-2">
                <Clock size={18} className="text-amber-500 mt-0.5" />
                <span>
                  Ter-Dom: 11h30 - 23h00<br />
                  Segunda: Fechado
                </span>
              </div>

            </div>
          </div>

          {/* Redes */}
          <div>
            <h3 className="text-white font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-600/10 hover:bg-amber-600/20 rounded-full flex items-center justify-center"
              >
                <Instagram size={20} className="text-amber-500" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-600/10 hover:bg-amber-600/20 rounded-full flex items-center justify-center"
              >
                <Facebook size={20} className="text-amber-500" />
              </a>

            </div>
          </div>
        </div>

        <div className="border-t border-amber-600/20 mt-8 pt-8 text-center text-sm text-zinc-500">
          <p>© 2026 Don Mangione. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
