import '../auth.style.css'

import { Formik, Form, Field,   validateYupSchema, ErrorMessage,} from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom'

export const Login = ()=> {

    const navigate = useNavigate();

    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .required('*Email required')
            .email('*Invaild email format.'),
        password: Yup.string()
            .required('*Password required.'),
    });

    return(
        <div className='container'>
        
            <div className='form-control'>
                <h2>Login</h2>
                <Formik
                validationSchema={loginSchema}
                initialValues={ {
                    email:"",
                    password: "",
                }}
                onSubmit={ ()=> navigate('/') }
                >
                    {
                        ({touched, errors, onSubmit}) =>(
                            <Form className='auth'>
                                <div>
                                    <label htmlFor='email'>Email:</label>
                                    <Field type='input' name='email' />
                                    {errors.email && touched.email && <div className='errors'>{errors.email}</div>}
                                </div>
                                <div>
                                    <label htmlFor='password'>Password:</label>
                                    <Field type='input' name='password' />
                                </div>
                                <button type='submit'>Login</button>
                                <div>
                                    <h6>Don't have an account?</h6>
                                    <Link to='/register'>Register Here</Link>
                                </div>
                            </Form>
                        )
                    }

                </Formik>
            </div>
        </div>
    )
}