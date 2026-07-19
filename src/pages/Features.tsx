import React from 'react';
import { Container, SectionTitle } from '../components/SectionTitle';
import { FeatureCard } from '../components/FeatureCard';
import type { FeatureItem } from '../components/FeatureCard';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import {
  Cpu, FileSpreadsheet, Calculator, Hammer,
  FolderGit2, Cloud, Database, FileText,
  Zap, ShieldAlert, ClipboardCheck, Sparkles
} from 'lucide-react';

export const Features: React.FC = () => {
  const navigate = useNavigate();

  const allFeatures: FeatureItem[] = [
    {
      id: 'boq',
      title: 'AI BOQ Analysis',
      description: 'Upload any Bill of Quantities PDF or Excel sheet. Our semantic engine immediately processes, tags, structures, and breaks down line-items automatically.',
      icon: <Cpu className="h-6 w-6" />
    },
    {
      id: 'quote',
      title: 'Professional Quote Generator',
      description: 'Quickly customize, branding-theme, and structure beautiful client-facing proposal documents. Alter item margins, add company logos, and write custom terms.',
      icon: <FileSpreadsheet className="h-6 w-6" />
    },
    {
      id: 'materials',
      title: 'Material Cost Calculator',
      description: 'Instant cost approximations utilizing regional construction materials databases. Instantly adjust parameters for concrete, lumber, copper, steel, and aggregates.',
      icon: <Calculator className="h-6 w-6" />
    },
    {
      id: 'labour',
      title: 'Labour Cost Estimator',
      description: 'Accurately structure shifts, crew sizes, individual hourly wages, overhead multipliers, and subcontracting overhead rates for precision planning.',
      icon: <Hammer className="h-6 w-6" />
    },
    {
      id: 'project-management',
      title: 'Project Management',
      description: 'Organize your active tenders and awarded projects inside an elegant unified dashboard. Track progress, assign team members, and check proposal deadlines.',
      icon: <FolderGit2 className="h-6 w-6" />
    },
    {
      id: 'cloud',
      title: 'Cloud Storage',
      description: 'Access your critical files, estimate historical archives, and custom template directories from any web-connected machine. Safe, lightning-fast, and central.',
      icon: <Cloud className="h-6 w-6" />
    },
    {
      id: 'database',
      title: 'Customer Database',
      description: 'Build your client directory with profiles, proposal history, outstanding estimates, and general company details. Streamline client relationships.',
      icon: <Database className="h-6 w-6" />
    },
    {
      id: 'pdf-export',
      title: 'PDF Export',
      description: 'Download print-ready, beautifully polished PDF proposals with a single click. Structured layouts that project absolute professionalism to your clients.',
      icon: <FileText className="h-6 w-6" />
    },
    {
      id: 'performance',
      title: 'Fast Performance',
      description: 'Engineered for rapid workflow efficiency. Zero annoying page refreshes, instant cost calculations, and background processing that keeps you moving fast.',
      icon: <Zap className="h-6 w-6" />
    },
    {
      id: 'secure-data',
      title: 'Secure Data',
      description: 'Enterprise-grade encryption for all database items, password policies, and multi-tenant isolation. Your proprietary pricing matrices stay completely confidential.',
      icon: <ShieldAlert className="h-6 w-6" />
    }
  ];

  return (
    <div className="bg-bgDark pt-24 min-h-screen">
      {/* Feature Header */}
      <section className="py-16 md:py-20 relative overflow-hidden border-b border-borderDark/40">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-primary bg-primary/10 border border-primary/20 mb-6 inline-block uppercase">
              Platform Features
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
              Powerful Tools for the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Modern Construction Business
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-textSecondary max-w-2xl mx-auto leading-relaxed">
              Automate manual estimating, standardize contractor markups, and output gorgeous professional PDF proposals 10x faster than traditional methods.
            </p>
          </div>
        </Container>
      </section>

      {/* Grid of 10 Features */}
      <section className="py-20 bg-cardDark/10">
        <Container>
          <SectionTitle
            alignment="center"
            title="Every Feature You Need to Scale"
            subtitle="Explore our fully integrated suit of estimation, analysis, and proposal tools designed specifically for the building trade."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allFeatures.map((feat, idx) => (
              <FeatureCard key={feat.id} feature={feat} index={idx} />
            ))}
          </div>
        </Container>
      </section>

      {/* AI Deep-Dive Simulation section */}
      <section className="py-20 border-t border-borderDark/40 bg-bgDark relative overflow-hidden">
        <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 text-left">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 rounded-full mb-4 inline-block">
                Behind the Technology
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                How Our AI Extracts Estimates with Unprecedented Accuracy
              </h2>
              <p className="text-sm sm:text-base text-textSecondary mb-6 leading-relaxed">
                Traditional optical character recognition (OCR) fails on complex, multi-page construction sheets. BuilderQuoteAI combines spatial layout analysis with large language model context vectors.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <span className="p-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex-shrink-0 self-start">
                    <ClipboardCheck className="h-4 w-4" />
                  </span>
                  <p className="text-sm text-textSecondary">
                    <strong className="text-white block">Structural Context Detection</strong>
                    Automatically detects header nesting, measurement abbreviations, and structural notes on raw files.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="p-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex-shrink-0 self-start">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <p className="text-sm text-textSecondary">
                    <strong className="text-white block">Intelligent Matching Matrix</strong>
                    Matches raw text (e.g. "C30 Mix Foundations") directly against standard regional trade pricing libraries.
                  </p>
                </div>
              </div>
              <Button
                variant="primary"
                size="md"
                onClick={() => navigate('/register')}
              >
                Start Estimating Now
              </Button>
            </div>

            <div className="lg:col-span-6 bg-cardDark/60 border border-borderDark/80 rounded-2xl p-6 relative">
              <div className="absolute -top-3 -left-3 bg-accent text-bgDark text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="h-3 w-3" /> AI Verification Log
              </div>

              <div className="space-y-3 font-mono text-[11px] sm:text-xs text-textSecondary text-left bg-bgDark/90 rounded-xl p-5 border border-borderDark/60 mt-2">
                <p className="text-emerald-400">[10:02:45 AM] Document "boq_phase_1.pdf" upload detected.</p>
                <p className="text-white">[10:02:46 AM] Parsing 42 coordinate maps on page 1...</p>
                <p className="text-accent">[10:02:48 AM] Spatial header found: "Section 3: Structural Masonry"</p>
                <p className="text-white">[10:02:50 AM] Identified item: 215mm Solid Clay Facing Brickwork</p>
                <p className="text-white">[10:02:51 AM] Unit match: M² (Area calculation confirmed)</p>
                <p className="text-primary">[10:02:53 AM] Fetching regional material average: $64.50 per m²</p>
                <p className="text-primary">[10:02:54 AM] Fetching regional bricklayer wage: $38.00 per hr</p>
                <p className="text-emerald-400">[10:02:56 AM] Success: Line Item #23 structured with 99.8% precision index.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing CTA banner */}
      <section className="py-20 bg-cardDark/30 border-t border-borderDark/40">
        <Container className="text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to See the Power of AI Estimating?
            </h2>
            <p className="text-base sm:text-lg text-textSecondary mb-8">
              We offer plans for solo builders, growing contractor companies, and enterprise organizations. Pick the one that fits your volume.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/pricing')}
              >
                View Pricing Plans
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
export default Features;
