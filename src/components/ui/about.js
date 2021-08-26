import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const WithMaterialUI = () => {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit:()=>{
            console.log("submitted")
            console.log(formik.values.email)
        },
        onChange: ()=>{
            console.log("changed something")
        }
    });
    const handleSubmits=()=> {
        console.log(formik.values.email)
    }

    return (
        <div>
            <form >
                <Grid container>
                    <Grid item>
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={Boolean(formik.errors.email)}
                            helperText={ formik.errors.email}
                        />
                        <TextField
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={ Boolean(formik.errors.password)}
                            helperText={formik.errors.password}
                        />
                        <Button color="primary" variant="contained" fullWidth onClick={()=> handleSubmits()}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>

            </form>
        </div>
    );
};

export default WithMaterialUI;