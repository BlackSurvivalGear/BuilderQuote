import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Mail, Lock, LogIn, ArrowLeft } from 'lucide-react';
import { Container } from '../components/SectionTitle';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
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
    // Simulate Login redirect to preview dashboard
    setTimeout(() => {
      setIsLoading(false);
      alert('Successful simulation sign-in! In future phases this will link with our secure Firebase dashboard.');
      navigate('/');
    }, 1200);
  };

  const handleGoogleSignIn = () => {
    alert('Connecting secure Google Authenticator pop-up window...');
  };

  return (
    <div className="bg-bgDark min-h-screen pt-24 pb-12 flex flex-col justify-center relative overflow-hidden">
      {/* Decorative backdrop glowing balls */}
      <div className="absolute top-[15%] left-[20%] w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[20%] w-[300px] h-[300px] bg-accent/10 rounded-full blur-[90px] pointer-events-none" />

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
            <div className="flex flex-col items-center mb-8">
              <img
                src="/assets/logo.png"
                alt="BuilderQuoteAI Logo"
                className="h-14 w-14 object-contain brightness-100 mb-3"
              />
              <h2 className="text-2xl sm:text-3xl font-black text-white text-center">Welcome Back</h2>
              <p className="text-xs sm:text-sm text-textSecondary text-center mt-1">Access your secure construction estimate projects</p>
            </div>

            {/* Main Form element */}
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <Input
                id="email"
                type="email"
                label="Email Address"
                placeholder="estimator@builders.com"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                icon={<Mail className="h-4 w-4" />}
              />

              <div className="space-y-1">
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
              </div>

              {/* Remember Me and Forgot Password links row */}
              <div className="flex items-center justify-between text-xs sm:text-sm pt-1">
                <label className="flex items-center gap-2 text-textSecondary cursor-pointer select-none">
                  <input
                    id="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="rounded bg-bgDark border-borderDark/80 text-primary focus:ring-primary h-4 w-4 transition-all"
                  />
                  Remember Me
                </label>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Password reset email notification triggers configured in Firebase integration phase.');
                  }}
                  className="text-accent hover:text-accent-hover font-semibold transition-colors"
                >
                  Forgot Password?
                </a>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full justify-center mt-2"
                isLoading={isLoading}
                icon={<LogIn className="h-4 w-4" />}
              >
                Sign In
              </Button>
            </form>

            {/* Separator row */}
            <div className="relative my-6 flex items-center justify-center">
              <div className="absolute inset-x-0 h-[1px] bg-borderDark/60" />
              <span className="relative bg-[#111827] px-4 text-xs text-textSecondary uppercase tracking-widest">Or Continue With</span>
            </div>

            {/* Google authentication button wrapper */}
            <Button
              variant="outline"
              size="md"
              className="w-full justify-center gap-2.5 text-white"
              onClick={handleGoogleSignIn}
            >
              {/* Google Brand SVG Icon */}
              <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              Sign In with Google
            </Button>

            {/* Registration prompt */}
            <p className="mt-8 text-xs sm:text-sm text-textSecondary text-center">
              Don't have an estimating account?{' '}
              <Link to="/register" className="text-accent hover:text-accent-hover font-semibold transition-colors">
                Register free here
              </Link>
            </p>

          </Card>
        </div>
      </Container>
    </div>
  );
};
export default Login;
