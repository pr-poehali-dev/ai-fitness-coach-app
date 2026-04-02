import Icon from "@/components/ui/icon";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    icon: "Sofa",
    title: "Жилые интерьеры",
    desc: "Создаём дома, наполненные смыслом. Каждая деталь — отражение вашего характера и образа жизни.",
  },
  {
    icon: "Building2",
    title: "Коммерческие пространства",
    desc: "Офисы, рестораны, отели — проектируем среду, которая работает на ваш бренд и бизнес.",
  },
  {
    icon: "PenTool",
    title: "Авторский надзор",
    desc: "Сопровождаем проект от первого эскиза до финальной расстановки мебели.",
  },
  {
    icon: "Layers",
    title: "3D-визуализация",
    desc: "Фотореалистичные рендеры позволят увидеть результат ещё до начала ремонта.",
  },
];

const projects = [
  {
    label: "Квартира на Патриарших",
    category: "Жилой",
    area: "120 м²",
    year: "2024",
    color: "from-[#2a1f14] to-[#1a1208]",
    accent: "#c8a96e",
  },
  {
    label: "Ресторан «Лес»",
    category: "Коммерческий",
    area: "380 м²",
    year: "2024",
    color: "from-[#141a14] to-[#0d120d]",
    accent: "#8fa67c",
  },
  {
    label: "Загородный дом",
    category: "Жилой",
    area: "480 м²",
    year: "2023",
    color: "from-[#1a1520] to-[#110e16]",
    accent: "#9b8ab5",
  },
];

const stats = [
  { value: "147", label: "реализованных проектов" },
  { value: "12", label: "лет в профессии" },
  { value: "4", label: "международные награды" },
  { value: "98%", label: "довольных клиентов" },
];

export default function PageSections() {
  const heroSection = useInView(0.05);
  const servicesSection = useInView(0.1);
  const projectsSection = useInView(0.1);
  const statsSection = useInView(0.2);

  return (
    <>
      {/* HERO */}
      <section
        ref={heroSection.ref}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background geometry */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[50vw] h-[70vh] bg-gradient-to-bl from-[hsl(43_65%_62%_/_0.04)] to-transparent" />
          <div className="absolute bottom-0 left-0 w-[40vw] h-[50vh] bg-gradient-to-tr from-[hsl(43_65%_62%_/_0.03)] to-transparent" />
          {/* Decorative lines */}
          <div className="absolute top-0 right-[15%] w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
          <div className="absolute top-[20%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/8 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pt-24">
          {/* Left */}
          <div className="relative z-10">
            <div
              className={`opacity-0 ${heroSection.inView ? "animate-slide-right" : ""}`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-gold/60" />
                <span className="font-golos text-xs tracking-[0.35em] uppercase text-gold/70">
                  Студия интерьерного дизайна
                </span>
              </div>
            </div>

            <h1
              className={`font-cormorant text-6xl md:text-7xl xl:text-8xl leading-[0.9] font-light mb-8 opacity-0 ${heroSection.inView ? "animate-fade-up delay-200" : ""}`}
            >
              Пространство
              <br />
              <em className="shimmer-text not-italic">рождает</em>
              <br />
              <span className="text-foreground/50">ощущение</span>
            </h1>

            <p
              className={`font-golos text-base leading-relaxed text-foreground/55 max-w-md mb-12 opacity-0 ${heroSection.inView ? "animate-fade-up delay-400" : ""}`}
            >
              Мы создаём интерьеры, которые живут вместе с вами — наполненные
              светом, фактурами и деталями, отражающими именно вас.
            </p>

            <div
              className={`flex flex-wrap gap-4 opacity-0 ${heroSection.inView ? "animate-fade-up delay-500" : ""}`}
            >
              <button className="group font-golos text-sm tracking-[0.15em] uppercase bg-gold text-background px-8 py-4 hover:bg-gold/90 transition-all duration-300 flex items-center gap-3">
                Смотреть проекты
                <Icon
                  name="ArrowRight"
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="font-golos text-sm tracking-[0.15em] uppercase border border-foreground/20 text-foreground/60 px-8 py-4 hover:border-gold/40 hover:text-foreground/80 transition-all duration-300">
                Наши услуги
              </button>
            </div>
          </div>

          {/* Right — abstract visual */}
          <div
            className={`relative lg:h-[600px] h-[350px] opacity-0 ${heroSection.inView ? "animate-scale-in delay-300" : ""}`}
          >
            {/* Main card */}
            <div className="absolute inset-0 border border-gold/15 rounded-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e1508] via-[#121212] to-[#080608]" />
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `
                    linear-gradient(hsl(43 65% 62% / 0.04) 1px, transparent 1px),
                    linear-gradient(90deg, hsl(43 65% 62% / 0.04) 1px, transparent 1px)
                  `,
                  backgroundSize: "60px 60px",
                }}
              />
              {/* Decorative elements */}
              <div className="absolute top-8 left-8 right-8">
                <div className="h-px bg-gold/20 mb-3" />
                <div className="h-px w-2/3 bg-gold/10" />
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="h-px w-1/2 bg-gold/10 mb-3" />
                <div className="h-px bg-gold/20" />
              </div>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-cormorant text-[10rem] leading-none font-light text-gold/5 select-none">
                    F
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="border border-gold/20 w-40 h-40 rotate-45 flex items-center justify-center">
                      <div className="border border-gold/10 w-24 h-24" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/40" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold/40" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gold/40" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold/40" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-gold/20 p-5 shadow-2xl">
              <div className="font-cormorant text-3xl font-light text-gold">12</div>
              <div className="font-golos text-xs text-foreground/50 tracking-wider uppercase mt-1">лет опыта</div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-golos text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="услуги" ref={servicesSection.ref} className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`mb-20 opacity-0 ${servicesSection.inView ? "animate-fade-up" : ""}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gold/60" />
              <span className="font-golos text-xs tracking-[0.35em] uppercase text-gold/70">
                Что мы делаем
              </span>
            </div>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light">
              Полный цикл <em className="text-gold not-italic">дизайна</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`bg-background p-8 group hover:bg-card transition-colors duration-500 cursor-default opacity-0 ${
                  servicesSection.inView ? `animate-fade-up delay-${(i + 1) * 100 + 100}` : ""
                }`}
              >
                <div className="mb-6">
                  <div className="w-10 h-10 border border-gold/25 flex items-center justify-center group-hover:border-gold/60 transition-colors duration-300">
                    <Icon name={service.icon} fallback="Circle" size={18} className="text-gold/60 group-hover:text-gold transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-cormorant text-xl font-light mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-golos text-sm leading-relaxed text-foreground/45 group-hover:text-foreground/65 transition-colors duration-300">
                  {service.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-gold/0 group-hover:text-gold/60 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="font-golos text-xs tracking-widest uppercase">Подробнее</span>
                  <Icon name="ArrowRight" size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="проекты" ref={projectsSection.ref} className="py-16 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div
            className={`mb-20 flex flex-wrap items-end justify-between gap-6 opacity-0 ${projectsSection.inView ? "animate-fade-up" : ""}`}
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-gold/60" />
                <span className="font-golos text-xs tracking-[0.35em] uppercase text-gold/70">
                  Избранные работы
                </span>
              </div>
              <h2 className="font-cormorant text-5xl md:text-6xl font-light">
                Наши <em className="text-gold not-italic">проекты</em>
              </h2>
            </div>
            <button className="font-golos text-xs tracking-[0.2em] uppercase text-foreground/50 hover:text-gold transition-colors duration-300 flex items-center gap-2 hover-underline">
              Смотреть все работы
              <Icon name="ArrowRight" size={14} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <div
                key={project.label}
                className={`group relative overflow-hidden cursor-pointer opacity-0 ${
                  projectsSection.inView ? `animate-fade-up delay-${(i + 1) * 150}` : ""
                }`}
              >
                {/* Project visual */}
                <div
                  className={`relative h-80 bg-gradient-to-br ${project.color} border border-white/5 overflow-hidden`}
                >
                  {/* Grid texture */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `
                        linear-gradient(${project.accent}18 1px, transparent 1px),
                        linear-gradient(90deg, ${project.accent}18 1px, transparent 1px)
                      `,
                      backgroundSize: "40px 40px",
                    }}
                  />
                  {/* Accent circle */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle, ${project.accent}, transparent)` }}
                  />

                  {/* Corner lines */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t border-l transition-all duration-300" style={{ borderColor: `${project.accent}60` }} />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r transition-all duration-300" style={{ borderColor: `${project.accent}60` }} />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />

                  {/* Category badge */}
                  <div className="absolute top-4 right-4 font-golos text-[10px] tracking-widest uppercase px-3 py-1.5 border" style={{ borderColor: `${project.accent}40`, color: project.accent }}>
                    {project.category}
                  </div>
                </div>

                {/* Info */}
                <div className="pt-5 pb-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-cormorant text-xl font-light group-hover:text-gold transition-colors duration-300">
                      {project.label}
                    </h3>
                    <Icon name="ArrowUpRight" size={16} className="text-foreground/20 group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="font-golos text-xs text-foreground/35">{project.area}</span>
                    <div className="w-1 h-1 rounded-full bg-foreground/20" />
                    <span className="font-golos text-xs text-foreground/35">{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section ref={statsSection.ref} className="py-24 px-6 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center opacity-0 ${
                  statsSection.inView ? `animate-fade-up delay-${i * 100 + 100}` : ""
                }`}
              >
                <div className="font-cormorant text-5xl md:text-6xl font-light text-gold mb-3">
                  {stat.value}
                </div>
                <div className="font-golos text-xs text-foreground/45 tracking-wider uppercase leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT snippet */}
      <section id="о нас" className="py-32 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-gold/60" />
              <span className="font-golos text-xs tracking-[0.35em] uppercase text-gold/70">
                О студии
              </span>
            </div>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-8">
              Дизайн — это<br />
              <em className="text-gold not-italic">не украшение,</em><br />
              а мышление
            </h2>
            <p className="font-golos text-base leading-relaxed text-foreground/55 mb-6">
              Студия FORMA основана в 2012 году. За это время мы реализовали более
              147 проектов — от уютных квартир до масштабных коммерческих объектов.
            </p>
            <p className="font-golos text-base leading-relaxed text-foreground/45 mb-10">
              Наш подход: сначала понять клиента, затем создать пространство,
              которое работает на него каждый день.
            </p>
            <button className="group font-golos text-sm tracking-[0.15em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-300 flex items-center gap-3">
              Познакомиться с командой
              <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Visual block */}
          <div className="relative h-[500px]">
            <div className="absolute inset-0 border border-gold/10 rounded-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1208] to-[#0d0d0d]" />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(circle at 30% 40%, hsl(43 65% 62% / 0.06) 0%, transparent 60%)",
                }}
              />
              {/* Large quote */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="font-cormorant text-7xl text-gold/20 leading-none mb-6">"</div>
                  <blockquote className="font-cormorant text-2xl font-light italic text-foreground/60 leading-relaxed">
                    Каждое пространство рассказывает историю.
                    Наша задача — сделать её вашей.
                  </blockquote>
                  <div className="mt-8 flex items-center justify-center gap-3">
                    <div className="h-px w-8 bg-gold/40" />
                    <span className="font-golos text-xs tracking-widest uppercase text-gold/50">Анна Соловьёва, основатель</span>
                    <div className="h-px w-8 bg-gold/40" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating element */}
            <div className="absolute -top-5 -right-5 bg-card border border-gold/20 p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Icon key={s} name="Star" size={12} className="text-gold fill-gold" />
                ))}
              </div>
              <div className="font-golos text-xs text-foreground/40">
                Рейтинг на Houzz
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
