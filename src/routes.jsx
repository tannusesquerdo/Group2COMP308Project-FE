import React from 'react';


const Landing = React.lazy(() => import('./views/nurse/Landing')); // Added on 12/14/2023 by TJ
//Nurse
const VitalSignsInputForm = React.lazy(() => import('./views/nurse/VitalSignsInputForm')); // Added on 12/04/2023 by TJ
const PreviousClinicalVisitInfo = React.lazy(() => import('./views/nurse/PreviousClinicalVisitInfo')); // Added on 12/04/2023 by TJ
const MedicalConditionsList = React.lazy(() => import('./views/nurse/MedicalConditionsList')); // Added on 12/04/2023 by TJ
const createTip = React.lazy(() => import('./views/nurse/CreateTip')); // Added on 13/04/2023 by HK
const ListTip = React.lazy(() => import('./views/nurse/ListTip')); // Added on 13/04/2023 by HK
const EditTip = React.lazy(() => import('./views/nurse/EditTip')); // Added on 13/04/2023 by HK
const AlertList = React.lazy(() => import('./views/nurse/AlertList')); // Added on 12/04/2023 by HK
const Patients = React.lazy(() => import('./views/nurse/Patients')); // Added on 12/04/2023 by HK
//Patient
const CreateVital = React.lazy(() => import('./views/patient/CreateVital')); // Added on 12/04/2023 by TJ
const SymptomsChecklist = React.lazy(() => import('./views/patient/SymptomsChecklist')); // Added on 12/04/2023 by HK
const CreateVitalAlert = React.lazy(() => import('./views/patient/CreateVitalAlert')); // Added on 12/04/2023 by HK

const routes = [
  { path: '/', exact: true, name: 'Home' },
  {path: '/nurse/welcome', name: 'Landing Page', element: Landing}, // Added on 12/14/2023 by TJ
  //Nurse
  { path: '/nurse/vital-signs-input-form', name: 'Vital Signs Input Form', element: VitalSignsInputForm }, // Added on 12/04/2023 by HK
  { path: '/nurse/list-tip', name: 'List Tip', element: ListTip }, // Added on 13/04/2023 by HK
  { path: '/nurse/edit-tip/:id', name: 'Edit Tip', element: EditTip }, // Added on 13/04/2023 by HK
  { path: '/nurse/create-tip', name: 'Create Tip', element: createTip }, // Added on 13/04/2023 by HK
  { path: '/nurse/previous-visit-info', name: 'Previous Clinical Visit Info', element: PreviousClinicalVisitInfo }, // Added on 12/04/2023 by TJ
  { path: '/nurse/medical-conditions-lists', name: 'Medical Conditions', element: MedicalConditionsList }, // Added on 12/04/2023 by TJ
  { path: '/nurse/alert-list', name: 'Alert List', element: AlertList }, // Added on 12/04/2023 by HK
  { path: '/nurse/patients', name: 'Patients', element: Patients }, // Added on 12/04/2023 by HK
  //Patient
  { path: '/patient/create-vital', name: 'Create Vital', element: CreateVital }, // Added on 12/04/2023 by TJ
  { path: '/patient/symptoms-checklist', name: 'Symptoms Checklist', element: SymptomsChecklist }, // Added on 12/04/2023 by HK
  { path: '/patient/create-vital-alert', name: 'Create Vital Alert', element: CreateVitalAlert }, // Added on 12/04/2023 by HK
];

export default routes;
