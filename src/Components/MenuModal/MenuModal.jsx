import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import rollPod1 from '../../assets/roll-pod1';
import MenuRadio from '../MenuRadio/MenuRadio';
import Counter from '../Counter/Counter';

import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    '@global' :{
        '.styledButton': {
            padding: 0,
            color: '#ff525b',
            borderRadius: 5,
            border: '1px solid #ff525b',
        },
    },
    plusButton: {
        '& > *': {
            margin: theme.spacing(1),
          },
    },
    modalRoot: {
        maxWidth: 1120,
        width: '100%',
    },
    itemBackground: {
        backgroundImage: "url(" + rollPod1 + ")",
        background: 'cover',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
    },
    content: {
      padding: '1em 1.5em',
      '& p': {
        color: '#687178',
      }
    },
    dialogActions:{
      justifyContent: 'space-between',
      padding: '1em 1.5em',
    },
    purchaseButtons: {
      button: {

      }
    }
  }));


export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
        <IconButton  disableRipple size="small">
            <AddIcon onClick={handleClickOpen('paper')} className="styledButton" fontSize="large" />
        </IconButton>
        <Dialog
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            maxWidth="md"
            fullScreen = {fullScreen}
        >
        {/* <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle> */}
        <Grid container>
            <Grid sm={6}>
                <div className={classes.itemBackground}>
                </div>
            </Grid>
              <Grid sm={6}>
                <DialogContent dividers={scroll === 'paper'}>
                <div className={classes.content}>
                  <div className="itemInfo">
                    <h2>Roll Pod</h2>
                    <p>Burrito includes roasted potatoes, sautéed onions and peppers, scrambled eggs</p>
                    <p>Choice of ¼ or ½ pound. Delivered warm and individually packaged.</p>
                  </div>
                </div>
                <MenuRadio />
                </DialogContent>
                <DialogActions className={classes.dialogActions}>
                  <Counter />
                  <div className={classes.purchaseButtons}>
                    <Link to="/Checkout" className="navLink">
                      <Button style={{ marginRight: 10, color: '#687178' }} onClick={handleClose} variant="outlined">
                          + Cart
                      </Button>
                    </Link>
                    <Link to="/Checkout" className="navLink">
                      <Button onClick={handleClose} variant="contained" color="secondary">
                          Order
                      </Button>
                    </Link>
                  </div>
                </DialogActions>

            </Grid>
        </Grid>
       
        
              </Dialog>
    </div>
  );
}