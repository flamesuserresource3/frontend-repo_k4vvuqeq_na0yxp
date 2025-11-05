import { BadgeCheck, GraduationCap, Briefcase } from 'lucide-react'

export default function About() {
  const skills = [
    'React',
    'TypeScript',
    'Tailwind',
    'FastAPI',
    'MongoDB',
    'Git + GitHub',
    'CI/CD',
    'Docker',
  ]

  const education = [
    {
      school: 'Tech University',
      degree: 'B.S. in Computer Science',
      time: '2019 – 2023',
      note: 'Graduated with a degree and a caffeine dependency.',
    },
  ]

  const experience = [
    {
      role: 'Software Engineer',
      org: 'Acme Corp',
      time: '2023 – Present',
      note: 'This is where the coffee consumption peaked.',
    },
    {
      role: 'Dev Intern',
      org: 'SideQuest Labs',
      time: 'Summer 2022',
      note: 'Built things that somehow worked on the first try (once).',
    },
  ]

  return (
    <section id="about" className="py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">Skills, Education & Experience</h2>
      <p className="text-zinc-600 dark:text-zinc-300 mt-1">Can write 10 lines of CSS without crying (sometimes).</p>

      <div className="grid lg:grid-cols-3 gap-8 mt-8">
        {/* Skills */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900">
          <div className="flex items-center gap-2 mb-4">
            <BadgeCheck className="text-indigo-600" size={18} />
            <h3 className="font-semibold">Skills</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="text-xs px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">{s}</span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="text-indigo-600" size={18} />
            <h3 className="font-semibold">Education</h3>
          </div>
          <ol className="relative border-s border-zinc-200 dark:border-zinc-800">
            {education.map((e) => (
              <li key={e.school} className="mb-6 ms-4">
                <div className="absolute w-3 h-3 bg-indigo-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-zinc-900" />
                <time className="mb-1 text-xs text-zinc-500 dark:text-zinc-400">{e.time}</time>
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{e.degree} @ {e.school}</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">{e.note}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Experience */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="text-indigo-600" size={18} />
            <h3 className="font-semibold">Experience</h3>
          </div>
          <ol className="relative border-s border-zinc-200 dark:border-zinc-800">
            {experience.map((x) => (
              <li key={x.role + x.org} className="mb-6 ms-4">
                <div className="absolute w-3 h-3 bg-indigo-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-zinc-900" />
                <time className="mb-1 text-xs text-zinc-500 dark:text-zinc-400">{x.time}</time>
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{x.role} @ {x.org}</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">{x.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
