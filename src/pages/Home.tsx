import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { Container, SectionTitle } from '../components/SectionTitle';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { FeatureCard } from '../components/FeatureCard';
import type { FeatureItem } from '../components/FeatureCard';
import { PricingCard } from '../components/PricingCard';
import type { PricingPlan } from '../components/PricingCard';
import { useNavigate, Link } from 'react-router-dom';
import {
  Cpu, FileSpreadsheet, Calculator, Hammer,
  ArrowRight, Quote, Sparkles, Building2, User2, ClipboardCheck
} from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  // Selected features for preview (first 4 features)
  const homeFeatures: FeatureItem[] = [
    {
      id: 'boq',
      title: 'AI BOQ Analysis',
      description: 'Upload any Bill of Quantities PDF or Excel. Our advanced language models read, extract, and categorize thousands of rows in under a minute.',
      icon: <Cpu className="h-6 w-6" />
    },
    {
      id: 'quote',
      title: 'Professional Quote Generator',
      description: 'Generate beautiful, customer-facing quotations tailored with your business logo, custom margins, structured layouts, and item breakdowns.',
      icon: <FileSpreadsheet className="h-6 w-6" />
    },
    {
      id: 'materials',
      title: 'Material Cost Calculator',
      description: 'Stay accurate with active regional price checks. Instantly estimate and adjust concrete, steel, wood, and other critical bulk materials.',
      icon: <Calculator className="h-6 w-6" />
    },
    {
      id: 'labour',
      title: 'Labour Cost Estimator',
      description: 'Define roles, shift times, hourly wage parameters, and local contractor margins to structure highly accurate labour projections.',
      icon: <Hammer className="h-6 w-6" />
    }
  ];

  // Preview plan
  const featuredPlan: PricingPlan = {
    name: 'Professional',
    priceMonthly: 89,
    priceYearly: 850,
    description: 'Perfect for growing contractors, sub-contractors, and active builders.',
    features: [
      'Unlimited AI BOQ Uploads',
      'Advanced Professional Quote Customization',
      'Material & Labour database sync',
      'Multi-currency & PDF Export features',
      'Team collaboration up to 5 members',
      'Standard customer database database',
      'Priority Email Support response (under 2 hours)',
    ],
    isPopular: true,
    buttonText: 'Start Free Trial',
  };

  const testimonials = [
    {
      quote: "BuilderQuoteAI has completely transformed how our estimating department functions. We can process standard bills of quantities 10x faster and win far more bids.",
      author: "Marcus Vance",
      role: "Managing Director",
      company: "Apex Construction Group",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
    },
    {
      quote: "The accuracy of the material cost estimations is superb. Combined with the easy PDF export, it saves me roughly 15 hours on every project quote.",
      author: "Sarah Jenkins",
      role: "Senior Estimator",
      company: "Jenkins & Sons Contractors",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120"
    }
  ];

  return (
    <div className="bg-bgDark">
      {/* Hero Header Section */}
      <HeroSection />

      {/* Trust & Proof Stats Grid Section */}
      <section className="py-12 border-y border-borderDark/40 bg-cardDark/30">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <span className="block text-3xl md:text-4xl font-extrabold text-primary font-mono glow-text-primary">$1.2B+</span>
              <span className="text-xs font-semibold text-textSecondary uppercase tracking-wider mt-1 block">Bids Generated</span>
            </div>
            <div className="p-4">
              <span className="block text-3xl md:text-4xl font-extrabold text-accent font-mono glow-text-accent">90%</span>
              <span className="text-xs font-semibold text-textSecondary uppercase tracking-wider mt-1 block">Time Saved Estimating</span>
            </div>
            <div className="p-4">
              <span className="block text-3xl md:text-4xl font-extrabold text-white font-mono">15,000+</span>
              <span className="text-xs font-semibold text-textSecondary uppercase tracking-wider mt-1 block">BOQs Processed</span>
            </div>
            <div className="p-4">
              <span className="block text-3xl md:text-4xl font-extrabold text-emerald-500 font-mono">99.2%</span>
              <span className="text-xs font-semibold text-textSecondary uppercase tracking-wider mt-1 block">Estimate Accuracy</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Capabilities Preview Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <Container>
          <SectionTitle
            badge="Advanced Features"
            title="Smarter Estimating Workflow"
            subtitle="Explore how BuilderQuoteAI accelerates every phase of your construction proposal process."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {homeFeatures.map((feat, index) => (
              <FeatureCard key={feat.id} feature={feat} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              icon={<ArrowRight className="h-4 w-4" />}
              onClick={() => navigate('/features')}
            >
              See All 10 Premium Features
            </Button>
          </div>
        </Container>
      </section>

      {/* The AI BOQ Magic Live Visual Simulation */}
      <section className="py-20 bg-cardDark/20 border-y border-borderDark/40 relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left items-start flex flex-col">
              <span className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider text-accent bg-accent/10 border border-accent/20 mb-4 inline-block uppercase">
                The AI Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6 leading-tight">
                From Raw Document to Finished Quote in Three Steps
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">Drag & Drop Documents</h4>
                    <p className="text-sm text-textSecondary">Upload any Excel worksheet, architectural checklist, or PDF bill of quantities securely.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 border border-accent/30 text-accent flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">AI Classification & Cost Lookup</h4>
                    <p className="text-sm text-textSecondary">BuilderQuoteAI cross-references thousands of regional material suppliers, current labour indexes, and logistical weights.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">Instantly Customize & Export</h4>
                    <p className="text-sm text-textSecondary">Review automatic totals, add custom markup rates, and export customized PDF proposals ready for client approval.</p>
                  </div>
                </div>
              </div>

              <Button
                variant="primary"
                size="md"
                className="mt-8"
                onClick={() => navigate('/register')}
              >
                Sign Up & Try For Free
              </Button>
            </div>

            {/* Interactive Visual Dashboard Demo View */}
            <div className="relative">
              <Card glass hoverable={false} className="p-6 text-left relative overflow-hidden border-primary/30 shadow-lg shadow-primary/5">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-borderDark/40">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">AI Estimator Engine</h3>
                      <p className="text-[10px] text-textSecondary">Model status: Ready</p>
                    </div>
                  </div>
                  <div className="text-xs font-semibold px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Step visual */}
                  <div className="p-3 bg-bgDark rounded-lg border border-borderDark/60 flex items-center gap-3">
                    <ClipboardCheck className="h-5 w-5 text-accent flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold text-white">Concrete Foundation Pouring</span>
                        <span className="text-[10px] text-textSecondary">QTY: 120 m³</span>
                      </div>
                      <div className="w-full bg-borderDark/80 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-accent to-primary h-full w-[85%]" />
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-bgDark rounded-lg border border-borderDark/60 flex items-center gap-3">
                    <Building2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold text-white">Cavity Structural Blockwork</span>
                        <span className="text-[10px] text-textSecondary">QTY: 480 m²</span>
                      </div>
                      <div className="w-full bg-borderDark/80 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-accent to-primary h-full w-[94%]" />
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-bgDark rounded-lg border border-borderDark/60 flex items-center gap-3">
                    <User2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold text-white">Roof Carpenter Framing Labour</span>
                        <span className="text-[10px] text-textSecondary">QTY: 180 Hrs</span>
                      </div>
                      <div className="w-full bg-borderDark/80 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-accent to-primary h-full w-[70%]" />
                      </div>
                    </div>
                  </div>

                  {/* Profit Margin slider mockup */}
                  <div className="pt-4 border-t border-borderDark/40">
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-textSecondary">Adjust Contractor Margin:</span>
                      <span className="text-accent">15% Margin Added</span>
                    </div>
                    <div className="relative w-full h-1 bg-borderDark rounded-full">
                      <div className="absolute top-0 left-0 bg-accent h-full w-[60%] rounded-full" />
                      <div className="absolute top-1/2 left-[60%] -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-accent rounded-full shadow-md" />
                    </div>
                  </div>

                  {/* Summary output block */}
                  <div className="p-4 bg-primary/5 rounded-xl border border-primary/20 flex justify-between items-center">
                    <div>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider block">Calculated Total Proposal</span>
                      <span className="text-xl font-bold font-mono text-white glow-text-primary">$89,450.00</span>
                    </div>
                    <Button variant="primary" size="sm" className="shadow-none">
                      Export Proposal
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-20 md:py-28 relative">
        <Container>
          <SectionTitle
            badge="Customer Testimonials"
            title="Trusted by Modern Builders"
            subtitle="Read why estimators, general contractors, and construction managers love our AI platform."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((t, idx) => (
              <Card key={idx} glass className="p-8 text-left flex flex-col justify-between h-full border-borderDark/50">
                <div>
                  <div className="mb-6 text-primary flex">
                    <Quote className="h-8 w-8 opacity-40 fill-primary" />
                  </div>
                  <p className="text-base sm:text-lg text-textSecondary italic leading-relaxed mb-8">
                    "{t.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t border-borderDark/30 pt-6">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/40 bg-cardDark"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.author}</h4>
                    <p className="text-xs text-textSecondary">{t.role} at <span className="text-accent">{t.company}</span></p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Pricing Section preview */}
      <section className="py-20 bg-cardDark/30 border-t border-borderDark/40">
        <Container>
          <SectionTitle
            badge="Pricing Highlight"
            title="Flexible Pricing for All Sizes"
            subtitle="Start scaling your bids with zero initial risk. Upgrade, downgrade, or cancel any time."
          />

          <div className="max-w-md mx-auto mb-12">
            <PricingCard
              plan={featuredPlan}
              isYearly={false}
              onSelect={() => navigate('/pricing')}
            />
          </div>

          <div className="text-center">
            <Link to="/pricing" className="text-sm font-semibold text-accent hover:text-accent-hover transition-colors flex items-center justify-center gap-1">
              Explore Starter & Enterprise plans <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Premium Call to Action Footer Panel */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-bgDark to-cardDark/40">
        <div className="absolute inset-0 bg-primary/5 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        <Container className="relative z-10 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Ready to Win More Bids with AI?
            </h2>
            <p className="text-base sm:text-lg text-textSecondary mb-8 max-w-2xl">
              Join hundreds of builders and contractors who produce professional estimation proposals in minutes. Try BuilderQuoteAI free today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="h-5 w-5" />}
                onClick={() => navigate('/register')}
              >
                Create Free Account
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
export default Home;
