import BlinkCard from './components/BlinkCard';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

/**
 * Noise overlay component for film grain effect
 */
const Noise = () => (
  <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.035] mix-blend-overlay">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full filter contrast-[120%]">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.1]), { stiffness: 100, damping: 30 });
  const rotatex = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">
      <Noise />

      {/* Dynamic Background Elements */}
      <motion.div
        style={{ scale, rotateX: rotatex }}
        className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black pointer-events-none z-0"
      />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative z-10">
        <div className="max-w-7xl w-full flex flex-col items-center">
          {/* Abstract animated aesthetic element */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none"
          />

          <h1 className="text-[18vw] leading-[0.85] font-black tracking-[-0.08em] mb-12 select-none relative mix-blend-difference">
            <motion.span
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              BLINK
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-4xl font-medium max-w-3xl leading-snug text-zinc-400 space-y-2 mix-blend-difference"
          >
            <p>An event system.</p>
            <p className="text-zinc-600">Not a community. Not a conference. Not a product.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-24 text-xs font-mono uppercase tracking-[0.3em] text-zinc-700 font-bold"
          >
            Scroll to Enter
          </motion.div>
        </div>
      </section>

      {/* The Blink Card Section */}
      <section className="py-48 px-6 flex flex-col items-center relative z-10 border-t border-white/5">
        <div className="max-w-lg w-full text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.2em] text-zinc-500 mb-6 uppercase"
          >
            The Social Contract
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold leading-tight"
          >
            Every event issues a card.<br />
            <span className="text-zinc-500">It is not a membership. It is a temporary authority.</span>
          </motion.p>
        </div>

        <BlinkCard />
      </section>

      {/* Events Section - Interactive Grid */}
      <section className="py-48 px-4 md:px-12 bg-black relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-8xl md:text-[10rem] font-black tracking-tighter mb-32 text-white/10 select-none"
          >
            EVENTS
          </motion.h2>

          <div className="grid grid-cols-1 gap-px bg-zinc-900 border-t border-zinc-900">
            {[
              {
                title: "Blink Night",
                specs: "20–40 people / 90 min",
                desc: "No speakers. Pure decision pressure. High intensity social filtering."
              },
              {
                title: "Blink Table",
                specs: "6–8 people / 1 table",
                desc: "Action-only conversation. No pleasantries. Raw strategic discourse."
              },
              {
                title: "Blink Drop",
                specs: "Limited cards / Same day",
                desc: "Location announced 2 hours prior. No refunds. Immediate execution."
              }
            ].map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ margin: "-50px" }}
                className="bg-black py-20 border-b border-zinc-800 hover:bg-zinc-950 transition-colors group cursor-crosshair relative overflow-hidden"
              >
                <div className="relative z-10 px-4 md:px-8 flex flex-col md:flex-row md:items-baseline justify-between gap-8">
                  <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-800 group-hover:text-white transition-all duration-500">
                    {event.title}
                  </h3>
                  <div className="flex flex-col md:items-end space-y-2">
                    <span className="font-mono text-sm text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 transition-colors">{event.specs}</span>
                    <p className="text-zinc-500 max-w-md md:text-right group-hover:text-zinc-400 transition-colors">{event.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-48 text-center">
            <p className="text-4xl md:text-6xl font-bold leading-[1.1] text-white max-w-5xl mx-auto">
              You leave having made one <span className="text-zinc-600">irreversible decision.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Anti-Definition & Manifestos - Asymmetric Layout */}
      <section className="py-48 px-6 bg-zinc-50 text-black relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">

          <div className="md:col-span-5 md:col-start-2 sticky top-24 self-start">
            <h2 className="text-xs font-bold tracking-[0.2em] mb-12 uppercase border-b-2 border-black pb-6">What It Is Not</h2>
            <ul className="space-y-6 text-4xl md:text-6xl font-black tracking-tight leading-[0.9]">
              <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-zinc-300 line-through decoration-black/20 decoration-4">MASTERMIND</motion.li>
              <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-zinc-300 line-through decoration-black/20 decoration-4">WORKSHOP</motion.li>
              <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-zinc-300 line-through decoration-black/20 decoration-4">SYSTEM</motion.li>
              <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-black">ACTION.</motion.li>
            </ul>
          </div>

          <div className="md:col-span-4 md:col-start-8 mt-24 md:mt-0">
            <div className="space-y-24">
              <div>
                <h2 className="text-xs font-bold tracking-[0.2em] mb-8 uppercase border-b border-black/20 pb-4">Business Model</h2>
                <ul className="space-y-4 text-xl font-bold">
                  <li className="flex justify-between items-center group">
                    <span>Paid tickets</span>
                    <span className="w-2 h-2 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </li>
                  <li className="flex justify-between items-center group">
                    <span>Limited Cards</span>
                    <span className="w-2 h-2 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </li>
                  <li className="flex justify-between items-center group">
                    <span>Private Tables</span>
                    <span className="w-2 h-2 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xs font-bold tracking-[0.2em] mb-8 uppercase border-b border-black/20 pb-4">Restrictions</h2>
                <p className="text-4xl font-bold leading-none">NO SUBSCRIPTIONS.<br />NO RECORDINGS.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / The Rule */}
      <section className="py-64 px-6 bg-black text-white text-center flex flex-col items-center justify-center min-h-[80vh] relative z-10">
        <div className="max-w-4xl space-y-24">
          <div className="space-y-12">
            <h2 className="text-8xl md:text-[12rem] font-black tracking-tighter leading-none mix-blend-difference">THE RULE</h2>
            <p className="text-2xl md:text-4xl text-zinc-500 leading-relaxed max-w-2xl mx-auto">
              Blink never fully explains itself.<br />
              If you understand it immediately, it’s been done wrong.
            </p>
          </div>

          <div className="pt-32">
            <motion.p
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-xs font-mono uppercase tracking-[0.5em] text-white"
            >
              Blink happens. Then it's gone.
            </motion.p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default App
