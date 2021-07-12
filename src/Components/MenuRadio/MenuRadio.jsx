import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles"

// Radio
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles({
    radioGroup: {
        padding: '1em 1.5em',
        borderTop: '1px solid lightgrey'
    },
    menuLabel: {
        marginBottom: 18,
        '& label': {
            color: '#687178'
        },
        '& p': {
            color: '#ff008c',
            margin: '10px 0 0 0'
        }
    },
    menuRadio: {
        flexDirection: 'row',
        paddingLeft: 12,
    },
});

const RadioOptions = () => {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const classes = useStyles();


    return (
        <div className={classes.radioGroup}>
            <div className={classes.menuLabel}>
                <label>Burrito Filling</label>
                <p>Required</p>
            </div>
            <div>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <div className={classes.menuRadio}>
                            <FormControlLabel value="bacon" control={<Radio />} label="Bacon" />
                            <FormControlLabel value="sausage" control={<Radio />} label="Sausage" />
                            <FormControlLabel value="ham" control={<Radio />} label="Ham" />
                            <FormControlLabel value="mushroom" control={<Radio />} label="Mushroom" />
                        </div>    
                    </RadioGroup>
                </FormControl>
            </div>
            <Grid container>
                <Grid xs={6}>

                </Grid>
                <Grid xs={6}>

                </Grid>
            </Grid>
            
        </div>
    )
}

export default RadioOptions