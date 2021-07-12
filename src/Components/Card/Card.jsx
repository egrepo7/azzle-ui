import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import rollpod from '../../assets/rollpod';
import PropTypes from 'prop-types';


const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    margin: 10,
    padding: 5,
    boxShadow: 0,
  },
  cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    '& p': {
        fontSize: 11,
        color: '#787878',
        margin: 0,
        padding: 5,
        border: '1px solid #787878',
        borderRadius: 5,
    },
  },
  cardName: {
    fontWeight: 700,
    fontSize: 20,
    margin: [0, 0, 10, 0],
  },
  categoryType: {
    fontSize: 18,
    margin: '16x 0 20px',
    color: '#787878',
  },
  largeCard: {
      maxHeight: 230,
  },
  availability: {
      display: 'flex',
      alignItems: 'center'
  },
  greenIcon: {
      color: 'green'
  }
});

export default function ImgMediaCard(business, miles, type, isOpen, hours, img) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <CardActionArea>
            <CardMedia
            component="img"
            className={classes.largeCard}
            alt="Roll Pod FoodTruck"
            height="100%"
            image={rollpod}
            title="Roll Pod FoodTruck"
            />
        <CardContent>
            <div className={classes.cardHeader}>
                <h3 className={classes.cardName}>
                Roll Pod Food Truck
                </h3>   
                <p>8.2 mi</p>
            </div>
          <p className={classes.categoryType}>
            Indian
          </p>
          <div className={classes.availability}>
            {/* if checked in, show green check + "checked in and taking orders" */}
            <CheckCircleRoundedIcon className={classes.greenIcon} />
            <p>11:00 AM - 5:00 PM</p>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

ImgMediaCard.propTypes = {
    business: PropTypes.string.isRequired,
    miles: PropTypes.number.isRequired,
    type: PropTypes.arrayOf(PropTypes.string).isRequired,
    hours: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}