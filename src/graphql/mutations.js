import { gql } from '@apollo/client'
import e from 'express';

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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

export const LOG_OUT = gql`
  mutation LogOut {
    logOut
  }
`;

export const ADD_VITAL = gql`
  mutation AddVital(
    $age: Int!
    , $sex: Int!
    , $cp: Int!
    , $trestbps: Float!
    , $chol: Float!
    , $fbs: Int!
    , $restecg: Int!
    , $thalach: Float!
    , $exang: Float!
    , $oldpeak: Float!
    , $slope: Int!
    , $ca: Int!
    , $thal: Int!
    , $num: Int!
    , $updateDate: String!
    , $patient: ID!
  ) {
    createNewVital(
      age: $age
      , sex: $sex
      , cp: $cp
      , trestbps: $trestbps
      , chol: $chol
      , fbs: $fbs
      , restecg: $restecg
      , thalach: $thalach
      , exang: $exang
      , oldpeak: $oldpeak
      , slope: $slope
      , ca: $ca
      , thal: $thal
      , num: $num
      , updateDate: $updateDate
      , patient: $patient
    ) {
      id
      age
      sex
      cp
      trestbps
      chol
      fbs
      restecg
      thalach
      exang
      oldpeak
      slope
      ca
      thal
      num
      updateDate
      patient
    }
  }
`;

export const GET_VITALS = gql`
  query GetVitals {
    vitals {
      id
      age
      sex
      cp
      trestbps
      chol
      fbs
      restecg
      thalach
      exang
      oldpeak
      slope
      ca
      thal
      num
      updateDate
      patient
    }
  }
`;


export const UPDATE_VITAL = gql`
  mutation UpdateVital(
    $id: ID!
    , $age: Int!
    , $sex: Int!
    , $cp: Int!
    , $trestbps: Float!
    , $chol: Float!
    , $fbs: Int!
    , $restecg: Int!
    , $thalach: Float!
    , $exang: Float!
    , $oldpeak: Float!
    , $slope: Int!
    , $ca: Int!
    , $thal: Int!
    , $num: Int!
    , $updateDate: String!
    , $patient: ID!
    ) {
    updateVital(
      id: $id 
      , age: $age
      , sex: $sex
      , cp: $cp
      , trestbps: $trestbps
      , chol: $chol
      , fbs: $fbs
      , restecg: $restecg
      , thalach: $thalach
      , exang: $exang
      , oldpeak: $oldpeak
      , slope: $slope
      , ca: $ca
      , thal: $thal
      , num: $num
      , updateDate: $updateDate
      , patient: $patient
    ) {
      id
      age
      sex
      cp
      trestbps
      chol
      fbs
      restecg
      thalach
      exang
      oldpeak
      slope
      ca
      thal
      num
      updateDate
      patient
    }
  }
`;


export const DELETE_VITAL = gql`
  mutation DeleteVital($id: ID!) {
      deleteVital(id: $id) {
      }
    }
`;

export const ADD_USER = gql`
  mutation AddUser(
    $email: String!
    , $password: String!
    , $firstName: String!
    , $lastName: String!
    , $roles: String!
    , $active: Boolean!
  ) {
    createNewUser(
      email: $email
      , password: $password
      , firstName: $firstName
      , lastName: $lastName
      , roles: $roles
      , active: $active
    ) {
      id
      email
      password
      firstName
      lastName
      roles
      active
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      email
      password
      firstName
      lastName
      roles
      active
    }
  }
`;
export const UPDATE_USER = gql`
  mutation UpdateUser(
    $id: ID!
    , $email: String!
    , $password: String!
    , $firstName: String!
    , $lastName: String!
    , $roles: String!
    , $active: Boolean!
  ) {
    updateUser(
      id: $id
      , email: $email
      , password: $password
      , firstName: $firstName
      , lastName: $lastName
      , roles: $roles
      , active: $active
    ) {
      id
      email
      password
      firstName
      lastName
      roles
      active
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      email
      password
      firstName
      lastName
      roles
      active
    }
  }
`;


// Mutations to create tip
export const CREATE_TIP = gql`
  mutation CreateTip(
    $title: String!
    , $description: String!
  ) {
    createNewTip(
      title: $title
      , description: $description
    ) {
      title
      description
    }
  }
`;

export const GET_TIPS = gql`
  query GetTips {
    getTips {
      title
      description
    }
  }
`;

export const DELETE_TIPS = gql`
  mutation DeleteTip($title: String!) {
    deleteTip(title: $title) {
      title
      description
    }
  }
`;

export const UPDATE_TIPS = gql`
  mutation UpdateTip(
    $title: String!
    , $description: String!
  ) {
    updateTip(
      title: $title
      , description: $description
    ) {
      title
      description
    }
  }
`;


export const CREATE_DAILY_VITALS = gql`
    mutation createDailyVital(
        $pulseRate: Float!
        $bloodPressure: Float!
        $weight: Float!
        $temperature: Float!
        $respRate: Float!
        $updateDate: DateTime!
        $patientId: ID!
    ) {
        createDailyVital(
            pulseRate: $pulseRate
            bloodPressure: $bloodPressure
            weight: $weight
            temperature: $temperature
            respRate: $respRate
            updateDate: $updateDate
            patient: $patientId
        ) {
            pulseRate
            bloodPressure
            weight
            temperature
            respRate
            updateDate
            patient {
                _id
            }
        }
    }
`;

export const CREATE_VITAL_ALERT = gql`
    mutation createVitalAlert(
        $message: String!
        $address: String!
        $phone: String!
        $patientId: ID!
    ) { 
        createVitalAlert(
            message: $message
            address: $address
            phone: $phone
            patient: $patientId
        ) {
            message
            address
            phone
            patient {
                _id
            }
        }
    }
`;

export const GET_ALERTS = gql`
    query getAlerts($patientId: ID!) {
        getAlerts(patient: $patientId) {
            message
            address
            phone
            patient {
                _id
            }
        }
    }
`;

export const DELETE_ALERT = gql`
    mutation deleteAlert($id: ID!) {
        deleteAlert(id: $id) {
            message
            address
            phone
            patient {
                _id
            }
        }
    }
`;

export const GET_DAILY_VITALS = gql`
    query getDailyVitals($patientId: ID!) {
        getDailyVitals(patient: $patientId) {
            pulseRate
            bloodPressure
            weight
            temperature
            respRate
            updateDate
            patient {
                _id
            }
        }
    }
`;  