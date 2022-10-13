import '../auth.style.css';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

export const Register = ()=> {


    const RegisterSchema = Yup.object().shape({
        email: Yup.string()
            .required('*Email required')
            .email('*Invaild email format.'),
        password: Yup.string()
            .required('*Password required.'),
        fullname: Yup.string()
            .required('*Name required.')
            .min(4, '*Name is too short.')
    });

    return (
        <div className='container'>
        
            <div className='form-control'>
                <h2>Register</h2>
                <Formik
                validationSchema={RegisterSchema}
                initialValues={ {
                    email:"",
                    password: "",
                }}
                onSubmit={ (values)=> console.log(values)}
                >
                    {
                        ({touched, errors, onSubmit}) =>(
                            <Form className='auth'>
                                <div>
                                    <label htmlFor='fullname'>Full Name:</label>
                                    <Field type='input' name='fullname' className={errors.fullname && touched.fullname ? "error-inputs" : ""}/>
                                    {errors.fullname && touched.fullname && <div className='errors'>{errors.fullname}</div>}
                                </div>
                                <div>
                                    <label htmlFor='email'>Email:</label>
                                    <Field type='input' name='email' className={errors.email && touched.email ? "error-inputs" : ""}/>
                                    {errors.email && touched.email && <div className='errors'>{errors.email}</div>}
                                </div>
                                <div>
                                    <label htmlFor='password'>Password:</label>
                                    <Field type='input' name='password'  className={errors.password && touched.password ? "error-inputs" : ""} />
                                    {errors.password && touched.password && <div className='errors'>{errors.password}</div>}
                                </div>
                                <button type='submit'>Login</button>
                                <div>
                                    <h6>Already have an account?</h6>
                                    <Link to='/login'>Login Here</Link>
                                </div>
                            </Form>
                        )
                    }

                </Formik>
            </div>
        </div>
    )
}