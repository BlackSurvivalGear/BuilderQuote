import React, { useState } from 'react';
import { Container, SectionTitle } from '../components/SectionTitle';
import { PricingCard } from '../components/PricingCard';
import type { PricingPlan } from '../components/PricingCard';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { HelpCircle, Sparkles } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans: PricingPlan[] = [
    {
      name: 'Starter',
      priceMonthly: 39,
      priceYearly: 350,
      description: 'Perfect for local trades, solo builders, and small sub-contractors.',
      features: [
        'Up to 10 AI BOQ Uploads / mo',
        'Standard PDF Quote Generator',
        'Basic Material Cost Calculator',
        'Local Labour Cost Estimator',
        'Single User Access',
        'Email Support (within 24 hours)',
      ],
      buttonText: 'Start Starter Plan',
      badge: 'Solo Trade',
    },
    {
      name: 'Professional',
      priceMonthly: 89,
      priceYearly: 850,
      description: 'Ideal for expanding building companies, general contractors, and developers.',
      features: [
        'Unlimited AI BOQ Uploads',
        'Advanced Brand Quote Customization',
        'Material & Labour database sync',
        'Multi-currency & PDF Export features',
        'Team collaboration up to 5 members',
        'Standard customer database database',
        'Priority Email Support (under 2 hours)',
      ],
      isPopular: true,
      buttonText: 'Start Free Trial',
    },
    {
      name: 'Enterprise',
      priceMonthly: 199,
      priceYearly: 1900,
      description: 'For national commercial developers, civil builders, and enterprise estimating desks.',
      features: [
        'Unlimited AI BOQ & Spec Uploads',
        'Fully Customized Estimate Export Styles',
        'Automated Supplier Catalog sync',
        'Unlimited Team members & roles',
        'Dedicated SLA & Customer Account Manager',
        'Active API & Webhook developer integrations',
        'Dedicated Onboarding & Live Training calls',
      ],
      buttonText: 'Contact Enterprise Sales',
      badge: 'Uncapped',
    }
  ];

  const faqs = [
    {
      question: "How does the AI process my uploaded PDF or Excel BOQ?",
      answer: "When you upload a document, our specialized machine learning models parse the sheet's typography, coordinates, gridlines, and textual categories. The system then automatically converts raw tables into highly structured JSON data, categorizing materials and wages based on your preset database preferences."
    },
    {
      question: "What files are supported for uploads?",
      answer: "We support standard PDF files (both structured documents and scanned photocopies with clear text), Microsoft Excel spreadsheets (.xls, .xlsx), CSV tables, and raw text bills of materials."
    },
    {
      question: "Can I cancel or upgrade my pricing plan later?",
      answer: "Yes, absolutely. You can upgrade, downgrade, or cancel your subscription at any point through your secure account settings. If you upgrade mid-billing cycle, we will prorate the remaining amount."
    },
    {
      question: "How accurate are the regional material and labour estimates?",
      answer: "Our engine retrieves average trade material indices and regional wage structures from official statistical sources and partnered distributors. You can also override any of our automated cost suggestions and save custom templates directly to your profile."
    }
  ];

  const handleSelectPlan = (plan: PricingPlan) => {
    alert(`Thank you for choosing the BuilderQuoteAI ${plan.name} plan! You are being redirected to our billing gateway secure checkout page...`);
  };

  return (
    <div className="bg-bgDark pt-24 min-h-screen">
      {/* Pricing Header */}
      <section className="py-16 md:py-20 relative overflow-hidden border-b border-borderDark/40">
        <div className="absolute top-[20%] left-[5%] w-[450px] h-[450px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <Container>
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-accent bg-accent/10 border border-accent/20 mb-6 inline-block uppercase">
              Flexible Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
              Invest in Speed, Accuracy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                and Winning Tenders
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-textSecondary max-w-2xl mx-auto leading-relaxed mb-10">
              Produce outstanding client proposals in minutes, not days. Choose a cost-effective plan and watch your conversion rates fly.
            </p>

            {/* Toggle Billing switch */}
            <div className="inline-flex items-center gap-4 bg-cardDark/85 border border-borderDark/80 p-1.5 rounded-full shadow-inner mb-4">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-full transition-all duration-300 ${
                  !isYearly
                    ? 'bg-primary text-white shadow-md'
                    : 'text-textSecondary hover:text-white'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                  isYearly
                    ? 'bg-primary text-white shadow-md'
                    : 'text-textSecondary hover:text-white'
                }`}
              >
                Yearly Billing
                <span className="text-[10px] bg-accent/20 text-accent font-bold px-2 py-0.5 rounded-full border border-accent/20">
                  Save ~20%
                </span>
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Plans Pricing Grid */}
      <section className="py-20 bg-cardDark/10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-20">
            {plans.map((plan) => (
              <PricingCard
                key={plan.name}
                plan={plan}
                isYearly={isYearly}
                onSelect={handleSelectPlan}
              />
            ))}
          </div>

          {/* Money back assurance panel */}
          <Card glass hoverable={false} className="p-8 border-accent/30 max-w-4xl mx-auto text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-accent/5 rounded-full blur-[40px] pointer-events-none" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">100% Risk-Free Guarantee</h3>
                  <p className="text-sm text-textSecondary max-w-xl">
                    Try any BuilderQuoteAI paid tier for 14 days. If you're not producing estimates 10x faster, email support for a complete refund. No questions asked.
                  </p>
                </div>
              </div>
              <Button variant="accent" size="md" onClick={() => alert("Free trial started!")}>
                Start Free Trial
              </Button>
            </div>
          </Card>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-borderDark/40">
        <Container>
          <SectionTitle
            badge="Frequently Asked Questions"
            title="Common Questions & Answers"
            subtitle="Learn more about our estimating features, custom integration possibilities, security, and trial limits."
          />

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {faqs.map((faq, idx) => (
              <Card key={idx} glass hoverable={false} className="p-6 border-borderDark/50">
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-white mb-2 leading-snug">{faq.question}</h4>
                    <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};
export default Pricing;
