import { Github, Linkedin } from "lucide-react";

export function Localizacao() {
  return (
    <section className="flex flex-col items-center w-full p-8 ">
      <div className="w-full max-w-3xl">
        <h2 className="text-center text-white text-lg sm:text-xl font-bold mb-4">
          Nossa Localização
        </h2>
        <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-2xl shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6807182885846!2d-46.89275082619123!3d-23.5439833609511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0139101e6bd1%3A0xb0919754941ac5ec!2sR.%20Istambul%2C%206%20-%20Vale%20do%20Sol%2C%20Barueri%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1740614749767!5m2!1spt-BR!2sbr"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Informações do Desenvolvedor */}
      <div className="mt-6 flex items-center gap-4 bg-white py-2 px-4 rounded-full shadow-md">
        <p className="text-gray-700 text-sm sm:text-base">
          Site desenvolvido por <span className="font-bold">Nicollas Dias</span>
        </p>
        <div className="flex gap-3">
          <a
            href="https://github.com/NicollasMDs7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/nicollas-mendes-dias-871357303"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
