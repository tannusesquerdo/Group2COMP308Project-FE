import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilPuzzle
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  /*{
    component: CNavTitle,
    name: 'Student',
  },
  {
    component: CNavGroup,
    name: 'Courses',
    to: '/courses',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'My Courses',
        to: '/courses/my',
      }
    ],
  },
  {
    component: CNavTitle,
    name: 'Admin',
  },
  {
    component: CNavGroup,
    name: 'Students',
    to: '/admin/students',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Students',
        to: '/admin/students',
      },
      {
        component: CNavItem,
        name: 'Add Student',
        to: '/admin/students/create',
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'Courses',
    to: '/admin/courses/',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Courses',
        to: '/admin/courses/',
      },
      {
        component: CNavItem,
        name: 'Add Course',
        to: '/admin/courses/add',
      }
    ],
  },*/
  {
    component: CNavTitle,
    name: 'Patient',
  },
  {
    component: CNavGroup,
    name: 'Patient',
    to: '/patient/daily-info',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Daily Check-In',
        to: '/patient/daily-info',
      },
      {
        component: CNavItem,
        name: 'Emergency Alert',
        to: '/patient/emergency-alert',
      },
      {
        component: CNavItem,
        name: 'Symptoms Checklist',
        to: '/patient/symptoms-checklist',
      }
    ],
  }, 
  {
    component: CNavTitle,
    name: 'Nurse',
  },
  {
    component: CNavGroup,
    name: 'Nurse',
    to: '/nurse/daily-motivational-tips',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Daily Motivational Tips',
        to: '/nurse/daily-motivational-tips',
      },
      {
        component: CNavItem,
        name: 'Vital Signs Input Form',
        to: '/nurse/vital-signs-input-form',
      },
      {
        component: CNavItem,
        name: 'Previous Clinical Visit Info',
        to: '/nurse/previous-visit-info',
      },
      {
        component: CNavItem,
        name: 'Medical Conditions List',
        to: '/nurse/medical-conditions-lists',
      }
    ],
  },
]

export default _nav
