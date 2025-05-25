import React, { useState } from 'react';
import * as emailjs from '@emailjs/browser';
import SectionTitle from '../components/ui/SectionTitle';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';

interface FormData {
  lifeSituation: 'single' | 'partnership' | 'family' | '';
  recentChanges: 'Ja' | 'Nein' | 'Unsicher' | '';
  changeDetails: string;
  hasLiabilityInsurance: 'Ja' | 'Nein' | 'Unsicher' | '';
  hasHealthInsurance: 'Ja' | 'Nein' | 'Unsicher' | '';
  hasIncomeProtection: 'Ja' | 'Nein' | 'Unsicher' | '';
  hasDeathCoverage: 'Ja' | 'Nein' | 'Unsicher' | '';
  hasRetirementPlan: 'Ja' | 'Nein' | 'Unsicher' | '';
  hasInsuranceOverview: 'Ja' | 'Nein' | 'Unsicher' | '';
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  additionalInfo: string;
  consent: boolean;
}

const PrivateCheck: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    lifeSituation: '',
    recentChanges: '',
    changeDetails: '',
    hasLiabilityInsurance: '',
    hasHealthInsurance: '',
    hasIncomeProtection: '',
    hasDeathCoverage: '',
    hasRetirementPlan: '',
    hasInsuranceOverview: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    additionalInfo: '',
    consent: false,
  });

  const [showResults, setShowResults] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const calculateScore = () => {
    const questions = [
      'hasLiabilityInsurance',
      'hasHealthInsurance',
      'hasIncomeProtection',
      'hasDeathCoverage',
      'hasRetirementPlan',
      'hasInsuranceOverview'
    ];

    return questions.reduce((score, question) => {
      return score + (formData[question as keyof FormData] === 'Ja' ? 1 : 0);
    }, 0);
  };

  const getResultStatus = () => {
    const score = calculateScore();
    if (score >= 6) {
      return {
        color: 'green',
        icon: <CheckCircle className="w-12 h-12 text-green-500" />,
        title: 'Gut abgesichert',
        message: 'Sie haben bereits eine solide Absicherung. Ein kurzer Check kann dennoch Optimierungspotenzial aufzeigen.',
        actionText: 'Jetzt optimieren?'
      };
    } else if (score >= 3) {
      return {
        color: 'yellow',
        icon: <AlertTriangle className="w-12 h-12 text-yellow-500" />,
        title: 'Verbesserungspotenzial',
        message: 'Es bestehen einige Lücken in Ihrer Absicherung. Lassen Sie uns gemeinsam daran arbeiten.',
        actionText: 'Jetzt handeln!'
      };
    } else {
      return {
        color: 'red',
        icon: <Shield className="w-12 h-12 text-red-500" />,
        title: 'Handlungsbedarf',
        message: 'Ihre Absicherung weist wichtige Lücken auf. Lassen Sie uns schnell einen Termin vereinbaren.',
        actionText: 'Jetzt Schutz aufbauen!'
      };
    }
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
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          life_situation: formData.lifeSituation,
          recent_changes: formData.recentChanges,
          change_details: formData.changeDetails,
          insurance_score: calculateScore(),
          ...formData
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setFormData({
        lifeSituation: '',
        recentChanges: '',
        changeDetails: '',
        hasLiabilityInsurance: '',
        hasHealthInsurance: '',
        hasIncomeProtection: '',
        hasDeathCoverage: '',
        hasRetirementPlan: '',
        hasInsuranceOverview: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        additionalInfo: '',
        consent: false,
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
      question: 'Haben Sie eine private Haftpflichtversicherung?'
    },
    {
      id: 'hasHealthInsurance',
      question: 'Deckt Ihre Krankenversicherung Ihre aktuellen Bedürfnisse?'
    },
    {
      id: 'hasIncomeProtection',
      question: 'Ist Ihr Einkommen bei längerer Krankheit oder Berufsunfähigkeit abgesichert?'
    },
    {
      id: 'hasDeathCoverage',
      question: 'Haben Sie Ihre Angehörigen im Todesfall abgesichert?'
    },
    {
      id: 'hasRetirementPlan',
      question: 'Haben Sie für Ihren Ruhestand vorgesorgt?'
    },
    {
      id: 'hasInsuranceOverview',
      question: 'Haben Sie einen Überblick über Ihre bestehenden Versicherungen?'
    }
  ];

  return (
    <>
      <section className="pt-32 pb-16 bg-gray-light">
        <div className="container-custom">
          <h1 className="font-bold mb-4">Versicherungs-Schnellcheck</h1>
          <p className="text-xl text-gray-600">
            In nur 3 Minuten eine erste Einschätzung Ihrer Absicherung erhalten – kostenfrei, unverbindlich und einfach erklärt.
          </p>
        </div>
      </section>

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

            {/* Life Situation */}
            <div className="space-y-6">
              <SectionTitle title="Teil 1 – Ihre Lebenssituation" />
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="font-medium mb-4">In welcher Lebenssituation befinden Sie sich?</p>
                <div className="space-x-6">
                  {['single', 'partnership', 'family'].map((situation) => (
                    <label key={situation} className="inline-flex items-center">
                      <input
                        type="radio"
                        name="lifeSituation"
                        value={situation}
                        checked={formData.lifeSituation === situation}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span className="capitalize">
                        {situation === 'partnership' ? 'Partnerschaft' : 
                         situation === 'family' ? 'Familie' : 'Single'}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="font-medium mb-4">Gab es kürzlich Veränderungen in Ihrem Leben?</p>
                <div className="space-x-6 mb-4">
                  {['Ja', 'Nein', 'Unsicher'].map((option) => (
                    <label key={option} className="inline-flex items-center">
                      <input
                        type="radio"
                        name="recentChanges"
                        value={option}
                        checked={formData.recentChanges === option}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </div>
                
                {formData.recentChanges === 'Ja' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Welche Veränderung hat stattgefunden?
                    </label>
                    <input
                      type="text"
                      name="changeDetails"
                      value={formData.changeDetails}
                      onChange={handleChange}
                      placeholder="z.B. Umzug, Familienzuwachs, Berufswechsel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Insurance Questions */}
            <div className="space-y-6">
              <SectionTitle title="Teil 2 – Absicherungs- und Vorsorge-Check" />
              
              {insuranceQuestions.map((q) => (
                <div key={q.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="font-medium mb-3">{q.question}</p>
                  <div className="space-x-6">
                    {['Ja', 'Nein', 'Unsicher'].map((option) => (
                      <label key={option} className="inline-flex items-center">
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

            {/* Results */}
            {showResults && (
              <div className="space-y-6">
                <SectionTitle title="Ihre Auswertung" />
                
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  {getResultStatus().icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">
                    {getResultStatus().title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {getResultStatus().message}
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowResults(false)}
                    className="btn-primary"
                  >
                    {getResultStatus().actionText}
                  </button>
                </div>
              </div>
            )}

            {/* Contact Form */}
            <div className="space-y-6">
              <SectionTitle title="Ihre Kontaktdaten" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vorname
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nachname
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-Mail-Adresse
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefonnummer
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Was ist Ihnen bei Ihrer Absicherung besonders wichtig?
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="mt-1"
              />
              <label className="text-sm text-gray-600">
                Ich stimme der Verarbeitung meiner Daten gemäß Datenschutzbestimmungen zu.
              </label>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setShowResults(true)}
                className="btn-primary flex-1"
                disabled={!Object.values(formData).every(val => val !== '')}
              >
                Ergebnis anzeigen
              </button>
              <button
                type="submit"
                className="btn-primary flex-1"
                disabled={!formData.consent || isSubmitting}
              >
                {isSubmitting ? 'Wird gesendet...' : 'Selbst-Check absenden'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default PrivateCheck;