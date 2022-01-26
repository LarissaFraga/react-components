/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { makeStyles, Drawer, Divider } from "@material-ui/core";
import Lists from "./Lists";

const useStyles = makeStyles(theme => ({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    toolbar: theme.mixins.toolbar
}));

const DrawerComponent = (props) => {

    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper
            }}
            anchor="left"
            variant={props.variant}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
        >

            <div className={classes.toolbar}></div>
            <Divider />
            <Lists />
        </Drawer>
    );
}

export default DrawerComponent;