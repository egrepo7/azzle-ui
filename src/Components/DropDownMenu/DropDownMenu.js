import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    main: {
        marginLeft: 10,
    },
    navButton: {
        color: 'white',
        padding: 20,

    }
})

export default function SimpleMenu({name , dropdown}) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.main}>
            <Button 
                className={classes.navButton} 
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                { name }
            </Button>
            
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Placeholder</MenuItem>
                <MenuItem onClick={handleClose}>Placeholder</MenuItem>
                <MenuItem onClick={handleClose}>Placeholder</MenuItem>
            </Menu>
        </div>
    );
}
