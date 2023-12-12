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

export const GET_USERS = gql`
  query GetUsers {
    getAllUsers {
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
    getVital(patient: $patient) {
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
    getDailyVital(patient: $patient) {
      pulseRate
      bloodPresure
      weight
      temperature
      respRate
      patient
    }
  }
`;

export const GET_TIP = gql`
  query GetTip {
    getTip {
      title
      description
    }
  }
`;

export const GET_ALERT = gql`
  query GetAlert($patient: ID!) {
    getAlert(patient: $patient) {
      message
      address
      phone
      patient
    }
  }
`;

export const GET_ALERTS = gql`
  query GetAlerts {
    getAlerts {
      message
      address
      phone
      patient
    }
  }
`;