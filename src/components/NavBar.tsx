import Icon from "@/components/ui/icon";

interface NavBarProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function NavBar({ scrolled, menuOpen, setMenuOpen }: NavBarProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border py-4"
          : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="font-cormorant text-2xl font-light tracking-[0.15em] text-gold">
          FORMA
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {["Услуги", "Проекты", "О нас", "Контакты"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-golos text-sm tracking-widest text-foreground/60 hover:text-gold transition-colors duration-300 hover-underline uppercase"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#контакты"
          className="hidden md:block font-golos text-xs tracking-[0.2em] uppercase border border-gold/50 text-gold px-6 py-3 hover:bg-gold hover:text-background transition-all duration-300"
        >
          Обсудить проект
        </a>

        {/* Mobile menu */}
        <button
          className="md:hidden text-foreground/70 hover:text-gold transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-background/98 border-t border-border px-6 py-8 flex flex-col gap-6">
          {["Услуги", "Проекты", "О нас", "Контакты"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-golos text-sm tracking-widest uppercase text-foreground/60 hover:text-gold transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
