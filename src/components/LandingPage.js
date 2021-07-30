import React from 'react';
import Lottie from 'react-lottie'
import {makeStyles,useTheme} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from "../assets/Custom Software Icon.svg"

const useStyles = makeStyles(theme => ({
    animation:{
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]:{
            maxWidth: "30em"
        }
    },
    estimateButton:{
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    buttonContainer:{
        marginTop: "1"
    },
    learnButtonHero:{
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width:145,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    mainContainer:{
        marginTop: "5em",
        [theme.breakpoints.down("md")]:{
            marginTop: "2.5em"
        },
        [theme.breakpoints.down("xs")]:{
            marginTop: "1.5em"
        }

    },
    heroTextContainer:{
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]:{
            marginLeft: 0
        }
    },
    specialText:{
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
    },
    learnButton:{
       ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5
    },
    subtitle:{
        marginBottom: "1em"
    },
    icon:{
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: "12em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    }
}))

function LandingPage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }


    return (
        <Grid container direction={"column"} className={classes.mainContainer}>
            <Grid item> {/*----Hero Block-----*/ }
                <Grid container direction={"row"} justify={"flex-end"} alignItems={"center"}>
                    <Grid item sm className={classes.heroTextContainer}>
                        <Typography align={"center"} variant={"h2"}>
                            Bringing West Coast Technology <br/> to the Midwest
                        </Typography>
                        <Grid container justify={"center"} className={classes.buttonContainer}>
                            <Grid item>
                                <Button variant={"contained"} className={classes.estimateButton}>Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button variant={"outlined"} className={classes.learnButtonHero}>
                                    <span style={{marginRight: 10}}>Learn More</span>
                                    <ButtonArrow width={12} height={15} fill={theme.palette.common.blue}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm className={classes.animation}>
                        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />

                    </Grid>
                </Grid>
            </Grid>{/*----Hero Block-----*/ }


            <Grid item>
                {/*----Services Block-----*/ }
                {" "}
                <Grid container
                      direction={"row"}
                      className={classes.serviceContainer}
                      justify={matchesSM ? "center" : undefined}
                >
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign : matchesSM ? "center" : undefined}}>
                        <Typography variant={"h4"}>
                            Custom Software Development
                        </Typography>
                        <Typography variant={"subtitle1"} className={classes.subtitle}>
                            Save Energy. Save Time. Save Money
                        </Typography>
                        <Typography variant={"subtitle1"}>
                            Complete digital solution, from investigation to {" "}
                            <span className={classes.specialText}>celebration</span>
                        </Typography>
                        <Button variant={"outlined"} className={classes.learnButton}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item >
                        <img className={classes.icon} alt = "custom software icon" src={customSoftwareIcon} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        )
}

export default LandingPage;