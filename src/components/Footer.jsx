import {profile} from '../data/projects';

export default function Footer(){
return <footer className="border-t border-line py-8"><div className="wrap flex flex-col gap-3 text-sm text-mute md:flex-row md:items-center md:justify-between">
<p>© 2026 Soham Jogdand</p>
<p className="flex gap-4"><a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">GitHub</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">LinkedIn</a><a href={'mailto:'+profile.email} className="hover:text-ink">Email</a></p>
<p>Built with React</p></div></footer>}
