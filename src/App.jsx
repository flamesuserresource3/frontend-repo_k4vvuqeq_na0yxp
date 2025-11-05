import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import ContactHire from './components/ContactHire'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      {/* Simple top nav */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 dark:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-bold tracking-tight">genz.engineer()</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300">
            <a className="hover:text-indigo-600" href="#projects">Projects</a>
            <a className="hover:text-indigo-600" href="#about">About</a>
            <a className="hover:text-indigo-600" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4">
        <Hero darkMode={darkMode} onToggleTheme={() => setDarkMode(!darkMode)} />
        <Projects />
        <About />
        <ContactHire />
      </main>

      <footer className="mt-16 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-zinc-600 dark:text-zinc-400">
          Built with way too much caffeine and not enough sleep.
        </div>
      </footer>
    </div>
  )
}

export default App
