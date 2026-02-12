import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Circle, ArrowRight, ArrowLeft, AlertCircle, Info } from 'lucide-react';

const HIGH_RISK_FACTORS = [
  { id: 'prev-preeclampsia', text: 'History of preeclampsia (especially if early onset or severe)' },
  { id: 'multifetal', text: 'Multifetal gestation (twins, triplets, etc.)' },
  { id: 'chronic-htn', text: 'Chronic hypertension' },
  { id: 'diabetes', text: 'Type 1 or Type 2 diabetes mellitus' },
  { id: 'renal', text: 'Renal (kidney) disease' },
  { id: 'autoimmune', text: 'Autoimmune disease (e.g., systemic lupus erythematosus, antiphospholipid syndrome)' },
];

const MODERATE_RISK_FACTORS = [
  { id: 'nulliparity', text: 'Nulliparity (first pregnancy)' },
  { id: 'obesity', text: 'Obesity (BMI ≥30 kg/m²)' },
  { id: 'family-hx', text: 'Family history of preeclampsia (mother or sister)' },
  { id: 'age-35', text: 'Maternal age ≥35 years' },
  { id: 'socioeconomic', text: 'Sociodemographic factors (e.g., low socioeconomic status)' },
  { id: 'black-race', text: 'Black race (reflects structural/social risk factors)' },
  { id: 'ivf', text: 'In vitro fertilization (IVF) pregnancy' },
];

function App() {
  const [currentStep, setCurrentStep] = useState(0); // 0: high-risk, 1: moderate-risk, 2: results
  const [highRiskSelected, setHighRiskSelected] = useState(new Set());
  const [modRiskSelected, setModRiskSelected] = useState(new Set());

  const toggleHighRisk = (id) => {
    const newSet = new Set(highRiskSelected);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setHighRiskSelected(newSet);
  };

  const toggleModRisk = (id) => {
    const newSet = new Set(modRiskSelected);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setModRiskSelected(newSet);
  };

  const calculateRecommendation = () => {
    const highCount = highRiskSelected.size;
    const modCount = modRiskSelected.size;

    if (highCount >= 1 || modCount >= 2) {
      return 'recommend';
    } else if (modCount === 1) {
      return 'consider';
    } else {
      return 'not-indicated';
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setHighRiskSelected(new Set());
    setModRiskSelected(new Set());
  };

  const progressPercentage = ((currentStep + 1) / 3) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-sage via-white to-soft-sage flex flex-col">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-1.5">
        <motion.div
          className="h-full bg-maternal-teal"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div
                key="high-risk"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 w-full sm:h-auto"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-clay text-white flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <span className="text-sm text-gray-500 font-medium">Step 1 of 2</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-serif font-bold text-maternal-teal mb-2">
                    High-Risk Factors
                  </h1>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Select all that apply to the patient. Even <strong>one</strong> high-risk factor may indicate aspirin prophylaxis.
                  </p>
                </div>

                {/* Options */}
                <div className="space-y-3 mb-6">
                  {HIGH_RISK_FACTORS.map((factor) => (
                    <button
                      key={factor.id}
                      onClick={() => toggleHighRisk(factor.id)}
                      className={`w-full flex items-center justify-between p-4 border-2 rounded-2xl transition-all cursor-pointer text-left ${
                        highRiskSelected.has(factor.id)
                          ? 'border-maternal-teal bg-soft-sage'
                          : 'border-gray-100 hover:border-maternal-teal hover:bg-soft-sage'
                      }`}
                    >
                      <span className="text-gray-800 text-sm sm:text-base pr-4">{factor.text}</span>
                      {highRiskSelected.has(factor.id) ? (
                        <CheckCircle2 className="w-6 h-6 text-maternal-teal flex-shrink-0" />
                      ) : (
                        <Circle className="w-6 h-6 text-gray-300 flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-4">
                  <div className="text-sm text-gray-500">
                    {highRiskSelected.size} selected
                  </div>
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="flex items-center gap-2 bg-maternal-teal text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
                  >
                    Next
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                key="mod-risk"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 w-full sm:h-auto"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-clay text-white flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <span className="text-sm text-gray-500 font-medium">Step 2 of 2</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-serif font-bold text-maternal-teal mb-2">
                    Moderate-Risk Factors
                  </h1>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Select all that apply. <strong>Two or more</strong> moderate-risk factors may indicate aspirin prophylaxis.
                  </p>
                </div>

                {/* Options */}
                <div className="space-y-3 mb-6">
                  {MODERATE_RISK_FACTORS.map((factor) => (
                    <button
                      key={factor.id}
                      onClick={() => toggleModRisk(factor.id)}
                      className={`w-full flex items-center justify-between p-4 border-2 rounded-2xl transition-all cursor-pointer text-left ${
                        modRiskSelected.has(factor.id)
                          ? 'border-maternal-teal bg-soft-sage'
                          : 'border-gray-100 hover:border-maternal-teal hover:bg-soft-sage'
                      }`}
                    >
                      <span className="text-gray-800 text-sm sm:text-base pr-4">{factor.text}</span>
                      {modRiskSelected.has(factor.id) ? (
                        <CheckCircle2 className="w-6 h-6 text-maternal-teal flex-shrink-0" />
                      ) : (
                        <Circle className="w-6 h-6 text-gray-300 flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-4">
                  <button
                    onClick={() => setCurrentStep(0)}
                    className="flex items-center gap-2 text-maternal-teal font-semibold hover:underline"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </button>
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-500">
                      {modRiskSelected.size} selected
                    </div>
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="flex items-center gap-2 bg-maternal-teal text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
                    >
                      See Results
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 w-full"
              >
                <ResultsView
                  recommendation={calculateRecommendation()}
                  highCount={highRiskSelected.size}
                  modCount={modRiskSelected.size}
                  onReset={reset}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Faded Footer Disclaimer */}
      <footer className="opacity-50 hover:opacity-100 transition-opacity duration-500 p-6 text-center text-xs text-gray-600 max-w-4xl mx-auto">
        <div className="space-y-2">
          <p className="font-semibold">⚠️ INFORMATIONAL USE ONLY</p>
          <p>
            This tool is for educational purposes and clinical decision support. It does NOT provide medical advice, diagnosis, or treatment recommendations. 
            All therapeutic decisions, including aspirin prophylaxis, must be discussed with and prescribed by a qualified healthcare provider 
            (obstetrician, maternal-fetal medicine specialist, or other appropriate clinician).
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Based on ACOG/USPSTF 2021 guidelines • Consult OB/GYN or MFM specialist for all medical decisions
          </p>
        </div>
      </footer>
    </div>
  );
}

function ResultsView({ recommendation, highCount, modCount, onReset }) {
  const resultConfig = {
    recommend: {
      icon: <CheckCircle2 className="w-16 h-16 text-green-600" />,
      title: 'Aspirin Prophylaxis Recommended',
      color: 'green',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      content: (
        <>
          <p className="text-gray-700 mb-3">
            <strong>Guideline-Based Assessment:</strong> Patient meets ACOG/USPSTF criteria for low-dose aspirin prophylaxis consideration (81mg daily).
          </p>
          <p className="text-gray-700 mb-3">
            <strong>Timing:</strong> Per guidelines, ideally initiate between 12-16 weeks of gestation; may start up to 28 weeks. Continue until delivery.
          </p>
          <p className="text-gray-700">
            <strong>Next Steps:</strong> Patient must consult with their OB/GYN or Maternal-Fetal Medicine specialist to discuss benefits, risks, contraindications, 
            and whether aspirin therapy is appropriate for their individual situation.
          </p>
        </>
      ),
    },
    consider: {
      icon: <AlertCircle className="w-16 h-16 text-amber-600" />,
      title: 'Consider Aspirin - Clinical Judgment Required',
      color: 'amber',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      content: (
        <>
          <p className="text-gray-700 mb-3">
            <strong>Assessment:</strong> Patient has one moderate-risk factor, which does not automatically meet standard guideline criteria.
          </p>
          <p className="text-gray-700 mb-3">
            <strong>Recommendation:</strong> Discuss with OB/GYN or Maternal-Fetal Medicine specialist. Decision should involve shared decision-making, 
            considering patient preference, other risk factors not captured by this tool, and individual clinical context.
          </p>
          <p className="text-gray-700">
            <strong>Note:</strong> Some clinicians may recommend aspirin based on individual patient circumstances. Only a qualified healthcare provider can make this determination.
          </p>
        </>
      ),
    },
    'not-indicated': {
      icon: <Info className="w-16 h-16 text-blue-600" />,
      title: 'Aspirin Not Currently Indicated',
      color: 'blue',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      content: (
        <>
          <p className="text-gray-700 mb-3">
            <strong>Assessment:</strong> Based on information provided, patient does not meet current ACOG/USPSTF criteria for routine aspirin prophylaxis.
          </p>
          <p className="text-gray-700 mb-3">
            <strong>Recommendation:</strong> Discuss results with healthcare provider. Continue standard prenatal care with routine blood pressure monitoring as directed by OB/GYN.
          </p>
          <p className="text-gray-700">
            <strong>Patient Education:</strong> Healthcare provider should educate patient on preeclampsia warning signs (severe headache, vision changes, 
            right upper quadrant pain, severe swelling) and when to seek immediate medical attention.
          </p>
        </>
      ),
    },
  };

  const config = resultConfig[recommendation];

  return (
    <div>
      {/* Icon and Title */}
      <div className="flex flex-col items-center text-center mb-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          {config.icon}
        </motion.div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-maternal-teal mt-4 mb-2">
          {config.title}
        </h2>
      </div>

      {/* Summary Box */}
      <div className={`${config.bgColor} border-2 ${config.borderColor} rounded-2xl p-4 mb-6`}>
        <p className="text-sm text-gray-700">
          <strong>Risk Factor Count:</strong> {highCount} high-risk, {modCount} moderate-risk
        </p>
      </div>

      {/* Content */}
      <div className="text-sm sm:text-base space-y-4 mb-8">
        {config.content}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onReset}
          className="flex-1 bg-maternal-teal text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
        >
          Start New Assessment
        </button>
        <button
          onClick={() => window.print()}
          className="flex-1 border-2 border-maternal-teal text-maternal-teal px-6 py-3 rounded-xl font-semibold hover:bg-soft-sage transition-all"
        >
          Print Results
        </button>
      </div>
    </div>
  );
}

export default App;
