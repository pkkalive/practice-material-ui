import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Zoom from '@material-ui/core/Zoom';
// import Fab from '@material-ui/core/Fab';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

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
// const useStyles = makeStyles((theme) => ({
//     root: {
//         position: 'fixed',
//         bottom: theme.spacing(2),
//         right: theme.spacing(2),
//     },
// }));
//
// function ScrollTop(props) {
//     const { children } = props;
//     const classes = useStyles();
//     const trigger = useScrollTrigger({
//         disableHysteresis: true,
//         threshold: 100,
//     });
//
//     const handleClick = (event) => {
//         const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
//         if (anchor) {
//             anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
//         }
//     };
//
//     return (
//         <Zoom in={trigger}>
//             <div onClick={handleClick} role="presentation" className={classes.root}>
//                 {children}
//             </div>
//         </Zoom>
//     );
// }

export default function Header(props) {
    return(
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar>
                        PK Development
                    </Toolbar>
                </AppBar>
                {/*<Toolbar id="back-to-top-anchor" />*/}
                {/*<ScrollTop {...props}>*/}
                {/*    <Fab color="secondary" size="small" aria-label="scroll back to top">*/}
                {/*        <KeyboardArrowUpIcon />*/}
                {/*    </Fab>*/}
                {/*</ScrollTop>*/}
            </ElevationScroll>
        </React.Fragment>
    )
}