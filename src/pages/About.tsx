import React from 'react';
import { Container, SectionTitle } from '../components/SectionTitle';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { Award, Users, TrendingUp, Target, Zap, Building } from 'lucide-react';

export const About: React.FC = () => {
  const navigate = useNavigate();

  const coreValues = [
    {
      title: 'Obsessive Accuracy',
      description: 'In construction, a margin of 2% can mean the difference between profit and bankruptcy. We construct systems that verify calculations rigorously.',
      icon: <Target className="h-5 w-5 text-accent" />
    },
    {
      title: 'Time is the Only Currency',
      description: 'Estimators spend up to 70 hours writing manually structured proposals. We believe those estimators can do more in just 10 minutes with AI assistance.',
      icon: <Zap className="h-5 w-5 text-primary" />
    },
    {
      title: 'Absolute Security First',
      description: 'Proprietary contractor supply catalogs and client margins represent commercial secrets. We shield your directories with robust protection.',
      icon: <Award className="h-5 w-5 text-emerald-400" />
    }
  ];

  return (
    <div className="bg-bgDark pt-24 min-h-screen">
      {/* About Header */}
      <section className="py-16 md:py-20 relative overflow-hidden border-b border-borderDark/40">
        <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <Container>
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-accent bg-accent/10 border border-accent/20 mb-6 inline-block uppercase">
              Our Mission & Team
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
              Empowering Builders with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Next-Gen AI Estimators
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-textSecondary max-w-2xl mx-auto leading-relaxed">
              We started BuilderQuoteAI because the building trade deserves the same premium, high-speed SaaS software that tech startups enjoy.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Mission Details */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 text-left flex flex-col items-start">
              <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2">Our Core Drive</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                Helping Builders produce accurate quotations faster.
              </h2>
              <p className="text-sm sm:text-base text-textSecondary mb-6 leading-relaxed">
                Every single day, thousands of general builders, civil contractors, and electrical tradesmen sit at desks long after sunset typing raw line-items into spreadsheets. Calculating quantities from blueprints manually remains slow, repetitive, and error-prone.
              </p>
              <p className="text-sm sm:text-base text-textSecondary mb-8 leading-relaxed">
                <strong>BuilderQuoteAI</strong> is engineered by veteran construction estimators and AI engineers. Our software analyzes unstructured Bills of Quantities, matches items against updated regional distributor catalogs, factors local carpenter, mason, and concrete labor indexes, and formats sleek proposals automatically in seconds.
              </p>

              <div className="flex gap-4">
                <Button variant="primary" size="md" onClick={() => navigate('/register')}>
                  Join as Estimator
                </Button>
                <Button variant="outline" size="md" onClick={() => navigate('/contact')}>
                  Read Our Case Studies
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

              <Card glass hoverable={false} className="p-6 text-left flex flex-col justify-between border-borderDark/80 min-h-[180px]">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-4">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">2,400+ Contractors</h4>
                  <p className="text-xs text-textSecondary">Active tradesmen and corporate construction companies scale with our software.</p>
                </div>
              </Card>

              <Card glass hoverable={false} className="p-6 text-left flex flex-col justify-between border-borderDark/80 min-h-[180px]">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-4">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">92% Win Rate Boost</h4>
                  <p className="text-xs text-textSecondary">Tendering within minutes means winning contracts before the competitors reply.</p>
                </div>
              </Card>

              <Card glass hoverable={false} className="p-6 text-left flex flex-col justify-between border-borderDark/80 min-h-[180px] sm:col-span-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Building className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">Built for Residential & Commercial</h4>
                  <p className="text-xs text-textSecondary">Whether constructing small home extensions or standard commercial office complexes, BuilderQuoteAI supports accurate estimation.</p>
                </div>
              </Card>

            </div>
          </div>
        </Container>
      </section>

      {/* Corporate Values */}
      <section className="py-20 border-t border-borderDark/40 bg-cardDark/10">
        <Container>
          <SectionTitle
            badge="What We Stand For"
            title="The BuilderQuoteAI Values"
            subtitle="The core principles that guide our development cycles, engineering policies, and support team."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => (
              <Card key={idx} glass className="p-8 text-left border-borderDark/60 flex flex-col justify-between group">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-bgDark border border-borderDark/80 flex items-center justify-center mb-6 group-hover:border-primary/40 transition-colors">
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{val.title}</h3>
                  <p className="text-sm text-textSecondary leading-relaxed">{val.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTAs */}
      <section className="py-20 border-t border-borderDark/40">
        <Container className="text-center">
          <div className="max-w-3xl mx-auto">
            <span className="p-1 px-3 bg-accent/10 border border-accent/20 rounded-full text-xs font-bold text-accent mb-4 inline-block uppercase">Get Started</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Scale Your Estimation Capacity Today</h2>
            <p className="text-base sm:text-lg text-textSecondary mb-8">
              Join construction companies worldwide who estimate proposals in minutes. Try BuilderQuoteAI risk-free for 14 days.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="primary" size="lg" onClick={() => navigate('/register')}>Create Free Account</Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/contact')}>Speak With Sales</Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
export default About;
