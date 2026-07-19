import React from 'react';
import { Check } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';

export interface PricingPlan {
  name: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  badge?: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  isYearly: boolean;
  onSelect: (plan: PricingPlan) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, isYearly, onSelect }) => {
  const currentPrice = isYearly ? plan.priceYearly : plan.priceMonthly;
  const originalPrice = isYearly ? plan.priceMonthly * 12 : null;
  const savings = originalPrice ? originalPrice - currentPrice : 0;

  return (
    <Card
      glass
      hoverable={false}
      className={`relative flex flex-col h-full p-6 md:p-8 ${
        plan.isPopular
          ? 'border-primary/50 shadow-2xl shadow-primary/10 premium-border'
          : 'border-borderDark/60'
      }`}
    >
      {plan.isPopular && (
        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10">
          Popular
        </div>
      )}
      {plan.badge && !plan.isPopular && (
        <div className="absolute top-4 right-4 bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10 border border-accent/30">
          {plan.badge}
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-sm text-textSecondary min-h-[40px]">{plan.description}</p>
      </div>

      <div className="mb-6 flex flex-col">
        <div className="flex items-baseline text-white">
          <span className="text-3xl font-extrabold tracking-tight">$</span>
          <span className="text-5xl font-black tracking-tight transition-all duration-300">
            {currentPrice === 0 ? '0' : currentPrice}
          </span>
          <span className="ml-1 text-sm font-semibold text-textSecondary">
            /{isYearly ? 'yr' : 'mo'}
          </span>
        </div>
        {isYearly && plan.priceYearly > 0 && (
          <span className="text-xs text-accent font-semibold mt-1.5 bg-accent/10 px-2 py-0.5 rounded border border-accent/20 self-start">
            Save ${savings} / year
          </span>
        )}
      </div>

      <div className="flex-grow mb-8">
        <p className="text-xs font-bold tracking-wider uppercase text-white mb-4">What's included:</p>
        <ul className="space-y-3.5">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm text-textSecondary">
              <span className="flex-shrink-0 mr-3 p-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button
        variant={plan.isPopular ? 'primary' : 'outline'}
        size="lg"
        className="w-full justify-center py-3"
        onClick={() => onSelect(plan)}
      >
        {plan.buttonText}
      </Button>
    </Card>
  );
};
export default PricingCard;
