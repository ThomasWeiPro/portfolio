import {
    Box, LinearProgress, makeStyles,
    Paper, Typography, CircularProgress, Fade
} from "@material-ui/core";
import Layout from "../../Layout";
import { useState } from "react";
import data from "./skillData.js"
import Flippy, { FrontSide, BackSide } from "react-flippy"

const useStyle = makeStyles({
    root: {
        width: "100vw",
        height: "100%",
        display: "flex",
        padding: "0 5% 0 5%",
    },
    circularBox: {
        width: "55%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    skillRange: {
        display: "flex",
        justifyContent: "space-between",
        width: "40%",
        flexDirection: "column",
        alignItems: "space-between"
    },
    linearBarBox: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2%",
        borderRadius: "20px",
        marginBottom: "3%"
    },
    linearBar: {
        height: "1em",
        width: "80%",
        borderRadius: "50px"
    },
    logo: {
        width: 50,
        height: 50
    },
    boxCover: {
        padding: 70,
        borderRadius: "50px",
        textAlign: "center",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    },
})

const CircularDisplay = ({ data, classes }) => {
    const circleSize = 300;
    return (
        <Flippy
            flipOnHover={true}
            flipOnClick={false}
            flipDirection="horizontal"
        >
            <FrontSide className={classes.boxCover}>
                <Box position="relative" display="inline-block">
                    <Box top={0} left={0} bottom={0} right={0} position="absolute">
                        <CircularProgress
                            style={{ color: "grey" }}
                            size={circleSize}
                            variant="determinate"
                            value={100}
                        />
                    </Box>
                    <CircularProgress size={circleSize} variant="static" value={data.level} />
                    <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography
                            variant="h2" component="div"
                            color="textSecondary"
                            style={{ fontFamily: "Lato" }}
                        >
                            {`${data.level}%`}
                        </Typography>
                    </Box>
                </Box>
                <Typography style={{ fontSize: 30, fontWeight: 900, padding: "2%" }}>
                    {data.name}
                </Typography>
                <img src={data.logo} alt="mini-logo" style={{ width: 30 }} />
            </FrontSide>
            <BackSide 
                className={classes.boxCover} 
                style={{padding: 40, textAlign: "left"}}
            >
                <Typography>
                    {data.experience}
                </Typography>
            </BackSide>
        </Flippy>
    );
}


const Skills = () => {
    const classes = useStyle();
    const [present, setPresent] = useState(null);

    return (
        <Layout title={"SKILLS"}>
            <Box className={classes.root}>
                <Box className={classes.skillRange}>
                    {data.map((skill, index) => {
                        return (
                            <Paper
                                id={index}
                                elevation={10}
                                className={classes.linearBarBox}
                                onMouseOver={() => { setPresent(skill) }}
                            >
                                <img
                                    src={skill.logo}
                                    alt={skill.name}
                                    className={classes.logo}
                                />
                                <LinearProgress
                                    variant="determinate"
                                    value={skill.level}
                                    className={classes.linearBar}
                                />
                                <div>
                                    <Typography style={{ fontFamily: "Lato" }}>
                                        {`${skill.level}%`}
                                    </Typography>
                                </div>
                            </Paper>
                        )
                    })}
                </Box>
                <Box className={classes.circularBox}>
                    {present != null && 
                    <Fade 
                        in={true}
                    >
                        <CircularDisplay data={present} classes={classes} />
                    </Fade>}
                </Box>
            </Box>
        </Layout>
    )
}

export default Skills;