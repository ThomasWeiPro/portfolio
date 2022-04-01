import { Box, Paper, makeStyles, IconButton } from "@material-ui/core"
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Carousel from "react-material-ui-carousel";
import ProjectCard from "./projectCard"

const useStyle = makeStyles({
    carousel: {
        margin: "1% 0"
    }
})

const ModalProject = ({ data, setLeft }) => {
    const classes = useStyle();
    return (
        <Box style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Paper style={{
                position: "absolute",
                height: "max-content",
                width: "50vw",
                borderRadius: "20px"
            }}>
                <Box style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: "1%",
                    boxShadow: "0px 1px 10px black",
                    position: "relative",
                    zIndex: 1,
                    borderRadius: "20px 20px 0 0"
                }}>
                    <IconButton style={{
                        borderRadius: "100px",
                        width: "fit-content"
                    }}
                        onClick={() => setLeft(false)}
                    >
                        <CloseRoundedIcon/>
                    </IconButton>
                </Box>
                <Carousel className={classes.carousel} indicators={false}>
                    {data.map((data, index) => {
                        return (
                            <ProjectCard id={index} data={data} />
                        )
                    })}
                </Carousel>
            </Paper>
        </Box>
    )
}

export default ModalProject;