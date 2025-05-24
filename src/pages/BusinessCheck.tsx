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

const Businesscheck: React.FC = () => {
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
    {
      id: 'hasLiabilityInsurance',
      question: 'Betriebshaftpflicht oder Vermögensschadenhaftpflicht vorhanden?',
    },
    {
      id: 'hasDisabilityInsurance',
      question: 'Arbeitskraft abgesichert (z. B. BU, Grundfähigkeit, Dread Disease)?',
    },
    {
      id: 'hasHealthInsurance',
      question: 'Krankenversicherung passend zur Lebenssituation?',
    },
    {
      id: 'hasRetirementPlan',
      question: 'Altersvorsorge geplant?',
    },
    {
      id: 'hasPropertyInsurance',
      question: 'Sachwerte wie Inventar, Gebäude, IT ausreichend abgesichert?',
    },
    {
      id: 'hasEmployeeBenefits',
      question: 'Steuerlich geförderte Modelle für Mitarbeiterbindung genutzt (bKV / bAV)?',
    },
    {
      id: 'hasInsuranceOverview',
      question: 'Überblick über bestehende Versicherungen vorhanden?',
    },
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
            {submitted && (
              <div className="bg-green-100 text-green-800 p-4 rounded-md mb-6">
                Vielen Dank für Ihre Anfrage. Wir melden uns zeitnah bei Ihnen.
              </div>
            )}

            {error && (
              <div className="bg-red-100 text-red-800 p-4 rounded-md mb-6">
                {error}
              </div>
            )}

            {/* Basic Information */}
            <div className="space-y-6">
              <SectionTitle title="Basisdaten" />
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Name / Unternehmen
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Geschäftsform
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="businessType"
                        value="selbststaendig"
                        checked={formData.businessType === 'selbststaendig'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Selbstständig
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="businessType"
                        value="unternehmen"
                        checked={formData.businessType === 'unternehmen'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Unternehmen
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                    Branche / Tätigkeit
                  </label>
                  <input
                    type="text"
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-1">
                    Anzahl der Mitarbeitenden
                  </label>
                  <select
                    id="employeeCount"
                    name="employeeCount"
                    value={formData.employeeCount}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="0">0</option>
                    <option value="1-5">1–5</option>
                    <option value="6-20">6–20</option>
                    <option value="21-50">21–50</option>
                    <option value="50+">Über 50</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Insurance Questions */}
            <div className="space-y-6">
              <SectionTitle title="Absicherungs- und Vorsorge-Check" />
              
              {insuranceQuestions.map((q) => (
                <div key={q.id} className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-medium mb-3">{q.question}</p>
                  <div className="flex gap-4">
                    {['Ja', 'Nein', 'Unsicher'].map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="radio"
                          name={q.id}
                          value={option}
                          checked={formData[q.id as keyof FormData] === option}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <SectionTitle title="Kontaktwunsch" />
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-Mail-Adresse
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                    Was ist Ihnen besonders wichtig? (optional)
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
            </div>

            {/* Terms Acceptance */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                required
                className="mt-1"
              />
              <label htmlFor="acceptTerms" className="text-sm text-gray-600">
                Ich stimme der Verarbeitung meiner Daten gemäß Datenschutzbestimmungen zu.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary w-full"
              disabled={!formData.acceptTerms || isSubmitting}
            >
              {isSubmitting ? 'Wird gesendet...' : 'Unternehmens-Check absenden'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Businesscheck;