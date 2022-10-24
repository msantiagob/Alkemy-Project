import "../auth.style.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .required("*Campo requerido.")
      .email("*Campo requerido."),
    password: Yup.string().required("*Campo requerido."),
  });

  return (
    <div className="container">
      <div className="form-control">
        <h2>Ingresa con tu cuenta</h2>
        <Formik
          validationSchema={loginSchema}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={() => {
            localStorage.setItem("logged", "yes");
            navigate("/");
          }}
        >
          {({ touched, errors, onSubmit }) => (
            <Form className="auth">
              <div>
                <label htmlFor="email">Email:</label>
                <Field
                  type="input"
                  name="email"
                  className={
                    errors.email && touched.email ? "error-inputs" : ""
                  }
                />
                {errors.email && touched.email && (
                  <div className="errors">{errors.email}</div>
                )}
              </div>
              <div>
                <label htmlFor="password">Contrasena:</label>
                <Field
                  type="password"
                  name="password"
                  className={
                    errors.password && touched.password ? "error-inputs" : ""
                  }
                />
                {errors.password && touched.password && (
                  <div className="errors">{errors.password}</div>
                )}
              </div>
              <button type="submit" className='auth--btn'>Iniciar sesion</button>
              <div>
                <h6>No tiene una cuenta?</h6>
                <Link to="/register">Registrarse aqui</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
