import Reveal from './Reveal';
import { technologies } from '../data/projects';

export default function About() {
  return (
    <section id="about" className="section border-t border-line">
      <div className="wrap grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
        <Reveal>
          <h2 className="h2">About</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="max-w-2xl text-xl leading-relaxed">
            I'm a final-year Engineering student specializing in AI/ML, building intelligent systems and scalable backend solutions. I believe in strategic thinking, precise execution, and results that speak for themselves.
          </p>
          <div className="mt-12">
            <h3 className="text-sm font-medium text-mute">Technologies</h3>
            <div className="mt-6 space-y-6">
              {technologies.map((group) => (
                <div key={group.category}>
                  <h4 className="text-sm font-semibold text-ink">{group.category}</h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((t) => (
                      <li key={t} className="rounded-md border border-line bg-white px-3 py-1.5 text-sm">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
