import Icon from "@/components/ui/icon";
import { useInView } from "@/hooks/useInView";

export default function ContactFooter() {
  const contactSection = useInView(0.1);

  return (
    <>
      {/* CONTACT */}
      <section id="контакты" ref={contactSection.ref} className="py-32 px-6 border-t border-border bg-card/20">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className={`opacity-0 ${contactSection.inView ? "animate-fade-up" : ""}`}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-gold/60" />
              <span className="font-golos text-xs tracking-[0.35em] uppercase text-gold/70">
                Начать проект
              </span>
              <div className="h-px w-12 bg-gold/60" />
            </div>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light mb-6">
              Расскажите нам <br />
              <em className="text-gold not-italic">о вашей идее</em>
            </h2>
            <p className="font-golos text-base text-foreground/50 mb-12 max-w-lg mx-auto leading-relaxed">
              Оставьте контакты, и мы свяжемся с вами в течение одного рабочего дня.
            </p>
          </div>

          <div
            className={`opacity-0 ${contactSection.inView ? "animate-fade-up delay-200" : ""}`}
          >
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="bg-background border border-border focus:border-gold/50 outline-none px-5 py-4 font-golos text-sm text-foreground placeholder:text-foreground/30 transition-colors duration-300 w-full"
              />
              <input
                type="tel"
                placeholder="Телефон или email"
                className="bg-background border border-border focus:border-gold/50 outline-none px-5 py-4 font-golos text-sm text-foreground placeholder:text-foreground/30 transition-colors duration-300 w-full"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Опишите ваш проект — площадь, тип помещения, пожелания..."
              className="w-full bg-background border border-border focus:border-gold/50 outline-none px-5 py-4 font-golos text-sm text-foreground placeholder:text-foreground/30 transition-colors duration-300 resize-none mb-4"
            />
            <button className="group w-full bg-gold text-background font-golos text-sm tracking-[0.2em] uppercase py-5 hover:bg-gold/90 transition-all duration-300 flex items-center justify-center gap-3">
              Отправить заявку
              <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="font-golos text-xs text-foreground/25 mt-4">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-8">
          <div>
            <div className="font-cormorant text-2xl font-light tracking-[0.15em] text-gold mb-2">
              FORMA
            </div>
            <div className="font-golos text-xs text-foreground/30 tracking-wider">
              Студия интерьерного дизайна © 2024
            </div>
          </div>

          <div className="flex items-center gap-8">
            {["Telegram", "Instagram", "Behance"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-golos text-xs tracking-widest uppercase text-foreground/35 hover:text-gold transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a href="tel:+79991234567" className="font-golos text-sm text-foreground/50 hover:text-gold transition-colors duration-300">
              +7 999 123-45-67
            </a>
            <a href="mailto:hello@forma.studio" className="font-golos text-sm text-foreground/50 hover:text-gold transition-colors duration-300">
              hello@forma.studio
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
