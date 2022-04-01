import Layout from "../../Layout";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";
import Pic from "../../assets/experience2.svg"
import experienceData from "./experienceData"
import Flippy, { FrontSide, BackSide } from "react-flippy"

const useStyle = makeStyles({
    root: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        width: "95vw"
    },
    imageBox: {
        width: "40%",
        height: "100%"
    },
    contentBox: {
        width: "60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "10px"
    },
    image: {
        height: "100%",
        width: "100%"
    },
    logo: {
        height: 100
    },
    content: {
        padding: 20,
        width: "70%",
        height: "22vh"
    },
    frontSide: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    backSide: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        overflow: "hidden"
    },
    time: {
        fontSize: 15,
        fontStyle: "italic"
    },
    role: {
        fontSize: 22,
        fontWeight: 900
    },
    description: {
        fontSize: '1em',
        fontWeight: 200
    },
    viewMore: {
        textTransform: "none",
        backgroundColor: "#1b2735",
        color: "white",
    }
})

const Experience = () => {
    const classes = useStyle();
    return (
        <Layout title={"EXPERIENCES"}>
            <Box className={classes.root}>
                <Box className={classes.contentBox}>
                    {experienceData.map((data, index) => {
                        return (
                            <Flippy
                                id={index}
                                flipOnHover={true}
                                flipOnClick={false}
                                flipDirection="vertical"
                                className={classes.content}
                            >
                                <FrontSide className={classes.frontSide}>
                                    <Box
                                        style={{
                                            width: "50%",
                                            display: "flex",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <img src={data.logo} alt="logo" width={"100%"} />
                                    </Box>
                                    <Box>
                                        <Typography style={{ fontWeight: 900 }}>
                                            {data.name}
                                        </Typography>
                                    </Box>
                                </FrontSide>
                                <BackSide className={classes.backSide}>
                                    <Box style={{ width: "75%" }}>
                                        <Typography className={classes.role}>
                                            {data.role}
                                        </Typography>
                                        <Typography className={classes.time}>
                                            <i>{data.time}</i>
                                        </Typography>
                                        {data.description}
                                    </Box>
                                    <Box style={{ borderLeft: "1px solid black" }}></Box>
                                    <Box>
                                        <Button 
                                            className={classes.viewMore}
                                            onClick={() => window.open(`${data.link}`, '_blank', 'noopener,noreferrer')}    
                                        >
                                            View More
                                        </Button>
                                    </Box>
                                </BackSide>
                            </Flippy>
                        )
                    })}
                </Box>
                <Box className={classes.imageBox}>
                    <img src={Pic} alt="Experience" className={classes.image} />
                </Box>
            </Box>
        </Layout>
    )
}

export default Experience;