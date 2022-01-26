import React from "react";
import { Hidden, makeStyles } from "@material-ui/core";
import Navbar from "./Navbar";
import DrawerComponent from "./DrawerComponent";
import LittleBox from "./LittleBox";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    }
}));

const Content = () => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <Navbar handleDrawerOpen={handleDrawerOpen} />
            <Hidden xsDown>
                <DrawerComponent
                    variant="permanent"
                    open={true}
                />
            </Hidden>
            <Hidden smUp>
                <DrawerComponent
                    variant="temporary"
                    open={open}
                    onClose={handleDrawerOpen}
                />
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                <LittleBox />
            </div>
        </div>
    )
}

export default Content;