import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import LanguageIcon from '@material-ui/icons/Language';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles ((theme) => ({
    businessHeader: {
        background: 'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://firebasestorage.googleapis.com/v0/b/azzle-test.appspot.com/o/VendorsFiles%2F12326%2FVendors%2Fthe-roll-pod-max-2019-04-19T12%3A45%3A21-07%3A00?alt=media&token=0bd75daa-cdc7-4f21-a7cf-9076399a3731)',
        backgroundSize: 'cover',
        top: 60,
        zIndex: 0,
        width: '100%',
        height: 240,
        backgroundPosition: 'center!important',
        backgroundRepeat: 'no-repeat!important',
        transform: 'translate3d(0,0,0)',
    },
    businessMain: {
        paddingTop: 72,
        paddingBottom: 16,
        color: 'white',
        '& h2': {
            fontSize: 40,
            paddingTop: 9,
            paddingBottom: 9,
        },
        '& p': {
            fontSize: 18,
            padding: 0,
            margin: 0,
        }
    },
    businessInfo: {
        borderBottom: '1px solid #e5e8ed',
        backgroundColor: "#ffffff",
        paddingTop: 4,
        paddingBottom: 4,
        display: 'flex',
        '& a': {
            fontWeight: 500,
            fontSize: 18,
            marginLeft: 10,
            marginRight: 10,
            textDecoration: 'none',
            color: '#2A2C2E',
        }
    },
    availability: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 0,
        '& li': {
            listStyle: 'none',
            display: 'flex',
            alignItems: 'center',
            marginRight: 20,
        }
    },
    greenIcon: {
        color: 'green'
    },
    infoIcons: {
        color: '#C6CDCE'
    }
}));


export default function BusinessPage(){
    const classes = useStyles();

    return(
        <div>
            <div className={classes.businessHeader}>
                <Grid container className="myContain">
                    <Grid sm={8}>
                        <div className={classes.businessMain}>
                            <p>Indian</p>
                            <h2>Roll Pod Food Truck (i2)</h2>
                            <div className={classes.availability}>
                                <CheckCircleRoundedIcon className={classes.greenIcon} /> <p>Delivery available within 5 miles and $25.00 order</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid sm={4}>
                    </Grid>
                </Grid>
            </div>
            <Grid container className={classes.businessInfo} direction="row">
                <Grid container justify="space-between" alignItems="center" className="myContain">
                    <Grid item sm={8}>
                        <ul className={classes.availability}>
                            <li>
                                <LanguageIcon className={classes.infoIcons} />
                                <a href="#">Website</a>
                            </li>
                            <li>
                                <MailOutlineIcon className={classes.infoIcons} />
                                <a href="#">Email</a>
                            </li>
                            <li>
                                <PhoneIphoneIcon className={classes.infoIcons} />
                                <a href="#">(206) 569-4925</a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item sm={4}>
                        <div style={{ float: 'right'}} className={classes.availability}>
                            <MoreHorizIcon className={classes.infoIcons}/>
                            <a href="#">More Info</a>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}