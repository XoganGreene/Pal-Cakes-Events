import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Instagram,
  Phone,
  MapPin,
  Calendar,
  ChevronRight,
  Star,
  Quote,
  CheckCircle2,
  Heart,
  Cake,
  Gift,
  GlassWater,
  Camera,
  MessageCircle,
} from 'lucide-react';
import { useState, useEffect } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream selection:bg-champagne/30 text-warm-brown font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream/90 backdrop-blur-md shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-serif tracking-tight font-light text-champagne">
              Pal Cakes <span className="text-dark-brown/40 text-xl font-sans italic">&</span> Events
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-[11px] uppercase tracking-[0.2em] font-medium text-dark-brown/80">
            <a href="#about" className="hover:text-champagne transition-colors">About</a>
            <a href="#services" className="hover:text-champagne transition-colors">Services</a>
            <a href="#gallery" className="hover:text-champagne transition-colors">Gallery</a>
            <a href="#contact" className="px-6 py-2.5 bg-dark-brown text-white rounded-full hover:bg-champagne transition-colors">
              Book Now
            </a>
          </div>

          <button 
            className="md:hidden text-dark-brown"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-cream/95 backdrop-blur-lg pt-24 px-6 md:hidden flex flex-col space-y-8 text-center text-xl font-serif"
          >
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-champagne">About</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-champagne">Services</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="hover:text-champagne">Gallery</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-champagne">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}wedding-decorations.jpg`}
            alt="Luxury Wedding Setup" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-brown/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent"></div>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-center px-4 max-w-4xl pt-20"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-white mb-6 leading-tight text-balance font-light"
          >
            Creating Unforgettable<br/>Moments
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-sm md:text-md text-white/90 font-light mb-10 max-w-2xl mx-auto leading-relaxed italic"
          >
            Luxury cakes, weddings, romantic dinners, birthdays & event decoration in and outside Africa.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 bg-white text-dark-brown uppercase tracking-[0.2em] text-[11px] font-bold rounded-full hover:bg-champagne hover:text-white transition-all duration-300">
              Book Your Event
            </a>
            <a href="#gallery" className="w-full sm:w-auto px-8 py-3.5 border border-white/30 text-white uppercase tracking-[0.2em] text-[11px] font-bold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
              Explore Gallery
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="md:w-1/2"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <div className="absolute inset-0 bg-champagne rounded-t-full translate-x-4 translate-y-4 opacity-20"></div>
              <img 
                src={`${import.meta.env.BASE_URL}tricia.jpeg`}
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1531123897727-8f129e1bfa82?ixlib=rb-4.0.3&auto=format&fit=crop&q=80";
                }}
                alt="Tricia Palz" 
                className="relative z-10 w-full h-full object-cover rounded-t-full rounded-b-[40px] shadow-2xl"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="md:w-1/2"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-champagne">About The Founder</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif italic text-dark-brown mb-6">
              Meet Tricia
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-sm text-warm-brown/70 mb-6 leading-relaxed italic">
              As a young, ambitious female entrepreneur from Uganda, I've always believed that life's most precious moments deserve to be celebrated beautifully.  <span className="font-medium text-dark-brown"> Pal Cakes & Events </span> was born out of a deep passion for crafting memorable experiences and exquisite luxury designs.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-sm text-warm-brown/70 mb-8 leading-relaxed italic">
              From intimate <span className="font-medium text-dark-brown">romantic dinners</span> and <span className="font-medium text-dark-brown">bridal setups</span> to grand <span className="font-medium text-dark-brown">weddings</span> and stunning <span className="font-medium text-dark-brown">luxury cakes</span>, we pour our hearts into every detail to transform your vision into a breathtaking reality, right here in Kampala.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <img src={`${import.meta.env.BASE_URL}tricia-signature.png`} alt="Tricia Signature" className="h-16 opacity-40 mix-blend-multiply" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-beige/30 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-champagne text-[10px] uppercase tracking-[0.2em] font-bold mb-2 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-dark-brown">Bespoke Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Wedding Decoration", icon: Heart, img: `${import.meta.env.BASE_URL}wedding-decorations.jpg` },
              { title: "Luxury Cakes", icon: Cake, img: `${import.meta.env.BASE_URL}luxury-cakes.jpg` },
              { title: "Romantic Dinners", icon: GlassWater, img: `${import.meta.env.BASE_URL}romantic-dinners.jpg` },
              { title: "Birthday Setups", icon: Gift, img: `${import.meta.env.BASE_URL}birthday-setups.jpg` },
              { title: "Bridal Showers", icon: Camera, img: `${import.meta.env.BASE_URL}bridal-showers.jpg` },
              { title: "Event Styling", icon: MapPin, img: `${import.meta.env.BASE_URL}romantic-dinners.jpg` },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-[40px] border border-champagne/10 aspect-[4/5] cursor-pointer"
              >
                <div className="absolute inset-0 bg-dark-brown/20 group-hover:bg-dark-brown/40 transition-colors duration-500 z-10"></div>
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                  <div className="w-12 h-12 rounded-full bg-cream/90 backdrop-blur-sm flex items-center justify-center mb-4 text-warm-brown group-hover:bg-champagne group-hover:text-white transition-colors duration-300">
                    <service.icon size={20} />
                  </div>
                  <h3 className="text-2xl font-serif italic text-white mb-2">{service.title}</h3>
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white/80 text-[11px] uppercase tracking-widest mt-2">Explore Experience →</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 bg-dark-brown text-cream overflow-hidden relative rounded-[40px] mx-4 md:mx-6 my-12">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-champagne/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif italic mb-6 text-balance text-champagne">
              The Pal Cakes & Events<br />Difference
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-sm italic text-cream/70 mb-12">
              We don't just plan events; we curate emotions. Our dedication to perfection ensures that every detail mirrors your unique style.
            </motion.p>
            
            <div className="space-y-6">
              {[
                "Attention to Detail & Perfection",
                "Personalized Luxury Experiences",
                "Elegant & Modern Design Aesthetics",
                "Reliable Execution in Kampala",
                "Passion-Driven Creativity"
              ].map((text, i) => (
                <motion.div variants={fadeInUp} key={i} className="flex items-center gap-4">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-champagne/20 flex items-center justify-center text-champagne">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-sm italic text-cream/90">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 mt-12">
              <img src={`${import.meta.env.BASE_URL}birthday-setups.jpg`} alt="Detail 1" className="w-full h-48 object-cover rounded-[40px]" />
              <div className="bg-champagne p-6 rounded-[40px] text-center flex flex-col justify-center h-48 text-white">
                <div className="text-5xl font-serif italic mb-2">5+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-90">Years Experience</div>
              </div>
            </div>
            <div className="space-y-4">
               <div className="bg-cream p-6 rounded-[40px] text-center text-dark-brown flex flex-col justify-center h-48">
                <div className="text-5xl font-serif italic mb-2">100K+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-90">Happy Clients</div>
              </div>
              <img src={`${import.meta.env.BASE_URL}luxury-cakes.jpg`} alt="Detail 2" className="w-full h-48 object-cover rounded-[40px]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* GALLERY SECTION (Pinterest Style) */}
      <section id="gallery" className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-champagne text-[10px] uppercase tracking-[0.2em] font-bold mb-2 block">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-serif italic text-dark-brown">Our Gallery</h2>
            </div>
            <button className="flex items-center gap-2 text-dark-brown hover:text-champagne transition-colors group pb-2">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">View Instagram</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              `${import.meta.env.BASE_URL}wedding-decorations.jpg`,
              `${import.meta.env.BASE_URL}luxury-cakes.jpg`,
              `${import.meta.env.BASE_URL}romantic-dinners.jpg`,
              `${import.meta.env.BASE_URL}gallery.jpg`,
              `${import.meta.env.BASE_URL}birthday-setups.jpg`,
              `${import.meta.env.BASE_URL}wedding-decorations.jpg`,
            ].map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="relative group overflow-hidden rounded-3xl break-inside-avoid"
              >
                <div className="absolute inset-0 bg-dark-brown/0 group-hover:bg-dark-brown/20 transition-colors duration-300 z-10"></div>
                <img src={src} alt="Gallery item" className="w-full h-auto object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-blush relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif italic text-dark-brown">Client Love</h2>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory no-scrollbar">
            {[
              { text: "She transformed our wedding into a dream. Every detail was exactly what we envisioned and more.", author: "Sarah & Mark" },
              { text: "The romantic dinner setup was magical. It was the perfect surprise for our anniversary. Highly recommended in Kampala!", author: "David M." },
              { text: "Best cakes and decor services in Kampala. Tricia is so responsive and genuinely cares about her clients.", author: "Grace K." },
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="shrink-0 w-full md:w-[400px] snap-center bg-white p-10 rounded-[40px] border border-champagne/20 shadow-sm"
              >
                <div className="flex gap-1 text-champagne mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <Quote size={32} className="text-champagne/20 mb-4" />
                <p className="text-sm font-serif italic text-warm-brown/90 mb-6 font-light">"{testimonial.text}"</p>
                <div className="font-bold text-[10px] tracking-[0.2em] uppercase">{testimonial.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / BOOKING */}
      <section id="contact" className="py-24 px-6 bg-light-beige/30">
        <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-sm overflow-hidden border border-champagne/20">
          <div className="grid grid-cols-1 md:grid-cols-5 relative">
            <div className="md:col-span-2 bg-cream text-dark-brown p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-champagne/20">
              <div>
                <h3 className="text-3xl font-serif italic mb-4">Let's Talk</h3>
                <p className="text-dark-brown/70 text-sm mb-12 italic">Ready to plan your luxury experience? Reach out to us to start designing your perfect event.</p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-champagne mt-0.5" size={16} />
                    <div>
                      <div className="uppercase tracking-[0.2em] text-[9px] font-bold mb-1 opacity-70">Location</div>
                      <div className="text-xs">Kampala, Uganda</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-champagne mt-0.5" size={16} />
                    <div>
                      <div className="uppercase tracking-[0.2em] text-[9px] font-bold mb-1 opacity-70">Phone / WhatsApp</div>
                      <div className="text-xs">+256 793 23682</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-champagne/20">
                <div className="uppercase tracking-[0.2em] text-[10px] font-bold mb-4 opacity-70">Follow Us</div>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/tricia.palz?igsh=MXJpMDczY2RoaTg2cA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-champagne/30 flex items-center justify-center hover:bg-champagne hover:text-white transition-colors text-champagne">
                    <Instagram size={14} />
                  </a>
                  <a href="https://vm.tiktok.com/ZS9F7LVSG9haw-QlEYK/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-champagne/30 flex items-center justify-center text-[10px] font-bold hover:bg-champagne hover:text-white transition-colors text-champagne">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current">
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 p-12 bg-white">
              <h3 className="text-2xl font-serif italic mb-8 text-dark-brown">Book Your Date</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[9px] uppercase tracking-[0.2em] font-bold text-warm-brown/70 mb-2">Name</label>
                    <input type="text" className="w-full border-b border-warm-brown/10 py-2 focus:outline-none focus:border-champagne bg-transparent transition-colors text-xs" placeholder="Alex Morgan" />
                  </div>
                  <div>
                    <label className="block text-[9px] uppercase tracking-[0.2em] font-bold text-warm-brown/70 mb-2">Phone Number</label>
                    <input type="tel" className="w-full border-b border-warm-brown/10 py-2 focus:outline-none focus:border-champagne bg-transparent transition-colors text-xs" placeholder="+256..." />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[9px] uppercase tracking-[0.2em] font-bold text-warm-brown/70 mb-2">Event Type</label>
                    <select className="w-full border-b border-warm-brown/10 py-2 focus:outline-none focus:border-champagne bg-transparent transition-colors text-warm-brown text-xs">
                      <option>Wedding</option>
                      <option>Romantic Dinner</option>
                      <option>Birthday Setup</option>
                      <option>Luxury Cake</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[9px] uppercase tracking-[0.2em] font-bold text-warm-brown/70 mb-2">Date</label>
                    <div className="relative">
                      <input type="date" className="w-full border-b border-warm-brown/10 py-2 focus:outline-none focus:border-champagne bg-transparent transition-colors text-warm-brown text-xs" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-[9px] uppercase tracking-[0.2em] font-bold text-warm-brown/70 mb-2">Message</label>
                  <textarea rows={4} className="w-full border border-warm-brown/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-champagne bg-cream/50 transition-colors resize-none text-xs italic mt-2" placeholder="Tell us about your dream event..."></textarea>
                </div>
                <button type="button" className="w-full py-4 bg-champagne text-white uppercase tracking-[0.2em] text-[11px] font-bold rounded-full hover:bg-dark-brown transition-colors mt-6 shadow-lg shadow-champagne/20">
                  Send Booking Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-cream text-dark-brown/60 pt-16 pb-8 px-6 text-center border-t border-champagne/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-3xl font-serif italic mb-8 text-champagne">Pal Cakes <span className="font-sans text-dark-brown/40 scale-75 inline-block mx-1">&</span> Events</div>
          <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold mb-12 text-dark-brown">
            <a href="#about" className="hover:text-champagne transition-colors">About</a>
            <a href="#services" className="hover:text-champagne transition-colors">Services</a>
            <a href="#gallery" className="hover:text-champagne transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-champagne transition-colors">Contact</a>
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] opacity-80 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-champagne/10 pt-8">
            <span>&copy; {new Date().getFullYear()} Pal Cakes & Events</span>
            <div className="flex gap-4">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
            <span>Kampala, Uganda</span>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a 
        href="https://wa.me/25679323682"
        target="_blank"
        rel="noopener noreferrer" 
        className="fixed outline-none bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform hover:shadow-champagne/20"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current">
          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.065-.301-.15-1.265-.462-2.406-1.482-.888-.791-1.486-1.768-1.66-2.064-.173-.296-.018-.458.13-.606.134-.133.301-.347.451-.52.149-.174.199-.298.298-.497.102-.198.05-.371-.025-.52-.075-.149-.672-1.62-.922-2.206-.24-.584-.487-.504-.674-.513-.172-.008-.371-.01-.571-.01-.198 0-.52.074-.792.372-.271.295-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.195 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.721 2.016-1.426.248-.703.248-1.306.174-1.426-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.08 1.996C5.505 1.996.155 7.34.153 13.914c0 2.098.547 4.142 1.588 5.945L.057 24l4.305-1.128a11.856 11.856 0 005.713 1.48h.005c6.574 0 11.925-5.344 11.928-11.918a11.821 11.821 0 00-3.483-8.431"/>
        </svg>
      </a>
    </div>
  );
}