import React from 'react';
import Card from '../Components/Card/Card';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles ((theme) => ({
    cardStyle: {
        padding: theme.spacing(2),
        '& textDecoration': 'none',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginTop: 15,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'grey',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '20ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
}));

export default function SearchWrapper() {
    const classes = useStyles();

    return (
        <div className="myContain">
              <div className={classes.search}>
                  <div className={classes.searchIcon}>
                  <SearchIcon />
                  </div>
                  <InputBase
                  placeholder="Search by name..."
                  classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                  />
              </div>
              <Grid container className={classes.cardStyle}>
                  <Grid sm={6}>
                      <Link to="/business" className="navLink">
                        <Card />
                      </Link>
                  </Grid>
                  <Grid sm={6}>
                      <Link to="/business" className="navLink">
                        <Card />
                      </Link>
                  </Grid>

                  <Grid sm={4}>
                      <Link to="/business" className="navLink">
                        <Card />
                      </Link>
                  </Grid>
                  <Grid sm={4}>
                      <Link to="/business" className="navLink">
                        <Card />
                      </Link>
                  </Grid>
                  <Grid sm={4}>
                      <Link to="/business" className="navLink">
                        <Card />
                      </Link>
                  </Grid>
              </Grid>
        </div>
    )
}