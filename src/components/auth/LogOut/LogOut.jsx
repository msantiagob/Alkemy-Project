import { Navigate } from "react-router-dom";
export const LogOut = () => {
  localStorage.clear();

  return (
    <>
      {<Navigate to={"/login"} replace={true} />}
      <h3>Cargando... </h3>
    </>
  );
};
