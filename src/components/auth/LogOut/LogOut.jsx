import { Navigate } from "react-router-dom";
export const LogOut = ({setIsLogged}) => {
  localStorage.clear();
  setIsLogged(false)
  return (
    <>
      {<Navigate to={"/login"} replace={true} />}
      <h3>Cargando... </h3>
    </>
  );
};
