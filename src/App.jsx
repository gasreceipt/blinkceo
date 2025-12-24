import BlinkCard from './components/BlinkCard';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        <div className="max-w-4xl w-full flex flex-col items-center z-10">
          <h1 className="text-[15vw] leading-none font-black tracking-[-0.06em] mb-8 select-none">BLINK</h1>
          <p className="text-xl md:text-3xl font-medium max-w-2xl leading-relaxed text-gray-300">
            An event system.<br />
            <span className="text-gray-600">Not a community. Not a conference. Not a product.</span>
          </p>
          <div className="mt-12 text-sm uppercase tracking-widest text-gray-500 font-bold animate-pulse">
            Scroll to Enter
          </div>
        </div>

        {/* Abstract bg element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

      {/* The Blink Card Section */}
      <section className="py-32 px-6 flex flex-col items-center bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-md w-full text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-gray-400 mb-4 uppercase">The Social Contract</h2>
          <p className="text-2xl font-bold leading-tight">
            Every event issues a card.<br />
            It is not a membership. It is a temporary authority.
          </p>
        </div>

        <BlinkCard />

        <div className="mt-16 text-center max-w-lg text-gray-500 text-sm">
          <p>Tap card to flip.</p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-24 text-center md:text-left">EVENTS</h2>

          <div className="grid gap-px bg-zinc-900 border border-zinc-900">
            {[
              {
                title: "Blink Night",
                specs: "20–40 people",
                duration: "90 minutes",
                desc: "No speakers. Pure decision pressure."
              },
              {
                title: "Blink Table",
                specs: "6–8 people",
                duration: "One table",
                desc: "Action-only conversation. No pleasantries."
              },
              {
                title: "Blink Drop",
                specs: "Limited cards",
                duration: "Same day",
                desc: "Location announced hours prior. No refunds."
              }
            ].map((event, i) => (
              <div key={i} className="bg-black p-8 md:p-12 hover:bg-zinc-950 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                  <h3 className="text-3xl font-bold tracking-tight group-hover:text-white transition-colors">{event.title}</h3>
                  <div className="text-sm font-mono text-gray-500 mt-2 md:mt-0 space-x-4">
                    <span>{event.specs}</span>
                    <span>•</span>
                    <span>{event.duration}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-lg">{event.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <p className="text-2xl md:text-4xl font-bold leading-tight text-white">
              Every event ends the same way:<br />
              <span className="text-gray-500">You leave having made one irreversible decision.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Anti-Definition & Manifestos */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 md:gap-32">

          <div>
            <h2 className="text-sm font-bold tracking-[0.2em] mb-8 uppercase border-b border-black pb-4">What It Is Not</h2>
            <ul className="space-y-4 text-3xl md:text-4xl font-bold tracking-tight">
              <li className="text-gray-400 line-through decoration-2">Not a mastermind</li>
              <li className="text-gray-400 line-through decoration-2">Not a workshop</li>
              <li className="text-gray-400 line-through decoration-2">Not a productivity system</li>
              <li className="text-gray-400 line-through decoration-2">Not online-first</li>
              <li>Just action.</li>
            </ul>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] mb-8 uppercase border-b border-black pb-4">Business Model</h2>
              <ul className="space-y-2 text-lg font-medium">
                <li className="flex justify-between border-b border-gray-200 py-2">
                  <span>Paid tickets</span>
                  <span className="text-gray-400">Event access</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 py-2">
                  <span>Limited Cards</span>
                  <span className="text-gray-400">Physical artifacts</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 py-2">
                  <span>Private Tables</span>
                  <span className="text-gray-400">Teams/Companies</span>
                </li>
              </ul>
              <div className="mt-8 text-sm font-mono text-gray-500">
                NO SUBSCRIPTIONS. NO RECORDINGS.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / The Rule */}
      <section className="py-48 px-6 bg-black text-white text-center flex flex-col items-center justify-center min-h-[50vh]">
        <div className="max-w-2xl space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">THE RULE</h2>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              Blink never fully explains itself.<br />
              If you understand it immediately, it’s been done wrong.
            </p>
          </div>

          <div className="pt-24 opacity-50">
            <p className="text-sm font-mono uppercase tracking-widest">Blink happens. Then it's gone.</p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default App
