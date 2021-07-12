import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import StarIcon from '@material-ui/icons/Star';
import rollpod1 from '../../assets/roll-pod1';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import MenuModal from '../MenuModal/MenuModal';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    '@global' :{
        '.styledButton': {
            padding: 0,
            color: '#ff525b',
            borderRadius: 5,
            border: '1px solid #ff525b',
            lineHeight: 0,
        },
    },
    root: {
        background: "#ffffff",
        margin: 10,
    },
    menuTxt: {
        padding: 16,
        '& h4': {
            fontWeight: 500,
            lineHeight: 1.4,
            fontSize: 18,
        },
        '& p': {
            color: '#687178',
            fontSize: 16,
        }
    },
    image: {
      width: 150,
      height: 150,
    },
    img: {
      margin: 0,
      display: 'block',
      width: '100%',
      height: '100%',
    },
    priceButton: {
        display: 'flex',
        alignItems: 'center',
        '& span': {
            paddingLeft: 4,
            fontSize: 21,
            fontWeight: 500,
        },
    }
  }));


export default function MenuItem() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid  container>
                <Grid item container xs>
                    <Grid className={classes.menuTxt} align="left" item xs>
                        <div>
                            <h4>Roll Pod</h4>
                            <p>Two Rolls - choose one filling for each</p>
                        </div>
                        <div className={classes.priceButton}>

                            
                            <styledButton>
                                <MenuModal />    
                            </styledButton>
                            <span>$10.99</span>
                        </div>
                    </Grid>
                </Grid>
                <Grid item>
                    <ButtonBase className={classes.image}>
                        <img alt="roll pod" className={classes.img} src={rollpod1}/>
                    </ButtonBase>
                </Grid>
            </Grid>
        </div>
    )
}