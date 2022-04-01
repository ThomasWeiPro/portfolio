import React from 'react';
import { makeStyles, IconButton, Box, Avatar, Typography, Button } from '@material-ui/core'
import Layout from "../../Layout"
import Pic from "../../assets/avatar.jpeg"
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyle = makeStyles(theme => ({
    root: {
        height: "100%",
        width: "100%",
        display: "flex",
    },
    cover: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    leftBox: {
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    rightBox: {
        width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"
    },
    picStyle: {
        width: "50vh",
        height: "50vh"
    },
    nameStyle: {
        fontSize: 50,
        fontWeight: 900,
        marginBottom: "2%",
    },
    infoGeneral: {
        fontSize: 18,
        fontWeight: 200,
        marginRight: "20%",
    },
    infoDetails: {
        fontWeight: 200,
        fontSize: 20,
    },
    contactBox: {
        marginLeft: "5%",
        marginTop: "5%",
        width: "100%",
        border: "none",
    },
    viewResume: {
        marginTop: "5%",
        backgroundColor: "#1b2735",
        borderRadius: "10px",
        height: "10%",
        width: "50%",
        textTransform: "none",
        fontSize: 20,
        color: "white"
    },
    icons: {
        display: "flex",
        marginTop: "7%",
        justifyContent: "space-between",
        width: "40%"
    },
    iconStyle: {
        width: "4vw",
        height: "8vh"
    }
}))

const About = () => {
    const classes = useStyle();
    return (
        <Layout title={"ABOUT ME"}>
            <Box className={classes.cover}>
                <Box className={classes.root}>
                    <Box className={classes.leftBox}>
                        <Avatar
                            alt="Profile Pic"
                            src={Pic}
                            className={classes.picStyle}
                        />
                    </Box>
                    <Box className={classes.rightBox}>
                        <Typography className={classes.nameStyle}>
                            Ettore Robino
                        </Typography>
                        <Box>
                            <Typography className={classes.infoGeneral}>
                            I am a senior frontend developer with 6+ years of experience supporting High Quality work and the fastest support.
                            Specialize in creating websites, which are customized and fully enriched for ultimate digital experience.
                            I create highly user-friendly static and dynamic types of websites without compromising the overall look and feel of the web site.

                                person, I usually spend my free time working on different 
                                projects in order to enhance my knowledge in CS, solidifying 
                                my foundation as well as be comfortable adapting to several 
                                technology stacks. As a person who is highly interested in Web 
                                Development field, most of my projects are Web Application 
                                projects. However, I am open-minded and I would love to get my 
                                hands on different fields as well. Please feel free to reach out
                                to me through one of the social medias below.
                            </Typography>
                            <table className={classes.contactBox}>
                                <tr>
                                    <td>
                                        <Typography className={classes.infoDetails}>
                                            <b>Email</b>:
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography className={classes.infoDetails}>
                                            paradisemanager8@gmail.com
                                        </Typography>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Typography className={classes.infoDetails}>
                                            <b>Phone</b>:
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography
                                            className={classes.infoDetails}
                                            style={{ fontFamily: 'Lato', fontWeight: 300 }}
                                        >
                                            (+39)080 999 7051
                                        </Typography>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Typography className={classes.infoDetails}>
                                            <b>Address</b>:
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography className={classes.infoDetails}>
                                            Bari, Italy
                                        </Typography>
                                    </td>
                                </tr>
                            </table>
                        </Box>
                        <Button 
                            className={classes.viewResume}
                            onClick={() => window.open("https://drive.google.com/file/d/1pbzQRaPD9dhdq4x7d2DNRyJVo6UxSj5q/view?usp=sharing", '_blank', 'noopener,noreferrer')}
                        >
                            See My Resume
                        </Button>
                    </Box>
                </Box>
                {/* <Box className={classes.icons}>
                    <IconButton
                        color="inherit"
                        onClick={() => window.open("https://github.com/nhd36", '_blank', 'noopener,noreferrer')}
                    >
                        <GitHubIcon className={classes.iconStyle} />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        onClick={() => window.open("https://www.linkedin.com/in/nam-hai-dao/", '_blank', 'noopener,noreferrer')}
                    >
                        <LinkedInIcon className={classes.iconStyle} />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        onClick={() => window.open("https://www.facebook.com/profile.php?id=100009633471586", '_blank', 'noopener,noreferrer')}
                    >
                        <FacebookIcon className={classes.iconStyle} />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        onClick={() => window.open("https://mail.google.com/mail/u/0/#inbox", '_blank', 'noopener,noreferrer')}
                    >
                        <MailIcon className={classes.iconStyle} />
                    </IconButton>
                </Box> */}
            </Box>
        </Layout>
    )
}

export default About;