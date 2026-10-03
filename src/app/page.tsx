"use client";
import React, { useState } from 'react';
import { 
  Heart, 
  Play, 
  CheckCircle2,
  Bell,
  MessageCircle,
  Users,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Stethoscope,
  Sparkles
} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-pink-400 p-1.5 rounded-xl">
              <Heart className="h-6 w-6 text-white fill-white" />
            </div>
            <span className="text-2xl font-extrabold text-[#3A2D32] tracking-tight">Help<span className="text-pink-400">Mom</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#nosotros" className="text-gray-500 hover:text-pink-400 text-sm font-medium transition-colors">Nosotros</a>
            <a href="#productos" className="text-gray-500 hover:text-pink-400 text-sm font-medium transition-colors">Productos</a>
            <a href="#planes" className="text-gray-500 hover:text-pink-400 text-sm font-medium transition-colors">Planes</a>
            <a href="#faq" className="text-gray-500 hover:text-pink-400 text-sm font-medium transition-colors">FAQ</a>
            <a href="#contacto" className="text-gray-500 hover:text-pink-400 text-sm font-medium transition-colors">Contacto</a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-600 hover:text-pink-500 text-sm font-bold transition-colors">
              Iniciar Sesión
            </button>
            <button className="bg-[#FF9FB2] hover:bg-pink-400 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm">
              Crear Cuenta
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FFF5F7] rounded-bl-[100px] -z-10 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between gap-16">
          <div className="lg:w-[55%] space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-pink-100 rounded-full">
              <Sparkles className="w-4 h-4 text-[#FF9FB2]" />
              <span className="text-[#FF9FB2] text-xs font-bold tracking-widest uppercase">CUIDADO QUE CONECTA</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-[70px] font-extrabold text-[#3A2D32] leading-[1.05] tracking-tight">
              Tu compañera <br/>esencial en el <br/>
              <span className="text-[#FF9FB2]">camino de la <br/>maternidad.</span>
            </h1>
            
            <p className="text-lg text-gray-500 leading-relaxed max-w-lg font-medium">
              Tecnología que te escucha, te orienta y te acompaña. Monitorea tu salud y la de tu bebé desde un solo lugar, con la tranquilidad de sentirte siempre acompañada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4 items-center">
              <button className="bg-[#FF9FB2] hover:bg-pink-400 text-white px-8 py-3.5 rounded-full font-bold transition-all flex items-center justify-center">
                Ver planes <span className="ml-2 font-normal">→</span>
              </button>
              <button className="group flex items-center justify-center font-bold text-gray-700 hover:text-pink-400 transition-all">
                <div className="bg-[#FFF0F5] p-3 rounded-full mr-3 group-hover:bg-pink-100 transition-colors">
                  <Play className="w-4 h-4 text-[#FF9FB2] fill-[#FF9FB2]" />
                </div>
                Conoce HelpMom
              </button>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-white ${
                    i===1 ? 'bg-[#FFC4C4]' : i===2 ? 'bg-[#D4A3A3]' : i===3 ? 'bg-[#E5B5B5]' : 'bg-[#F5D5D5]'
                  }`} />
                ))}
              </div>
              <p className="text-sm text-gray-500 font-medium">
                <span className="font-bold text-[#3A2D32]">+2,000 mamás</span> ya se sienten más tranquilas
              </p>
            </div>
          </div>

          <div className="lg:w-[45%] mt-16 lg:mt-0 relative">
            {/* Image frame decoration */}
            <div className="absolute inset-0 bg-[#FFECEF] rounded-[40px] transform translate-x-6 translate-y-6 -z-10" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#FFF5F7] rounded-full -z-20" />
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#FFF5F7] rounded-full -z-20" />
            
            <div className="relative rounded-[40px] overflow-hidden bg-white p-2">
              <img 
                src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Mujer embarazada sonriendo" 
                className="w-full h-[550px] object-cover rounded-[32px]"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute bottom-10 left-[-2rem] bg-white px-6 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center gap-4">
              <div className="bg-[#E8F5E9] p-2.5 rounded-xl">
                <Heart className="w-5 h-5 text-green-500 fill-green-500" />
              </div>
              <div>
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wide">Estado de hoy</p>
                <p className="text-sm font-extrabold text-[#3A2D32]">Todo se ve bien</p>
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
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/2">
            <span className="text-[#FF9FB2] text-xs font-bold tracking-widest uppercase mb-4 block">NUESTRA MISIÓN</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#3A2D32] leading-tight tracking-tight">
              Cuidarte también es <br/><span className="text-[#FF9FB2]">escucharte.</span>
            </h2>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <p className="text-gray-500 text-lg leading-relaxed mb-6 font-medium">
              En HelpMom creemos que ninguna mamá debería sentirse sola al tomar decisiones sobre su salud. Por eso conectamos tecnología, inteligencia artificial y el cuidado humano de los profesionales para acompañarte en cada etapa.
            </p>
            <a href="#" className="text-[#FF9FB2] font-bold hover:text-pink-400 transition-colors inline-flex items-center text-sm">
              Descubre cómo funciona <span className="ml-2 font-normal">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Monitoreo IoT",
      desc: "Conoce el estado de tu bebé en tiempo real con nuestro sensor inteligente.",
      icon: <Bell className="w-5 h-5 text-[#FF9FB2]" />,
      bg: "bg-[#FFF5F5]",
      iconBg: "bg-[#FFE8E8]"
    },
    {
      title: "Triage inteligente",
      desc: "Resuelve tus dudas al instante con una IA entrenada para acompañarte.",
      icon: <MessageCircle className="w-5 h-5 text-[#FF9FB2]" />,
      bg: "bg-[#FFF0F5]",
      iconBg: "bg-[#FFE0EB]"
    },
    {
      title: "Modo compañero",
      desc: "Comparte cada señal y momento importante con quien te acompaña.",
      icon: <Users className="w-5 h-5 text-yellow-600" />,
      bg: "bg-[#FFFAF0]",
      iconBg: "bg-[#FFEDD5]"
    },
    {
      title: "Expediente clínico",
      desc: "Toda tu información de salud, ordenada y disponible para tu doctor.",
      icon: <BookOpen className="w-5 h-5 text-blue-500" />,
      bg: "bg-[#F5FAFF]",
      iconBg: "bg-[#E0F0FF]"
    }
  ];

  return (
    <section id="productos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-[#FF9FB2] text-xs font-bold tracking-widest uppercase mb-4 block">TODO EN UN SOLO LUGAR</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#3A2D32] tracking-tight">
              Hecho para acompañarte.
            </h2>
          </div>
          <p className="text-gray-500 font-medium max-w-sm text-sm">
            Pequeñas herramientas que hacen una gran diferencia en tu día a día.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className={`${item.bg} p-8 rounded-[32px] transition-transform hover:-translate-y-1 duration-300`}>
              <div className={`${item.iconBg} w-12 h-12 rounded-2xl flex items-center justify-center mb-8`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-extrabold text-[#3A2D32] mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="planes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[#FF9FB2] text-xs font-bold tracking-widest uppercase mb-4 block">ELIGE TU TRANQUILIDAD</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#3A2D32] tracking-tight mb-16">
          Un plan para cada familia.
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-left items-stretch">
          {/* Plan Básico */}
          <div className="bg-white rounded-[40px] p-10 border border-gray-100 flex flex-col">
            <h3 className="text-2xl font-extrabold text-[#3A2D32]">Plan Básico</h3>
            <p className="text-gray-500 mt-2 text-sm font-medium">Para empezar a sentirte acompañada.</p>
            <div className="mt-6 flex items-baseline text-[40px] font-extrabold text-[#3A2D32] tracking-tight">
              $9.99
              <span className="ml-2 text-sm font-medium text-gray-500">/ mes</span>
            </div>
            
            <div className="h-px w-full bg-gray-100 my-8" />
            
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center text-gray-500 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 shrink-0" /> Monitoreo diario de bienestar
              </li>
              <li className="flex items-center text-gray-500 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 shrink-0" /> Chatbot IA de triage
              </li>
              <li className="flex items-center text-gray-500 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 shrink-0" /> Contenido por etapa
              </li>
            </ul>
            <button className="w-full py-4 rounded-full text-sm font-bold text-[#FF9FB2] bg-white border-2 border-[#FF9FB2] hover:bg-pink-50 transition-colors">
              Comenzar ahora
            </button>
          </div>

          {/* Plan Integral */}
          <div className="bg-[#FFF5F7] rounded-[40px] p-10 border-2 border-[#FF9FB2] relative flex flex-col shadow-lg shadow-pink-100/50">
            <div className="absolute -top-3 right-8">
              <span className="bg-[#FF9FB2] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                MÁS ELEGIDO
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-[#3A2D32]">Plan Cuidado Integral</h3>
            <p className="text-gray-500 mt-2 text-sm font-medium">El acompañamiento que tú y tu bebé merecen.</p>
            <div className="mt-6 flex items-baseline text-[40px] font-extrabold text-[#3A2D32] tracking-tight">
              $19.99
              <span className="ml-2 text-sm font-medium text-gray-500">/ mes</span>
            </div>
            
            <div className="h-px w-full bg-pink-100 my-8" />
            
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center text-gray-600 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 shrink-0" /> Todo lo del Plan Básico
              </li>
              <li className="flex items-center text-gray-600 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 shrink-0" /> Sensor IoT y alertas en tiempo real
              </li>
              <li className="flex items-center text-gray-600 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 shrink-0" /> Expediente clínico para tu doctor
              </li>
              <li className="flex items-center text-gray-600 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 shrink-0" /> Modo Compañero para tu familia
              </li>
            </ul>
            <button className="w-full py-4 rounded-full text-sm font-bold text-white bg-[#FF9FB2] hover:bg-pink-400 transition-colors shadow-md">
              Comenzar ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer, isOpenByDefault = false }: { question: string, answer: string, isOpenByDefault?: boolean }) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);
  return (
    <div className="border-b border-[#F5E6EB] py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-base font-extrabold text-[#3A2D32] group-hover:text-[#FF9FB2] transition-colors">{question}</span>
        {isOpen ? 
          <ChevronUp className="w-5 h-5 text-[#FF9FB2] shrink-0" /> : 
          <ChevronDown className="w-5 h-5 text-[#FF9FB2] shrink-0" />
        }
      </button>
      {isOpen && (
        <p className="mt-4 text-gray-500 text-sm leading-relaxed font-medium pr-8">
          {answer}
        </p>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-[#FFF5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex gap-20">
          <div className="lg:w-1/3 mb-12 lg:mb-0">
            <span className="text-[#FF9FB2] text-xs font-bold tracking-widest uppercase mb-4 block">ESTAMOS PARA AYUDARTE</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#3A2D32] tracking-tight mb-6 leading-tight">
              Preguntas <br/>frecuentes.
            </h2>
            <p className="text-gray-500 mb-8 text-sm font-medium">
              Si tienes otra pregunta, escríbenos. Nos encantará escucharte.
            </p>
            <button className="text-[#FF9FB2] font-bold hover:text-pink-400 transition-colors inline-flex items-center text-sm">
              Hablar con nosotros <span className="ml-2 font-normal">→</span>
            </button>
          </div>
          <div className="lg:w-2/3">
            <FAQItem 
              question="¿Cómo funciona el sensor IoT?"
              answer="El sensor se coloca suavemente sobre tu vientre y envía datos seguros a la app HelpMom. Así puedes consultar el bienestar de tu bebé y compartir información relevante con tu equipo médico."
              isOpenByDefault={true}
            />
            <FAQItem 
              question="¿HelpMom reemplaza la consulta médica?"
              answer="No, HelpMom es un complemento que te ayuda a llevar un mejor control y registro. Siempre debes consultar a tu médico para cualquier diagnóstico."
            />
            <FAQItem 
              question="¿Puedo compartir el seguimiento con mi familia?"
              answer="Sí, el plan Cuidado Integral incluye el 'Modo Compañero' para que invites a tu pareja o familiares a ver las actualizaciones importantes."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FCD8E1] rounded-[40px] p-10 md:p-16">
          <div className="lg:flex gap-16 items-start">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="bg-white/50 w-12 h-12 rounded-2xl flex items-center justify-center mb-8">
                <Stethoscope className="w-6 h-6 text-[#3A2D32]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#3A2D32] tracking-tight mb-6 leading-tight">
                Estamos a un mensaje de <br/>distancia.
              </h2>
              <p className="text-[#6B5A60] font-medium text-sm max-w-md">
                Cuéntanos cómo podemos acompañarte. Nuestro equipo te responderá con mucho cariño.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <form className="space-y-4">
                <input 
                  type="text" 
                  className="w-full px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-[#FF9FB2] outline-none transition-all text-sm font-medium placeholder-gray-400 bg-white" 
                  placeholder="Tu nombre" 
                />
                <input 
                  type="email" 
                  className="w-full px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-[#FF9FB2] outline-none transition-all text-sm font-medium placeholder-gray-400 bg-white" 
                  placeholder="Tu email" 
                />
                <textarea 
                  rows={4} 
                  className="w-full px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-[#FF9FB2] outline-none transition-all text-sm font-medium placeholder-gray-400 bg-white resize-none" 
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
                <button type="submit" className="w-full bg-[#FF9FB2] hover:bg-pink-400 text-white py-4 rounded-2xl font-bold transition-all shadow-sm">
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
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-pink-400 p-1 rounded-lg">
              <Heart className="h-4 w-4 text-white fill-white" />
            </div>
            <span className="text-lg font-extrabold text-[#3A2D32] tracking-tight">Help<span className="text-pink-400">Mom</span></span>
          </div>
          <span className="text-xs text-gray-500 font-medium">Cuidando de ti, cuidando de ambos.</span>
        </div>
        
        <div className="flex space-x-8 text-xs font-bold text-gray-400">
          <a href="#" className="hover:text-pink-400 transition-colors">Términos y condiciones</a>
          <a href="#" className="hover:text-pink-400 transition-colors">Política de privacidad</a>
          <a href="#" className="hover:text-pink-400 transition-colors">Ayuda</a>
        </div>
        
        <div className="text-xs text-gray-400 font-bold">
          © {new Date().getFullYear()} HelpMom
        </div>
      </div>
    </footer>
  );
};

export default function HelpMomLanding() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-pink-200">
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
