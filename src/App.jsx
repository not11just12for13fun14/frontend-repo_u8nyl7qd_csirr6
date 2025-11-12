import { useState } from 'react'

function App() {
  const [openFaq, setOpenFaq] = useState(null)

  const steps = [
    {
      title: 'Check Eligibility',
      details:
        'Be at least 20 years old (varies by role), with relevant skills/experience. Many roles require high school or college diploma. Ensure your passport has 6+ months validity.',
      tip: 'Skilled roles (technicians, operators, caregivers) are in demand. Mandarin is a plus but not always required.'
    },
    {
      title: 'Prepare Core Documents',
      details:
        'Valid passport, PSA birth certificate, NBI clearance for abroad, diploma/Transcript, employment certificates, resume, 2x2 photos, and medical exam (as required).',
      tip: 'Keep both digital and printed copies. Use consistent names across all documents.'
    },
    {
      title: 'Find Legit Jobs',
      details:
        'Search via POEA/DMW-licensed agencies, direct employers, or Taiwan job boards. Avoid unlicensed recruiters and upfront placement fee scams.',
      tip: 'Verify agencies on the DMW website. Read offer letters carefully.'
    },
    {
      title: 'Secure Employer Sponsorship',
      details:
        'Your employer/agency initiates the work permit in Taiwan. You’ll submit required docs and complete interviews and medical checks as needed.',
      tip: 'Respond quickly to document requests to keep timelines smooth.'
    },
    {
      title: 'Work Permit & Visa',
      details:
        'Once the work permit is approved in Taiwan, apply for a resident visa via TECO (Taipei Economic and Cultural Office) in the Philippines.',
      tip: 'Check TECO’s latest checklist and fees before your appointment.'
    },
    {
      title: 'Pre-Departure Requirements',
      details:
        'Attend PDOS/OWWA seminars if required, finalize OEC through DMW, and confirm your employment contract details.',
      tip: 'Schedule PDOS early; slots can fill up quickly.'
    },
    {
      title: 'Fly to Taiwan',
      details:
        'Book your flight once documents are cleared. Keep all paperwork in your hand-carry for immigration checks.',
      tip: 'Arrive 3 hours early and keep employer contact details handy.'
    },
    {
      title: 'Arrival & ARC',
      details:
        'Complete health checks (if any) and register for your ARC (Alien Resident Certificate) with your employer’s guidance.',
      tip: 'ARC is essential for banking, mobile plans, and rentals.'
    }
  ]

  const faqs = [
    {
      q: 'How long does the process take?',
      a: 'Typically 6–12 weeks depending on employer timelines, document readiness, and appointment availability at TECO/DMW.'
    },
    {
      q: 'Do I need to speak Mandarin?',
      a: 'Basic phrases help, but many factories, caregivers, and tech teams accept English. Learning Mandarin will improve daily life and job options.'
    },
    {
      q: 'What fees should I expect?',
      a: 'Medical exam, document authentication, visa fees, and some government payments may apply. Verify any placement fees with your licensed agency and keep official receipts.'
    },
    {
      q: 'Can I change employers in Taiwan?',
      a: 'Rules depend on your contract and permit type. Coordinate with your employer and consult Taiwan labor regulations before making changes.'
    }
  ]

  const checklist = [
    'Passport (6+ months validity)',
    'PSA Birth Certificate',
    'NBI Clearance for abroad',
    'Diploma/Transcript & Certificates',
    'Updated Resume (English)',
    '2x2 ID Photos (white background)',
    'Medical Exam (if required by employer/agency)',
    'TECO Visa Application & Fees',
    'PDOS/OWWA seminar (if required)',
    'OEC via DMW',
    'Flight booking & travel insurance',
    'Employer contact & contract copies'
  ]

  const copyChecklist = async () => {
    try {
      const text = checklist.map((i, idx) => `${idx + 1}. ${i}`).join('\n')
      await navigator.clipboard.writeText(text)
      alert('Checklist copied to clipboard!')
    } catch (e) {
      alert('Could not copy. Please copy manually.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white text-slate-800">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-lg bg-sky-600"></span>
            <span className="font-bold text-lg">Taiwan Work Guide</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a href="#how" className="hover:text-slate-900">How it works</a>
            <a href="#checklist" className="hover:text-slate-900">Checklist</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
            <a href="/test" className="hover:text-slate-900">System Test</a>
          </nav>
          <a href="#start" className="px-3 py-2 rounded-md bg-sky-600 text-white text-sm font-medium hover:bg-sky-700">Start Guide</a>
        </div>
      </header>

      {/* Hero */}
      <section id="start" className="max-w-6xl mx-auto px-4 pt-12 pb-16 sm:pt-16 sm:pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
              Step-by-step guide to work in Taiwan — for Filipinos
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              A clean, simple path from the Philippines to a job in Taiwan. Follow each step, track your documents, and move with confidence.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#how" className="px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700">See the steps</a>
              <a href="#checklist" className="px-4 py-2 rounded-md border border-slate-300 text-slate-700 hover:bg-white">
                View checklist
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
              <span className="inline-block h-6 w-6 rounded-full bg-green-500/20 border border-green-500" />
              Updated for current agency and TECO workflows. Always verify latest requirements.
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-tr from-sky-100 to-indigo-100 border border-slate-200 shadow-inner" />
            <div className="absolute -bottom-4 -right-4 hidden sm:block rounded-lg bg-white border border-slate-200 shadow p-4">
              <p className="text-sm font-medium">Quick summary</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc pl-5">
                <li>Verify eligibility</li>
                <li>Prepare documents</li>
                <li>Employer sponsors work permit</li>
                <li>Apply visa at TECO</li>
                <li>Attend PDOS/OEC, then fly</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="how" className="bg-white py-12 sm:py-16 border-t border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">How it works</h2>
          <p className="mt-2 text-slate-600">Follow these stages from application to arrival.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                    <p className="mt-1 text-slate-600 text-sm">{s.details}</p>
                    <div className="mt-3 text-xs text-sky-800 bg-sky-50 border border-sky-200 inline-block px-2 py-1 rounded">
                      Tip: {s.tip}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#checklist" className="px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700">Open checklist</a>
            <a href="#faq" className="px-4 py-2 rounded-md border border-slate-300 text-slate-700 hover:bg-white">Read FAQs</a>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section id="checklist" className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Essential checklist</h2>
              <p className="mt-2 text-slate-600">Track what you need for applications, visa, and departure.</p>
            </div>
            <div className="flex gap-3">
              <button onClick={copyChecklist} className="px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700">Copy list</button>
              <a href="#start" className="px-4 py-2 rounded-md border border-slate-300 text-slate-700 hover:bg-white">Back to top</a>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {checklist.map((item, idx) => (
              <label key={idx} className="flex items-start gap-3 p-4 rounded-lg border border-slate-200 bg-white hover:shadow-sm cursor-pointer">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500" />
                <span className="text-slate-700 text-sm">{item}</span>
              </label>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-sm">
            Reminder: Requirements can change. Always confirm with TECO, DMW/POEA, and your licensed agency before appointments.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white border-t border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Frequently asked questions</h2>
          <div className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200 overflow-hidden">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left px-5 py-4 hover:bg-slate-50"
                >
                  <span className="font-medium text-slate-900">{f.q}</span>
                  <span className="text-slate-500 text-xl">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-slate-600 text-sm">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4">
        <div className="max-w-6xl mx-auto py-10 text-sm text-slate-600">
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <p>
              This guide is for information only and not legal advice. Always follow official guidance from TECO, DMW/POEA, and Taiwan labor authorities.
            </p>
            <div className="flex gap-4">
              <a href="#start" className="px-3 py-2 rounded-md bg-slate-900 text-white hover:bg-black">Get started</a>
              <a href="#how" className="px-3 py-2 rounded-md border border-slate-300">Review steps</a>
            </div>
          </div>
          <div className="mt-6 text-xs text-slate-400">© {new Date().getFullYear()} Taiwan Work Guide. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
