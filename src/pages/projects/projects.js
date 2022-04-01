import Layout from "../../Layout"
import {
    makeStyles, Typography,
    Box, Button, Fade, Zoom, Modal
} from "@material-ui/core"
import "../intro/intro.css"
import Personal from "../../assets/personal.svg"
import Group from "../../assets/group.svg"
import { useState } from "react";
import ModalProject from "./modal"
import { personal, group } from "./projectData"

const useStyle = makeStyles({
    root: {
        position: "relative",
        width: "80vw",
        height: "inherit",
        display: "flex",
        justifyContent: "space-between"
    },
    buttonCover: {
        textTransform: "none",
        height: "100%",
        width: "50%",
        minHeight: 0,
        minWidth: 0,
        borderRadius: "50px",
        position: "relative"
    },
    box: {
        position: "relative",
        textAlign: "center",
        color: "white",
        width: "100%",
        height: "70vh",
        borderRadius: "50px",
        fontFamily: "Lato"
    },
    boxContent: {
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        zIndex: 1
    },
    carousel: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    }
});

const Projects = () => {
    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(false);
    const classes = useStyle();
    return (
        <Layout title={"PROJECTS"}>
            <Box className={classes.root}>
                {/* Display Left Box */}
                <Zoom in={true}>
                    <Button className={classes.buttonCover}>
                        <Box
                            elevation={20}
                            className={`${classes.box} intro`}
                            onClick={() => setLeft(!left)}
                        >
                            <div id="stars"></div>
                            <div id="stars2"></div>
                            <div id="stars3"></div>
                            <Box className={classes.boxContent}>
                                <img src={Personal} alt="personal" width="50%" />
                                <Typography style={{ fontWeight: 900, fontSize: "4em" }}>
                                    Personal
                                </Typography>
                            </Box>
                        </Box>
                    </Button>
                </Zoom>
                {left && <Modal
                    open={left}
                    onClose={() => setLeft(!left)}
                    closeAfterTransition
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={left}>
                        <ModalProject data={personal} setLeft={setLeft} />
                    </Fade>
                </Modal>}
                {/* Display Right Box */}
                <Zoom in={true}>
                    <Button className={classes.buttonCover}>
                        <Box
                            elevation={20}
                            className={`${classes.box} intro`}
                            onClick={() => setRight(!right)}
                        >
                            <div id="stars"></div>
                            <div id="stars2"></div>
                            <div id="stars3"></div>
                            <Box className={classes.boxContent}>
                                <img src={Group} alt="personal" width="60%" />
                                <Typography style={{ fontWeight: 900, fontSize: "4em" }}>
                                    Team
                            </Typography>
                            </Box>
                        </Box>
                    </Button>
                </Zoom>
                {right && <Modal
                    open={right}
                    onClose={() => setRight(!right)}
                    closeAfterTransition
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={right}>
                        <ModalProject data={group} setLeft={setRight} />
                    </Fade>
                </Modal>}
            </Box>
        </Layout>
    )
}

export default Projects;