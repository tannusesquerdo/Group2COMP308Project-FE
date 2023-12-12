import React from 'react';

//Nurse
const DailyMotivationalTips = React.lazy(() => import('./views/nurse/DailyMotivationalTips')); // Added on 12/04/2023 by TJ
const VitalSignsInputForm = React.lazy(() => import('./views/nurse/VitalSignsInputForm')); // Added on 12/04/2023 by TJ
const PreviousClinicalVisitInfo = React.lazy(() => import('./views/nurse/PreviousClinicalVisitInfo')); // Added on 12/04/2023 by TJ
const MedicalConditionsList = React.lazy(() => import('./views/nurse/MedicalConditionsList')); // Added on 12/04/2023 by TJ
//Patient
const DailyInfoInput = React.lazy(() => import('./views/patient/DailyInfoInput')); // Added on 12/04/2023 by TJ
const EmergencyAlert = React.lazy(() => import('./views/patient/EmergencyAlert')); // Added on 12/04/2023 by HK
const SymptomsChecklist = React.lazy(() => import('./views/patient/SymptomsChecklist')); // Added on 12/04/2023 by HK

const routes = [
  { path: '/', exact: true, name: 'Home' },
  //Nurse
  { path: '/nurse/daily-motivational-tips', name: 'Daily Motivational Tips', element: DailyMotivationalTips }, // Added on 12/04/2023 by TJ
  { path: '/nurse/vital-signs-input-form', name: 'Vital Signs Input Form', element: VitalSignsInputForm }, // Added on 12/04/2023 by TJ
  { path: '/nurse/previous-visit-info', name: 'Previous Clinical Visit Info', element: PreviousClinicalVisitInfo }, // Added on 12/04/2023 by TJ
  { path: '/nurse/medical-conditions-lists', name: 'Medical Conditions', element: MedicalConditionsList }, // Added on 12/04/2023 by TJ
  //Patient
  { path: '/patient/daily-info', name: 'Daily Information Input', element: DailyInfoInput }, // Added on 12/04/2023 by TJ  
  { path: '/patient/emergency-alert', name: 'Emergency Alert', element: EmergencyAlert }, // Added on 12/04/2023 by HK
  { path: '/patient/symptoms-checklist', name: 'Symptoms Checklist', element: SymptomsChecklist }, // Added on 12/04/2023 by HK
];

export default routes;
