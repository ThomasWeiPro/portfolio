import Layout from "../../Layout";
import {
    Timeline, TimelineItem, TimelineSeparator,
    TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent
} from "@material-ui/lab"
import { makeStyles, Box, Typography, Paper } from "@material-ui/core";
import Pic from "../../assets/working.gif"
import AccountBalanceRoundedIcon from '@material-ui/icons/AccountBalanceRounded';

const useStyle = makeStyles({
    root: {
        width: "90vw",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    },
    dotTimeline: {
        width: "5vw",
        height: "10vh"
    },
    imageBox: {
        display: "flex",
        justifyContent: "flex-end",
        width: "40%"
    },
    timelineBox: {
        display: "flex",
        width: "55%",
        height: "100%",
        justifyContent: "flex-start"
    },
    image: {
        width: "35vw",
        height: "50vh"
    },
    circle: {
        width: 50,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    },
    timeBox: {
        flexGrow: 0.3,
        minWidth: 150
    },
    detailBox: {
        padding: "2%",
        display: "flex",
        flexDirection: "column",
    }
})

const Education = () => {
    const classes = useStyle();
    return (
        <Layout title={"EDUCATION"}>
            <Box className={classes.root}>
                <Box className={classes.imageBox}>
                    <img alt="Working" src={Pic} className={classes.image} />
                </Box>
                <Box className={classes.timelineBox}>
                    <Timeline>
                        <TimelineItem>
                            <TimelineOppositeContent className={classes.timeBox}>
                                <Typography color="textSecondary">
                                    2006 - 2011
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot className={classes.circle}>
                                    <AccountBalanceRoundedIcon />
                                </TimelineDot>
                                <TimelineConnector style={{ height: 150 }} />
                            </TimelineSeparator>
                            <TimelineContent className={classes.timeContent}>
                                <Paper
                                    elevation={10}
                                    className={classes.timeContent}
                                    style={{ padding: 30 }}
                                >
                                    <Typography style={{ fontWeight: 900, fontSize: "2em" }}>
                                    Enrico Fermi High School
                                    </Typography>
                                    <Typography>
                                        <b>GPA</b>: 8.5 out of 10
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent className={classes.timeBox}>
                                <Typography color="textSecondary">
                                    2011 - 2014
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot className={classes.circle}>
                                    <AccountBalanceRoundedIcon />
                                </TimelineDot>
                                {/* <TimelineConnector style={{ height: 150 }} /> */}
                            </TimelineSeparator>
                            <TimelineContent className={classes.timeContent}>
                                <Paper
                                    elevation={10}
                                    className={classes.timeContent}
                                    style={{ padding: 30 }}
                                >
                                    <Typography style={{ fontWeight: 900, fontSize: "2em" }}>
                                    University of Perguia
                                    </Typography>
                                    <Typography>
                                        <b>GPA</b>: 3.7 out of 4.0
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        {/* <TimelineItem>
                            <TimelineOppositeContent className={classes.timeBox}>
                                <Typography color="textSecondary">
                                    2019 - Present
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot className={classes.circle}>
                                    <AccountBalanceRoundedIcon />
                                </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper
                                    elevation={10}
                                    style={{ padding: 20 }}
                                >
                                    <Typography style={{ fontWeight: 900, fontSize: "2em" }}>
                                        Drexel University
                                    </Typography>
                                    <Typography>
                                        <b>GPA</b>: 3.77 out of 4.0
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem> */}
                    </Timeline>
                </Box>
            </Box>
        </Layout>
    )
}

export default Education;