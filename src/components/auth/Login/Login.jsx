import { Formik, Form, Field,   validateYupSchema, ErrorMessage,} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'

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
        <>
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
                        <Form>
                            <div>
                                <label htmlFor='email'>Email:</label>
                                <Field type='input' name='email' />
                            </div>
                            <div>
                                <label htmlFor='password'>Password:</label>
                                <Field type='input' name='password' />
                            </div>
                            <button type='submit'>Login</button>
                        </Form>
                    )
                }

            </Formik>
        </>
    )
}