import { useState } from 'react';

export default function ConsultationForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    challenge: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = () => {
    const newErrors = {};

    if (!values.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!values.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(values.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!values.challenge.trim()) {
      newErrors.challenge = 'Please describe your challenge';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Mock submission with delay
    console.log('Form submission:', values);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-slate-900/50 border-2 border-white/20 p-6 sm:p-8 text-center">
        <div className="w-12 h-12 mx-auto mb-4 bg-brand-blue border-2 border-white flex items-center justify-center shadow-brutal-sm">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <h3 className="font-bold text-white text-lg sm:text-xl mb-2">Message Received</h3>
        <p className="text-slate-300 text-sm sm:text-base">
          We'll respond within 24 hours to discuss your challenge.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-mono text-slate-400 text-xs sm:text-sm mb-2">
          Name <span className="text-brand-blue">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          className={`w-full bg-slate-900 text-white px-4 py-3 border-2 ${
            errors.name ? 'border-red-500' : 'border-white/20 focus:border-white'
          } focus:outline-none transition-colors`}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="text-red-500 text-mono text-xs mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-mono text-slate-400 text-xs sm:text-sm mb-2">
          Email <span className="text-brand-blue">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className={`w-full bg-slate-900 text-white px-4 py-3 border-2 ${
            errors.email ? 'border-red-500' : 'border-white/20 focus:border-white'
          } focus:outline-none transition-colors`}
          placeholder="you@company.com"
        />
        {errors.email && (
          <p className="text-red-500 text-mono text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* Company Field */}
      <div>
        <label htmlFor="company" className="block text-mono text-slate-400 text-xs sm:text-sm mb-2">
          Company <span className="text-slate-600">(optional)</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={values.company}
          onChange={handleChange}
          className="w-full bg-slate-900 text-white px-4 py-3 border-2 border-white/20 focus:border-white focus:outline-none transition-colors"
          placeholder="Your company"
        />
      </div>

      {/* Challenge Field */}
      <div>
        <label htmlFor="challenge" className="block text-mono text-slate-400 text-xs sm:text-sm mb-2">
          What's your biggest challenge? <span className="text-brand-blue">*</span>
        </label>
        <textarea
          id="challenge"
          name="challenge"
          value={values.challenge}
          onChange={handleChange}
          rows={4}
          className={`w-full bg-slate-900 text-white px-4 py-3 border-2 ${
            errors.challenge ? 'border-red-500' : 'border-white/20 focus:border-white'
          } focus:outline-none transition-colors resize-none`}
          placeholder="Describe the workflow or process you'd like to automate..."
        />
        {errors.challenge && (
          <p className="text-red-500 text-mono text-xs mt-1">{errors.challenge}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-4 min-h-[48px] bg-slate-800 text-white font-bold border-2 border-white shadow-brutal hover:shadow-brutal-lg active:shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-brutal"
      >
        {isSubmitting ? (
          <span className="inline-flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Sending...
          </span>
        ) : (
          'Start Conversation'
        )}
      </button>
    </form>
  );
}
