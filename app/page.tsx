import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import AnimeBackground from '@/components/AnimeBackground'

export default function Home() {
  return (
    <main className="min-h-screen bg-rich-black text-crisp-white relative overflow-hidden">
      <AnimeBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
