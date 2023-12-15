import { useSelector } from "react-redux";

const Roles = {
  PATIENT: "Patient",
  NURSE: "Nurse",
};

const useAuth = () => {
  const token = useSelector((state) => state.auth.token);
  let isPatient = false;
  let isNurse = false;
  let status = "Patient";

  if (token) {
    const user = useSelector((state) => state.auth.user);
    const { roles } = user;

    if (roles) {
      isPatient = roles.includes(Roles.PATIENT);
      isNurse = roles.includes(Roles.NURSE);

      if (isPatient) status = "Patient";
      if (isNurse) status = "Nurse";

      return { user, roles, status, isPatient, isNurse };
    }
  }

  return {
    user: {},
    roles: [],
    isPatient,
    isNurse,
    status,
  };
};
export default useAuth;
