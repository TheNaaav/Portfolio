import ResumeButton from './ResumeButton';

const navItems = [
  { href: '#about', label: 'Profil' },
  { href: '#projects', label: 'Projekt' },
  { href: '#experience', label: 'Erfarenhet' },
  { href: '#ai', label: 'AI-riktning' },
  { href: '#skills', label: 'Kompetens' },
  { href: '#contact', label: 'Kontakt' },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#about" className="flex items-center gap-3" aria-label="Gå till startsidan">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400 text-sm font-black text-slate-950">
            NS
          </span>
          <span className="hidden text-sm font-bold text-white sm:block">
            Naruebet Singsathon
          </span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Huvudnavigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ResumeButton className="inline-flex h-10 items-center justify-center rounded-lg bg-white px-4 text-sm font-bold text-slate-950 transition hover:bg-emerald-300" />
        </div>
      </div>
    </header>
  );
};
