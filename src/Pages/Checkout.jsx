import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles"


import Button from '@material-ui/core/Button';
import Counter from '../Components/Counter/Counter';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({ 
    checkout: {
        paddingTop: 36,
        '& h3': {
            fontSize: 21,
            color: '#0092A5',
            fontWeight: 500,
            margin: '0px 0 24px',
            padding: '0px 0 9px',
        },
        '& h4': {
            color: '#2A2C2E',
            fontSize: 18,
            fontWeight: 600,
        },
        '& hr': {
            borderTop: '1px solid',
            borderBottom: 0,
            borderColor:'rgba(0,0,0,.1)',
            margin: '24px 0',
        },
        '& p': {
            color: '#687178',
            fontSize: 18
        },
        '& a': {
            textDecoration: 'none',
            color: '#0092A5',
            fontSize: 18,
        }
    },
    payment: {
        paddingRight: 40,
        [theme.breakpoints.down('sm')]: {
            paddingRight: 0
          },
        '& h3': {
            marginTop: 24
        }
    },
    paymentInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'top',
    },
    tip: {
        margin: '36px 0',
        '& button': {
            marginRight: 8,
            color: '#687178',
            fontWeight: 400,
            borderColor: '#0092A5'
        }
    },
    placeOrder: {
        '& button': {
            width: '100%',
            backgroundColor: '#ff525b',
            color: '#FFFFFF'
        }
    },
    cart: {
        border: '1px solid #ddd',
    },
    cartHeader: {
        padding: 18,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#F7f8f9',
        borderBottom: '1px solid #ddd',
        '& p': {
            margin: '0 0 8px',
        },
    },
    cartContent: {
        padding: 18
    },
    namePrice: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px dashed #ddd',
        '& h4': {
            color: '#FF525C',
            padding: '18px 0',
        }
    },
    itemOption: {
        borderBottom: '1px dashed #ddd',
        '& h4': {
            padding: '1.5em 0 .7em',
            fontWeight: 400,
            fontSize: 14,
            textTransform: 'uppercase',
        },
        '& p': {
            margin: '0 0 18px',
            fontWeight: 600,
        }
    },
    itemQuant: {
        display: 'flex',
        justifyContent: 'space-Between',
        alignItems: 'center',
        padding: '1.2em 0',
        borderBottom: '1px solid #ddd',
    },
    priceSummary: {
        color: '#687178',
        fontWeight: 400,
        padding: '24px 0'
    },
    priceGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& p': {
            margin: '0 0 10px'
        },
        
    },
    total: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingBottom: 18,
        borderBottom: '1px solid #ddd',
        '& h2': {
            color: '#2A2C2E',
            fontSize: 40,
        }
    },
    promotion: {
        margin: '18px 0 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& .MuiTextField-root': {
            width: '100%',
        },
        '& button': {
            textDecoration: 'none',
            color: '#0092A5',
        }

    },
}));


export default function Checkout(){
    const classes = useStyles();

    return(
        <div className="containerNarrow">
            <Grid container className={classes.checkout}>
                <Grid xs={12} sm={6}>
                <div className={classes.payment}>
                    <div>
                        <h3>Checkout</h3>
                    </div>
                    <hr />
                    <div className={classes.paymentInfo}>
                        <div>
                            <h4>Edgar Grepo</h4>
                            <p>(206) 555-8888</p>
                        </div>
                        <div>
                            <Link to="#">
                                Edit
                            </Link>
                        </div>
                    </div>
                    <hr />
                    <div className={classes.paymentInfo}>
                        <div>
                            <h4>Payment Method</h4>
                            <p>Visa ●●● 4242</p>
                        </div>
                        <div style={{ textAlign: 'right'}}>
                            <Link to="#">
                                New
                            </Link>
                            <p>Expires <span>4/2024</span></p>
                        </div>
                    </div>
                    <hr />
                    <div className={classes.tip}>
                        <Button variant="outlined">No Tip</Button>
                        <Button variant="outlined">10%</Button>
                        <Button variant="outlined">15%</Button>
                        <Button variant="outlined">20%</Button>
                    </div>
                    <div className={classes.placeOrder}>
                        <Button variant="contained">Place Order</Button>
                    </div>
                    </div>
                </Grid>
                <Grid xs={12} sm={6}>
                    <div className={classes.cart}>
                        <div className={classes.cartHeader}>
                            <div>
                                <p>Your Order</p>
                                <Link to="/" style={{ fontWeight: 500 }}>Roll Pod Food Truck (i2)</Link>
                            </div>
                            <Link to="/" style={{ textAlign: 'right', fontSize: 16 }}>
                                Clear Cart
                            </Link>
                        </div>
                        <div className={classes.cartContent}>
                            <div className={classes.cartItem}>
                                <div className={classes.namePrice}>
                                    <h4>Roll Pod</h4>
                                    <h4>$10.95</h4>
                                </div>
                                <div className={classes.itemOption}>
                                    <h4>Roll Filling</h4>
                                    <p>Aloo, Gobhi, Matar</p>
                                </div>
                                <div className={classes.itemOption}>
                                    <h4>Second Filling</h4>
                                    <p>Mushroom</p>
                                </div>
                                <div className={classes.itemOption}>
                                    <h4>Egg Option</h4>
                                    <p>Include Egg</p>
                                </div>
                                <div className={classes.itemOption}>
                                    <h4>Spicy Level</h4>
                                    <p>3 Stars (Normal)</p>
                                </div>
                                <div className={classes.itemQuant}>
                                    <Link to="/">Remove</Link>
                                    <Counter />
                                </div>
                            </div>
                            <div className={classes.priceSummary}>
                                <div class={classes.priceGroup}>
                                    <p>Subtotal</p>
                                    <span>$10.95</span>
                                </div>
                                <div class={classes.priceGroup}>
                                    <p>Tax</p>
                                    <span>$1.11</span>
                                </div>
                                <div class={classes.priceGroup}>
                                    <p>Tip</p>
                                    <span>$1.09</span>
                                </div>
                                <div class={classes.total}>
                                    <p>Total</p>
                                    <h2>$13.95</h2>
                                </div>
                                <div className={classes.promotion}>
                                    <TextField variant="outlined" size="small" placeholder="Promotion Code"/>
                                    <Button variant="primary">Apply</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
};