import React, {useState, useRef, useEffect } from 'react';
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
        height: "8em"
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
        left: "15px !important",
        width: "max-content"
    },
    logoContainer:{
        padding: 0
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

    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0){
            setValue(0)
        } else if (window.location.pathname === "/services" && value !== 1){
            setValue(1)
        } else if (window.location.pathname === "/revolution" && value !== 2){
            setValue(2)
        } else if (window.location.pathname === "/about" && value !== 3){
            setValue(3)
        } else if (window.location.pathname === "/contact" && value !== 4){
            setValue(4)
        }
    }, [value]);

    return(
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color="primary">
                    <Toolbar disableGutters>
                        <Button component={Link} to="/" className={classes.logoContainer} onClick={()=> setValue(0)} disableRipple>
                        <img src={logo} alt="Company Logo" className={classes.logo}/>
                        </Button>
                        <Tabs className={classes.tabContainer} value={value} onChange={handleChange} indicatorColor="primary">
                            <Tab className={classes.tab} icon={<Home />} label="HOME" component={Link} to="/"/>
                            <Tab className={classes.tab} icon={<Settings />} label="SERVICES" component={Link} to="/services"/>
                            <Tab className={classes.tab} icon={<History />} label="THE REVOLUTION" component={Link} to="/revolution"/>
                            <Tab className={classes.tab} icon={<Info />} label="ABOUT US" component={Link} to="/about"/>
                            <Tab className={classes.tab} icon={<PermContactCalendar />} label="CONTACT US" component={Link} to="/contact"/>
                        </Tabs>
                        <ButtonGroup className={classes.button} variant="contained" color="primary" ref={anchorRef} disableRipple>
                            <Button onClick={handleToggle} disableRipple
                                    aria-label="select merge strategy"
                                    aria-controls="simple-menu">
                                Hi Kumar
                                <Avatar className={classes.avatar}></Avatar>
                                <ExpandMore />
                            </Button>
                        </ButtonGroup>
                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes.popper}>
                            {({ TransitionProps, placement }) => (
                                <Paper >
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList id="simple-menu">
                                            <MenuItem onClick={()=>setOpen(false)} component={Link} to="/profile" >My Profile</MenuItem>
                                            <MenuItem onClick={()=>setOpen(false)} component={Link} to="/logout" >Logout</MenuItem>
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