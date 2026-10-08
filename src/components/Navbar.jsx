import {useState} from 'react';import {motion} from 'framer-motion';import {Menu,X} from 'lucide-react';
const links=[['About','#about'],['Projects','#projects'],['POR & Achievements','#achievements'],['Contact','#contact']];
export default function Navbar(){
const [open,setOpen]=useState(false);
return <motion.header initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} transition={{duration:.5}} className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
<nav aria-label="Primary" className="wrap flex h-16 items-center justify-between">
<a href="#home" className="text-sm font-semibold tracking-[0.12em]">SOHAM JOGDAND</a>
<ul className="hidden md:flex items-center gap-8">{links.map(([l,h])=><li key={h}><a href={h} className="text-sm text-mute transition-colors hover:text-ink">{l}</a></li>)}</ul>
<button className="md:hidden p-2 -mr-2" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X size={22}/>:<Menu size={22}/>}</button>
</nav>
{open&&<ul className="md:hidden border-t border-line bg-bg wrap py-2">{links.map(([l,h])=><li key={h}><a href={h} onClick={()=>setOpen(false)} className="block py-3 text-base text-ink">{l}</a></li>)}</ul>}
</motion.header>}
