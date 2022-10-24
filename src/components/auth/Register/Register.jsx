import '../auth.style.css';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Register = ()=> {

    const navigate = useNavigate()
    const RegisterSchema = Yup.object().shape({
        email: Yup.string()
            .required('*Campo requerido.')
            .email('*Invaild email format.'),
        password: Yup.string()
            .required('*Campo requerido.'),
        fullname: Yup.string()
            .required('*Campo requerido.')
            .min(4, '*Campo requerido.')
    });

    return (
        <div className='container'>
        
            <div className='form-control'>
                <h2>Registrarse</h2>
                <Formik
                validationSchema={RegisterSchema}
                initialValues={ {
                    email:"",
                    password: "",
                }}
                onSubmit={ ()=>{
                    
                    Swal.fire({
                        title:"Registrado",
                        text:"Seras loggeado automaticamente",
                        icon:"success",
                    })
                    localStorage.setItem("logged", "yes")
                    navigate("/")

                }}
                >
                    {
                        ({touched, errors, onSubmit}) =>(
                            <Form className='auth'>
                                <div>
                                    <label htmlFor='fullname'>Nombre completo:</label>
                                    <Field type='input' name='fullname' className={errors.fullname && touched.fullname ? "error-inputs" : ""}/>
                                    {errors.fullname && touched.fullname && <div className='errors'>{errors.fullname}</div>}
                                </div>
                                <div>
                                    <label htmlFor='email'>Email:</label>
                                    <Field type='input' name='email' className={errors.email && touched.email ? "error-inputs" : ""}/>
                                    {errors.email && touched.email && <div className='errors'>{errors.email}</div>}
                                </div>
                                <div>
                                    <label htmlFor='password'>Contrasena:</label>
                                    <Field type='input' name='password'  className={errors.password && touched.password ? "error-inputs" : ""} />
                                    {errors.password && touched.password && <div className='errors'>{errors.password}</div>}
                                </div>
                                <button type='submit' className='auth--btn'>Registrarse</button>
                                <div>
                                    <h6>Ya tiene una cuenta?</h6>
                                    <Link to='/login'>Iniciar sesion</Link>
                                </div>
                            </Form>
                        )
                    }

                </Formik>
            </div>
        </div>
    )
}