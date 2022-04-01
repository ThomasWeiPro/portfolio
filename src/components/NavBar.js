import {
    AppBar, makeStyles, Toolbar,
    Tabs, Slide, Tab, useScrollTrigger
} from "@material-ui/core"
import { useState } from "react";
import PropTypes from 'prop-types'

const useStyle = makeStyles((theme) => ({
    navbarTop: {
        background: "transparent"
    },
    navbarScroll: {
        background: "white"
    },
    toolbar: {
        padding: "1%",
        display: "flex",
        justifyContent: "center",
    },
    tabStyle: {
        fontWeight: 900,
        textTransform: "none",
        fontSize: 20,
        fontFamily: 'Lato'
    },
}));

const HideOnScroll = ({ children, window }) => {
    const trigger = useScrollTrigger({
        target: window ? window() : undefined
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func
}

const NavBar = ({ value, handleChange }) => {
    const [barScroll, setBarScroll] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY <= 50) {
            setBarScroll(false);
        } else {
            setBarScroll(true);
        }
    });

    const classes = useStyle();
    return (
        <HideOnScroll>
            <AppBar
                position="fixed"
                elevation={barScroll ? 20 : 0}
                className={barScroll ? classes.navbarScroll : classes.navbarTop}>
                <Toolbar className={classes.toolbar}>
                    <Tabs
                        value={value}
                        TabIndicatorProps={{
                            style: {
                                background: barScroll ? "black" : "white",
                                height: "7px"
                            }
                        }
                        }
                        style={{
                            color: barScroll ? "black" : "white",
                        }}
                        variant="scrollable"
                        onChange={handleChange}
                    >
                        <Tab className={classes.tabStyle} label="HOME" />
                        <Tab className={classes.tabStyle} label="ABOUT" />
                        <Tab className={classes.tabStyle} label="EDUCATION" />
                        <Tab className={classes.tabStyle} label="EXPERIENCE" />
                        <Tab className={classes.tabStyle} label="PROJECT" />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </HideOnScroll >
    )
}

export default NavBar;