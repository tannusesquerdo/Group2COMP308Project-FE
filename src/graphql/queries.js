import { gql } from '@apollo/client';

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn {
      status
      message
      data {
        screen
        token
        id
        user {
          id
          email
          firstName
          lastName
          roles
          active
        }
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser {
    user {
      id
      email
      firstName
      lastName
      roles
      active
    }
  }
`;

export const GET_VITAL = gql`
  query GetVital($patient: ID!) {
    vital(patient: $patient) {
      id
      age
      sex
      cp
      trestbps
      chol
      restecg
      thalach
      exang
      oldpeak
      slope
      ca
      thal
      patient
    }
  }
`;

export const GET_DAILYVITAL = gql`
  query GetDailyVital($patient: ID!) {
    dailyVital(patient: $patient) {
      pulseRate
      bloodPresure
      weight
      temperature
      respRate
      patient
    }
  }
`;

export const GET_ALERT = gql`
  query GetAlert($patient: ID!) {
    alert(patient: $patient) {
      message
      address
      phone
      patient
    }
  }
`;

export const GET_ALERTS = gql`
  query GetAlerts {
    alert {
      message
      address
      phone
      patient
    }
  }
`;