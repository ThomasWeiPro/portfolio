import React from 'react';
import { Typography, makeStyles } from '@material-ui/core'
import { Tabs } from "@material-ui/core"

const useStyle = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        height: "fit-content",
        marginTop: "5%"
    },
    titleStyle: {
        fontSize: "3em",
        fontWeight: 900,
    },
    tabs: {
        color: "black",
        marginBottom: "5%"
    }
})

const Layout = ({ children, title }) => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Tabs
                value={0}
                TabIndicatorProps={{
                    style: {
                        background: "black",
                        height: "10%"
                    }
                }}
                className={classes.tabs}
            >
                <Typography className={classes.titleStyle}>{title}</Typography>
            </Tabs>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout;