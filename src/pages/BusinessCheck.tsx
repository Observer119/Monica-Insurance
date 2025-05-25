import React, { useState } from 'react';
import * as emailjs from '@emailjs/browser';
import SectionTitle from '../components/ui/SectionTitle';

interface FormData {
  companyName: string;
  businessType: 'selbststaendig' | 'unternehmen';
  industry: string;
  employeeCount: string;
  hasLiabilityInsurance: string;
  hasDisabilityInsurance: string;
  hasHealthInsurance: string;
  hasRetirementPlan: string;
  hasPropertyInsurance: string;
  hasEmployeeBenefits: string;
  hasInsuranceOverview: string;
  phone: string;
  email: string;
  additionalInfo: string;
  acceptTerms: boolean;
}

const BusinessCheck: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    businessType: 'selbststaendig',
    industry: '',
    employeeCount: '',
    hasLiabilityInsurance: '',
    hasDisabilityInsurance: '',
    hasHealthInsurance: '',
    hasRetirementPlan: '',
    hasPropertyInsurance: '',
    hasEmployeeBenefits: '',
    hasInsuranceOverview: '',
    phone: '',
    email: '',
    additionalInfo: '',
    acceptTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.companyName,
          from_email: formData.email,
          phone: formData.phone,
          business_type: formData.businessType,
          industry: formData.industry,
          employee_count: formData.employeeCount,
          liability_insurance: formData.hasLiabilityInsurance,
          disability_insurance: formData.hasDisabilityInsurance,
          health_insurance: formData.hasHealthInsurance,
          retirement_plan: formData.hasRetirementPlan,
          property_insurance: formData.hasPropertyInsurance,
          employee_benefits: formData.hasEmployeeBenefits,
          insurance_overview: formData.hasInsuranceOverview,
          additional_info: formData.additionalInfo,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setFormData({
        companyName: '',
        businessType: 'selbststaendig',
        industry: '',
        employeeCount: '',
        hasLiabilityInsurance: '',
        hasDisabilityInsurance: '',
        hasHealthInsurance: '',
        hasRetirementPlan: '',
        hasPropertyInsurance: '',
        hasEmployeeBenefits: '',
        hasInsuranceOverview: '',
        phone: '',
        email: '',
        additionalInfo: '',
        acceptTerms: false,
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Es gab einen Fehler beim Senden des Formulars. Bitte versuchen Sie es später erneut.');
      console.error('EmailJS Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const insuranceQuestions = [
    { id: 'hasLiabilityInsurance', question: 'Betriebshaftpflicht oder Vermögensschadenhaftpflicht vorhanden?' },
    { id: 'hasDisabilityInsurance', question: 'Arbeitskraft abgesichert (z. B. BU, Grundfähigkeit, Dread Disease)?' },
    { id: 'hasHealthInsurance', question: 'Krankenversicherung passend zur Lebenssituation?' },
    { id: 'hasRetirementPlan', question: 'Altersvorsorge geplant?' },
    { id: 'hasPropertyInsurance', question: 'Sachwerte wie Inventar, Gebäude, IT ausreichend abgesichert?' },
    { id: 'hasEmployeeBenefits', question: 'Steuerlich geförderte Modelle für Mitarbeiterbindung genutzt (bKV / bAV)?' },
    { id: 'hasInsuranceOverview', question: 'Überblick über bestehende Versicherungen vorhanden?' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-light">
        <div className="container-custom">
          <h1 className="font-bold mb-4">360° Experten-Check für Selbstständige und Unternehmen</h1>
          <p className="text-xl text-gray-600">
            Beantworten Sie einige gezielte Fragen und erhalten Sie eine kostenfreie Ersteinschätzung zu Ihrer Unternehmensabsicherung.
          </p>
        </div>
      </section>

      {/* Check Form Section */}
      <section className="section">
        <div className="container-custom max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {submitted && <div className="bg-green-100 text-green-800 p-4 rounded-md mb-6">Vielen Dank für Ihre Anfrage. Wir melden uns zeitnah bei Ihnen.</div>}
            {error && <div className="bg-red-100 text-red-800 p-4 rounded-md mb-6">{error}</div>}

            {/* Insurance Questions */}
            <div className="space-y-6">
              <SectionTitle title="Absicherungs-Check" />
              {insuranceQuestions.map((q) => (
                <div key={q.id} className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-medium mb-3">{q.question}</p>
                  <div className="flex gap-4">
                    {['Ja', 'Nein', 'Unsicher'].map((option) => (
                      <label key={option} className="flex items-center">
                        <input type="radio" name={q.id} value={option} checked={formData[q.id as keyof FormData] === option} onChange={handleChange} className="mr-2" />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-primary w-full" disabled={!formData.acceptTerms || isSubmitting}>
              {isSubmitting ? 'Wird gesendet...' : 'Unternehmens-Check absenden'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default BusinessCheck;
