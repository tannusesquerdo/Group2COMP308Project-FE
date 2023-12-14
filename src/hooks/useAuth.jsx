import {
  selectCurrentToken,
  selectCurrentUser,
} from "store/slices/auth/auth.slice";

import { useAppSelector } from "./reduxHooks";
import { Roles } from "config/roles";
import { useSelector } from "react-redux";

const Roles = {
  PATIENT: "Patient",
  NURSE: "Nurse",
};

const useAuth = () => {
  const token = useAppSelector(selectCurrentToken);
  let isPatient = false;
  let isNurse = false;
  let status = "patient";

  if (token) {
    const user = useSelector(selectCurrentUser);
    const { roles } = user;

    if (roles) {
      isPatient = roles.includes(Roles.AGENT);
      isNurse = roles.includes(Roles.EMPLOYEE);

      if (isAgent) status = "Patient";
      if (isNurse) status = "Nurse";

      return { user, roles, status, isPatient, isNurse };
    }
  }

  return {
    user: {},
    roles: [],
    isAgent,
    isEmployee,
    isCollege,
    isAdmin,
    status,
  };
};
export default useAuth;
