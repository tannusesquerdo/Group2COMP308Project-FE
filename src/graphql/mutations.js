import { gql } from '@apollo/client'

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
    $age: String!
    , $sex: String!
    , $cp: String!
    , $trestbps: String!
    , $chol: String!
    , $restecg: String!
    , $thalach: String!
    , $exang: String!
    , $oldpeak: String!
    , $slope: String!
    , $ca: String!
    , $thal: String!
    , $patient: ID!
  ) {
    addVital(
      age: $age
      , sex: $sex
      , cp: $cp
      , trestbps: $trestbps
      , chol: $chol
      , restecg: $restecg
      , thalach: $thalach
      , exang: $exang
      , oldpeak: $oldpeak
      , slope: $slope
      , ca: $ca
      , thal: $thal
      , patient: $patient
    ) {
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

export const UPDATE_VITAL = gql`
  mutation UpdateVital(
    $id: ID!
    , $age: String!
    , $sex: String!
    , $cp: String!
    , $trestbps: String!
    , $chol: String!
    , $restecg: String!
    , $thalach: String!
    , $exang: String!
    , $oldpeak: String!
    , $slope: String!
    , $ca: String!
    , $thal: String!
    , $patient: ID!
    ) {
    updateVital(
      id: $id 
      , age: $age
      , sex: $sex
      , cp: $cp
      , trestbps: $trestbps
      , chol: $chol
      , restecg: $restecg
      , thalach: $thalach
      , exang: $exang
      , oldpeak: $oldpeak
      , slope: $slope
      , ca: $ca
      , thal: $thal
      , patient: $patient
    ) {
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

export const ADD_USER = gql`
  mutation AddUser(
    $email: String!
    , $password: String!
    , $firstName: String!
    , $lastName: String!
    , $roles: String!
    , $active: Boolean!
  ) {
    addUser(
      $email: String!
      , $password: String!
      , $firstName: String!
      , $lastName: String!
      , $roles: String!
      , $active: Boolean!
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

// Mutations to create tip
export const CREATE_TIP = gql`
  mutation CreateTip(
    $title: String!
    , $description: String!
  ) {
    createTip(
      title: $title
      , description: $description
    ) {
      title
      description
    }
  }
`;

export const CREATE_DAILYVITAL = gql`
  mutation CreateDailyVital(
    $pulseRate: Float!
    , $bloodPresure: Float!
    , $weight: Float!
    , $temperature: Float!
    , $respRate: Float!
    , $patient: ID!
  ) {
    createTip(
      pulseRate: $pulseRate
      , bloodPresure: $bloodPresure
      , weight: $weight
      , temperature: $temperature
      , respRate: $respRate
      , patient: $patient
    ) {
      pulseRate
      bloodPresure
      weight
      temperature
      respRate
      patient
    }
  }
`;

export const CREATE_ALERT = gql`
  mutation CreateAlert(
    $message: String!
    , $address: String!
    , $phone: String!
    , $patient: ID!
  ) {
    createTip(
      message: $message
      , address: $address
      , phone: $phone
      , patient: $patient
    ) {
      message
      address
      phone
      patient
    }
  }
`;