import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Mail, Lock, User, Building, UserCheck, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Container } from '../components/SectionTitle';

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: true
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the Terms of Service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));

    if (errors[id]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    // Simulate Signup redirect to preview dashboard
    setTimeout(() => {
      setIsLoading(false);
      alert('Successful simulation account creation! Your 14-day free trial is now active.');
      navigate('/');
    }, 1200);
  };

  return (
    <div className="bg-bgDark min-h-screen pt-24 pb-12 flex flex-col justify-center relative overflow-hidden">
      {/* Decorative backdrop glowing balls */}
      <div className="absolute top-[15%] right-[20%] w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[20%] w-[300px] h-[300px] bg-accent/10 rounded-full blur-[90px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-md mx-auto">

          {/* Back Home link wrapper */}
          <div className="text-left mb-6">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-textSecondary hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Homepage
            </Link>
          </div>

          <Card glass hoverable={false} className="p-8 border-borderDark/80">
            {/* Logo display */}
            <div className="flex flex-col items-center mb-6">
              <img
                src="assets/logo.png"
                alt="BuilderQuoteAI Logo"
                className="h-14 w-14 object-contain brightness-100 mb-3"
              />
              <h2 className="text-2xl sm:text-3xl font-black text-white text-center">Get Started Free</h2>
              <p className="text-xs sm:text-sm text-textSecondary text-center mt-1">14-day free trial, no credit card required</p>
            </div>

            {/* Main Form element */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <Input
                id="fullName"
                label="Full Name"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleInputChange}
                error={errors.fullName}
                icon={<User className="h-4 w-4" />}
              />

              <Input
                id="companyName"
                label="Company Name"
                placeholder="Apex Builders Ltd"
                value={formData.companyName}
                onChange={handleInputChange}
                error={errors.companyName}
                icon={<Building className="h-4 w-4" />}
              />

              <Input
                id="email"
                type="email"
                label="Business Email"
                placeholder="estimator@builders.com"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                icon={<Mail className="h-4 w-4" />}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  id="password"
                  type="password"
                  label="Password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  error={errors.password}
                  icon={<Lock className="h-4 w-4" />}
                />

                <Input
                  id="confirmPassword"
                  type="password"
                  label="Confirm"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  error={errors.confirmPassword}
                  icon={<Lock className="h-4 w-4" />}
                />
              </div>

              {/* Terms of Service Acceptance checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2 text-xs text-textSecondary cursor-pointer select-none leading-relaxed">
                  <input
                    id="agreeTerms"
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className="rounded bg-bgDark border-borderDark/80 text-primary focus:ring-primary h-4 w-4 mt-0.5 transition-all"
                  />
                  <span>
                    I agree to the{' '}
                    <a href="#" onClick={(e) => { e.preventDefault(); alert('Terms of Service agreement text...'); }} className="text-accent hover:text-accent-hover font-semibold">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" onClick={(e) => { e.preventDefault(); alert('Privacy Policy agreement text...'); }} className="text-accent hover:text-accent-hover font-semibold">
                      Privacy Policy
                    </a>.
                  </span>
                </label>
                {errors.agreeTerms && (
                  <p className="mt-1.5 text-xs text-danger font-medium">{errors.agreeTerms}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full justify-center mt-3"
                isLoading={isLoading}
                icon={<UserCheck className="h-4 w-4" />}
              >
                Create Account
              </Button>
            </form>

            {/* Account registration prompt */}
            <p className="mt-6 text-xs sm:text-sm text-textSecondary text-center">
              Already have an account?{' '}
              <Link to="/login" className="text-accent hover:text-accent-hover font-semibold transition-colors">
                Sign In instead
              </Link>
            </p>

            {/* Trust check */}
            <div className="mt-6 pt-4 border-t border-borderDark/40 flex items-center justify-center gap-2 text-xs text-textSecondary">
              <ShieldCheck className="h-4 w-4 text-emerald-500" /> Secure SSL encrypted checkout
            </div>

          </Card>
        </div>
      </Container>
    </div>
  );
};
export default Register;
