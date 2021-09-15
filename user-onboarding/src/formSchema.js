import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Username is required!')
        .min(3, 'Username needs more than 3 characters!'),
    password: yup   
        .string()
        .trim()
        .required('Password is required!')
        .min(5, 'Password requires more than 5 characters!'),
    email: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email is required!'),
    tos: yup
        .boolean()
        .required('Terms of service are required!')
        .oneOf([true], 'Please agree to terms'),
})

export default formSchema;
