import { useState } from 'react'
import { Github, Linkedin, Mail, Sun, Moon } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function Hero({ darkMode, onToggleTheme }) {
  const [robotMood, setRobotMood] = useState('Booting up sass…')

  const messages = [
    'Deploying good vibes…',
    '404: Motivation not found',
    'Ship it. We ball.',
    'AI is cool, but have you tried naps?',
  ]

  function handleRobotInteract() {
    const next = messages[Math.floor(Math.random() * messages.length)]
    setRobotMood(next)
  }

  return (
    <section id="home" className="relative w-full min-h-[90vh] grid lg:grid-cols-2 gap-8 items-center">
      <div className="order-2 lg:order-1 space-y-6">
        <div className="inline-flex items-center gap-2 text-xs rounded-full px-3 py-1 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for freelance & fun problems
        </div>

        <div className="flex items-center gap-5">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop"
            alt="Profile"
            className="h-20 w-20 rounded-full ring-2 ring-offset-2 ring-indigo-500 ring-offset-white dark:ring-offset-zinc-900 object-cover"
          />
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
              Hey, I’m <span className="text-indigo-500">[Your Name]</span>
            </h1>
            <p className="text-zinc-600 dark:text-zinc-300">
              I write code that mostly works and sometimes even looks good. Welcome to my corner of the internet.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <a
            href="#projects"
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition"
          >
            See Projects
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
          >
            Hire Me
          </a>
        </div>

        <div className="flex gap-4 pt-2">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-600">
            <Github size={22} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-600">
            <Linkedin size={22} />
          </a>
          <a href="#contact" className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-600">
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Robot + Spline scene */}
      <div className="order-1 lg:order-2 relative h-[320px] sm:h-[420px] lg:h-[520px] w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
        <Spline
          scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
          onClick={handleRobotInteract}
          onMouseEnter={handleRobotInteract}
        />
        {/* gradient overlay that doesn't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-zinc-900/50" />

        <div className="absolute left-3 bottom-3 sm:left-4 sm:bottom-4 p-3 rounded-xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-200">{robotMood}</p>
        </div>

        <button
          onClick={onToggleTheme}
          className="absolute right-3 top-3 sm:right-4 sm:top-4 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/80 dark:bg-zinc-900/80 backdrop-blur border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-white/90 dark:hover:bg-zinc-900/90 transition"
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          <span className="text-xs hidden sm:inline">{darkMode ? 'Light' : 'Dark'} mode</span>
        </button>
      </div>
    </section>
  )
}
