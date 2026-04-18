import { useState, useEffect, FormEvent } from 'react';
import { 
  Menu, X, PlayCircle, CheckCircle2, Award, 
  BookOpen, Users, Wind, Phone, MapPin, 
  Instagram, Youtube, MessageCircle, ChevronRight, GraduationCap, Video, Building2, Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- DATA ---
const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About Sir', href: '#about' },
  { name: 'Courses', href: '#courses' },
  { name: 'Results', href: '#results' },
  { name: 'Classroom', href: '#classroom' },
  { name: 'Admission', href: '#admission' },
  { name: 'Contact', href: '#contact' }
];

const STATS = [
  { label: 'YouTube Subscribers', value: '4.7K+', icon: Youtube },
  { label: 'Video Lectures', value: '200+', icon: Video },
  { label: 'Students Taught', value: '500+', icon: Users },
  { label: 'Board Toppers', value: '50+', icon: Award },
];

const COURSES = [
  {
    title: 'Class 9-10 Foundation',
    desc: 'Build a strong base in English & Hindi for board exams.',
    features: ['NCERT Coverage', 'Grammar Focus', 'Weekly Tests', 'Doubt Classes'],
    duration: '1 Year Program'
  },
  {
    title: 'Class 11-12 Board Prep',
    desc: 'Target 95%+ in boards with advanced strategy and practice.',
    features: ['Board Pattern Tests', 'Answer Writing', 'Literature Mastery', 'Previous Year Questions'],
    duration: '1 Year Program'
  },
  {
    title: 'English Special Batch',
    desc: 'Spoken English & Grammar mastery for all levels.',
    features: ['Fluency Practice', 'Vocab Building', 'Interview Prep', 'Grammar Basics'],
    duration: '6 Months'
  },
  {
    title: 'Hindi Special Batch',
    desc: 'Deep dive into Hindi literature & Vyakaran for Bihar Board.',
    features: ['Kavita & Kahani', 'Vyakaran Focus', 'Writing Skills', 'Board Specific'],
    duration: '6 Months'
  }
];

const FEATURES = [
  { title: 'AC Classroom Environment', desc: 'Comfortable, temperature-controlled classrooms for focused learning.', icon: Wind },
  { title: 'Small Batch Size', desc: 'Personal attention to every student with limited seats per batch.', icon: Users },
  { title: 'Concept-Based Teaching', desc: 'No rote learning. Clear visual concepts and logical explanations.', icon: BookOpen },
  { title: 'Board Exam Focus', desc: 'Specially curated materials for CBSE & Bihar Board patterns.', icon: GraduationCap },
  { title: 'Regular Tests & Doubts', desc: 'Weekly evaluations and dedicated doubt-clearing sessions.', icon: CheckCircle2 },
  { title: 'Discipline & Premium Infra', desc: 'Modern desks, digital boards, and a strict academic environment.', icon: Building2 },
];

const TESTIMONIALS = [
  { name: 'Rahul Kumar', class: 'Class 12 (Bihar Board)', quote: "Sir's way of explaining Hindi literature made the toughest poems easy to understand. Scored 94!" },
  { name: 'Priya Sharma', class: 'Class 10 (CBSE)', quote: "My English grammar was very weak, but the Foundation batch cleared all my doubts. Highly recommended." },
  { name: 'Amit Singh', class: 'Class 12 (CBSE)', quote: "The AC classrooms and small batch sizes provide the perfect environment for serious study. Best institute in the city." },
];

const RESULTS = [
  { name: 'Ananya Sharma', marks: '98.5%', year: '2025', exam: 'Class 12 (CBSE)', highlight: 'English Topper', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400' },
  { name: 'Rahul Verma', marks: '97.2%', year: '2025', exam: 'Class 12 (Bihar Board)', highlight: 'State Rank 4', image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&q=80&w=400&h=400' },
  { name: 'Priya Singh', marks: '99%', year: '2024', exam: 'Class 10 (CBSE)', highlight: 'Perfect Score', image: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&q=80&w=400' },
  { name: 'Aditya Kumar', marks: '96.8%', year: '2024', exam: 'Class 10 (Bihar Board)', highlight: 'District Topper', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400' },
];

// --- COMPONENTS ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleAdmissionSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-bw-bg text-white selection:bg-bw-orange selection:text-white">
      
      {/* NAVBAR */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-bw-bg/90 backdrop-blur-md border-b border-bw-surface-light py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center overflow-hidden border-2 border-bw-orange bg-black shadow-[0_0_10px_rgba(255,106,0,0.3)] relative">
              <span className="font-heading font-bold text-xl text-bw-orange absolute">B</span>
              <img 
                src="https://i.ibb.co/pj9Pznzz/Logo.png" 
                alt="Biharwale Sirji Logo" 
                className="w-full h-full object-cover relative z-10 bg-black" 
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <span className="font-heading font-extrabold text-xl tracking-tight hidden sm:block">
              Biharwale<span className="text-bw-orange">Sirji</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} className="text-[14px] font-medium text-bw-text-muted hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+919876543210" className="text-sm font-medium hover:text-bw-orange transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a href="#courses" className="bg-bw-orange hover:bg-bw-orange-hover text-black px-6 py-2.5 rounded-[4px] text-[13px] font-bold uppercase tracking-wide transition-all">
              Join Now
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-bw-bg border-l border-bw-surface-light md:hidden flex flex-col pt-20 px-6 pb-6"
          >
            <button 
              className="absolute top-6 right-6 text-bw-text-muted hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <nav className="flex flex-col gap-6 text-2xl font-heading font-semibold mt-8">
              {NAV_LINKS.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-bw-orange transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="mt-auto space-y-4">
              <a href="tel:+919876543210" className="flex items-center justify-center gap-2 w-full py-4 rounded-[4px] border border-bw-surface-light font-medium">
                <Phone className="w-5 h-5" /> +91 98765 43210
              </a>
              <a href="#courses" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center w-full py-4 rounded-[4px] bg-bw-orange text-black font-bold uppercase tracking-wide text-[13px]">
                Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 rounded-[20px] border border-bw-orange bg-bw-orange/10 mb-6 text-[11px] font-bold text-bw-orange uppercase tracking-wide">
              CBSE & BIHAR BOARD SPECIALIST
            </div>
            <h1 className="text-5xl md:text-[52px] lg:text-[64px] font-heading font-bold leading-[1.1] tracking-tight mb-6">
              Master <span className="text-bw-orange">English & Hindi</span> with Confidence
            </h1>
            <p className="text-lg text-bw-text-muted mb-4 max-w-[500px] leading-relaxed">
              High-quality coaching for Classes 9–12. Concept-based teaching in a premium AC classroom environment. Hindi & English mastery starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#courses" className="bg-bw-orange hover:bg-bw-orange-hover text-black px-8 py-4 rounded-[4px] font-bold text-center transition-all flex items-center justify-center gap-2 uppercase tracking-wide text-[13px]">
                Start Learning Now <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#youtube" className="bg-bw-bg hover:bg-bw-surface border border-bw-text-muted text-white px-8 py-4 rounded-[4px] font-bold text-center transition-all flex items-center justify-center gap-2 uppercase tracking-wide text-[13px]">
                Watch Demo
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] object-cover rounded-[12px] border border-bw-surface-light overflow-hidden relative shadow-2xl shadow-black/50 bg-bw-surface flex items-end justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-bw-orange via-transparent to-transparent opacity-10" />
              <div className="absolute inset-0 bg-gradient-to-tr from-bw-bg via-transparent to-transparent opacity-80" />
              <img 
                src="https://i.ibb.co/LX6t6VDc/file-000000001c907206937d7413c8c21e9f.png" 
                alt="Biharwale Sirji Teaching" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 opacity-80 z-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800';
                }}
              />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-bw-surface via-bw-surface/80 to-transparent z-10"></div>
              <div className="font-heading font-extrabold text-[32px] sm:text-[40px] text-bw-surface-light uppercase tracking-tighter relative z-20 mb-[20px] text-center px-4 w-full">
                Ravi Raushan Sir
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / STATS SECTION */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto h-auto md:h-[80px] bg-bw-surface rounded-[12px] border border-bw-surface-light flex items-center relative z-10 overflow-hidden shadow-xl shadow-black/20">
          <div className="w-full grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-bw-surface-light">
            {STATS.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center py-4 md:py-0 text-center">
                <span className="font-heading font-bold text-[24px] text-bw-orange block mb-1">
                  {stat.value}
                </span>
                <span className="text-[11px] font-semibold text-bw-text-muted uppercase tracking-[1px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SIR */}
      <section id="about" className="py-24 px-6 overflow-hidden relative border-t border-bw-surface-light">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 text-[200px] font-heading font-black text-bw-surface-light/30 z-0 select-none hidden md:block">
          ABOUT
        </div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center lg:items-start relative z-10">
          
          {/* Detailed Biography Content */}
          <div className="order-2 lg:order-1 flex-1">
            <h2 className="font-heading text-4xl md:text-[52px] font-bold mb-6 tracking-tight">
              Meet <span className="text-bw-orange">Biharwale Sirji</span>
            </h2>
            
            <div className="space-y-6 text-[16px] text-bw-text-muted leading-relaxed mb-8">
              <p>
                With over a decade of dedicated teaching experience, Biharwale Sirji has transformed the way students perceive and learn English and Hindi. He recognized a massive gap in how literature and grammar were being taught—relying heavily on rote memorization rather than true comprehension.
              </p>
              <p>
                His mission is to empower students from the Bihar Board and CBSE to not only score exceptional marks but to communicate with unwavering confidence in both standard societal settings and academic avenues.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              {/* Educational Background */}
              <div className="bg-bw-surface border border-bw-surface-light p-6 rounded-[8px]">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-bw-orange" />
                  <h3 className="font-heading font-bold text-xl text-white">Education</h3>
                </div>
                <ul className="space-y-3 text-[14px] text-bw-text-muted">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-bw-orange mt-1.5 flex-shrink-0" />
                    <span>M.A. in English Literature</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-bw-orange mt-1.5 flex-shrink-0" />
                    <span>B.Ed. with distinct honors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-bw-orange mt-1.5 flex-shrink-0" />
                    <span>Specialized certifications in Bilingual Education</span>
                  </li>
                </ul>
              </div>

              {/* Teaching Philosophy */}
              <div className="bg-bw-surface border border-bw-surface-light p-6 rounded-[8px]">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-bw-orange" />
                  <h3 className="font-heading font-bold text-xl text-white">Philosophy</h3>
                </div>
                <ul className="space-y-3 text-[14px] text-bw-text-muted">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-bw-orange mt-1.5 flex-shrink-0" />
                    <span>Concept clarity over rote memorization.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-bw-orange mt-1.5 flex-shrink-0" />
                    <span>Empathetic, student-first approach.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-bw-orange mt-1.5 flex-shrink-0" />
                    <span>Strict discipline matched with highly engaging logic.</span>
                  </li>
                </ul>
              </div>
            </div>

            <a href="#youtube" className="inline-flex items-center gap-2 font-medium hover:text-bw-orange transition-colors py-2 border-b border-bw-surface-light hover:border-bw-orange pb-1 text-white">
              Watch his teaching methodology on YouTube <ChevronRight className="w-4 h-4 text-bw-orange" />
            </a>
          </div>

          {/* Profile Picture */}
          <div className="order-1 lg:order-2 w-full max-w-[400px] lg:max-w-md relative pb-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-bw-orange/20 to-transparent blur-3xl rounded-full" />
            <div className="relative z-10 w-full aspect-[4/5] rounded-[12px] bg-bw-surface border border-bw-surface-light overflow-hidden shadow-2xl p-2">
              <div className="w-full h-full rounded-[8px] overflow-hidden bg-bw-bg relative group">
                <img 
                  src="https://i.ibb.co/LX6t6VDc/file-000000001c907206937d7413c8c21e9f.png" 
                  alt="Biharwale Sirji Portrait" 
                  className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&q=80&w=600';
                  }}
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-20">
                  <h4 className="font-heading font-bold text-2xl text-white">Biharwale Sirji</h4>
                  <p className="font-medium text-bw-orange text-sm uppercase tracking-wider mt-1">Founder & Lead Educator</p>
                </div>
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-bw-bg border border-bw-surface-light p-6 rounded-[12px] shadow-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-bw-orange flex items-center justify-center text-black font-heading font-black text-2xl">
                10+
              </div>
              <div>
                <p className="font-heading font-bold text-white text-[15px] leading-tight">Years of<br/>Excellence</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="py-24 px-6 bg-bw-bg border-t border-bw-surface-light">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-heading text-4xl md:text-[52px] font-bold mb-4 tracking-tight leading-[1.1]">Structured <span className="text-bw-orange">Courses</span></h2>
            <p className="text-bw-text-muted text-lg max-w-[500px]">Designed meticulously for CBSE and Bihar Board students to ensure maximum marks and deep understanding.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {COURSES.map((course, i) => (
              <div key={i} className="bg-bw-surface border border-bw-surface-light rounded-[12px] p-6 flex flex-col hover:border-bw-orange transition-all duration-200 group">
                <div className="text-[12px] font-bold text-bw-orange uppercase mb-2 tracking-wide font-heading">
                  {course.title.split(' ')[0]} {course.title.split(' ')[1]}
                </div>
                <h3 className="font-heading font-bold text-[20px] mb-3">{course.title}</h3>
                <p className="text-[13px] text-bw-text-muted mb-6 flex-grow">{course.desc}</p>
                
                <div className="space-y-2 mb-8">
                  {course.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-2 text-[13px] text-bw-text-muted">
                      <span className="text-bw-orange font-bold font-heading">{"\u2713"}</span>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="pt-6 mt-auto">
                  <a href="#contact" className="block w-full py-3 rounded-[4px] bg-bw-bg border border-bw-surface-light text-white font-bold text-center hover:bg-bw-orange hover:text-black hover:border-bw-orange transition-all text-[13px] uppercase tracking-wide">
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 tracking-tight">Why Choose <span className="text-bw-orange">Us?</span></h2>
              <p className="text-bw-text-muted text-lg">"Board Exam में Top करने की सही तैयारी"</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {FEATURES.map((feat, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-[4px] bg-bw-surface border border-bw-surface-light flex items-center justify-center flex-shrink-0 mt-1">
                  <feat.icon className="w-6 h-6 text-bw-orange" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-2">{feat.title}</h4>
                  <p className="text-bw-text-muted text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASSROOM EXPERIENCE */}
      <section id="classroom" className="py-24 px-6 bg-bw-surface border-y border-bw-surface-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4">Premium <span className="text-bw-orange">Classroom</span></h2>
            <p className="text-bw-text-muted text-lg">Experience a highly disciplined, fully air-conditioned, and technically equipped learning environment.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800" 
              alt="Classroom" 
              className="rounded-[12px] border border-bw-surface-light aspect-[4/3] object-cover w-full mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800" 
              alt="Institute building" 
              className="rounded-[12px] border border-bw-surface-light aspect-[4/3] object-cover w-full mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
              alt="Students" 
              className="rounded-[12px] border border-bw-surface-light aspect-[4/3] object-cover w-full mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 md:col-span-1 sm:col-span-2 col-span-1"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* YOUTUBE SECTION */}
      <section id="youtube" className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-bw-surface rounded-[12px] border border-bw-surface-light overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF0000]/10 text-[#FF0000] rounded-[20px] text-[11px] font-bold tracking-wide uppercase mb-6 border border-[#FF0000]/20 w-fit">
                <Youtube className="w-4 h-4" /> YouTube Channel
              </div>
              <h2 className="font-heading text-4xl lg:text-[40px] font-bold mb-4 tracking-tight leading-[1.1]">Watch Free Classes Before Joining</h2>
              <p className="text-[16px] text-bw-text-muted mb-8 leading-relaxed">
                With a family of 4.7K+ subscribers, our concepts speak for themselves. Watch our latest lecture to see the teaching methodology firsthand.
              </p>
              <a href="https://youtube.com/@biharwalesirji?si=9g7jORlFSWTPvuTm" target="_blank" rel="noopener noreferrer" className="inline-flex max-w-fit items-center justify-center gap-2 bg-[#FF0000] hover:bg-[#CC0000] text-white px-6 py-3 rounded-[4px] font-bold uppercase text-[13px] tracking-wide transition-colors">
                Subscribe to Channel <ChevronRight className="w-5 h-5" />
              </a>
            </div>
            <div className="relative bg-bw-bg min-h-[300px] md:min-h-full flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-bw-surface-light p-6 lg:p-10">
              <div className="w-full rounded-[8px] overflow-hidden border border-bw-surface-light shadow-2xl relative aspect-video bg-black">
                {/* Embedded Video Note: Update 'src' below with your latest YouTube video ID after '/embed/' */}
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/UNVkq494fmY?rel=0" 
                  title="Biharwale Sirji Latest Class" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-[12px] text-bw-text-muted mt-4 text-center w-full">
                * Video placeholder. Update <code className="text-white">src</code> in code with your latest video ID.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT RESULTS */}
      <section id="results" className="py-24 px-6 bg-bw-surface text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <div className="inline-block px-3 py-1 rounded-[20px] border border-bw-orange bg-bw-orange/10 mb-6 text-[11px] font-bold text-bw-orange uppercase tracking-wide">
                Hall of Fame
              </div>
              <h2 className="font-heading text-4xl md:text-[52px] font-bold mb-4 tracking-tight leading-[1.1]">Our <span className="text-bw-orange">Toppers</span></h2>
              <p className="text-bw-text-muted text-lg">Consistent results year after year. Proud of our hardworking students.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESULTS.map((result, i) => (
              <div key={i} className="bg-bw-bg border border-bw-surface-light rounded-[12px] overflow-hidden group hover:border-bw-orange transition-colors">
                <div className="aspect-square relative overflow-hidden bg-bw-surface flex items-center justify-center">
                  <img 
                    src={result.image} 
                    alt={result.name}
                    className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-bw-orange text-black font-extrabold text-[22px] font-heading px-3 py-1 rounded-[4px] shadow-lg">
                    {result.marks}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading font-bold text-[18px]">{result.name}</h3>
                    <span className="text-[10px] font-bold text-bw-text-muted bg-bw-surface px-2 py-1 rounded-[4px] border border-bw-surface-light">
                      {result.year}
                    </span>
                  </div>
                  <p className="text-[13px] text-bw-text-muted mb-4">{result.exam}</p>
                  <div className="inline-flex items-center gap-2 text-[11px] font-bold text-bw-orange uppercase tracking-wide">
                    <Award className="w-4 h-4" /> {result.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 border-t border-bw-surface-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-[52px] font-bold tracking-tight mb-4">Student <span className="text-bw-orange">Stories</span></h2>
            <p className="text-bw-text-muted text-lg">Hear what our toppers and past students have to say.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-bw-surface border border-bw-surface-light rounded-[12px] p-8 flex flex-col relative">
                <div className="font-serif text-6xl text-bw-surface-light absolute top-4 left-6 leading-none select-none">"</div>
                <p className="text-[15px] mb-8 relative z-10 font-medium text-white/90">"{t.quote}"</p>
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-10 h-10 bg-bw-bg border border-bw-surface-light rounded-full flex items-center justify-center font-heading font-bold text-bw-orange">
                    {t.name[0]}
                  </div>
                  <div>
                    <h5 className="font-heading font-semibold text-[14px]">{t.name}</h5>
                    <p className="text-[12px] text-bw-text-muted">{t.class}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSION FORM SECTION */}
      <section id="admission" className="py-24 px-6 bg-bw-bg border-t border-bw-surface-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-[52px] font-bold tracking-tight mb-4">Apply for <span className="text-bw-orange">Admission</span></h2>
            <p className="text-bw-text-muted text-lg">Fill out the form below to register for our premium batches.</p>
          </div>

          <form onSubmit={handleAdmissionSubmit} className="bg-bw-surface border border-bw-surface-light rounded-[12px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {formStatus === 'success' && (
              <div className="absolute inset-0 bg-bw-surface/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 bg-bw-orange rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-3xl font-heading font-bold mb-2">Application Submitted!</h3>
                <p className="text-bw-text-muted">Thank you. We will contact you shortly to confirm your admission.</p>
              </div>
            )}
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Personal Info */}
              <div className="space-y-6">
                <h4 className="font-heading font-bold text-lg border-b border-bw-surface-light pb-2 text-bw-orange">Student Information</h4>
                
                <div>
                  <label className="block text-[13px] font-medium text-bw-text-muted mb-2">Full Name *</label>
                  <input required type="text" className="w-full bg-bw-bg border border-bw-surface-light rounded-[4px] px-4 py-3 text-white focus:outline-none focus:border-bw-orange transition-colors" placeholder="Enter student's full name" />
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-bw-text-muted mb-2">Phone Number *</label>
                  <input required type="tel" className="w-full bg-bw-bg border border-bw-surface-light rounded-[4px] px-4 py-3 text-white focus:outline-none focus:border-bw-orange transition-colors" placeholder="10-digit mobile number" />
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-bw-text-muted mb-2">Email Address</label>
                  <input type="email" className="w-full bg-bw-bg border border-bw-surface-light rounded-[4px] px-4 py-3 text-white focus:outline-none focus:border-bw-orange transition-colors" placeholder="student@example.com" />
                </div>
              </div>

              {/* Course & Parent Info */}
              <div className="space-y-6">
                <h4 className="font-heading font-bold text-lg border-b border-bw-surface-light pb-2 text-bw-orange">Course & Guardian Details</h4>

                <div>
                  <label className="block text-[13px] font-medium text-bw-text-muted mb-2">Select Course *</label>
                  <select required className="w-full bg-bw-bg border border-bw-surface-light rounded-[4px] px-4 py-3 text-white focus:outline-none focus:border-bw-orange transition-colors appearance-none">
                    <option value="" className="bg-bw-text-muted">-- Select a Course --</option>
                    {COURSES.map((c, i) => (
                      <option key={i} value={c.title} className="bg-bw-bg text-white">{c.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-bw-text-muted mb-2">Parent/Guardian Name *</label>
                  <input required type="text" className="w-full bg-bw-bg border border-bw-surface-light rounded-[4px] px-4 py-3 text-white focus:outline-none focus:border-bw-orange transition-colors" placeholder="Enter guardian's name" />
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-bw-text-muted mb-2">Parent's Phone Number *</label>
                  <input required type="tel" className="w-full bg-bw-bg border border-bw-surface-light rounded-[4px] px-4 py-3 text-white focus:outline-none focus:border-bw-orange transition-colors" placeholder="Guardian's mobile number" />
                </div>
              </div>
            </div>

            <div className="mb-8">
               <label className="block text-[13px] font-medium text-bw-text-muted mb-2">Full Address *</label>
               <textarea required rows={3} className="w-full bg-bw-bg border border-bw-surface-light rounded-[4px] px-4 py-3 text-white focus:outline-none focus:border-bw-orange transition-colors" placeholder="Enter your complete residential address"></textarea>
            </div>

            <button 
              type="submit" 
              disabled={formStatus === 'submitting'}
              className="w-full bg-bw-orange hover:bg-bw-orange-hover text-black font-bold uppercase tracking-wide py-4 rounded-[4px] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {formStatus === 'submitting' ? 'Submitting Application...' : 'Submit Admission Application'}
            </button>
          </form>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="py-24 px-6 bg-bw-orange text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Limited Seats Available.</h2>
          <p className="text-xl md:text-2xl font-medium mb-10 text-black/80">
            Hindi & English Mastery Starts Here. Enroll before the next batch fills up.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a href="tel:+919876543210" className="bg-bw-bg hover:bg-black text-white px-8 py-4 rounded-[4px] font-bold text-[13px] uppercase tracking-wide transition-colors flex items-center justify-center gap-2 border border-bw-bg flex-1 max-w-[250px] shadow-2xl">
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a href="https://wa.me/919876543210" className="bg-[#25D366] hover:bg-[#20BE5A] text-white px-8 py-4 rounded-[4px] font-bold text-[13px] uppercase tracking-wide transition-colors flex items-center justify-center gap-2 flex-1 max-w-[250px] shadow-2xl">
              <MessageCircle className="w-5 h-5 text-white" /> WhatsApp Direct
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-bw-bg border-t border-bw-surface-light pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden border-2 border-bw-orange bg-black shadow-[0_0_10px_rgba(255,106,0,0.3)] relative">
                <span className="font-heading font-bold text-xl text-bw-orange absolute">B</span>
                <img 
                  src="https://i.ibb.co/pj9Pznzz/Logo.png" 
                  alt="Biharwale Sirji Logo" 
                  className="w-full h-full object-cover relative z-10 bg-black"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight">
                Biharwale<span className="text-bw-orange">Sirji</span>
              </span>
            </div>
            <p className="text-bw-text-muted max-w-sm text-[14px]">
              Premium coaching institute teaching English and Hindi to Classes 9-12 with supreme concept clarity and board-exam focus.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-bold mb-4 uppercase tracking-[1px] text-[12px] text-white">Quick Links</h4>
            <ul className="space-y-3 font-medium text-[14px] text-bw-text-muted">
              <li><a href="#home" className="hover:text-bw-orange transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-bw-orange transition-colors">About Sir</a></li>
              <li><a href="#courses" className="hover:text-bw-orange transition-colors">Classroom Courses</a></li>
              <li><a href="#youtube" className="hover:text-bw-orange transition-colors">Free Video Lectures</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 uppercase tracking-[1px] text-[12px] text-white">Contact Info</h4>
            <ul className="space-y-4 font-medium text-[14px] text-bw-text-muted">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>123, Edu Tower, Main Road, City Center, Bihar 800001</span>
              </li>
              <li className="flex items-center gap-3 mt-4">
                <a href="https://youtube.com/@biharwalesirji?si=9g7jORlFSWTPvuTm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-[4px] border border-bw-surface-light flex items-center justify-center hover:text-white hover:border-bw-orange transition-colors bg-bw-surface">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://t.me/biharwalesirji" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-[4px] border border-bw-surface-light flex items-center justify-center hover:text-white hover:border-[#229ED9] transition-colors bg-bw-surface">
                  <Send className="w-5 h-5 -ml-0.5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-[4px] border border-bw-surface-light flex items-center justify-center hover:text-white hover:border-bw-orange transition-colors bg-bw-surface">
                  <Instagram className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-bw-surface-light text-center md:text-left flex flex-col md:flex-row justify-between items-center text-[12px] text-bw-text-muted">
          <p>© {new Date().getFullYear()} Biharwale Sirji Coaching. All rights reserved.</p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/919876543210"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all flex items-center justify-center group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-bw-bg text-white text-xs font-bold py-2 px-3 rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-bw-surface-light uppercase tracking-wide">
          Chat with us
        </span>
      </a>

    </main>
  );
}
