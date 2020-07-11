import React, {useState, useRef} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Home, Settings, History, Info,
    PermContactCalendar, ExpandMore } from '@material-ui/icons';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Popper from "@material-ui/core/Popper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: false,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
    logo: {
        height: "7em"
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button:{
        border: "none",
        boxShadow: "none",
        marginRight: "25px",
        marginLeft: "50px"
    },
    avatar: {
        marginLeft: "5px"
    },
    popper: {
        left: "15px !important"
    }

}));

export default function Header(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current) {
            return;
        }
        setOpen(false);
    };

    return(
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color="primary">
                    <Toolbar disableGutters>
                        <img src={logo} alt="Company Logo" className={classes.logo}/>
                        <Tabs className={classes.tabContainer} value={value} onChange={handleChange} indicatorColor="primary">
                            <Tab className={classes.tab} icon={<Home />} label="HOME" component={Link} to="/"/>
                            <Tab className={classes.tab} icon={<Settings />} label="SERVICES" component={Link} to="/services"/>
                            <Tab className={classes.tab} icon={<History />} label="THE REVOLUTION" component={Link} to="/revolution"/>
                            <Tab className={classes.tab} icon={<Info />} label="ABOUT US" component={Link} to="/about"/>
                            <Tab className={classes.tab} icon={<PermContactCalendar />} label="CONTACT US" component={Link} to="/contact"/>
                        </Tabs>
                        <ButtonGroup className={classes.button} variant="contained" color="primary" ref={anchorRef}>
                            <Button onClick={handleToggle}
                                    aria-label="select merge strategy">
                                Hi Kumar
                                <Avatar className={classes.avatar}></Avatar>
                                <ExpandMore />
                            </Button>
                        </ButtonGroup>
                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes.popper}>
                            {({ TransitionProps, placement }) => (
                                <Paper >
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList id="split-button-menu">
                                            <MenuItem component={Link} to="/profile" >My Profile</MenuItem>
                                            <MenuItem component={Link} to="/logout" >Logout</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            )}
                        </Popper>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}