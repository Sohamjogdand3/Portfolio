import {MotionConfig} from 'framer-motion';
import Navbar from './components/Navbar';import Hero from './components/Hero';import About from './components/About';
import Projects from './components/Projects';import Achievements from './components/Achievements';import Contact from './components/Contact';import Footer from './components/Footer';
export default function App(){
return <MotionConfig reducedMotion="user"><Navbar/><main><Hero/><About/><Projects/><Achievements/><Contact/></main><Footer/></MotionConfig>}
