import React from 'react';
import { Hidden } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { StylesProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, Button } from '@material-ui/core';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import './App.css';
import dropdata from '../../Data/navdropdown';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import SideDrawer from '../SideDrawer/SideDrawer';

// Pages
import MainPage from '../../Pages/Main';
import Nearby from '../../Pages/Nearby';
import Business from '../../Pages/Business';
import Checkout from '../../Pages/Checkout';

const navLinks = [
    { title: `Azzle`, path: `/home` },
    { title: `Search`, path: `/search` },
    { title: `Nearby`, path: `/nearby` },
  ]

const useStyles = makeStyles({
    customizeAppBar: {
        minHeight: 30,
        backgroundColor: '#ff525b',
    },
    navDisplayFlex: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    navRightSide: {
        display: 'flex',
        borderLeft: '1px solid #e4444d',
        minHeight: 64,
        alignItems: 'center',
        paddingLeft: 24,
        '& button': {
            color: '#fff'
        }
    }
});

const theme = createMuiTheme({
  overrides: {
    // Name of the component ⚛️
    MuiDialog: {
      // The default props to change
      paperWidthMd: {
          maxWidth: 1120,
          width: '100%',
      },
    },
    MuiDialogContent: {
        dividers: {
            paddingLeft: 0,
            paddingRight: 0
        }
    },
    MuiFormControlLabel: {
        root: {
            width: '50%',
            marginRight: 0,
            marginBottom: 18,
        }
    },
    MuiButton: {
        root: {
            fontSize: 18,
            fontWeight: 500,
            textTransform: 'capitalize',
        }
    }
  },
});



function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
        <Router>
        <AppBar className={classes.customizeAppBar} position="static">
            <Toolbar className={classes.navDisplayFlex}>
                <div>
                    <Button edge="start" color="inherit" aria-label="home">
                        <Link className="navLink" to="/search">Azzle</Link>
                    </Button>
                    <Button edge="start" color="inherit" aria-label="home">
                        <RoomOutlinedIcon fontSize="large" />
                        <Hidden smDown>
                            <Link className="navLink" to="/nearby">Nearby</Link>
                        </Hidden>
                    </Button>
                    <Button edge="start" color="inherit" aria-label="home">
                        <ListAltOutlinedIcon fontSize="large" />
                        <Hidden smDown>
                            <Link className="navLink" to="/search">Search</Link>
                        </Hidden>
                    </Button>
                </div>
                <Hidden smDown>
                    <div className={classes.navRightSide}>
                        <Button>
                            UserName <ArrowDropDownIcon/>
                        </Button>
                        <Button>
                            <HelpOutlineRoundedIcon />
                        </Button>
                    </div>
                </Hidden>
                <Hidden mdUp>
                    <SideDrawer navLinks={navLinks} />
                </Hidden>
            </Toolbar>
        </AppBar>
        <Route exact path="/" component={MainPage} />
        <Route path="/nearby" component={Nearby} />
        <Route path="/search" component={MainPage} />
        <Route path="/business" component={Business} />
        <Route path="/checkout" component={Checkout} />
        </Router>
        </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
