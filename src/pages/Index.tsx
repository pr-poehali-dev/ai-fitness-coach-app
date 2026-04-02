import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import PageSections from "@/components/PageSections";
import ContactFooter from "@/components/ContactFooter";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground grain-overlay overflow-x-hidden">
      <NavBar scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <PageSections />
      <ContactFooter />
    </div>
  );
}
