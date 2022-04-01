import { makeStyles, Typography } from "@material-ui/core";
import "./intro.css"
import Typed from "react-typed"

const useStyle = makeStyles({
    root: {
        color: "white",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: 'Lato'
    },
    introText: {
        fontSize: "4em"
    }
})

const Intro = () => {
    const classes = useStyle();
    return (
        <div className="intro">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div className={classes.root}>
                <Typography
                    style={{fontWeight: 900, fontSize: "6em"}}
                >
                    Hello, I'm Ettore Robino
                </Typography>
                <Typed
                    className={classes.introText}
                    strings={["Software Engineer",
                                "Web Developer",
                                "Frontend Developer",
                                "Backend Developer"
                            ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
            </div>
        </div>
    )
}

export default Intro;