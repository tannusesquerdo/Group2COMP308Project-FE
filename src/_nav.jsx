import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilBellExclamation,
  cilBullhorn,
  cilPuzzle,
  cilUser,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavTitle,
    name: "Patient",
    roles: ["Patient"],
  },
  {
    component: CNavGroup,
    name: "Patient",
    to: "/patient/daily-info",
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    roles: ["Patient"],
    items: [
      {
        component: CNavItem,
        name: "Create Vital Signs",
        to: "/patient/create-vital",
        roles: ["Patient"],
      },
      {
        component: CNavItem,
        name: "Symptoms Checklist",
        to: "/patient/symptoms-checklist",
        roles: ["Patient"],
      },
      {
        component: CNavItem,
        name: "Create Alert",
        to: "/patient/create-vital-alert",
        roles: ["Patient"],
      },
    ],
  },
  {
    component: CNavTitle,
    name: "Nurse",
    roles: ["Nurse"],
  },
  {
    component: CNavGroup,
    name: "Patients",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    roles: ["Nurse"],
    items: [
      {
        component: CNavItem,
        name: "All Patients",
        to: "/nurse/patients",
        roles: ["Nurse"],
      },
      {
        component: CNavItem,
        name: "Add Patient",
        to: "/nurse/add/patient",
        roles: ["Nurse"],
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Daily Tips",
    icon: <CIcon icon={cilBullhorn} customClassName="nav-icon" />,
    roles: ["Nurse"],
    items: [
      {
        component: CNavItem,
        name: "Create Daily Tip",
        to: "/nurse/create-tip",
        roles: ["Nurse"],
      },
      {
        component: CNavItem,
        name: "All Tips",
        to: "/nurse/list-tip",
        roles: ["Nurse"],
      },
    ],
  },
  {
    component: CNavItem,
    name: "Alerts",
    to: "/nurse/alert-list",
    icon: <CIcon icon={cilBellExclamation} customClassName="nav-icon" />,
    roles: ["Nurse"],
  },
  {
    component: CNavGroup,
    name: "Nurse",
    to: "/nurse/daily-motivational-tips",
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    roles: ["Nurse"],
    items: [
      {
        component: CNavItem,
        name: "Medical Conditions List",
        to: "/nurse/medical-conditions-lists",
        roles: ["Nurse"],
      },      
    ],
  },
];

export default _nav;
