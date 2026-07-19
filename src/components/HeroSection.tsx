import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, UploadCloud, ChevronRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from './Button';
import { Container } from './SectionTitle';
import { useNavigate } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-bgDark">
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-[0.25] pointer-events-none" />

      {/* Modern Gradient Light Bulbs (Background Glows) */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-accent/15 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse-slow" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Content Column */}
          <div className="lg:col-span-7 flex flex-col text-left items-start">

            {/* Announcement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-white font-medium mb-6 hover:bg-primary/15 transition-all cursor-pointer"
              onClick={() => navigate('/features')}
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-accent font-semibold">AI Estimating v1.0</span>
              <span className="text-white/40">|</span>
              <span className="flex items-center gap-0.5">
                Explore Premium Features <ChevronRight className="h-3 w-3" />
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-[1.08] glow-text-primary"
            >
              AI Construction <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
                Estimating Made Simple
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-textSecondary mb-8 leading-relaxed max-w-xl"
            >
              Upload your Bill of Quantities, let AI analyse it, and generate professional construction quotations in minutes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="h-4.5 w-4.5" />}
                onClick={() => navigate('/register')}
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<Play className="h-4.5 w-4.5 text-accent" />}
                iconPosition="left"
                onClick={() => navigate('/contact')}
              >
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 pt-8 border-t border-borderDark/40 flex flex-wrap gap-x-8 gap-y-4 text-xs font-semibold text-textSecondary uppercase tracking-wider"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" /> Accurate Estimates
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-500" /> Secure Cloud Data
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-500" /> Powered by GPT-4
              </div>
            </motion.div>
          </div>

          {/* Hero Dashboard Illustration Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              {/* Decorative backdrop glow for dashboard mockup */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt pointer-events-none" />

              {/* The Mockup Frame */}
              <div className="relative rounded-2xl bg-cardDark/90 border border-borderDark/80 shadow-2xl p-4 sm:p-6 overflow-hidden backdrop-blur-xl">
                {/* Simulated window control bar */}
                <div className="flex items-center justify-between border-b border-borderDark/50 pb-4 mb-5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-danger/80 block" />
                    <span className="w-3 h-3 rounded-full bg-warning/80 block" />
                    <span className="w-3 h-3 rounded-full bg-success/80 block" />
                  </div>
                  <div className="text-[10px] sm:text-xs font-mono text-textSecondary/60 bg-bgDark border border-borderDark/60 px-3 py-1 rounded-md">
                    builderquoteai.com/estimator
                  </div>
                  <div className="w-12" />
                </div>

                {/* Dashboard layout simulator */}
                <div className="space-y-4">
                  {/* Drop zone placeholder */}
                  <div className="border border-dashed border-primary/40 rounded-xl p-5 bg-primary/5 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-primary/10 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                      <UploadCloud className="h-6 w-6" />
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-white">Drag & drop Bill of Quantities (PDF/Excel)</p>
                    <p className="text-[10px] sm:text-xs text-textSecondary mt-1">Analyzing uploads using deep learning models...</p>
                  </div>

                  {/* Estimation list preview */}
                  <div className="bg-bgDark/80 border border-borderDark/60 rounded-xl p-4 space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-borderDark/30">
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Line Item Summary</span>
                      <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/20">AI Confidence: 99.4%</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-textSecondary">1. Concrete Foundations (Grade 30)</span>
                        <span className="font-mono text-white">$14,250.00</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-textSecondary">2. Structural Brickwork (Cavity Wall)</span>
                        <span className="font-mono text-white">$18,800.00</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-textSecondary">3. Roof Truss Framing & Cladding</span>
                        <span className="font-mono text-white">$22,450.00</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-textSecondary">4. Excavations & Disposal (Site Prep)</span>
                        <span className="font-mono text-white">$4,900.00</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-borderDark/40 flex justify-between items-center">
                      <span className="text-xs font-bold text-white">Estimated Subtotal:</span>
                      <span className="font-mono text-sm font-bold text-primary glow-text-primary">$60,400.00</span>
                    </div>
                  </div>

                  {/* Stats quick preview */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-bgDark/50 border border-borderDark/40 p-3 rounded-lg text-left">
                      <span className="text-[10px] text-textSecondary block">Material Cost</span>
                      <span className="text-sm font-bold text-white font-mono">$36,240.00</span>
                    </div>
                    <div className="bg-bgDark/50 border border-borderDark/40 p-3 rounded-lg text-left">
                      <span className="text-[10px] text-textSecondary block">Labor Estimate</span>
                      <span className="text-sm font-bold text-white font-mono">$24,160.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default HeroSection;
