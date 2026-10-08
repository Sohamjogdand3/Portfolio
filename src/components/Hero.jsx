import {motion} from 'framer-motion';import {Github,Linkedin} from 'lucide-react';import img from '../assets/soham_portfolio.png';import {profile} from '../data/projects';
const up=d=>({initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.6,delay:d,ease:[.22,1,.36,1]}});
export default function Hero(){
return <section id="home" className="section !pt-10 md:!pt-16"><div className="wrap grid items-center gap-10 md:gap-16 md:grid-cols-2">
<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.8}} className="mx-auto w-full max-w-md md:max-w-none">
<img src={img} alt="Portrait of Soham Jogdand" width="800" height="1000" fetchpriority="high" className="aspect-[4/5] w-full rounded-xl object-cover object-top"/></motion.div>
<div>
<motion.p {...up(.1)} className="text-lg text-mute">Hi, I'm</motion.p>
<motion.h1 {...up(.18)} className="mt-1 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.02] tracking-tight">Soham Jogdand</motion.h1>
<motion.p {...up(.26)} className="mt-5 text-xl md:text-2xl font-medium text-accent">Backend Engineer &amp; AIML Developer</motion.p>
<motion.p {...up(.34)} className="mt-4 max-w-md text-lg text-mute">I build scalable backend systems and practical AI-powered applications.</motion.p>
<motion.p {...up(.4)} className="mt-3 text-sm text-mute">CSE • AIML | Mumbai, India</motion.p>
<motion.div {...up(.48)} className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#projects" className="btn btn-p">View Projects</a><a href={profile.resume} download="Soham_Jogdand_Resume.pdf" className="btn btn-s">Download Resume</a></motion.div>
<motion.div {...up(.54)} className="mt-6 flex gap-4 text-mute">
<a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-1 hover:text-ink"><Github size={22}/></a>
<a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-1 hover:text-ink"><Linkedin size={22}/></a></motion.div>
</div></div></section>}
