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
  mutation AddVital($age: String!
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
                    ) {
    addVital(age: $age
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
    }
  }
`;

export const UPDATE_VITAL = gql`
  mutation UpdateVital($id: ID!
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
                    ) {
    updateVital(id: $id 
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
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($email: String!
  				   , $password: String!
  				   , $firstName: String!
  				   , $lastName: String!
  				   , $roles: String!
  				   , $active: Boolean!
  				   ) {
    addUser($email: String!
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
  mutation UpdateUser($id: ID!
  						 , $email: String!
  						 , $password: String!
  						 , $firstName: String!
  						 , $lastName: String!
  						 , $roles: String!
  						 , $active: Boolean!
  						 ) {
    updateUser(id: $id
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

//Nurse Mutations
export const CREATE_TIP = gql`
    mutation CreateTip(
        $title: String!
        $description: String!
    ) {
        createTip(
            title: $title
            description: $description
        ) {
            title
            description
        }
    }
`;    