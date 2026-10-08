import Reveal from './Reveal';import {tech} from '../data/projects';
export default function About(){
return <section id="about" className="section border-t border-line"><div className="wrap grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
<Reveal><h2 className="h2">About</h2></Reveal>
<Reveal delay={.08}><p className="max-w-2xl text-xl leading-relaxed">I'm a CSE-AIML engineering student focused on backend engineering, AI/ML and building practical software systems. I enjoy working on problems involving backend architecture, APIs, databases, real-time systems and applied AI.</p>
<h3 className="mt-12 text-sm font-medium text-mute">Technologies</h3>
<ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">{tech.map(t=><li key={t} className="rounded-md border border-line bg-white px-3 py-1.5 text-sm">{t}</li>)}</ul></Reveal>
</div></section>}
