import Reveal from './Reveal';import {achievements} from '../data/projects';
export default function Achievements(){
return <section id="achievements" className="section border-t border-line"><div className="wrap">
<Reveal><h2 className="h2 max-w-3xl">Position of Responsibility &amp; Achievements</h2></Reveal>
<ol className="mt-12 divide-y divide-line border-y border-line">{achievements.map((a,i)=><li key={i}><Reveal delay={i*.05} className="grid gap-1 py-6 md:grid-cols-[120px_1fr_2fr] md:gap-8">
<p className="text-sm text-mute">{a.year}</p><div><h3 className="font-semibold">{a.title}</h3><p className="text-sm text-mute">{a.org}</p></div><p className="text-mute">{a.desc}</p></Reveal></li>)}</ol>
</div></section>}
