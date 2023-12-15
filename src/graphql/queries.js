import { gql } from "@apollo/client";
//queries read from database
export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn {
      status
      message
      data {
        token
        user {
          _id
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
      _id
      email
      firstName
      lastName
      roles
      active
      gender
      dob
    }
  }
`;

export const GET_VITAL = gql`
  query GetVital($patient: ID!) {
    getVital(patient: $patient) {
      _id
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

export const GET_TIP = gql`
  query GetTip {
    getTip {
      _id
      title
      description
    }
  }
`;

export const GET_ALERT = gql`
  query GetAlert($patient: ID!) {
    getAlert(patient: $patient) {
      _id
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
      _id
      message
      address
      phone
      patient
    }
  }
`;

export const GET_DAILY_VITAL = gql`
  query GetDailyVital($patient: String!) {
    getDailyVital(patient: $patient) {
      _id
      pulseRate
      bloodPresure
      weight
      temperature
      updateDate
      respRate
    }
  }
`;
