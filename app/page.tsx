import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FeaturesGrid } from '@/components/FeaturesGrid'
import { PricingSection } from '@/components/PricingSection'
import { ScreenshotCarousel } from '@/components/ScreenshotCarousel'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const carouselImages = [
  '/screens/chaos-to-order-final.png',
  '/screens/screenshot-workflows.png',
  '/screens/screenshot-compliance.png',
]

const stats = [
  { value: '92%', label: 'Obligation coverage', description: 'captured automatically' },
  { value: '14 days', label: 'Renewal cycle time', description: 'faster on average' },
  { value: '97%', label: 'Document compliance', description: 'audit-ready status' },
]

const workflowHighlights = [
  'Configurable workflows for procurement, grants, and vendor onboarding.',
  'Role-based views keep legal, finance, and program teams aligned.',
  'AI summaries call out blockers, next steps, and missing paperwork.',
]

const trustedTeams = ['City of Evergreen', 'CommunityBridge', 'ImpactNorth', 'CivicWorks']

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-x-0 top-0 -z-10 h-[680px] bg-gradient-to-b from-emerald-500/15 via-transparent to-transparent blur-3xl" />
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo-app-check.svg" alt="ContractPlan logo" width={36} height={36} />
            <span className="text-lg font-semibold tracking-tight text-white">ContractPlan</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
            <Link href="#features" className="hover:text-white">
              Features
            </Link>
            <Link href="#demo" className="hover:text-white">
              Product tour
            </Link>
            <Link href="#pricing" className="hover:text-white">
              Pricing
            </Link>
            <Link href="/integrations" className="hover:text-white">
              Integrations
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild className="hidden text-slate-200 hover:text-white md:inline-flex">
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button asChild variant="emerald" size="sm" className="shadow-lg shadow-emerald-500/30">
              <Link href="/app">Launch app</Link>
            </Button>
          </div>
        </header>

        <section className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-24 pt-10 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="space-y-8">
            <Badge className="bg-white/10 text-white">General availability</Badge>
            <div className="space-y-6 text-white">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Stay ahead of every contract, renewal, and compliance deadline.
              </h1>
              <p className="max-w-xl text-lg text-slate-200">
                ContractPlan gives public sector and impact teams a shared workspace to manage agreements, collaborate on
                workflows, and respond to change with confidence.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" variant="emerald" className="shadow-lg shadow-emerald-500/30">
                <Link href="/app">Explore the platform</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/0 text-white hover:bg-white/10"
              >
                <Link href="#demo">Watch the workflow</Link>
              </Button>
            </div>
            <p className="text-sm text-slate-300">No credit card required — get started in under 5 minutes.</p>
            <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="text-sm font-medium text-slate-200">{stat.label}</p>
                  <p className="text-xs uppercase tracking-wide text-slate-400">{stat.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-wide text-slate-400">
              <span>Trusted by teams like</span>
              {trustedTeams.map((team) => (
                <span key={team} className="rounded-full border border-white/20 px-3 py-1 text-slate-200">
                  {team}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[40px] bg-emerald-500/10 blur-3xl" aria-hidden="true" />
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-emerald-500/20 backdrop-blur">
              <Image
                src="/media/dashboard-screenshot.png"
                alt="ContractPlan dashboard preview"
                width={980}
                height={720}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </section>
      </div>

      <section id="features" className="bg-white py-20 text-slate-900">
        <div className="mx-auto max-w-6xl space-y-8 px-6 text-center">
          <div className="space-y-4">
            <Badge variant="secondary" className="text-midnight">
              Built for public sector and impact teams
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything you need to run contracts with clarity
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              Bring contracts, workflows, and documents into a single operating system with AI guidance, clear ownership, and
              detailed histories.
            </p>
          </div>
          <FeaturesGrid />
        </div>
      </section>

      <section id="demo" className="bg-gradient-to-b from-white to-slate-100 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <ScreenshotCarousel images={carouselImages} />
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900">Workflows, dashboards, and guardrails included</h3>
            <p className="text-base text-slate-600">
              Standardize intake, reviews, and renewals with drag-and-drop workflows while ContractPlan keeps every stakeholder on
              track.
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              {workflowHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-slate-300 bg-white p-5">
              <p className="text-sm font-medium text-slate-900">
                “ContractPlan turned renewal chaos into a predictable playbook for our grants team.”
              </p>
              <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">Operations Director, City of Evergreen</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white py-20 text-slate-900">
        <div className="mx-auto max-w-6xl space-y-10 px-6 text-center">
          <div className="space-y-4">
            <Badge variant="secondary" className="text-midnight">
              Flexible tiers
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Plans that scale from pilot to full deployment
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              Start free, then unlock AI insights, advanced permissions, and integrations as your team grows.
            </p>
          </div>
          <PricingSection />
        </div>
      </section>

      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-4xl space-y-6 px-6 text-center text-white">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to deliver confident contracts?
          </h2>
          <p className="text-base text-slate-200">
            Join organizations that automate renewals, collaborate securely, and prove compliance without chasing spreadsheets.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="emerald" className="shadow-lg shadow-emerald-500/30">
              <Link href="/app">Launch ContractPlan</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/0 text-white hover:bg-white/10"
            >
              <Link href="/contact">Talk to our team</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} ContractPlan Inc. ·{' '}
        <Link href="/privacy" className="hover:text-white">
          Privacy
        </Link>{' '}
        ·{' '}
        <Link href="/terms" className="hover:text-white">
          Terms
        </Link>
      </footer>
    </main>
  )
}
