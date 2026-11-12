"use client";
import React, { useState } from "react";
import {
  Heart,
  Check,
  Bell,
  MessageCircle,
  Users,
  BookOpen,
  ChevronDown,
  Sparkles,
  Menu,
  X,
  ShieldCheck,
  Cpu,
  Stethoscope,
  Mail,
  Download,
} from "lucide-react";

// Reemplazar por los enlaces reales de las tiendas cuando la app esté publicada.
const APP_STORE_URL = "#";
const PLAY_STORE_URL = "#";

const NAV_LINKS = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#funciones", label: "Funciones" },
  { href: "#planes", label: "Planes" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

/* ---------- Shared pieces ---------- */

const Logo = ({ size = "md" }: { size?: "md" | "sm" }) => (
  <a href="#" className="flex items-center gap-2" aria-label="HelpMom inicio">
    <span className={`bg-brand-500 rounded-xl ${size === "md" ? "p-1.5" : "p-1"}`}>
      <Heart className={`${size === "md" ? "h-5 w-5" : "h-4 w-4"} text-white fill-white`} />
    </span>
    <span className={`${size === "md" ? "text-xl" : "text-lg"} font-extrabold text-ink tracking-tight`}>
      Help<span className="text-brand-500">Mom</span>
    </span>
  </a>
);

const AppleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
  </svg>
);

const GooglePlayIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill="#00D7FE" d="M1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924z" />
    <path fill="#00F076" d="M13.544 10.989l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973z" />
    <path fill="#FFC900" d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594z" />
    <path fill="#FF3A44" d="M13.544 13.056l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
  </svg>
);

const StoreButtons = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-wrap gap-3 ${className}`}>
    <a
      href={PLAY_STORE_URL}
      className="inline-flex items-center gap-3 rounded-2xl bg-ink px-5 py-3 text-white transition hover:-translate-y-0.5 hover:bg-black hover:shadow-lg"
      aria-label="Descargar en Google Play"
    >
      <GooglePlayIcon className="h-7 w-7" />
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[10px] font-medium uppercase tracking-wider text-white/70">Disponible en</span>
        <span className="text-base font-bold">Google Play</span>
      </span>
    </a>
    <a
      href={APP_STORE_URL}
      className="inline-flex items-center gap-3 rounded-2xl bg-ink px-5 py-3 text-white transition hover:-translate-y-0.5 hover:bg-black hover:shadow-lg"
      aria-label="Descargar en App Store"
    >
      <AppleIcon className="h-7 w-7" />
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[10px] font-medium uppercase tracking-wider text-white/70">Descárgala en</span>
        <span className="text-base font-bold">App Store</span>
      </span>
    </a>
  </div>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-500">{children}</span>
);

const SectionHeader = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) => (
  <div className="mx-auto mb-14 max-w-2xl text-center">
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-[44px] md:leading-[1.15]">
      {title}
    </h2>
    {description && <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>}
  </div>
);

const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

/* ---------- Sections ---------- */

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full border-b border-line/70 bg-white/85 backdrop-blur-md">
      <Container>
        <div className="flex h-18 items-center justify-between py-4">
          <Logo />

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-semibold text-muted transition-colors hover:text-brand-500">
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#descargar"
            className="hidden items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-600 md:inline-flex"
          >
            <Download className="h-4 w-4" />
            Descargar app
          </a>

          <button
            className="rounded-xl p-2 text-ink md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="flex flex-col gap-1 pb-5 md:hidden">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-semibold text-muted hover:bg-brand-50 hover:text-brand-500"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#descargar"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-bold text-white"
            >
              <Download className="h-4 w-4" />
              Descargar app
            </a>
          </div>
        )}
      </Container>
    </header>
  );
};

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pt-32 pb-20 lg:pt-40 lg:pb-28">
    <div className="pointer-events-none absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-brand-100/70 blur-3xl" />
    <Container>
      <div className="relative grid items-center gap-16 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5">
            <Sparkles className="h-4 w-4 text-brand-500" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-500">Cuidado que conecta</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[58px]">
            Tu compañera esencial en el{" "}
            <span className="text-brand-500">camino de la maternidad.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Tecnología que te escucha, te orienta y te acompaña. Monitorea tu salud y la de tu bebé desde un solo lugar,
            con la tranquilidad de sentirte siempre acompañada.
          </p>

          <StoreButtons className="mt-9" />

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["bg-[#FFC4C4]", "bg-[#D4A3A3]", "bg-[#E5B5B5]", "bg-[#F5D5D5]"].map((bg) => (
                <div key={bg} className={`h-10 w-10 rounded-full border-2 border-white ${bg}`} />
              ))}
            </div>
            <p className="text-sm text-muted">
              <span className="font-bold text-ink">+2,000 mamás</span> ya se sienten más tranquilas
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[36px] bg-brand-100" />
          <div className="relative overflow-hidden rounded-[36px] bg-white p-2 shadow-xl shadow-brand-200/40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Mujer embarazada sonriendo"
              className="h-[420px] w-full rounded-[30px] object-cover sm:h-[500px]"
            />
          </div>

          <div className="absolute bottom-8 -left-4 flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:-left-8">
            <div className="rounded-xl bg-emerald-50 p-2.5">
              <Heart className="h-5 w-5 fill-emerald-500 text-emerald-500" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wide text-muted">Estado de hoy</p>
              <p className="text-sm font-extrabold text-ink">Todo se ve bien</p>
            </div>
          </div>

          <div className="absolute top-8 -right-3 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:flex">
            <div className="rounded-xl bg-brand-50 p-2">
              <Bell className="h-4 w-4 text-brand-500" />
            </div>
            <p className="text-xs font-bold text-ink">Semana 24 · Control al día</p>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const Mission = () => {
  const pillars = [
    { icon: Cpu, title: "Tecnología", desc: "Sensores y datos claros para entender lo que pasa en tu cuerpo." },
    { icon: Sparkles, title: "Inteligencia artificial", desc: "Respuestas inmediatas y orientación cuando más la necesitas." },
    { icon: Stethoscope, title: "Cuidado humano", desc: "Información lista para compartir con tus profesionales de salud." },
  ];
  return (
    <section id="nosotros" className="py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Nuestra misión</Eyebrow>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-[44px] md:leading-[1.15]">
              Cuidarte también es <span className="text-brand-500">escucharte.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              En HelpMom creemos que ninguna mamá debería sentirse sola al tomar decisiones sobre su salud. Por eso
              conectamos tecnología, inteligencia artificial y el cuidado humano de los profesionales para acompañarte en
              cada etapa.
            </p>
          </div>
          <ul className="space-y-4">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex gap-5 rounded-3xl border border-line p-6 transition hover:border-brand-200 hover:bg-brand-50/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50">
                  <Icon className="h-5 w-5 text-brand-500" />
                </div>
                <div>
                  <h3 className="font-extrabold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Monitoreo IoT",
      desc: "Conoce el estado de tu bebé en tiempo real con nuestro sensor inteligente.",
      icon: Bell,
      color: "text-brand-500",
      iconBg: "bg-brand-100",
    },
    {
      title: "Triage inteligente",
      desc: "Resuelve tus dudas al instante con una IA entrenada para acompañarte.",
      icon: MessageCircle,
      color: "text-violet-500",
      iconBg: "bg-violet-100",
    },
    {
      title: "Modo compañero",
      desc: "Comparte cada señal y momento importante con quien te acompaña.",
      icon: Users,
      color: "text-amber-600",
      iconBg: "bg-amber-100",
    },
    {
      title: "Expediente clínico",
      desc: "Toda tu información de salud, ordenada y disponible para tu doctor.",
      icon: BookOpen,
      color: "text-sky-600",
      iconBg: "bg-sky-100",
    },
  ];

  return (
    <section id="funciones" className="bg-brand-50/60 py-24">
      <Container>
        <SectionHeader
          eyebrow="Todo en un solo lugar"
          title="Hecho para acompañarte."
          description="Pequeñas herramientas que hacen una gran diferencia en tu día a día."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, icon: Icon, color, iconBg }) => (
            <div
              key={title}
              className="rounded-3xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-100"
            >
              <div className={`${iconBg} mb-6 flex h-12 w-12 items-center justify-center rounded-2xl`}>
                <Icon className={`h-5 w-5 ${color}`} />
              </div>
              <h3 className="mb-2 text-lg font-extrabold text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const PlanFeature = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-sm text-muted">
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100">
      <Check className="h-3 w-3 text-emerald-600" strokeWidth={3} />
    </span>
    {children}
  </li>
);

const Pricing = () => (
  <section id="planes" className="py-24">
    <Container>
      <SectionHeader
        eyebrow="Elige tu tranquilidad"
        title="Un plan para cada familia."
        description="Empieza gratis y mejora cuando lo necesites. Sin compromisos."
      />

      <div className="mx-auto grid max-w-4xl items-stretch gap-8 md:grid-cols-2">
        {/* Plan Básico */}
        <div className="flex flex-col rounded-[32px] border border-line bg-white p-8 sm:p-10">
          <h3 className="text-xl font-extrabold text-ink">Plan Básico</h3>
          <p className="mt-2 text-sm text-muted">Para empezar a sentirte acompañada.</p>
          <div className="mt-6 flex items-baseline gap-2">
            <span className="text-5xl font-extrabold tracking-tight text-ink">Gratis</span>
          </div>
          <p className="mt-1 text-sm text-muted">Para siempre, sin tarjeta.</p>

          <div className="my-8 h-px w-full bg-line" />

          <ul className="mb-10 flex-grow space-y-4">
            <PlanFeature>Monitoreo diario de bienestar</PlanFeature>
            <PlanFeature>Chatbot IA de triage</PlanFeature>
            <PlanFeature>Contenido por etapa</PlanFeature>
          </ul>
          <a
            href="#descargar"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-brand-500 py-3.5 text-sm font-bold text-brand-500 transition hover:bg-brand-50"
          >
            <Download className="h-4 w-4" />
            Descargar gratis
          </a>
        </div>

        {/* Plan Cuidado Integral */}
        <div className="relative flex flex-col rounded-[32px] border-2 border-brand-300 bg-brand-50 p-8 shadow-xl shadow-brand-100 sm:p-10">
          <span className="absolute -top-3.5 right-8 rounded-full bg-brand-500 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
            Más elegido
          </span>
          <h3 className="text-xl font-extrabold text-ink">Plan Cuidado Integral</h3>
          <p className="mt-2 text-sm text-muted">El acompañamiento que tú y tu bebé merecen.</p>
          <div className="mt-6 flex items-baseline gap-2">
            <span className="text-5xl font-extrabold tracking-tight text-ink">$19.99</span>
            <span className="text-sm font-medium text-muted">/ mes</span>
          </div>
          <p className="mt-1 text-sm text-muted">Cancela cuando quieras.</p>

          <div className="my-8 h-px w-full bg-brand-200" />

          <ul className="mb-10 flex-grow space-y-4">
            <PlanFeature>Todo lo del Plan Básico</PlanFeature>
            <PlanFeature>Sensor IoT y alertas en tiempo real</PlanFeature>
            <PlanFeature>Expediente clínico para tu doctor</PlanFeature>
            <PlanFeature>Modo Compañero para tu familia</PlanFeature>
          </ul>
          <a
            href="#descargar"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-brand-600"
          >
            <Download className="h-4 w-4" />
            Descargar app
          </a>
        </div>
      </div>
    </Container>
  </section>
);

const FAQS = [
  {
    q: "¿Cómo funciona el sensor IoT?",
    a: "El sensor se coloca suavemente sobre tu vientre y envía datos seguros a la app HelpMom. Así puedes consultar el bienestar de tu bebé y compartir información relevante con tu equipo médico.",
  },
  {
    q: "¿El Plan Básico es realmente gratis?",
    a: "Sí. Descargas la app, creas tu cuenta y accedes al monitoreo diario, al chatbot de triage y al contenido por etapa sin costo. Puedes pasar al Plan Cuidado Integral cuando quieras desde la app.",
  },
  {
    q: "¿HelpMom reemplaza la consulta médica?",
    a: "No, HelpMom es un complemento que te ayuda a llevar un mejor control y registro. Siempre debes consultar a tu médico para cualquier diagnóstico.",
  },
  {
    q: "¿Puedo compartir el seguimiento con mi familia?",
    a: "Sí, el plan Cuidado Integral incluye el 'Modo Compañero' para que invites a tu pareja o familiares a ver las actualizaciones importantes.",
  },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-brand-50/60 py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div>
            <Eyebrow>Estamos para ayudarte</Eyebrow>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-[44px] md:leading-[1.15]">
              Preguntas frecuentes.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Si tienes otra pregunta, escríbenos. Nos encantará escucharte.
            </p>
            <a
              href="#contacto"
              className="mt-6 inline-flex items-center text-sm font-bold text-brand-500 transition-colors hover:text-brand-600"
            >
              Hablar con nosotros <span className="ml-2">→</span>
            </a>
          </div>

          <div className="space-y-3 lg:col-span-2">
            {FAQS.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={item.q} className="rounded-2xl border border-line bg-white">
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-ink">{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-brand-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && <p className="px-6 pb-6 text-sm leading-relaxed text-muted">{item.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

const DownloadCTA = () => (
  <section id="descargar" className="py-24">
    <Container>
      <div className="relative overflow-hidden rounded-[40px] bg-ink px-8 py-14 sm:px-14 sm:py-16">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-300/20 blur-3xl" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-300">
              Empieza hoy, gratis
            </span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-[44px]">
              Lleva HelpMom contigo a todas partes.
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-white/70">
              Descarga la app, crea tu cuenta en minutos y empieza a cuidar de ti y de tu bebé con el Plan Básico gratis.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <StoreButtons className="[&>a]:bg-white [&>a]:text-ink [&>a:hover]:bg-brand-50 [&_span_span:first-child]:text-muted" />
            <p className="flex items-center gap-2 text-xs text-white/60">
              <ShieldCheck className="h-4 w-4" /> Tus datos de salud protegidos y cifrados
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const Contact = () => (
  <section id="contacto" className="pb-24">
    <Container>
      <div className="grid gap-12 rounded-[40px] bg-brand-100 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
        <div>
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70">
            <Mail className="h-5 w-5 text-brand-600" />
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Estamos a un mensaje de distancia.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Cuéntanos cómo podemos acompañarte. Nuestro equipo te responderá con mucho cariño.
          </p>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              aria-label="Tu nombre"
              placeholder="Tu nombre"
              className="w-full rounded-2xl bg-white px-5 py-4 text-sm outline-none ring-brand-300 transition placeholder:text-gray-400 focus:ring-2"
            />
            <input
              type="email"
              aria-label="Tu email"
              placeholder="Tu email"
              className="w-full rounded-2xl bg-white px-5 py-4 text-sm outline-none ring-brand-300 transition placeholder:text-gray-400 focus:ring-2"
            />
          </div>
          <textarea
            rows={4}
            aria-label="Mensaje"
            placeholder="¿En qué podemos ayudarte?"
            className="w-full resize-none rounded-2xl bg-white px-5 py-4 text-sm outline-none ring-brand-300 transition placeholder:text-gray-400 focus:ring-2"
          />
          <button
            type="submit"
            className="w-full rounded-2xl bg-brand-500 py-4 font-bold text-white shadow-sm transition hover:bg-brand-600"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </Container>
  </section>
);

const Footer = () => (
  <footer className="border-t border-line py-12">
    <Container>
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Logo size="sm" />
          <span className="text-xs text-muted">Cuidando de ti, cuidando de ambos.</span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-semibold text-muted">
          <a href="#" className="transition-colors hover:text-brand-500">Términos y condiciones</a>
          <a href="#" className="transition-colors hover:text-brand-500">Política de privacidad</a>
          <a href="#contacto" className="transition-colors hover:text-brand-500">Ayuda</a>
        </div>

        <div className="text-xs font-semibold text-muted">© {new Date().getFullYear()} HelpMom</div>
      </div>
    </Container>
  </footer>
);

export default function HelpMomLanding() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink selection:bg-brand-200">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Features />
        <Pricing />
        <FAQ />
        <DownloadCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
