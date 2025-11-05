import { ExternalLink, Github } from 'lucide-react'

const mockProjects = [
  {
    title: 'SnackTrack',
    desc: 'Calories? Counted. Cravings? Also counted. Full-stack app with auth and charts.',
    tech: ['React', 'FastAPI', 'MongoDB'],
    href: '#',
    repo: '#',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=900&auto=format&fit=crop',
  },
  {
    title: 'MoodTunes',
    desc: 'Recommends playlists based on your vibes. Yes, it understands Mondays.',
    tech: ['Next.js', 'Tailwind', 'Spotify API'],
    href: '#',
    repo: '#',
    img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=900&auto=format&fit=crop',
  },
  {
    title: 'PixelPong AI',
    desc: 'Reinforcement learning meets retro chaos. Surprisingly fun, slightly cursed.',
    tech: ['Python', 'PyTorch', 'Gym'],
    href: '#',
    repo: '#',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=900&auto=format&fit=crop',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">Projects</h2>
          <p className="text-zinc-600 dark:text-zinc-300">This code didn’t crash today. I’m proud.</p>
        </div>
        <a href="#contact" className="text-indigo-600 hover:text-indigo-500 font-medium">Need something built?</a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProjects.map((p) => (
          <article key={p.title} className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900 hover:shadow-xl transition-shadow">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={p.img} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">{p.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">{t}</span>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-4">
                <a href={p.href} className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-500">
                  <ExternalLink size={16} /> Demo
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-zinc-700 dark:text-zinc-300 hover:text-indigo-500">
                  <Github size={16} /> Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
