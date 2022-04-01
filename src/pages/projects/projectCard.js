import { Typography, makeStyles, Box, Button } from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
    button: {
        margin: "2%",
        backgroundColor: "#1b2735",
        borderRadius: "10px",
        width: "40%",
        textTransform: "none",
        fontSize: 20,
        color: "white"
    },
    content: {
        marginRight: "5%",
        width: "48%",
        marginLeft: "2%",
        [theme.breakpoints.down("md")]: {
            overflowY: "scroll"
        }
    }
}))

const ProjectCard = ({ data }) => {
    const classes = useStyles();
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
            }}>
                <Box style={{
                    width: "55%",
                    height: "100%",
                }}>
                    <img alt="side-pic" src={data.image} width="100%"/>
                </Box>
                <Box className={classes.content}>
                    <Typography style={{ fontSize: 30, fontWeight: 900 }}>
                        {data.name}
                    </Typography>
                    <Typography style={{ fontStyle: "italic", fontSize: 20 }}>
                        {data.time}
                    </Typography>
                    {data.desc}
                    <Typography style={{ fontSize: 25, fontWeight: 500, fontStyle: "italic" }}>
                        Role
                    </Typography>
                    <Typography style={{ fontStyle: "bold", fontSize: 20 }}>
                        - {data.role}
                    </Typography>
                    <Typography style={{ fontSize: 25, fontWeight: 500, fontStyle: "italic" }}>
                        Stacks
                    </Typography>
                    {data.stacks.map((image, index) => {
                        return (
                            <img alt="stack" src={image} id={index} width={"10%"} style={{ padding: "2%" }} />
                        )
                    })}
                    {data.link != null &&
                        <div>
                            <Typography style={{ fontSize: 25, fontWeight: 500, fontStyle: "italic" }}>
                                Link
                            </Typography>
                            <Typography style={{fontSize: 20}}>
                                <a
                                    href="#"
                                    onClick={() => window.open(`${data.link}`, '_blank', 'noopener,noreferrer')}
                                >
                                    {data.link}
                                </a>
                            </Typography>
                        </div>
                    }
                </Box>
            </div>
            {/* <div style={{ display: "flex", justifyContent: "center" }}>
                {data.github != null ? <Button
                className={classes.button}
                onClick={() => window.open(`${data.github}`, '_blank', 'noopener,noreferrer')}
                >
                    View Code
                </Button> : <Button
                className={classes.button}
                >
                    Closed Source Code
                </Button>}
            </div> */}
        </div >

    )
}

export default ProjectCard;