import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '../../Components/Card/Card';
import MenuItem from '../../Components/MenuItem/MenuItem'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    menu: {
        paddingTop: 36,
    },
    menuNav: {
        position: 'sticky',
        height: '100%',
        '& ul': {
            marginTop: 0,
        },
        '& li': {
            fontSize: 18,
            padding: '.5em .75em',
            marginBottom: 10,
        },
        '& a': {
            textDecoration: 'none',
            color: '#687178',
        }
    },
    menuCategory: {
        paddingTop: 10,
        marginBottom: 16,
    },
    menuSelection: {
        // marginLeft: 20,
        '& h3': {
            margin: '0 0 1em 10px;',
            color: '#2A2C2E',
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: 1,
            textTransform: 'uppercase',
        }
    },
    menuItems: {
        // padding: theme.spacing(2)
    }
}));

export default function BusinessMenu() {
    const classes = useStyles();

    return(
        <div style={{backgroundColor: '#f7f8f9' }}>
            <div className="myContain">
                <Grid container className={classes.menu}>
                    <Grid item sm={2} className={classes.menuNav}>
                        <ul>
                            <li>
                                <a href="#">Wraps & Rolls</a>
                            </li>
                            <li>
                                <a href="#">Entrees</a>
                            </li>
                            <li>
                                <a href="#">Salads</a>
                            </li>
                            <li>
                                <a href="#">Sides</a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item sm={10} className={classes.menuSelection}>
                        <div className={classes.menuCategory}>
                            <h3>Wraps & Rolls</h3>
                            <Grid container className={classes.menuItems}>
                                <Grid sm={6}>
                                    <MenuItem/>
                                </Grid>
                                <Grid sm={6}>
                                    <MenuItem/>
                                </Grid>
                                <Grid sm={6}>
                                    <MenuItem/>
                                </Grid>
                                <Grid sm={6}>
                                    <MenuItem/>
                                </Grid>
                            </Grid>
                        </div>

                        <div className={classes.menuCategory}>
                            <h3>Entrees</h3>
                            <Grid container className={classes.menuItems}>
                                <Grid sm={6}>
                                    <MenuItem/>
                                </Grid>
                                <Grid sm={6}>
                                    <MenuItem/>
                                </Grid>
                                <Grid sm={6}>
                                    <MenuItem/>
                                </Grid>
                                <Grid sm={6}>
                                    <MenuItem/>
                                </Grid>
                            </Grid>
                        </div>

                        <div className={classes.menuCategory}>
                            <h3>Salads</h3>
                            <Grid container className={classes.menuItems}>
                                <Grid sm={6}>
                                    <MenuItem/>
                                </Grid>
                                <Grid sm={6}>
                                    <MenuItem/>
                                </Grid>
                                <Grid sm={6}>
                                    <MenuItem/>
                                </Grid>
                                <Grid sm={6}>
                                    <MenuItem/>
                                </Grid>
                            </Grid>
                        </div>

                        <div className={classes.menuCategory}>
                            <h3>Sides</h3>
                            <Grid container className={classes.menuItems}>
                                <Grid sm={6}>
                                    <MenuItem/>
                                </Grid>
                                <Grid sm={6}>
                                    <MenuItem/>
                                </Grid>
                                <Grid sm={6}>
                                    <MenuItem/>
                                </Grid>
                                <Grid sm={6}>
                                    <MenuItem/>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}