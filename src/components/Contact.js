import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";

import ButtonArrow from "./ui/ButtonArrow";

import background from "../assets/background.jpg";
import mobileBackground from "../assets/mobileBackground.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";

import * as Yup from 'yup';
import { useFormik } from 'formik';

const phoneNumberCheck = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const contactValidation = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    phone: Yup.string('phone should be a number').matches(phoneNumberCheck, 'Enter a phone number'),
    description: Yup.string().required()

});

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        paddingBottom: "10em",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: "1.5rem",
        marginRight: "5em",
        marginLeft: "2em",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("md")]: {
            marginLeft: 0,
            marginRight: 0
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        }
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: "5em",
        borderRadius: 5
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: "1rem",
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")]: {
            height: 40,
            width: 225
        }
    }
}));

export default function Contact(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");
    const [emailHelper, setEmailHelper] = useState("");

    const [phone, setPhone] = useState("");
    const [phoneHelper, setPhoneHelper] = useState("");

    const [message, setMessage] = useState("");

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const [alert, setAlert] = useState({open: false, color: ""});
    const [alertMessage, setAlertMesssage] = useState("");

    const formik = useFormik({
        initialValues: {
            name,
            email,
            phone,
            message
        },

        validationSchema: contactValidation,
        onSubmit: ()=>{
            onConfirm()
        }
    });

    const onConfirm = () => {

        console.log("submitted")

    };

    const buttonContents = (
        <React.Fragment>
            Send Message
            <img src={airplane} alt="paper airplane" style={{marginLeft: "1em"}}/>
        </React.Fragment>
    );



    return (
        <form >
            <Grid container direction="row">
                <Grid
                    item
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    style={{
                        marginBottom: matchesMD ? "5em" : 0,
                        marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0
                    }}
                    lg={4}
                    xl={3}
                >
                    <Grid item>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography
                                    align={matchesMD ? "center" : undefined}
                                    variant="h2"
                                    style={{lineHeight: 1}}
                                >
                                    Contact Us
                                </Typography>
                                <Typography
                                    align={matchesMD ? "center" : undefined}
                                    variant="body1"
                                    style={{color: theme.palette.common.blue}}
                                >
                                    We're waiting.
                                </Typography>
                            </Grid>
                            <Grid item container style={{marginTop: "2em"}}>
                                <Grid item>
                                    <img
                                        src={phoneIcon}
                                        alt="phone"
                                        style={{marginRight: "0.5em"}}
                                    />
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant="body1"
                                        style={{color: theme.palette.common.blue, fontSize: "1rem"}}
                                    >
                                        <a
                                            href="tel:5555555555"
                                            style={{textDecoration: "none", color: "inherit"}}
                                        >
                                            (555) 555-5555
                                        </a>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item container style={{marginBottom: "2em"}}>
                                <Grid item>
                                    <img
                                        src={emailIcon}
                                        alt="envelope"
                                        style={{marginRight: "0.5em", verticalAlign: "bottom"}}
                                    />
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant="body1"
                                        style={{color: theme.palette.common.blue, fontSize: "1rem"}}
                                    >
                                        <a
                                            href="mailto:zachary@gmail.com"
                                            style={{textDecoration: "none", color: "inherit"}}
                                        >
                                            zachary@gmail.com
                                        </a>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item container direction="column" style={{width: "20em"}}>
                                <Grid item style={{marginBottom: "0.5em"}}>
                                    <TextField
                                        label="Name"
                                        id="name"
                                        fullWidth
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        error={Boolean(formik.errors.name)}
                                        helperText={formik.errors.name}
                                    />
                                </Grid>
                                <Grid item style={{marginBottom: "0.5em"}}>
                                    <TextField
                                        label="Email"
                                        error={Boolean(formik.errors.email)}
                                        helperText={formik.errors.email}
                                        id="email"
                                        fullWidth
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid item style={{marginBottom: "0.5em"}}>
                                    <TextField
                                        label="Phone"
                                        helperText={formik.errors.phone}
                                        error={Boolean(formik.errors.phone)}
                                        id="phone"
                                        fullWidth
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item style={{width: "20em"}}>
                                <TextField
                                    InputProps={{disableUnderline: true}}
                                    value={formik.values.message}
                                    className={classes.message}
                                    multiline
                                    fullWidth
                                    rows={10}
                                    id="message"
                                    onChange={formik.handleChange}
                                    error={Boolean(formik.errors.message)}
                                    helperText={ formik.errors.message}
                                />
                            </Grid>
                            <Grid item container justify="center" style={{marginTop: "2em"}}>
                                <Button
                                    disabled={
                                        name.length === 0 ||
                                        message.length === 0
                                    }
                                    variant="contained"
                                    className={classes.sendButton}
                                    onClick={() => setOpen(true)}
                                >
                                    {buttonContents}
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    item
                    container
                    direction={matchesMD ? "column" : "row"}
                    className={classes.background}
                    alignItems="center"
                    justify={matchesMD ? "center" : undefined}
                    lg={8}
                    xl={9}
                >
                    <Grid
                        item
                        style={{
                            marginLeft: matchesMD ? 0 : "3em",
                            textAlign: matchesMD ? "center" : "inherit"
                        }}
                    >
                        <Grid container direction="column">
                            <Grid item>
                                <Typography align={matchesMD ? "center" : undefined} variant="h2">
                                    Simple Software.
                                    <br/>
                                    Revolutionary Results.
                                </Typography>
                                <Typography
                                    align={matchesMD ? "center" : undefined}
                                    variant="subtitle2"
                                    style={{fontSize: "1.5rem"}}
                                >
                                    Take advantage of the 21st Century.
                                </Typography>
                                <Grid container justify={matchesMD ? "center" : undefined} item>
                                    <Button
                                        component={Link}
                                        to="/revolution"
                                        variant="outlined"
                                        className={classes.learnButton}
                                        onClick={() => props.setValue(2)}
                                    >
                                        <span style={{marginRight: 5}}>Learn More</span>
                                        <ButtonArrow
                                            width={10}
                                            height={10}
                                            fill={theme.palette.common.blue}
                                        />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button
                            component={Link}
                            to="/estimate"
                            variant="contained"
                            className={classes.estimateButton}
                            onClick={() => props.setValue(5)}
                        >
                            Free Estimate
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>

    );
}