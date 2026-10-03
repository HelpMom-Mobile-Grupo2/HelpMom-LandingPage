import React, { useState } from 'react';
import { 
  Heart, 
  Menu, 
  X, 
  Play, 
  Activity, 
  MessageCircle, 
  Users, 
  FileText,
  ChevronDown,
  CheckCircle2
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-pink-400" />
            <span className="ml-2 text-2xl font-bold text-gray-900 font-['Poppins']">HelpMom</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#nosotros" className="text-gray-600 hover:text-pink-400 transition-colors font-medium">Nosotros</a>
            <a href="#productos" className="text-gray-600 hover:text-pink-400 transition-colors font-medium">Productos</a>
            <a href="#planes" className="text-gray-600 hover:text-pink-400 transition-colors font-medium">Planes</a>
            <a href="#faq" className="text-gray-600 hover:text-pink-400 transition-colors font-medium">FAQ</a>
            <a href="#contacto" className="text-gray-600 hover:text-pink-400 transition-colors font-medium">Contacto</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-pink-500 font-medium transition-colors">
              Iniciar Sesión
            </button>
            <button className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg">
              Crear Cuenta
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-pink-400">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#nosotros" className="block px-3 py-2 text-gray-600 hover:text-pink-400 font-medium">Nosotros</a>
            <a href="#productos" className="block px-3 py-2 text-gray-600 hover:text-pink-400 font-medium">Productos</a>
            <a href="#planes" className="block px-3 py-2 text-gray-600 hover:text-pink-400 font-medium">Planes</a>
            <a href="#faq" className="block px-3 py-2 text-gray-600 hover:text-pink-400 font-medium">FAQ</a>
            <a href="#contacto" className="block px-3 py-2 text-gray-600 hover:text-pink-400 font-medium">Contacto</a>
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
              <button className="w-full text-center text-gray-600 hover:text-pink-500 font-medium py-2">
                Iniciar Sesión
              </button>
              <button className="w-full bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-full font-medium shadow-md">
                Crear Cuenta
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <span className="inline-block px-4 py-1.5 bg-[#FFF0F5] text-pink-500 rounded-full text-sm font-bold tracking-wider">
              CUIDADO QUE CONECTA
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-['Poppins']">
              Tu compañera esencial en el camino de la maternidad.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed font-['Inter']">
              Tecnología que te escucha, te orienta y te acompaña. Monitorea tu salud y la de tu bebé desde un solo lugar, con la tranquilidad de sentirte siempre acompañada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg flex items-center justify-center">
                Ver planes <span className="ml-2">→</span>
              </button>
              <button className="group flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-gray-700 bg-white border-2 border-gray-100 hover:border-pink-200 hover:text-pink-500 transition-all">
                <Play className="w-5 h-5 mr-2 text-pink-400 group-hover:text-pink-500" />
                Conoce HelpMom
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Mujer embarazada sonriendo" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Estado de hoy</p>
                <p className="text-sm font-bold text-gray-900">Todo se ve bien 💖</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Mission = () => {
  return (
    <section id="nosotros" className="py-20 bg-[#FFF0F5] bg-opacity-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-pink-500 font-bold tracking-wider text-sm">NUESTRA MISIÓN</span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 font-['Poppins']">
          Cuidarte también es escucharte.
        </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          En HelpMom creemos que ninguna mamá debería sentirse sola durante el embarazo o el posparto. 
          Conectamos tecnología e IA para brindarte apoyo continuo, respuestas claras y paz mental cuando más lo necesitas.
        </p>
        <a href="#" className="inline-block mt-8 text-pink-500 font-medium hover:text-pink-600 transition-colors">
          Descubre cómo funciona <span className="ml-1">→</span>
        </a>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Monitoreo IoT",
      desc: "Sensor inteligente para seguimiento de signos vitales en tiempo real.",
      icon: <Activity className="w-6 h-6 text-pink-500" />,
      bg: "bg-[#FFF0F5]"
    },
    {
      title: "Triage inteligente",
      desc: "Chatbot IA disponible 24/7 para resolver tus dudas inmediatas.",
      icon: <MessageCircle className="w-6 h-6 text-blue-500" />,
      bg: "bg-blue-50"
    },
    {
      title: "Modo compañero",
      desc: "Comparte tu progreso y alertas con familiares o cuidadores.",
      icon: <Users className="w-6 h-6 text-yellow-600" />,
      bg: "bg-yellow-50"
    },
    {
      title: "Expediente clínico",
      desc: "Toda tu información médica ordenada y siempre a la mano.",
      icon: <FileText className="w-6 h-6 text-purple-500" />,
      bg: "bg-purple-50"
    }
  ];

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-pink-500 font-bold tracking-wider text-sm">TODO EN UN SOLO LUGAR</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 font-['Poppins']">
            Hecho para acompañarte.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className={`${item.bg} p-8 rounded-3xl transition-transform hover:-translate-y-2 duration-300`}>
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-['Poppins']">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="planes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-pink-500 font-bold tracking-wider text-sm">ELIGE TU TRANQUILIDAD</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 font-['Poppins']">
            Un plan para cada familia.
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Plan Básico */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 font-['Poppins']">Plan Básico</h3>
            <div className="mt-4 flex items-baseline text-5xl font-extrabold text-gray-900">
              $9.99
              <span className="ml-1 text-xl font-medium text-gray-500">/mes</span>
            </div>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-pink-400 mr-3" /> Monitoreo diario
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-pink-400 mr-3" /> Chatbot IA 24/7
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-pink-400 mr-3" /> Contenido por etapa
              </li>
            </ul>
            <button className="mt-8 w-full py-3.5 rounded-full font-medium text-pink-500 bg-white border-2 border-pink-200 hover:border-pink-400 transition-colors">
              Comenzar ahora
            </button>
          </div>

          {/* Plan Integral */}
          <div className="bg-gray-900 rounded-3xl p-8 shadow-xl relative transform md:-scale-y-100 md:scale-y-100 md:scale-105">
            <div className="absolute top-0 inset-x-0 flex justify-center -mt-4">
              <span className="bg-pink-400 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Más Elegido
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white font-['Poppins']">Plan Cuidado Integral</h3>
            <div className="mt-4 flex items-baseline text-5xl font-extrabold text-white">
              $19.99
              <span className="ml-1 text-xl font-medium text-gray-400">/mes</span>
            </div>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-pink-400 mr-3" /> Todo lo del plan básico
              </li>
              <li className="flex items-center text-white font-medium">
                <CheckCircle2 className="w-5 h-5 text-pink-400 mr-3" /> Sensor IoT Inteligente
              </li>
              <li className="flex items-center text-white font-medium">
                <CheckCircle2 className="w-5 h-5 text-pink-400 mr-3" /> Expediente médico digital
              </li>
              <li className="flex items-center text-white font-medium">
                <CheckCircle2 className="w-5 h-5 text-pink-400 mr-3" /> Modo compañero
              </li>
            </ul>
            <button className="mt-8 w-full py-3.5 rounded-full font-medium text-white bg-pink-400 hover:bg-pink-500 transition-colors shadow-lg shadow-pink-500/30">
              Comenzar ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <p className="mt-4 text-gray-600 leading-relaxed pr-8">
          {answer}
        </p>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex gap-16">
          <div className="lg:w-1/3 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-['Poppins'] mb-6">
              Preguntas frecuentes.
            </h2>
            <p className="text-gray-600 mb-8">
              ¿No encuentras la respuesta que buscas? Estamos aquí para ayudarte.
            </p>
            <button className="text-pink-500 font-medium hover:text-pink-600 flex items-center transition-colors">
              Hablar con nosotros <span className="ml-2">→</span>
            </button>
          </div>
          <div className="lg:w-2/3">
            <FAQItem 
              question="¿Cómo funciona el sensor IoT?"
              answer="El sensor es un dispositivo pequeño y cómodo que te pones durante el día. Se sincroniza automáticamente con la app HelpMom vía Bluetooth para monitorear signos vitales clave sin que tengas que hacer nada."
            />
            <FAQItem 
              question="¿HelpMom reemplaza la consulta médica?"
              answer="No. HelpMom es una herramienta complementaria diseñada para acompañarte, orientarte y mantener un registro de tu salud. Siempre debes consultar a tu médico para diagnósticos y tratamientos."
            />
            <FAQItem 
              question="¿Puedo compartir el seguimiento con mi familia?"
              answer="¡Sí! Con el 'Modo Compañero' (incluido en el Plan Cuidado Integral), puedes dar acceso a tu pareja, familiares o cuidadores para que reciban actualizaciones y alertas importantes sobre tu bienestar."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFF0F5] rounded-[3rem] p-8 md:p-16">
          <div className="lg:flex gap-16 items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-['Poppins'] mb-4">
                Estamos a un mensaje de distancia.
              </h2>
              <p className="text-lg text-gray-700">
                Nos encantaría saber de ti. Escríbenos si tienes dudas, sugerencias o si necesitas apoyo con tu cuenta. Siempre habrá alguien de nuestro equipo listo para escucharte.
              </p>
            </div>
            <div className="lg:w-1/2">
              <form className="bg-white p-8 rounded-3xl shadow-sm space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tu nombre</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all" placeholder="Ej. Ana Pérez" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tu email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all" placeholder="ana@ejemplo.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">¿En qué podemos ayudarte?</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all resize-none" placeholder="Escribe tu mensaje aquí..."></textarea>
                </div>
                <button type="submit" className="w-full bg-pink-400 hover:bg-pink-500 text-white py-4 rounded-xl font-medium transition-all shadow-md hover:shadow-lg">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center">
          <Heart className="h-6 w-6 text-pink-400" />
          <span className="ml-2 text-xl font-bold text-gray-900 font-['Poppins']">HelpMom</span>
        </div>
        <div className="flex space-x-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-pink-500 transition-colors">Términos</a>
          <a href="#" className="hover:text-pink-500 transition-colors">Privacidad</a>
          <a href="#" className="hover:text-pink-500 transition-colors">Ayuda</a>
        </div>
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} HelpMom. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default function HelpMomLanding() {
  return (
    <div className="min-h-screen bg-white font-['Inter'] selection:bg-pink-200">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Features />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
