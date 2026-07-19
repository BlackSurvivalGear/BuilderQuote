import React, { useState } from 'react';
import { Container } from '../components/SectionTitle';
import { Card } from '../components/Card';
import { Input, TextArea } from '../components/Input';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }

    if (!formData.message.trim()) newErrors.message = 'Please type your enquiry message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
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
    // Simulate API delivery
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1200);
  };

  const offices = [
    {
      city: 'Silicon Valley Headquarters',
      address: '440 Montgomery Street, San Francisco, CA 94104',
      phone: '+1 (800) 555-BQAI',
      email: 'sales@builderquoteai.com'
    },
    {
      city: 'London Regional Hub',
      address: '88 Kingsway, London, WC2B 6AA, United Kingdom',
      phone: '+44 (0) 20 7946 0192',
      email: 'uk@builderquoteai.com'
    }
  ];

  return (
    <div className="bg-bgDark pt-24 min-h-screen">
      {/* Contact Header */}
      <section className="py-16 md:py-20 relative overflow-hidden border-b border-borderDark/40">
        <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <Container>
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-accent bg-accent/10 border border-accent/20 mb-6 inline-block uppercase">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
              Let's Talk Construction <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Estimating Automation
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-textSecondary max-w-2xl mx-auto leading-relaxed">
              Have custom specifications? Want to arrange an enterprise platform walkthrough? Drop us a line below, we typically reply within 2 hours.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Form & Contact Info Split */}
      <section className="py-20 bg-cardDark/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

            {/* Left Contact Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-10">
              <div className="space-y-6">
                <span className="text-accent text-xs font-bold uppercase tracking-wider block">Office Directories</span>
                <h2 className="text-3xl font-extrabold text-white">We're here to help you scale.</h2>
                <p className="text-sm sm:text-base text-textSecondary leading-relaxed">
                  Whether you are a solo carpenter estimating house renovations or a multinational commercial builder tender bidding, our sales engineers are ready to assist.
                </p>
              </div>

              {/* Office lists */}
              <div className="space-y-6">
                {offices.map((office, idx) => (
                  <Card key={idx} glass hoverable={false} className="p-6 border-borderDark/60 bg-bgDark/30">
                    <h4 className="text-white font-bold text-base mb-3 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent" /> {office.city}
                    </h4>
                    <p className="text-xs sm:text-sm text-textSecondary mb-3 leading-relaxed">{office.address}</p>
                    <div className="space-y-1.5 text-xs">
                      <div className="flex items-center gap-2 text-textSecondary">
                        <Phone className="h-3.5 w-3.5 text-primary" /> {office.phone}
                      </div>
                      <div className="flex items-center gap-2 text-textSecondary">
                        <Mail className="h-3.5 w-3.5 text-primary" /> {office.email}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Fast reply promise */}
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex gap-3 text-left">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-xs text-textSecondary leading-relaxed">
                  <strong className="text-white">Our 2-Hour SLA Promise:</strong> During standard working days, our estimators and engineers respond to messages within two hours.
                </p>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <Card glass hoverable={false} className="p-6 sm:p-8 md:p-10 border-borderDark/80 h-full relative overflow-hidden">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center h-full py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Message Delivered!</h3>
                    <p className="text-sm text-textSecondary max-w-sm leading-relaxed">
                      Thank you for contacting BuilderQuoteAI. One of our estimation platform specialists will reach out to you shortly.
                    </p>
                    <Button variant="outline" size="md" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Send a Message</h3>
                    <p className="text-xs sm:text-sm text-textSecondary mb-6">Complete the quick builder enquiry details below to connect with us.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input
                        id="name"
                        label="Full Name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        error={errors.name}
                      />
                      <Input
                        id="company"
                        label="Company Name"
                        placeholder="Apex Builders Ltd"
                        value={formData.company}
                        onChange={handleInputChange}
                        error={errors.company}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input
                        id="email"
                        label="Business Email"
                        type="email"
                        placeholder="john@apexbuilders.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        error={errors.email}
                      />
                      <Input
                        id="phone"
                        label="Phone Number (Optional)"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                        error={errors.phone}
                      />
                    </div>

                    <TextArea
                      id="message"
                      label="Enquiry Message"
                      placeholder="Hi, I'd like to ask about custom regional cost databases integration..."
                      value={formData.message}
                      onChange={handleInputChange}
                      error={errors.message}
                    />

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto justify-center"
                      isLoading={isLoading}
                      icon={<Send className="h-4 w-4" />}
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
};
export default Contact;
