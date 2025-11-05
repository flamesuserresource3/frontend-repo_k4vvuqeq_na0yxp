import { Mail, Send } from 'lucide-react'

export default function ContactHire() {
  return (
    <section id="contact" className="py-16">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact form */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">Contact</h2>
          <p className="text-zinc-600 dark:text-zinc-300 mt-1">Drop a message! Or a meme. Either works.</p>

          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-sm text-zinc-700 dark:text-zinc-300">Name</label>
              <input type="text" required className="mt-1 w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="text-sm text-zinc-700 dark:text-zinc-300">Email</label>
              <input type="email" required className="mt-1 w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="text-sm text-zinc-700 dark:text-zinc-300">Message</label>
              <textarea rows="4" required className="mt-1 w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium">
              <Send size={16} /> Send it
            </button>
          </form>
        </div>

        {/* Hire me */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">Hire Me</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mt-1">Need a dev who knows their semicolons from their syntax errors? Let’s talk.</p>

            <ul className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Frontend that doesn’t make designers cry</li>
              <li>• Backends that actually respond</li>
              <li>• Deploys without rituals (most days)</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium">
              <Mail size={16} /> Email me
            </a>
            <a href="#" className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
