'use client';

import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const navItems = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'For caregivers', href: '#caregivers' },
  { label: 'For offices', href: '#offices' },
];

const steps = [
  {
    eyebrow: 'Before the visit',
    title: 'David prepares questions',
    body: 'David or his caregiver can organize questions before the appointment begins.',
  },
  {
    eyebrow: 'During the visit',
    title: 'David goes to his appointment',
    body: 'David selects the doctor and records the visit. The recording can be connected to the right doctor or office for clearer review later.',
  },
  {
    eyebrow: 'After the visit',
    title: 'David reviews structured visit notes',
    body: 'The conversation can be transcribed and summarized into notes, answers, and medication details.',
  },
  {
    eyebrow: 'Between visits',
    title: 'David tracks medications',
    body: 'David can set a structured medication schedule, including dosage and timing. The system provides reminders to help ensure medications are taken correctly and consistently.',
  },
  {
    eyebrow: 'Caregiver support',
    title: "David's caregiver reviews activity",
    body: 'His caregiver can access the system from their own device to review activity. They can see whether key actions, such as questions asked, notes recorded, and medications taken, have been completed through a simple checklist view.',
  },
];

const problemCards = [
  {
    eyebrow: 'Patient problem',
    title: 'Patients lose critical details after appointments.',
    body: (
      <>
        Patients often leave visits without retaining key instructions. Studies show that{' '}
        <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC539473/" target="_blank" rel="noreferrer">
          <u>40–80%</u>
        </a>{' '}
        of medical information provided by healthcare practitioners is forgotten immediately, and much of what is remembered is incorrect.
      </>
    ),
  },
  {
    eyebrow: 'Office problem',
    title: 'Offices spend time answering repeat questions.',
    body: (
      <>
        Medical offices already operate under time pressure. Follow-up calls about information covered in prior visits create unnecessary administrative burden and reduce time available for patient care.
      </>
    ),
  },
];

const benefits = [
  {
    title: 'Clearer preparation',
    body: 'Designed to help patients arrive with organized questions ready to discuss.',
  },
  {
    title: 'More consistent records',
    body: 'Can keep visit notes, answers, doctor details, and medication information in one place.',
  },
  {
    title: 'Clearer review after visits',
    body: 'May help patients and caregivers review what was discussed without relying only on memory.',
  },
  {
    title: 'Support between visits',
    body: 'Medication reminders can help keep follow-up tasks visible between appointments.',
  },
];

const officeReasons = [
  {
    title: 'Offer a practical patient support tool',
    body: 'Practices can provide a structured tool for patients who need help keeping visits organized.',
  },
  {
    title: 'Help families stay aligned',
    body: 'Adult children and caregivers can better understand appointment takeaways when patients choose to share access.',
  },
  {
    title: 'Create a differentiated service',
    body: 'Potential office benefits include a more organized patient experience without positioning the product as clinical decision support.',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-[#fbfdfc] text-[#16302b]">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <PainPoints />
        <Benefits />
        <CaregiverMode />
        <OfficeValue />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#d8e8e3] bg-[#fbfdfc]/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8"
        aria-label="Main navigation"
      >
        <a href="#top" className="flex items-center gap-3" aria-label="Praxis Medical Systems home">
          <img
            src="/praxis-logo.jpeg"
            alt=""
            className="h-9 w-9 rounded-md object-cover"
            aria-hidden="true"
          />
          <span className="text-lg font-semibold">Praxis Medical Systems</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#34524c] transition hover:text-[#0f766e]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-md bg-[#0f766e] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b5f59] focus:outline-none focus:ring-2 focus:ring-[#0f766e] focus:ring-offset-2"
        >
          Request a demo
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  const typedElement = useRef(null);

  useEffect(() => {
    if (!typedElement.current) {
      return undefined;
    }

    const typed = new Typed(typedElement.current, {
      strings: ['retain key visit information.', 'organize follow-up details.'],
      typeSpeed: 38,
      backSpeed: 22,
      backDelay: 1800,
      startDelay: 350,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="top" className="relative min-h-[68svh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=85"
        alt="Clinician and patient reviewing healthcare information together"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#16302b]/70" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[68svh] max-w-7xl items-center px-5 py-16 md:px-8">
        <div className="max-w-3xl text-white">
          <p className="mb-5 inline-flex rounded-md border border-white/25 bg-white/10 px-3 py-1.5 text-sm font-semibold">
            Patient visit organization for medical offices
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] md:text-6xl">
            Help patients and caregivers{' '}
            <span className="block min-h-[2.25em] text-[#9be2d7] md:min-h-[2.15em]">
              <span ref={typedElement} aria-hidden="true" />
              <span className="sr-only">
                retain key visit information and organize follow-up details.
              </span>
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#e7f4f1] md:text-xl">
            Praxis Medical Systems gives medical offices a structured way to help patients prepare questions, record visits, and review follow-up information.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-md bg-[#f26d5b] px-6 py-3 text-center text-base font-semibold text-white shadow-sm transition hover:bg-[#d95b4b] focus:outline-none focus:ring-2 focus:ring-[#f26d5b] focus:ring-offset-2 focus:ring-offset-[#16302b]"
            >
              Request a demo
            </a>
            <a
              href="#how-it-works"
              className="rounded-md border border-white/45 px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#16302b]"
            >
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const showStep = (direction) => {
    setActiveStep((currentStep) => (currentStep + direction + steps.length) % steps.length);
  };

  return (
    <Section
      id="how-it-works"
      eyebrow="How it works"
      title="A structured process from preparation to follow-up."
      intro="The best way to see how Praxis Medical Systems works is through a patient's perspective."
    >
      <div className="relative">
        <div className="relative min-h-[30rem] overflow-hidden md:min-h-[25rem]">
          {steps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} activeStep={activeStep} />
          ))}
        </div>

        <button
          type="button"
          onClick={() => showStep(-1)}
          className="absolute left-0 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-md border border-[#9bc8bd] bg-white text-xl font-semibold text-[#16302b] shadow-sm transition hover:bg-[#eef8f5] focus:outline-none focus:ring-2 focus:ring-[#0f766e] focus:ring-offset-2"
          aria-label="Show previous step"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          onClick={() => showStep(1)}
          className="absolute right-0 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-md border border-[#9bc8bd] bg-white text-xl font-semibold text-[#16302b] shadow-sm transition hover:bg-[#eef8f5] focus:outline-none focus:ring-2 focus:ring-[#0f766e] focus:ring-offset-2"
          aria-label="Show next step"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="mt-4 flex justify-center">
        <p className="min-w-24 text-center text-sm font-semibold text-[#48645e]" aria-live="polite">
          Step {activeStep + 1} of {steps.length}
        </p>
      </div>
    </Section>
  );
}

function StepCard({ step, index, activeStep }) {
  const position = getCarouselPosition(index, activeStep, steps.length);
  const isVisible = Math.abs(position) <= 1;
  const isActive = position === 0;

  return (
    <article
      className="absolute left-1/2 top-0 min-h-[27rem] w-[82%] rounded-lg border border-[#d8e8e3] bg-white p-6 shadow-soft transition-all duration-300 ease-out translate-x-[calc(-50%+var(--x-mobile))] scale-[var(--card-scale)] md:min-h-[22rem] md:w-[32%] md:translate-x-[calc(-50%+var(--x-desktop))]"
      style={{
        '--x-mobile': `${position * 85}%`,
        '--x-desktop': `${position * 112}%`,
        '--card-scale': isActive ? '1' : '0.94',
        opacity: isVisible ? (isActive ? 1 : 0.55) : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        zIndex: isActive ? 2 : 1,
      }}
      aria-hidden={!isVisible}
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-[#e8f6f3] text-base font-bold text-[#0f766e]">
        {index + 1}
      </div>
      <p className="text-sm font-semibold text-[#b3483d]">{step.eyebrow}</p>
      <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
      <p className="mt-3 leading-7 text-[#48645e]">{step.body}</p>
    </article>
  );
}

function getCarouselPosition(index, activeIndex, totalItems) {
  let position = (index - activeIndex + totalItems) % totalItems;

  if (position > totalItems / 2) {
    position -= totalItems;
  }

  return position;
}

function PainPoints() {
  return (
    <section className="bg-[#eef8f5] px-5 py-20 md:px-8" aria-labelledby="problem-title">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase text-[#0f766e]">The Problem</p>
          <h2 id="problem-title" className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
            Missed visit details create work for patients and practices.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#48645e]">
            Patients need clear information after appointments. Offices need fewer avoidable calls about instructions, notes, and next steps that were already discussed.
          </p>
        </div>

        <div className="mt-12 grid gap-10 border-t border-[#cfe4de] pt-10 md:grid-cols-2 md:gap-0 md:divide-x md:divide-[#cfe4de]">
          {problemCards.map((problem, index) => (
            <div key={problem.title} className={index === 0 ? 'md:pr-12' : 'md:pl-12'}>
              <p className="text-sm font-bold uppercase text-[#0f766e]">{problem.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">{problem.title}</h3>
              <p className="mt-4 leading-7 text-[#34524c]">{problem.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <Section
      id="benefits"
      eyebrow="Benefits"
      title="Designed for preparation, review, and follow-through."
      intro="The product does not replace clinical guidance. It is positioned as an organization layer that can help patients and families track information around each visit."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {benefits.map((benefit) => (
          <article key={benefit.title} className="rounded-lg border border-[#d8e8e3] bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold">{benefit.title}</h3>
            <p className="mt-3 leading-7 text-[#48645e]">{benefit.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function CaregiverMode() {
  return (
    <section id="caregivers" className="px-5 py-20 md:px-8" aria-labelledby="caregiver-title">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase text-[#0f766e]">Caregiver support</p>
          <h2 id="caregiver-title" className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
            Supervisor mode can help families review care details with permission.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#48645e]">
            With patient permission and appropriate account settings, a caregiver or adult child can review appointment summaries, follow-up items, and medication reminders.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <FeaturePill title="Shared review" body="Caregivers can review visit notes when access is granted." />
            <FeaturePill title="Reminder support" body="Medication reminders can make routine tasks easier to track." />
          </div>
        </div>

        <div className="rounded-lg border border-[#d8e8e3] bg-white p-6 shadow-soft">
          <div className="mb-6 flex items-center justify-between border-b border-[#d8e8e3] pb-4">
            <div>
              <p className="text-sm font-semibold text-[#0f766e]">Supervisor mode</p>
              <p className="mt-1 text-lg font-semibold">Family support view</p>
            </div>
            <span className="rounded-md bg-[#fff1ef] px-3 py-1 text-sm font-semibold text-[#b3483d]">
              Placeholder
            </span>
          </div>
          <div className="space-y-4">
            <MockRow label="Upcoming visit" value="Primary care, Thursday" />
            <MockRow label="Questions ready" value="4 prepared" />
            <MockRow label="Medication reminder" value="Evening dose visible" />
            <MockRow label="Follow-up notes" value="Summary available after visit" />
          </div>
        </div>
      </div>
    </section>
  );
}

function OfficeValue() {
  return (
    <section id="offices" className="bg-[#16302b] px-5 py-20 text-white md:px-8" aria-labelledby="office-title">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase text-[#7ed7c7]">Why offices would pay</p>
          <h2 id="office-title" className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
            A patient-facing subscription that supports the appointment experience.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#d7ebe6]">
            Praxis Medical Systems can be offered by practices as a value-added service for patients and families who need structured support around appointments and next steps.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {officeReasons.map((reason) => (
            <article key={reason.title} className="rounded-lg border border-white/15 bg-white/8 p-6">
              <h3 className="text-xl font-semibold">{reason.title}</h3>
              <p className="mt-3 leading-7 text-[#d7ebe6]">{reason.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="px-5 py-20 md:px-8" aria-labelledby="cta-title">
      <div className="mx-auto max-w-5xl border-y border-[#d8e8e3] py-14 text-center">
        <p className="text-sm font-bold uppercase text-[#0f766e]">Next step</p>
        <h2 id="cta-title" className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
          See whether Praxis Medical Systems fits your patient support strategy.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#48645e]">
          This first-pass page uses placeholder copy that can be refined with your product name, sales process, compliance language, and visual system.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="mailto:hello@example.com"
            className="rounded-md bg-[#0f766e] px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-[#0b5f59] focus:outline-none focus:ring-2 focus:ring-[#0f766e] focus:ring-offset-2"
            aria-label="Email the Praxis Medical Systems team to request a demo"
          >
            Request a demo
          </a>
          <a
            href="#benefits"
            className="rounded-md border border-[#9bc8bd] px-6 py-3 text-center text-base font-semibold text-[#16302b] transition hover:bg-[#eef8f5] focus:outline-none focus:ring-2 focus:ring-[#0f766e] focus:ring-offset-2"
          >
            Review patient benefits
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#d8e8e3] px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#48645e] md:flex-row md:items-center md:justify-between">
        <p>© 2026 Praxis Medical Systems. Placeholder landing page content.</p>
        <div className="flex flex-wrap gap-4">
          <a href="#how-it-works" className="hover:text-[#0f766e]">
            How it works
          </a>
          <a href="#caregivers" className="hover:text-[#0f766e]">
            Caregivers
          </a>
          <a href="#offices" className="hover:text-[#0f766e]">
            Offices
          </a>
        </div>
      </div>
    </footer>
  );
}

function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="px-5 py-20 md:px-8" aria-labelledby={`${id}-title`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase text-[#0f766e]">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
            {title}
          </h2>
          {intro ? <p className="mt-5 text-lg leading-8 text-[#48645e]">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function FeaturePill({ title, body }) {
  return (
    <div className="rounded-lg border border-[#d8e8e3] bg-[#fbfdfc] p-5">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 leading-7 text-[#48645e]">{body}</p>
    </div>
  );
}

function MockRow({ label, value }) {
  return (
    <div className="flex flex-col gap-1 rounded-md bg-[#eef8f5] p-4 sm:flex-row sm:items-center sm:justify-between">
      <span className="font-medium text-[#34524c]">{label}</span>
      <span className="text-[#0f766e]">{value}</span>
    </div>
  );
}

export default App;
