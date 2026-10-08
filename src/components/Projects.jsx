import Reveal from './Reveal';import {motion} from 'framer-motion';import {ArrowUpRight,Github} from 'lucide-react';import {projects} from '../data/projects';
export default function Projects(){
return <section id="projects" className="section border-t border-line"><div className="wrap">
<Reveal><h2 className="h2">Selected Projects</h2></Reveal>
<ul className="mt-12 grid gap-5 md:grid-cols-2">{projects.map((p,i)=><li key={p.name}><Reveal delay={i*.06} className="h-full">
<motion.article whileHover={{y:-3}} transition={{duration:.2}} className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 md:p-8 transition-colors hover:border-ink">
<div className="flex items-start justify-between gap-4"><h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
<ArrowUpRight className="shrink-0 text-mute transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" size={22} aria-hidden="true"/></div>
<p className="mt-1 text-sm text-accent">{p.category}</p>
<p className="mt-4 flex-1 leading-relaxed text-mute">{p.description}</p>
<ul className="mt-6 flex flex-wrap gap-2">{p.tags.map(t=><li key={t} className="rounded-md bg-bg px-2.5 py-1 text-xs text-mute">{t}</li>)}</ul>
<div className="mt-6 flex gap-5 border-t border-line pt-5">
<a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent"><Github size={16}/>GitHub</a>
{p.demo&&<a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent"><ArrowUpRight size={16}/>Live Demo</a>}</div>
</motion.article></Reveal></li>)}</ul></div></section>}
